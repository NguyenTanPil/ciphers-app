# Nguyen Tan Pil - B1812295

class Elgamal:
  def __init__(self, p, x):
    self.p = p
    self.x = x
  
  def encode(self, plaintext, a, k):
    intPlaintext = int(plaintext)
    y = pow(a, self.x, self.p)
    key = pow(y, k, self.p)
    c1 = pow(a, k, self.p)
    c2 = (key * intPlaintext) % self.p

    ciphertext = str(c1) + ' ' + str(c2)
    processes = { 'p': self.p, 'k': k, 'a': a, 'x': self.x, 'plaintext': plaintext, 'y': y, 'key': key, 'c1': c1, 'c2': c2, 'ciphertext': ciphertext }
    
    return ciphertext, processes

  
  def decode(self, c1, c2):
    # a as c1, k as c2
    key = pow(c1, self.x, self.p)
    reverseKey = pow(key, -1, self.p)
    ciphertext = (c2 * reverseKey) % self.p
    processes = { 'p': self.p, 'c2': c2, 'c1': c1, 'x': self.x, 'reverseKey': reverseKey, 'ciphertext': ciphertext }

    return ciphertext, processes

