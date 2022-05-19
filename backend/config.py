import os

ALL_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
BASE_DIR = os.path.abspath(os.getcwd())
DB_NAME = 'db_homework.db'
DEBUG=True

DB_URI = f'sqlite:///{ BASE_DIR }/{ DB_NAME }'