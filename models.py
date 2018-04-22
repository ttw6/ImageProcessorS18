from pymodm import fields, MongoModel


class User(MongoModel):
    email = fields.EmailField(primary_key=True)
    upload_times = fields.ListField(field=fields.DateTimeField())
    # stores the time stamps for different images
    image_names = fields.ListField(field=fields.CharField())
    # stores the names (file names) for different images
    user_action = fields.DictField()
    # stores the amount of times the different user actions have 
    # been run (all filtering options)
    latency = fields.ListField(field=fields.IntegerField())
    # stores the latency of each of the user actions

