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

    def encode(self, string):
        k_a, k_b, _ = self.key
        processes = []
        result = ''

        for char in string:
            if char.islower():
                x = ord(char) - self.lower_unicode
                mod = (k_a * x + k_b) % self.die
                new_char = chr(mod + self.lower_unicode)
                result += new_char

                # save processes
                processes.append({'char': char,'x': x, 'a': k_a, 'b': k_b, 'mod': mod, 'n': self.die, 'result': new_char})
            elif char.isupper():
                x = ord(char) - self.upper_unicode
                mod = (k_a * x + k_b) % self.die
                new_char = chr(mod + self.upper_unicode)
                result += new_char

                # save processes
                processes.append({'char': char,'x': x, 'a': k_a, 'b': k_b, 'mod': mod, 'n': self.die, 'result': new_char})
            else:
                result += char

        return result, processes

    def decode(self, string):
        _, k_b, k_i = self.key
        result = ''
        x = 0
        mod = 0
        new_char = ''
        processes = []

        for char in string:
            if char.islower():
                x = ord(char) - self.lower_unicode
                mod = (k_i * (x - k_b)) % self.die
                new_char = chr(mod + self.lower_unicode)
                result += new_char

                # save processes
                processes.append({'char': char,'x': x, 'i': k_i, 'b': k_b, 'mod': mod, 'n': self.die, 'result': new_char})
            elif char.isupper():
                x = ord(char) - self.upper_unicode
                mod = (k_i * (x - k_b)) % self.die
                new_char = chr(mod + self.upper_unicode)
                result += new_char

                # save processes
                processes.append({'char': char,'x': x, 'i': k_i, 'b': k_b, 'mod': mod, 'n': self.die, 'result': new_char})
            else:
                result += char
            
        return result, processes
