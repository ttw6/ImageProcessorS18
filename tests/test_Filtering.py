import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from Filtering import *  # nopep8
from ImageEncoding import *  # nopep8


def test_string():
    input_str = 'test.jpg'
    result_jpg = encode_image_string(input_str)
    assert isinstance(result_jpg, bytes)


def test_log_comp():
    input1 = io.imread('test.jpg')
    log_compression('sample', input1)
    assert os.path.isfile('sample_log.jpg')


def test_reverse_video():
    input1 = io.imread('test.jpg')
    reverse_video('sample', input1)
    assert os.path.isfile('sample_rev.jpg')


def test_hist():
    input1 = io.imread('test.jpg')
    hist('sample', input1)
    assert os.path.isfile('sample_equal.jpg')


def test_equal_hist():
    input1 = io.imread('test.jpg')
    equalization_hist('sample', input1)
    assert os.path.isfile('sample1_hist.jpg')


def test_contrast_hist():
    input1 = io.imread('test.jpg')
    contrast_stretching('sample', input1)
    assert os.path.isfile('sample_contrast.jpg')
