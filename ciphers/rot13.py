# Nguyen Tan Pil - B1812295

class Rot13:
    def __init__(self, rot_type):
        self.rot_char = 13
        self.rot_num = 5
        self.rot_type = rot_type
        self.lower_unicode = 97
        self.upper_unicode = 65
        self.number_unicode = 48

    def transition_code_rot5(self, message):
        result = ''

        for char in message:
            if char.isnumeric():
                result += chr(((ord(char) - self.number_unicode + self.rot_num) % (self.rot_num * 2)) + self.number_unicode)
            else:
                result += char

        return result

    def transition_code_rot13(self, message):
        result = ''

        for char in message:
            if char.isupper():
                result += chr(((ord(char) - self.upper_unicode + self.rot_char) % (self.rot_char * 2)) + self.upper_unicode)
            elif char.islower():
                result += chr(((ord(char) - self.lower_unicode + self.rot_char) % (self.rot_char * 2)) + self.lower_unicode)
            else:
                result += char

        return result

    def transition_code_rot18(self, message):
        result = ''

        for char in message:
            if char.isupper():
                result += chr(((ord(char) - self.upper_unicode + self.rot_char) % (self.rot_char * 2)) + self.upper_unicode)
            elif char.islower():
                result += chr(((ord(char) - self.lower_unicode + self.rot_char) % (self.rot_char * 2)) + self.lower_unicode)
            elif char.isnumeric():
                result += chr(((ord(char) - self.number_unicode + self.rot_num) % (self.rot_num * 2)) + self.number_unicode)
            else:
                result += char

        return result

    def encode(self, message):
        if(self.rot_type == 5):
            return self.transition_code_rot5(message)
        elif (self.rot_type == 13):
            return self.transition_code_rot13(message)
        else:
            return self.transition_code_rot18(message)

    def decode(self, message):
        if(self.rot_type == 5):
            return self.transition_code_rot5(message)
        elif (self.rot_type == 13):
            return self.transition_code_rot13(message)
        else:
            return self.transition_code_rot18(message)



