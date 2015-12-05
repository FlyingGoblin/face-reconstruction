# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template as tpl, flash, jsonify

from config import config_object

app = Flask(__name__, static_folder='static', template_folder='templates')
app.config.from_object(config_object)
app.debug = app.config['DEBUG']


@app.route('/')
def hello_world():
    return tpl("start.html")


@app.route('/take_photo')
def take_photo():
    return tpl("take_photo.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8091)
