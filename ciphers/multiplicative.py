# Nguyen Tan Pil - B1812295


class Multiplicative:
    def __init__(self, key):
        self.key = key
        self.lower_unicode = 97
        self.upper_unicode = 65
        self.die = 26

    def mod_reverse(self, a, b):
        for n in range(b):
            if (a * n) % b == 1:
                return n
            elif n == b - 1:
                return None
            else:
                continue

    def transition_code(self, string, key):
        result = ''

        for char in string:
            if char.isupper():
                result += chr(((ord(char) - self.upper_unicode) * key) % self.die + self.upper_unicode)
            elif char.islower():
                result += chr(((ord(char) - self.lower_unicode) * key) % self.die + self.lower_unicode)
            else:
                result += char

        return result

    def encode(self, string):
        return self.transition_code(string, self.key)

    def decode(self, string):
        return self.transition_code(string, self.mod_reverse(self.key, self.die))

