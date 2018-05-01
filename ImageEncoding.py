import base64


def encode_image_string(file_name):
    """
    Encodes image in base64.

    :param file_name: file name of the image as used to save the image.
    :return: base64 string of the image
    """
    with open(file_name, 'rb') as image_file:
        image_str = base64.b64encode(image_file.read())
        return image_str


def save_image_string(base64_image, file_name):
    """
    Converts base64 string to .jpg.

    :param base64_image: base64 string
    :param file_name: file name of the image as used to save the image.
    :return: .jpg image
    """
    with open(file_name, 'wb') as image_out:
        image_out.write(base64.b64decode(base64_image))
