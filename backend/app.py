from xml.dom.pulldom import CHARACTERS
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import datetime
from random import choices
from hashlib import sha256

DB_USER = 'alan'
DB_NAME = 'db_homework'
DB_PASSWD = ''

CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{DB_USER}:{DB_PASSWD}@127.0.0.1/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    realname = db.Column(db.String(255))
    account = db.Column(db.String(255), primary_key=True)
    phone = db.Column(db.String(10))
    password = db.Column(db.String(73)) # salt(8) + $(1) + hash(64)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    def __init__(self, realname, account, phone, password, latitude, longitude):
        self.realname = realname
        self.account = account
        self.phone = phone
        self.password = password
        self.latitude = latitude
        self.longitude = longitude


class UserSchema(ma.Schema):
    class Meta:
        fields = ('realname', 'account', 'phone', 'password', 'latitude', 'longitude')


userSchema = UserSchema()


@app.route('/login', methods = ['POST'])
def loginUser():
    account = request.json['account']
    password = request.json['password']

    user = User.query.get(account)
    if user is None:
        return { 'message': 'The given data was invalid', 'error': 'The user does not exists.' }
    
    salt, password_stored = user.password.split('$')

    Hasher = sha256()
    Hasher.update(salt.encode('utf-8'))
    Hasher.update(password.encode('utf-8'))
    password_hashed = Hasher.hexdigest()

    if password_hashed == password_stored:
        return userSchema.jsonify(user)
    else:
        return { 'message': 'The given data was invalid', 'error': 'The password was wrong.' }


@app.route('/register', methods = ['POST'])
def registerUser():
    realname = request.json['realname']
    account = request.json['account']
    phone = request.json['phone']
    password = request.json['password']
    latitude = request.json['latitude']
    longitude = request.json['longitude']

    if User.query.get(account) is None:
        salt = ''.join(choices(CHARACTERS, k=8))
        Hasher = sha256()
        Hasher.update(salt.encode('utf-8'))
        Hasher.update(password.encode('utf-8'))
        password_hashed = Hasher.hexdigest()

        userData = User(realname, account, phone, f'{salt}${password_hashed}', latitude, longitude)

        db.session.add(userData)
        db.session.commit()
        return userSchema.jsonify(userData)
    else:
        return userSchema.jsonify(None)



if __name__ == '__main__':
    app.run(debug=True)