# Nguyen Tan Pil - B1812295

class Rsa:
  def __init__(self,p, q, e, d,):
    self.p = p
    self.q = q
    self.e = e
    self.d = d
  
  def encode(self, plaintext):
    n = self.p * self.q
    phi = (self.p - 1) * (self.q - 1)
    newD = self.d
    newE = self.e

    if self.d == 1:
      try:
        #  encode
        newD = pow(self.e, -1, phi)
      except:
        return 'error prime', {'phi': phi}
    else:
      #  decode
      try:
        newE = pow(self.d, -1, phi)
      except:
        return 'error prime', {'phi': phi}
    
    arrPlaintext = plaintext.split(' ')
    intPlaintext = []
    chars = []
    c = []

    for char in arrPlaintext:
      # 26 length of alphabet
      number = 0
      # char is letter
      if (char.isalpha()):
        charAscii = ord(char)
        if (char == char.isupper()):
          #  A => unicode
          charAscii -= 65
        else:
          #  a => unicode
          charAscii -= 97
        
        number = charAscii
      else:
        number = int(char)

      intPlaintext.append(number)
      result = pow(number, newE, n)
      chars.append(chr((result % 26) + 65))
      c.append(result)
    
    ciphertext = ' '.join(str(num) for num in c)
    processes = {
      'p': self.p,
      'q': self.q,
      'e': self.e,
      'd': self.d,
      'newD': newD,
      'newE': newE,
      'chars': chars,
      'n': n,
      'phi': phi,
      'plaintext': plaintext,
      'intPlaintext': intPlaintext,
      'ciphertext': ciphertext,
    }

    return ciphertext, processes

  def decode(self, plaintext):
    n = self.p * self.q
    phi = (self.p - 1) * (self.q - 1)
    newD = self.d
    newE = self.e

    if self.d == 1:
      try:
        #  encode
        newD = pow(self.e, -1, phi)
      except:
        return 'error prime', {'phi': phi}
    else:
      #  decode
      try:
        newE = pow(self.d, -1, phi)
      except:
        return 'error prime', {'phi': phi}
    
    arrPlaintext = plaintext.split(' ')
    intPlaintext = []
    chars = []
    c = []

    for char in arrPlaintext:
      # 26 length of alphabet
      number = 0
      # char is letter
      if (char.isalpha()):
        charAscii = ord(char)
        if (char == char.isupper()):
          #  A => unicode
          charAscii -= 65
        else:
          #  a => unicode
          charAscii -= 97
        
        number = charAscii
      else:
        number = int(char)

      intPlaintext.append(number)
      result = pow(number, newD, n)
      chars.append(chr((result % 26) + 65))
      c.append(result)
    
    ciphertext = ' '.join(str(num) for num in c)
    processes = {
      'p': self.p,
      'q': self.q,
      'e': self.e,
      'd': self.d,
      'newD': newD,
      'newE': newE,
      'chars': chars,
      'n': n,
      'phi': phi,
      'plaintext': plaintext,
      'intPlaintext': intPlaintext,
      'ciphertext': ciphertext,
    }

    return ciphertext, processes

r = Rsa(11, 47, 4, 1)
print(r.encode('c f'))
print(r.decode('8 125'))