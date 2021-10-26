# Nguyen Tan Pil - B1812295

class Transposition:
    def __init__(self, key):
        self.key = key

    def split_array_by_len(self, seq, length):
        # split array has length columns
        return [seq[i:i + length] for i in range(0, len(seq), length)]


    def transition_code(self,message, encrypt=True):
        # remove spacing
        try:
            new_message = message.replace(' ', '')
        except AttributeError:
            new_message = message
        # convert string to dict
        order = {
            int(val): num for num, val in enumerate(self.key)
        }
        result = ''
        length = len(self.key) if encrypt else int(len(new_message) / len(self.key))

        for column in sorted(order.keys()):
            for row in self.split_array_by_len(message, length):
                try:
                    result += row[order[column]]
                except IndexError:
                    continue

        return result


    def encode(self,message):
        return self.transition_code(message)


    def decode(self,message):
        return self.transition_code(message, False)


