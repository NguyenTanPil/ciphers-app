

class Caesar(object):
    def __init__(self):
        self.lower_unicode = 97
        self.upper_unicode = 65
        self.alphabet_length = 26

    def transition_code(self, message, key):
        result = ''
        processes = []

        for char in message:
            # new_char = (char + k) mod 26
            if char.isupper():
                # char => unicode => char
                x = ord(char) - self.upper_unicode
                mod = (x + key) % self.alphabet_length
                new_char = chr(mod + self.upper_unicode)
                result += new_char

                # display detail in client
                processes.append({'char': char,'x': x, 'k': key, 'mod': mod, 'n': self.alphabet_length, 'result': new_char})
            elif char.islower():
                # char => unicode => char
                x = ord(char) - self.lower_unicode
                mod = (x + key) % self.alphabet_length
                new_char = chr(mod + self.lower_unicode)
                result += new_char

                # display detail in client
                processes.append({'char': char,'x': x, 'k': key, 'mod': mod, 'n': self.alphabet_length, 'result': new_char})
            else:
                # special char
                result += char

        return result, processes


    def encode(self, message, key):
        return self.transition_code(message, key)


    def decode(self, message, key):
        return self.transition_code(message, -key)

