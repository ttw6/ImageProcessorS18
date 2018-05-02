# ImageProcessorS18

[![Build Status](https://travis-ci.org/ttw6/ImageProcessorS18.svg?branch=master)](https://travis-ci.org/ttw6/ImageProcessorS18)
__________

## Ouroboros Image Processor

The following is a repository for the BME590, image processor final project.

This repository contains all frontend server dependencies (ReactJS), backend server construction (flask) and all functions relevant to interfacing the components together (filtering functionalities using the skimage package, histogram displays using matplotlib and numpy packages). Mongo databases are previously setup on virtual machines (VM) but connections to these databases will be visible in the repository as well.

__________

## Frontend UI
Below is an image of what the frontend server should look like

__________

## User instructions

Once the website is up and running, simply choose a JPEG image that you would like to upload onto the server. You will be prompted to then enter a functional email under which the image will be saved. Upon uploading the image, the user will gain immediate information in regards to the size of the image being uploaded.

The user will then have the option of choosing between 4 different image processing methods - histogram equalization, contrast stretching, log compression, and reverse video. After the choice of transformation has been made, the user will have two viewing options. The user will be able to either view the original and the processed image side by side, or the histogram of the original image with the processed image's histogram side to side.

The user will also have the option to request different information in regards to the metrics of the image processor, queried based on the email of the user. These metrics can be displayed upon request and includes information like user action (how many times each filtering process was run), latency (how long it took to run a particular filter), timestamps (when the user uploaded an image) and image names (a list of all images uploaded by the particular user).

### Setting up the back-end
The database and Flask instance should be running on a virtual machine. Insure that Docker, pip, and Python are installed.

After cloning the repo, set up a Python virtual enviornment and install the packages listed in requirements.txt. 
```
virtualenv env
source env/bin/activate
pip3 install -r requirements.txt
```
Set up a screen to establish the database by typing `sudo docker run -v $PWD/db:/data/db -p 27017:27017 mongo`. 

Set up another screen to run the Flask server by typing `FLASK_APP=app_routes.py flask run --host=0.0.0.0`

________

## Project Functionality and Performance
[![react_screenshot.jpg](https://s31.postimg.cc/4rewjg7zr/image.png)](https://postimg.cc/image/4rewjg7zr/)
[![react_screenshot.jpg](https://s31.postimg.cc/7y9g3305j/image.png)](https://postimg.cc/image/7y9g3305j/)
[![react_screenshot.jpg](https://s31.postimg.cc/4rewjg7zr/image.png)](https://postimg.cc/image/4rewjg7zr/)
[![react_screenshot.jpg](https://s31.postimg.cc/f1hbipdav/image.png)](https://postimg.cc/image/f1hbipdav/)
[![react_screenshot.jpg](https://s31.postimg.cc/njqrn1z93/image.png)](https://postimg.cc/image/njqrn1z93/)
[![react_screenshot.jpg](https://s31.postimg.cc/wrj03re13/image.png)](https://postimg.cc/image/wrj03re13/)
[![react_screenshot.jpg](https://s31.postimg.cc/rg43j1civ/image.png)](https://postimg.cc/image/rg43j1civ/)
[![react_screenshot.jpg](https://s31.postimg.cc/h61ojthif/image.png)](https://postimg.cc/image/h61ojthif/)

The above 8 images demonstrate the functionality and UI design of the project that we have completed. The first 3 images on the top row show the initial UI design without interaction. There is a drop down that allows the user to choose between 4 different image filtering options. After uploading the image, the user is allowed to commit the action - a functionality allowed by the red button. A seperate tab called user profile allows users to input a user's email to query the metrics corresponding with the queried email. Following the uploading and commiting, the size of the image is displayed. Four windows are also displayed - the original image, the histogram of the original image, the filtered image and the histogram of the filtered image. Under the filtered image, 3 buttons are present - these are options that allow the user to download the filtered image in .jpg, .png or .tiff format. The user profile when queried then displays the information related to the email. Finally, the Ouroboros Team tab has a picture of our team and basic information regarding each of the collaborators of the project.
