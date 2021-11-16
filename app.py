from flask import Flask, json, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from ciphers.ceasar import Caesar
from ciphers.affine import Affine
from ciphers.simple_reverse import Reverse
from ciphers.transposition import Transposition
from ciphers.simple_substitution import Simple_Substitution
from ciphers.vigenere import Vigenere
from ciphers.hill import Hill
from ciphers.rot13 import Rot13
from ciphers.base64_cipher import Base64
from ciphers.xor import XOR
from ciphers.multiplicative import Multiplicative
from ciphers.des import DES

app = Flask(__name__, static_folder='client/build', static_url_path='')
CORS(app)

# ceasar
@app.route('/api/ceasar/encode', methods=['POST'])
@cross_origin()
def ceasar_encode():
  data = json.loads(request.data)
  ceasar = Caesar()
  result, processes = ceasar.encode(data['text'], data['key'])
  return {
    'ciphertext': result,
    'processes': processes
  }

@app.route('/api/ceasar/decode', methods=['POST'])
@cross_origin()
def ceasar_decode():
  data = json.loads(request.data)
  ceasar = Caesar()
  result, processes = ceasar.decode(data['text'], data['key'])
  return {
    'ciphertext': result,
    'processes': processes
  }

# affine
@app.route('/api/affine/encode', methods=['POST'])
@cross_origin()
def affine_encode():
  data = json.loads(request.data)
  affine = Affine(data['key'])
  result, processes = affine.encode(data['text'])
  return {
    'ciphertext': result,
    'processes': processes
  }

@app.route('/api/affine/decode', methods=['POST'])
@cross_origin()
def affine_decode():
  data = json.loads(request.data)
  affine = Affine(data['key'])
  result, processes = affine.decode(data['text'])
  return {
    'ciphertext': result,
    'processes': processes
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

# vigenere
@app.route('/api/vigenere/encode', methods=['POST'])
@cross_origin()
def vigenere_encode():
  data = json.loads(request.data)
  vigenere = Vigenere(data['key'])
  result, processes= vigenere.encode(data['text'])
  return {
    'ciphertext': result,
    'processes': processes
  }

@app.route('/api/vigenere/decode', methods=['POST'])
@cross_origin()
def vigenere_decode():
  data = json.loads(request.data)
  vigenere = Vigenere(data['key'])
  result,processes = vigenere.decode(data['text'])
  return {
    'ciphertext': result,
    'processes': processes
  }

# hill
@app.route('/api/hill/encode', methods=['POST'])
@cross_origin()
def hill_encode():
  data = json.loads(request.data)
  hill = Hill(data['key'])
  result = hill.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/hill/decode', methods=['POST'])
@cross_origin()
def hill_decode():
  data = json.loads(request.data)
  hill = Hill(data['key'])
  result = hill.decode(data['text'])
  return {
    'ciphertext': result
  }

# rot13
@app.route('/api/rot13/encode', methods=['POST'])
@cross_origin()
def rot13_encode():
  data = json.loads(request.data)
  rot13 = Rot13(data['key'])
  result = rot13.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/rot13/decode', methods=['POST'])
@cross_origin()
def rot13_decode():
  data = json.loads(request.data)
  rot13 = Rot13(data['key'])
  result = rot13.decode(data['text'])
  return {
    'ciphertext': result
  }

# base64
@app.route('/api/base64/encode', methods=['POST'])
@cross_origin()
def base64_encode():
  data = json.loads(request.data)
  base64 = Base64()
  result = base64.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/base64/decode', methods=['POST'])
@cross_origin()
def base64_decode():
  data = json.loads(request.data)
  base64 = Base64()
  result = base64.decode(data['text'])
  return {
    'ciphertext': result
  }

# xor
@app.route('/api/xor/encode', methods=['POST'])
@cross_origin()
def xor_encode():
  data = json.loads(request.data)
  xor = XOR(data['key'])
  result = xor.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/xor/decode', methods=['POST'])
@cross_origin()
def xor_decode():
  data = json.loads(request.data)
  xor = XOR(data['key'])
  result = xor.decode(data['text'])
  return {
    'ciphertext': result
  }

# multiplicative
@app.route('/api/multiplicative/encode', methods=['POST'])
@cross_origin()
def multiplicative_encode():
  data = json.loads(request.data)
  multiplicative = Multiplicative(data['key'])
  result = multiplicative.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/multiplicative/decode', methods=['POST'])
@cross_origin()
def multiplicative_decode():
  data = json.loads(request.data)
  multiplicative = Multiplicative(data['key'])
  result = multiplicative.decode(data['text'])
  return {
    'ciphertext': result
  }

# des
@app.route('/api/des/encode', methods=['POST'])
@cross_origin()
def des_encode():
  data = json.loads(request.data)
  des = DES(data['key'])
  result = des.encode(data['text'])
  return {
    'ciphertext': result
  }

@app.route('/api/des/decode', methods=['POST'])
@cross_origin()
def des_decode():
  data = json.loads(request.data)
  des = DES(data['key'])
  result = des.decode(data['text'])
  return {
    'ciphertext': result
  }

# ------------------------------------

@app.route('/')
@app.route('/affine')
@app.route('/reverse')
@app.route('/transposition')
@app.route('/modulo')
@app.route('/modular-inverse')
@app.route('/simple-substitution')
@app.route('/vigenere')
@app.route('/hill')
@app.route('/rot13')
@app.route('/base64')
@app.route('/xor')
@app.route('/multiplicative')
@app.route('/des')
@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
  app.run(debug=True)