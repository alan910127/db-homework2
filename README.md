# Introduction to Database Systems Homework 2

> Topic: Food Ordering Service part.1 <br>
> Deadline: 2022/05/20 23:59

## Virtual Environment Setup

1. Change directory to this repo directory. 
    ```zsh
    cd DB-homework
    ```
    
2. Create the virtualenv
    ```zsh
    virtualenv -p python3 venv
    ```
    
3. Activate the virtualenv
    ```zsh
    source activate
    ```

#### In venv
4. Install the following python packages
    ```zsh
    pip install Flask
    pip install Flask-SQLAlchemy
    pip install flask-marshmallow
    pip install marshmallow
    pip install mysqlclient
    pip install Flask-Cors
    ```
    
> Note: Make sure that you are in `venv` by typing `source activate` in command line before running the backend script `app.py`

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
