from flask import Flask, jsonify, request
from pymodm import connect, MongoModel, fields
import models
import time
import datetime
import numpy
from main import *
from Filtering import *
from skimage import data, img_as_float
from skimage import exposure, io, util
from flask_cors import CORS
from ImageEncoding import *
from PIL import Image

app = Flask(__name__)
CORS(app)
connect("mongodb://vcm-7272.vm.duke.edu:27017/Image_Folder")


@app.route('/<email>/images', methods=['GET'])
def images(email):

    """Function is a GET request that allows user to
    access all image file names that have been uploaded
    :param email: user email to query data from"""
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = {'Uploaded Images': str(user.image_names)}
        return jsonify(data), 200
    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/<email>/timestamps', methods=['GET'])
def images_time(email):

    """Function is a GET request that allows user to
    access all upload times of photos of given user
    :param email: user email to query data from"""
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = {'Uploaded Images': str(user.upload_times)}
        return jsonify(data), 200
    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/<email>/user_action', methods=['GET'])
def user_stats(email):

    """Function is a GET request that allows user to
    access the statistics of filter functions  queried based
    on the email address input"""
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = user.user_action
        return jsonify(data), 200

    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/<email>/latency', methods=['GET'])
def latency(email):

    """Function is a GET request that allows
    user to access the latency data"""
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = {'Latency for Processes': str(user.latency)}
        return jsonify(data), 200
    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/imageFilter', methods=['POST'])
def post_image():

    """Function  is a POST request. Takes in parameters
    of a base 64 image. Loads the original image from path,
    performs a function, then saves the  altered image.
    Takes in base64 image and a number corresponding
    with the function to be performed"""
    r = request.get_json()
    try:
        filt = r['Filter']
        # 1-qualization, 2-contrast, 3-reverse video, 4-log compression
        data_string = r['Data']
        # dataString is the base64 string
        image_name = r['filename']
        # the name of the file that the user wants to name the image
        email = r['email']
        # email of user
    except:
        return 'Input fields either missing or incorrect', 400

    if not isinstance(filt, int):
        return 'Filter value must have key value between 1-4', 400

    if not isinstance(email, str):
        return 'Email input must be string type, please reinput', 400

    if not isinstance(image_name, str):
        return 'Image name must be string type, please reinput', 400

    image_string_stripped = strip_header(data_string)
    save_image_string(image_string_stripped, image_name + '.jpg')
    # saves image into VCM since flask runs on VCM
    # following functions assume that testfile methods
    # already save to the path

    upload_time = datetime.datetime.now()
    start_time = time.time()

    image = io.imread(image_name + '.jpg')
    im = Image.open(image_name + '.jpg')
    im_size1 = im.size[0]
    im_size2 = im.size[1]
    raw_hist(image_name, image)

    try:
        add_user_action(email, filt, image_name, upload_time)

    except:
        create_user(email, image_name, upload_time)

    filt_img = filter_image(email, filt, image_name, image, start_time)

    if filt == 1:
        extension_name = '_equal'
        hist_extension = '1_hist'
    elif filt == 2:
        extension_name = '_contrast'
        hist_extension = '2_hist'
    elif filt == 3:
        extension_name = '_log'
        hist_extension = '3_hist'
    else:
        extension_name = '_rev'
        hist_extension = '4_hist'

    with open(image_name + extension_name + '.jpg', 'rb') as image_file:
        image_str = base64.b64encode(image_file.read())

    with open(image_name + hist_extension + '.jpg', 'rb') as image_file_hist:
        hist_str = base64.b64encode(image_file_hist.read())

    with open(image_name + 'raw_hist.jpg', 'rb') as raw_file:
        raw_hist_str = base64.b64encode(raw_file.read())

    image_string_ascii = image_str.decode('ascii')
    hist_string_ascii = hist_str.decode('ascii')
    raw_hist_str = raw_hist_str.decode('ascii')
    json_data = {"filtered_string": image_string_ascii,
                 "hist_string": hist_string_ascii,
                 "raw_hist": raw_hist_str,
                 "image_size1": im_size1,
                 "image_size2": im_size2}
    return jsonify(json_data), 200
