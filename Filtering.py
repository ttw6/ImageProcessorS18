import matplotlib
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np
import cv2
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
    img_equal = io.imsave(file_name + '_hist.jpg', equal)
    return img_equal


def contrast_stretching(file_name, img):
    """
    Adjusts contrast in image.

    :param image: jpeg of image
    :return: Image array after contrast stretching
    """
    p2, p98 = np.percentile(img, (2, 98))
    contrast = exposure.rescale_intensity(img, in_range=(p2, p98))
    img_contrast = io.imsave(file_name + '_contrast.jpg', contrast)
    return contrast


def raw_hist(file_name, img):
    """
    Plots raw histogram
    :param img: Image array
    """
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()


def equalization_hist(file_name, img):
    """
    Plots equalized histogram
    :param img: Image array
    """
    ##plt.hist(img.ravel(), 256, [0, 1])
    ##plt.show()
    pass

def contrast_hist(file_name, img):
    """
    Plots histogram after contrast stretching
    :param img: Image array
    """
    ##plt.hist(img.ravel(), 256, [0, 256])
    ##plt.show()
    pass

def show_img(file_name, img):
    """
    Displays image
    :param img: Image array
    """
    plt.imshow(img)
    plt.show()


def log_compression(file_name, img):
    """
    Replace pixel value with its logarithm (effectively enhancing low intensity
    pixel values).

    :param file_name: file name of the image as used to save the image.
    :param img: the jpeg image.
    :return: output image (in .jpg)
    """
    #im = io.imread(file_name + file_type, as_grey=True)
    log_out = exposure.adjust_log(img)
    img_log = io.imsave(file_name + '_log.jpg', log_out)
    return img_log


def reverse_video(file_name, img):
    """
    Transforms image to its negative

    :param file_name: file name of the image as used to save the image.
    :param img: the jpeg image
    :return: .jpg image
    """
    im_inverted = util.invert(img)
    img_rev = io.imsave(file_name + '_rev.jpg', im_inverted)
    return img_rev
