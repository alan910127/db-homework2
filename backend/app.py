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

ALL_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{DB_USER}:{DB_PASSWD}@127.0.0.1/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    __tablename__ = 'users'
    realname = db.Column(db.String(255))
    role = db.Column(db.String(10), default="user")
    account = db.Column(db.String(255), primary_key=True)
    phone = db.Column(db.String(10))
    password = db.Column(db.String(73)) # salt(8) + $(1) + hash(64)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    balance = db.Column(db.Integer, default=0)
    shopname = db.Column(db.String(255), db.ForeignKey('shops.shopname'), unique=True)
    shop = db.relationship("Shop", backref=db.backref("users", uselist=False))

    def __init__(self, realname, account, phone, password, latitude, longitude):
        self.realname = realname
        self.account = account
        self.phone = phone
        self.password = password
        self.latitude = latitude
        self.longitude = longitude 

class Shop(db.Model):
    __tablename__ = 'shops'
    shopname = db.Column(db.String(255), primary_key=True)
    category = db.Column(db.String(255))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    def __init__(self, shopname, category, latitude, longitude):
        self.shopname = shopname
        self.category = category
        self.latitude = latitude
        self.longitude = longitude

class Meal(db.Model):
    __tablename__ = 'meals'
    name = db.Column(db.String(255), primary_key=True)
    shopname = db.Column(db.String(255), db.ForeignKey('shops.shopname'), primary_key=True)
    image = db.Column(db.String(255))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    shop = db.relationship("Shop")

    def __init__(self, name, shopname, image, price, quantity):
        self.name = name
        self.shopname = shopname
        self.image = image
        self.price = price
        self.quantity = quantity


class UserSchema(ma.Schema):
    class Meta:
        fields = ('realname', 'role', 'account', 'phone', 'password', 'latitude', 'longitude', 'balance', 'shopname')

class ShopSchema(ma.Schema):
    class Meta:
        fields = ('shopname', 'category', 'latitude', 'longitude')

class MealSchema(ma.Schema):
    class Meta:
        fields = ('name', 'shopname', 'image', 'price', 'quantity')

userSchema = UserSchema()
shopSchema = ShopSchema()
shopListSchema = ShopSchema(many=True)

@app.route('/login', methods = ['POST'])
def loginUser():
    account = request.json['account']
    password = request.json['password']

    user = User.query.get(account)
    if user is None:
        return ({ 'message': 'The given data was invalid', 'error': 'The user does not exists.' }, 444)
    
    salt, password_stored = user.password.split('$')

    Hasher = sha256()
    Hasher.update(salt.encode('utf-8'))
    Hasher.update(password.encode('utf-8'))
    password_hashed = Hasher.hexdigest()

    if password_hashed == password_stored:
        return userSchema.jsonify(user)
    else:
        return ({ 'message': 'The given data was invalid', 'error': 'The password was wrong.' }, 444)


@app.route('/register', methods = ['POST'])
def registerUser():
    realname = request.json['realname']
    account = request.json['account']
    phone = request.json['phone']
    password = request.json['password']
    latitude = request.json['latitude']
    longitude = request.json['longitude']

    userData = User.query.get(account)

    if userData is None:
        salt = ''.join(choices(ALL_CHARACTERS, k=8))
        Hasher = sha256()
        Hasher.update(salt.encode('utf-8'))
        Hasher.update(password.encode('utf-8'))
        password_hashed = Hasher.hexdigest()

        userData = User(realname, account, phone, f'{salt}${password_hashed}', latitude, longitude)

        db.session.add(userData)
        db.session.commit()
        return userSchema.jsonify(userData)
    else:
        return (userSchema.jsonify(userData), 444)



@app.route('/getuser/<account>', methods = ['GET'])
def getUser(account):
    userData = User.query.get(account)
    return userSchema.jsonify(userData)

@app.route('/getshop', methods=['POST'])
def getShop():
    shopname = request.json["shopname"]
    distance = request.json["distance"]
    pricelow = (lambda x: int(x) if x else 0)(request.json["pricelow"])
    pricehigh = (lambda x: int(x) if x else 10 ** 300)(request.json["pricehigh"])
    meal = request.json["meal"]
    category = request.json["category"]

    print(request.json)

    subQuery = Meal.query.filter(Meal.price >= pricelow, Meal.price <= pricehigh, Meal.name.ilike(f'%{ meal }%')) \
                    .with_entities(Meal.shopname).distinct()

    print(f'{subQuery.all()=}')

    shopListData =  Shop.query.filter(
                        Shop.shopname.ilike(f'%{ shopname }%'), 
                        Shop.category.ilike(f'%{ category }%'),
                        Shop.shopname.in_(subQuery)
                    ).all()

    return shopListSchema.jsonify(shopListData)

@app.route('/addshop', methods=['POST'])
def addshop():
    shopname = request.json["shopname"]
    category = request.json["category"]
    latitude = request.json["latitude"]
    longitude = request.json["longitude"]
    
    shop = Shop.query.get(shopname)
    if shop is None:

        shopData = Shop(shopname, category, latitude, longitude)
        db.session.add(shopData)
        db.session.commit()
        return shopSchema.jsonify(shopData)
    else:
        return ({'message': "The shopname has been registered."}, 444)

@app.route('/addmeal', methods=['POST'])
def addmeal():
    mealname = request.json["mealname"]
    price = request.json["price"]
    quantity = request.json["quantity"]
    shopname = request.json["shopname"]

    meal = Meal(mealname, shopname, "", price, quantity)
    db.session.add(meal)
    db.session.commit()

    return MealSchema.jsonify(meal)



if __name__ == '__main__':
    app.run(debug=True)