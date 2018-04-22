import pytest


def test_strip_ext():
    from Filtering import strip_ext
    # Check functionality
    test_name = 'sample1.jpg'
    file_name, file_ext = strip_ext(test_name)
    assert file_name == 'sample1'
    assert file_ext == '.jpg'


def test_log_comp():
    from Filtering import Log_Compression
    pass
