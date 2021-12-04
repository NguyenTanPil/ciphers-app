# Nguyen Tan Pil - B1812295
# import random


# def getRandomKey(letters):
#     listKey = list(letters)
#     random.shuffle(listKey)
#     return ''.join(listKey)

class Simple_Substitution:
    def __init__(self, key):
        self.key = key

    def transition_code(self, message, encrypt=True):
        result = ''
        letters = ''
        key = ''
        
        if encrypt:
            letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            key = self.key
        else:
            key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            letters = self.key.upper()


        for char in message:
            if char.upper() in letters:
                charIndex = letters.find(char.upper())

                if char.isupper():
                    result += key[charIndex].upper()
                else:
                    result += key[charIndex].lower()
            else:
                result += char

        return result

    def encode(self, message):
        return self.transition_code(message)

    def decode(self, message):
        return self.transition_code(message, False)

