import pytest
from data_header import strip_header


def test_strip_header():
    test1 = 'data:image/jpg;base64,aHHHHHHH'
    result1 = strip_header(test1)
    assert result1 == 'aHHHHHHH'

    test2 = 123
    result2 = strip_header(test2)
    assert result2 == "Check if base64 is string"

    test3 = {"val1": 'dict'}
    result3 = strip_header(test3)
    assert result3 == "Check if base64 is string"

    test4 = ((1, 'a'), (2, 'b'), (3, 'c'))
    result4 = strip_header(test4)
    assert result4 == "Check if base64 is string"


def test_exception():
    with pytest.raises(AttributeError):
        test2 = 123
        result2 = test2.split(',')[1]