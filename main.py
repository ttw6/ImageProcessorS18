from pymodm import connect
import models
from Filtering import *
import time
import datetime
import numpy


def create_user(email, image_name, upload_time):

    """
    :param email: email queried for user
    :param image_name:  name of image
    :param upload_time: stores the time at which the user uploads ttheir image
    :return:
    """
    user = models.User(email, [], [], {'equalization': 0, 'contrast': 0, 'log': 0, 'reverse': 0}, [])
    user.image_names.append(image_name)
    user.upload_times.append(upload_time)
    user.latency.append(0)
    user.save()


def add_user_action(email, action_key, file_name, upload_time):

    """
    :param file_name: name of the image that is being uploaded
    :param email: email queried for user
    :param action_key:  the key that corresponds to the filtering being done
    :param upload_time: stores the time at which the image was uploaded by the user
    :return:
    """
    user = models.User.objects.raw({"_id": email}).first()
    user.image_names.append(file_name)
    user.upload_times.append(upload_time)

    if action_key == 1:
        user.user_action['equalization'] += 1
    elif action_key == 2:
        user.user_action['contrast'] += 1
    elif action_key == 3:
        user.user_action['log'] += 1
    else:
        user.user_action['reverse'] += 1


def filter_image(email, action_key, file_name, vcm_image, start_time):

    """ The following function  queries for the email address of the user,
    filters the image based on the action_key given, computes the latency
    of the filtering option and then returns the filtered image

    :param email: email of the user to be queried
    :param file_name: name of the image that is being uploaded
    :param action_key: the number designating the filtering option being performed
    :param vcm_image: the image that is stored on the path of the vcm
    :param start_time: the time at which the latency calculations begin
    :return: filtered_image: returns the filtered image run through the filterings.py file
    """

    user = models.User.objects.raw({"_id": email}).first()
    if action_key == 1:
        filtered_image = hist(file_name, vcm_image)
    elif action_key == 2:
        filtered_image = contrast_stretching(file_name, vcm_image)
    elif action_key == 3:
        filtered_image = log_compression(file_name, vcm_image)
    else:
        reverse_video(file_name, vcm_image)
    latency = time.time() - start_time
    user.latency.append(latency)
    return filtered_image

