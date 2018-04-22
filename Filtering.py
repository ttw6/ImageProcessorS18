import matplotlib
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np
import cv2
from skimage import data, img_as_float
from skimage import exposure


def hist(img):
    # image = img_as_float(img)
    equal = exposure.equalize_hist(img)
    return equal


def contrast_stretching(img):
    p2, p98 = np.percentile(img, (2, 98))
    contrast= exposure.rescale_intensity(img, in_range=(p2, p98))
    return contrast


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




