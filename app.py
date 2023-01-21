from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask.helpers import send_from_directory
from flask_cors import CORS,cross_origin
import sqlalchemy as sa

app = Flask(__name__,static_folder='frontend/build',static_url_path='')
CORS(app)
# CONNECTING TO DATABASE: 

connection_url = sa.engine.URL.create(
    drivername="mysql+pymysql",
    username="root",
    password="@26102000",
    host="localhost",
    database="All_Posts",
    port="3306"
)
print(connection_url)

app.config['SQLALCHEMY_DATABASE_URI'] = connection_url #'mysql+pymysql://root:@26102000@localhost:3306/our_users'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


#CREATING SCHEMAS AND MODELS: 
from Backend.Models.Posts_models import Posts


#make the index.html file as static file: 
@app.route('/')
@cross_origin()
def server():
    return send_from_directory(app.static_folder,'index.html')

#CREATING ROUTES
from Backend.Controller import *
    

if __name__ == '__main__':
    app.run(debug=True,port=8000)

