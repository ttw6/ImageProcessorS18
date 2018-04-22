from skimage import exposure, io


def main():
    name = 'sample1'
    Log_Compression(name)

    '''
    Uncomment block for multiple files
    
    name = ['sample1', 'sample2']
    for n, val in enumerate(name):
        Log_Compression(name[n])
    '''


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
    image = io.imread(file_name + file_type,
                      as_grey=True)  # look into user warnings
    log_out = exposure.adjust_log(image)
    output = io.imsave(file_name + '_log.jpg', log_out)
    return output


def Reverse_Video():
    pass


if __name__ == "__main__":
    main()
