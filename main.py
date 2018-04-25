from pymodm import connect
import models
import datetime
import numpy


def create_user(email, image_name):

    """
    :param email: email queried for user
    :param image_name:  name of image
    :return:
    """
    user = models.User(email, [], [], {'equalization': 0, 'contrast': 0, 'log': 0, 'reverse': 0}, [])
    user.image_names.append(image_name)
    user.save()


def add_user_action(email, action_key):

    """

    :param email: email queried for user
    :param action_key:  the key that corresponds to the filtering being done
    :return:
    """
    user = models.User.objects.raw({"_id": email}).first()
    if action_key == 1:
        user.user_action['equalization'] += 1
    elif action_key == 2:
        user.user_action['contrast'] += 1
    elif action_key == 3:
        user.user_action['log'] += 1
    else:
        user.user_action['reverse'] += 1

