# ImageProcessorS18

__________

Ouroboros Image Processor

The following is a repository for the BME590, image processor final project.

The following repository contains all frontend server dependencies (ReactJS), backend server construction (flask) and all functions relevant to interfacing the components together (filtering functionalities using the skimage package, histogram displays using matplotlib and numpy packages). Mongo databases are previously setup on virtual machines (VM) but connections to these databases will be visible in the repository as well.

__________

Frontend UI
Below is an image of what the frontend server should look like

__________

user instructions

Once the website is up and running, simply choose a JPEG image that you would like to upload onto the server. You will be prompted to then enter a functional email under which the image will be saved. Upon uploading the image, the user will gain immediate information in regards to the size of the image being uploaded.

The user will then have the option of choosing between 4 different filtering methods - histogram equalization, contrast stretching, log compression, and reverse video. After the choice of filtering has been made, the user will have two viewing options. The user will be able to either view the original and the filtered image side by side, or the histogram of the original image with the filtered image's histogram side to side.

The user will also have the option to request different information in regards to the metrics of the image processor, queried based on the email of the user. These metrics can be displayed upon request and includes information like user action (how many times each filtering process was run), latency (how long it took to run a particular filter), timestamps (when the user uploaded an image) and image names (a list of all images uploaded by the particular image).

________

project performance



