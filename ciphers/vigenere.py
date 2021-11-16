# Nguyen Tan Pil - B1812295

class Vigenere:
    def __init__(self, key):
        self.key = key
        self.die = 26
        self.lower_unicode = 97
        self.upper_unicode = 65

    def transition_code(self, string, number_holder):
        key_length = len(self.key)
        key_as_int = [(ord(i) % self.upper_unicode if i.isupper() else ord(i) % self.lower_unicode) for i in self.key]

        new_string = string.replace(' ', '')
        string_as_int = [(ord(i) % self.upper_unicode if i.isupper() else ord(i) % self.lower_unicode) for i in new_string]
        # remember index of space 
        indexs_remember = [i for i, x in enumerate(string) if x == ' ']

        result = ''
        processes = {'string_as_int': string_as_int, 'key_as_int': [], 'result_as_int': [], 'result_as_char': []}

        for index, char in enumerate(new_string):
            # number_holder = 1 if encode and -1 if decode
            value = (string_as_int[index] + key_as_int[index % key_length] * number_holder) % self.die

            if char.isupper():
                result += chr(value + self.upper_unicode)
                processes['key_as_int'].append(key_as_int[index % key_length])
                processes['result_as_int'].append(value)
                processes['result_as_char'].append(chr(value + self.upper_unicode))
            elif char.islower():
                result += chr(value + self.lower_unicode)
                processes['key_as_int'].append(key_as_int[index % key_length])
                processes['result_as_int'].append(value)
                processes['result_as_char'].append(chr(value + self.lower_unicode))
            else:
                result += char

        # add space in new string
        for i in range(len(indexs_remember)):
            result = result[:indexs_remember[i]] + ' ' +  result[indexs_remember[i]:]

        return result, processes

    def encode(self, string):
        return self.transition_code(string, 1)

    def decode(self, string):
        return self.transition_code(string, -1)
