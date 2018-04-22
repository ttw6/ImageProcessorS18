import skimage
import base64


from skimage import io
from skimage import util


def Image_String(filename):
    with open(filename, 'rb') as image_file:
        image_string = base64.b64encode(image_file.read())
        return image_string


def Save_Image_String(base64image, filename):
    with open(filename, 'wb') as Image_Out:
        Image_Out.write(base64.b64decode(base64image))


def Histogram_Eq():
    pass


def Contrast_Streching():
    pass


def Log_Compression():
    pass


def Reverse_Video():
    im = skimage.io.imread("/Users/PetekSener/Documents/AT2.jpg")
    im_inverted = skimage.util.invert(im)
    skimage.io.imsave("hope.jpg", im_inverted)
