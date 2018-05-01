import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np
#import cv2
from skimage import data, img_as_float
from skimage import exposure, io, util
import os
import base64


def hist(file_name, img):
    """
    Adjusts image intensities to enhance contrast.

    :parem file_name: file name of the image as used to save the image.
    :param img: jpeg of image
    :return: Image array after histogram equalization
    """
    equal = exposure.equalize_hist(img)
    equalization_hist(file_name, equal)
    img_equal = io.imsave(file_name + '_hist.jpg', equal)
    return equal


def equalization_hist(file_name, img):
    """
    Saves equalized histogram
    :param img: Image array
    :param file_name: name the user wnats to save image as
    """
    return
    plt.hist(img.ravel(), 256, [0, 1])
    plt.savefig(file_name + '1_hist.jpg')
    plt.clf()
    plt.cla()
    plt.close()
    

def contrast_stretching(file_name, img):
    """
    Adjusts contrast in image.

    :param image: jpeg of image
    :return: Image array after contrast stretching
    """
    p2, p98 = np.percentile(img, (2, 98))
    contrast = exposure.rescale_intensity(img, in_range=(p2, p98))
    contrast_hist(file_name, contrast)
    img_contrast = io.imsave(file_name + '_contrast.jpg', contrast)
    return contrast


def contrast_hist(file_name, img):
    """
    Plots histogram after contrast stretching
    :param img: Image array
    :param file_name: name user wants to save image as
    """
    return
    plt.hist(img.ravel(), 256, [0, 256])
    plt.savefig(file_name + '2_hist.jpg')
    plt.clf()
    plt.cla()
    plt.close()


def raw_hist(file_name, img):
    """
    Plots raw histogram
    :param img: Image array
    :param file_name: name of file user wants to save as
    """
    return
    plt.hist(img.ravel(), 256, [0, 256])
    plt.savefig(file_name + 'raw_hist.jpg')
    plt.clf()
    plt.cla()
    plt.close()


def log_compression(file_name, img):
    """
    Replace pixel value with its logarithm (effectively enhancing low intensity
    pixel values).
    :param file_name: file name of the image as used to save the image.
    :param img: the jpeg image.
    :return: output image (in .jpg)
    """
    log_out = exposure.adjust_log(img)
    log_hist(file_name, log_out)
    img_log = io.imsave(file_name + '_log.jpg', log_out)
    return log_out


def log_hist(file_name, img):
    """
    Plots histogram after contrast stretching
    :param img: Image array
    :param file_name: name user wants to save image as
    """
    return
    plt.hist(img.ravel(), 256, [0, 256])
    plt.savefig(file_name + '3_hist.jpg')
    plt.clf()
    plt.cla()
    plt.close()


def reverse_video(file_name, img):
    """
    Transforms image to its negative
    :param file_name: file name of the image as used to save the image.
    :param img: the jpeg image
    :return: .jpg image
    """
    im_inverted = util.invert(img)
    rev_hist(file_name, im_inverted)
    img_rev = io.imsave(file_name + '_rev.jpg', im_inverted)
    return im_inverted


def rev_hist(file_name, img):
    """
    Plots histogram after contrast stretching
    :param img: Image array
    :param file_name: name user wants to save image as
    """
    return
    plt.hist(img.ravel(), 256, [0, 256])
    plt.savefig(file_name + '4_hist.jpg')
    plt.clf()
    plt.cla()
    plt.close()


def strip_header(base64_str):
    """
    Strips the data url header
    :param base64_str: Raw base64 string
    :return: Stripped string
    """
    try:
        stripped = base64_str.split(',')[1]
    except AttributeError:
        return "Check if base64 is string"
    return stripped
