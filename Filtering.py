from skimage import exposure, io
import os


def main():
    file = 'sample1.jpg'
    name, ext = strip_ext(file)
    Log_Compression(name)

    '''
    Uncomment block for multiple files

    file = ['sample1.jpg', 'sample2.jpg']
    for n, val in enumerate(file):
        name, ext = strip_ext(val)
        Log_Compression(name)
    '''


def strip_ext(file_name):
    """
    Strip file extension

    :param file_name: Full file name
    :return: File name and extension
    """
    [file_name, file_ext] = os.path.splitext(file_name)
    return file_name, file_ext


def Histogram_Eq():
    pass


def Contrast_Streching():
    pass


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
    pass


if __name__ == "__main__":
    main()
