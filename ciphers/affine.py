# Nguyen Tan Pil - B1812295

def mod_reverse(a, b):
    for n in range(b):
        if (a * n) % b == 1:
            return n
        elif n == b - 1:
            return None
        else:
            continue


class Affine:
    def __init__(self, key):
        self.die = 26
        self.lower_unicode = 97
        self.upper_unicode = 65
        self.key = (key['a'], key['b'], mod_reverse(key['a'], self.die))

    def affine_recipe(self, char, type_unicode, encrypt):
        k_a, k_b, k_i = self.key
        if encrypt:
            # E(k) (a * x + b) mod 26
            return (k_a * (ord(char, ) - type_unicode) + k_b) % self.die + type_unicode
        else:
            # D(k) (a * (x - b)) mod 26
            return (k_i * ((ord(char, ) - type_unicode) - k_b)) % self.die + type_unicode

    def transition_char(self, char, encrypt=True):
        if char.islower():
            return chr(self.affine_recipe(char, self.lower_unicode, encrypt))
        elif char.isupper():
            return chr(self.affine_recipe(char, self.upper_unicode, encrypt))
        else:
            return char

    def encode(self, string):
        return ''.join([self.transition_char(char) for char in string])

    def decode(self, string):
        return ''.join([self.transition_char(char, False) for char in string])

