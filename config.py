class Config(object):
    SECRET_KEY = 'your key'
    DEBUG = True
    TESTING = False


class TestingConfig(Config):
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'sqlite://'


class DevelopmentConfig(Config):
    """Use local_config overwrite this"""
    pass

config_object = 'config.DevelopmentConfig'

try:
    from local_config import *
except ImportError:
    pass
