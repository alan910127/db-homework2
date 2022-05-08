from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import datetime

DB_USER = 'root'
DB_NAME = 'db_homework'
DB_PASSWD = 'chenvincent610'

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
    password = db.Column(db.String(41)) # hashed (sha256)
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

@app.route('/getuser/<account>', methods = ['GET'])
def get_user(account):
    user = User.query.get(account)
    return userSchema.jsonify(user)

@app.route('http://localhost:5000/newUser', methods = ['POST'])
def insertUserData(realname, account, phone, password):
    realname = request.json["realname"]
    account = request.json["account"]
    phone = request.json["phone"]
    password = request.json["password"]

    userData = User(realname, account, phone, password, 0.0, 0.0)
    db.session.add(userData)
    db.session.commit()
    return userSchema.jsonify(userData)



if __name__ == '__main__':
    app.run(debug=True)