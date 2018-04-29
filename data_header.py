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
