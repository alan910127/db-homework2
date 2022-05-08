# Introduction to Database Systems Homework 2

> Topic: Food Ordering Service part.1 <br>
> Deadline: 2022/05/20 23:59

## Virtual Environment Setup

```shell
cd DB-homework
virtualenv -p python3 venv
source activate

# in venv now

pip install Flask
pip install Flask-SQLAlchemy
pip install flask-marshmallow
pip install marshmallow
pip install mysqlclient
pip install Flask-Cors
```

## Frontend Structure

```
App.vue
 |
 |-- LoginPage.vue
 |    |-- SignupPage.vue
 |
 |-- MainPage.vue
      |-- HomePage.vue
      |    |-- UserProfile.vue
      |    |-- SearchShop.vue
      |    |-- ShopList.vue
      |         |-- MenuPage.vue
      |
      |-- ShopPage.vue
           |-- ShopRegister.vue
           |-- AddMeal.vue
```

## Backend Functions

- getPassword(username)
