from skimage import exposure, io


def main():
    image1 = io.imread('sample2.jpg', as_grey=True) # look into user warning
    out1 = Log_Compression(image1)
    io.imsave('log_comp2.jpg', out1)


def Histogram_Eq():
    pass


def Contrast_Streching():
    pass


def Log_Compression(image):
    log_out = exposure.adjust_log(image)
    return log_out


def Reverse_Video():
    pass


if __name__ == "__main__":
    main()
