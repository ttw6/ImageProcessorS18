def strip_header(base64_str):
    stripped = base64_str.split(',')[1]
    return stripped
