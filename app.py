from flask import Flask, json, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from ciphers.ceasar import Caesar
from ciphers.affine import Affine
from ciphers.simple_reverse import Reverse
from ciphers.transposition import Transposition
from ciphers.simple_substitution import Simple_Substitution

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

# ceasar
@app.route('/api/ceasar/encode', methods=['POST'])
@cross_origin()
def ceasar_encode():
  data = json.loads(request.data)
  ceasar = Caesar()
  result = ceasar.encode(data['text'], data['key'])
  return {
    'ciphertext': result
  }

@app.route('/api/ceasar/decode', methods=['POST'])
@cross_origin()
def ceasar_decode():
  data = json.loads(request.data)
  ceasar = Caesar()
  result = ceasar.decode(data['text'], data['key'])
  return {
    'ciphertext': result
  }

# affine
@app.route('/api/affine/encode', methods=['POST'])
@cross_origin()
def affine_encode():
  data = json.loads(request.data)
  affine = Affine(data['key'])
  result = affine.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/affine/decode', methods=['POST'])
@cross_origin()
def affine_decode():
  data = json.loads(request.data)
  affine = Affine(data['key'])
  result = affine.decode(data['text'])
  return {
    'ciphertext': result
  }

# reverse
@app.route('/api/reverse/encode', methods=['POST'])
@cross_origin()
def reverse_encode():
  data = json.loads(request.data)
  reverse = Reverse()
  result = reverse.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/reverse/decode', methods=['POST'])
@cross_origin()
def reverse_decode():
  data = json.loads(request.data)
  reverse = Reverse()
  result = reverse.decode(data['text'])
  return {
    'ciphertext': result
  }

# transposition
@app.route('/api/transposition/encode', methods=['POST'])
@cross_origin()
def transposition_encode():
  data = json.loads(request.data)
  transposition = Transposition(data['key'])
  result = transposition.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/transposition/decode', methods=['POST'])
@cross_origin()
def transposition_decode():
  data = json.loads(request.data)
  transposition = Transposition(data['key'])
  result = transposition.decode(data['text'])
  return {
    'ciphertext': result
  }

# simple substitution
@app.route('/api/simple-substitution/encode', methods=['POST'])
@cross_origin()
def simple_substitution_encode():
  data = json.loads(request.data)
  simple_substitution = Simple_Substitution(data['key'])
  result = simple_substitution.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/simple-substitution/decode', methods=['POST'])
@cross_origin()
def simple_substitution_decode():
  data = json.loads(request.data)
  simple_substitution = Simple_Substitution(data['key'])
  result = simple_substitution.decode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/')
@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
  app.run(debug=True)