##import matplotlib
##import matplotlib.pyplot as plt
##import matplotlib.image as mpimg
import numpy as np
##import cv2
from skimage import data, img_as_float
from skimage import exposure, io, util
import os
import base64


def strip_ext(file_name):
    """
    Strip file extension.
    
    :param file_name: Full file name
    :return: File name and extension
    """
    [file_name, file_ext] = os.path.splitext(file_name)
    return file_name, file_ext


def image_string(file_name):
    """
    Encodes image in base64.

    :param file_name: Full file name
    :return: Base64 string
    """
    with open(file_name, 'rb') as image_file:
        image_str = base64.b64encode(image_file.read())
        return image_str


def save_image_string(base64_image, file_name):
    """
    Converts base64 string to .jpg.

    :param base64_image: Base64 string
    :param file_name: Full file name
    :return: .jpg image
    """
    with open(file_name, 'wb') as image_out:
        image_out.write(base64.b64decode(base64_image))


def hist(img):
    """
    Adjusts image intensities to enhance contrast.

    :param file: jpeg of image
    :return: Image array after histogram equalization
    """
    equal = exposure.equalize_hist(img)
    img_equal = io.imsave(file_name + '_hist.jpg', equal)
    return img_equal


def contrast_stretching(img):
    """
    Adjusts contrast in image.

    :param image: jpeg of image
    :return: Image array after contrast stretching
    """
    p2, p98 = np.percentile(img, (2, 98))
    contrast = exposure.rescale_intensity(img, in_range=(p2, p98))
    img_contrast = io.imsave(file_name + '_contrast.jpg', contrast)
    return contrast


def raw_hist(img):
    """
    Plots raw histogram
    :param img: Image array
    """
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()


def equalization_hist(img):
    """
    Plots equalized histogram
    :param img: Image array
    """
    ##plt.hist(img.ravel(), 256, [0, 1])
    ##plt.show()
    pass

def contrast_hist(img):
    """
    Plots histogram after contrast stretching
    :param img: Image array
    """
    ##plt.hist(img.ravel(), 256, [0, 256])
    ##plt.show()
    pass

def show_img(img):
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
    :param file_name: Name of file
    :param file_type: File type (default is .jpg)
    :return: output image (in .jpg)
    """
    #im = io.imread(file_name + file_type, as_grey=True)
    log_out = exposure.adjust_log(img)
    img_log = io.imsave(file_name + '_log.jpg', log_out)
    return img_log


def reverse_video(img):
    """
    Transforms image to its negative
    :param file: File path
    :return: .jpg image
    """
    im_inverted = util.invert(img)
    img_rev = io.imsave(file_name + '_rev.jpg', im_inverted)
    return img_rev
