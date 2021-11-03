from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
#from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
import os
from app import app

app = Flask(__name__, static_url_path='/', static_folder='frontend/build')
#CORS(app) #comment this on deployment
#api = Api(app)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 5000))

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/flask/<name>")
def lastname(name):
    if(name == 'Christian'):
        return {"result": "Tomah"}
    else:
        return {"result": "User Not Found"}
