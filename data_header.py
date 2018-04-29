def strip_header(base64_str):
    try:
        stripped = base64_str.split(',')[1]
    except AttributeError:
        return "Check if base64 is string"
    return stripped
