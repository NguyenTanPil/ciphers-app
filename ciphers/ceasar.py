# Nguyen Tan Pil - B1812295

class Caesar(object):
    def __init__(self):
        self.lower_unicode = 97
        self.upper_unicode = 65
        self.alphabet_length = 26

    def transition_code(self, message, key):
        result = ''

        for char in message:
            # new_char = (char + k) mod 26
            if char.isupper():
                # char => unicode => char
                result += chr(((ord(char) - self.upper_unicode + key) % self.alphabet_length) + self.upper_unicode)
            elif char.islower():
                result += chr(((ord(char) - self.lower_unicode + key) % self.alphabet_length) + self.lower_unicode)
            else:
                # special char
                result += char

        return result


    def encode(self, message, key):
        return self.transition_code(message, key)


    def decode(self, message, key):
        return self.transition_code(message, -key)

