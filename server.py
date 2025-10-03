from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/agendar")
def agendar():
    return render_template("agendar.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/requests/login", methods=["GET", "POST"])
def request_login():
    if request.method == "POST":
        data = request.get_json()
        response = jsonify(nome=data["nomeUsuario"], senha=data["senha"])
        return response
    
    if request.method == "GET":
        return "sai daqui"
    
app.run(debug=True)