from flask import Flask, jsonify, request
from pymodm import connect, MongoModel, fields
from models import *
import datetime, numpy

app = Flask(__name__)
connect("mongodb://vcm-3579.vm.duke.edu:27017/heart_rate_app")


@app.route('/<email>/user_action', methods=['GET'])
def user_stats(email):
    """Function is a GET request that allows user to access the statistics of filter functions 
queried based on the email address input """
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = user.user_action
        return jsonify(data), 200
    
    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/<email>/images', methods=['GET'])
def images(email):
    
    """Function is a GET request that allows user to access all image file names that 
    have been uploaded"""
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = {'Uploaded Images': str(user.image_names)}
        return jsonify(data), 200
    except:
        data = 'User does not exist'
        return jsonify(data), 404


@app.route('/<email>/latency', methods=['GET'])
def latency(email):
    """ Function is a GET request that allows user to access the latency data'"""	
    mail = "{0}".format(email)
    try:
        user = models.User.objects.raw({"_id": mail}).first()
        data = {'Latency for Processes': str(user.latency)}
        return jsonify(data), 200
    except:
        data = 'User does not exist'
        return jsonify(data), 404

