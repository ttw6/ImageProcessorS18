from main import *
import requests
from Filtering import *
import base64

connect("mongodb://localhost:27017/Image_Folder")  # open up connection to db
create_user(email="suyash@suyashkumar.com", image_name='poop',
            upload_time=datetime.datetime.now())

# string = Image_String('20180117_201745.jpg');

with open('20180117_201745.jpg', 'rb') as image_file:
    image_string = base64.b64encode(image_file.read())

image_s = image_string.decode('ascii')

input1 = {
    "Filter": 3,
    "Data": image_s,
    "filename": "potato3",
    "email": "suyash@suyashkumar.com",
}

r1 = requests.post("http://vcm-3584.vm.duke.edu:5000/imageFilter", json=input1)
print(r1.json())
