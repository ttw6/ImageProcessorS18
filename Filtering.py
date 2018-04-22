import matplotlib
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np
import cv2
from skimage import data, img_as_float
from skimage import exposure, io, util
import os
import base64


def hist(img):
    # image = img_as_float(img)
    equal = exposure.equalize_hist(img)
    return equal


def strip_ext(file_name):
    """
    Strip file extension

    :param file_name: Full file name
    :return: File name and extension
    """
    [file_name, file_ext] = os.path.splitext(file_name)
    return file_name, file_ext


def contrast_stretching(img):
    p2, p98 = np.percentile(img, (2, 98))
    contrast = exposure.rescale_intensity(img, in_range=(p2, p98))
    return contrast


def Image_String(filename):
    with open(filename, 'rb') as image_file:
        image_string = base64.b64encode(image_file.read())
        return image_string


def raw_hist(img):
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()


def equalization_hist(img):
    plt.hist(img.ravel(), 256, [0, 1])
    plt.show()


def contrast_hist(img):
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()


def show_img(img):
    plt.imshow(img)
    plt.show()


def Save_Image_String(base64image, filename):
    with open(filename, 'wb') as Image_Out:
        Image_Out.write(base64.b64decode(base64image))


def Log_Compression(file_name, file_type='.jpg'):
    """
    Function will replace pixel value with its logarithm (effectively enhancing
    low intensity pixel values).

    :param file_name: Name of file
    :param file_type: File type (default is .jpg)
    :return: output image (in .jpg)
    """
    image = io.imread(file_name + file_type, as_grey=True)
    # look into user warnings, triggered by color photos?
    log_out = exposure.adjust_log(image)
    output = io.imsave(file_name + '_log.jpg', log_out)
    return output


def Reverse_Video():
    im = skimage.io.imread("/Users/PetekSener/Documents/AT2.jpg")
    im_inverted = skimage.util.invert(im)
    skimage.io.imsave("hope.jpg", im_inverted)
