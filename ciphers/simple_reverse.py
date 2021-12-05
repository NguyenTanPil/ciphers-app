
class Reverse:
    def __init__(self):
        pass

    def encode(self, message):
        # slice string: string[begin, end, step]
        return message[::-1]


    def decode(self, message):
        return message[::-1]
