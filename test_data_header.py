def test_strip_header():
    from data_header import strip_header
    test1 = 'data:image/jpg;base64,aHHHHHHH'
    result1 = strip_header(test1)
    assert result1 == 'aHHHHHHH'
