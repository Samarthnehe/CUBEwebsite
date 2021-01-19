from flask import render_template, url_for, flash, redirect,request
from flaskblog import app,db,bcrypt



@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', )


@app.route("/about")
def about():
    return render_template('aboutus.html', title='About')




@app.route("/event")
def event():
    return render_template('event.html', title='Events')

@app.route("/team")
def team():
    return render_template('team.html', title='The Team')

@app.route("/contactform")
def contform():
    return render_template('contactform.html', title='ContactForm')




