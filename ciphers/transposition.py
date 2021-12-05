
class Transposition:
    def __init__(self, key):
        self.key = key

    def split_array_by_len(self, seq, length):
        # split array has length columns
        return [seq[i:i + length] for i in range(0, len(seq), length)]

    def encode(self, message):
        # remember indexs
        indexs_remember = [i for i, char in enumerate(message) if char == ' ']

        # remove spacing
        new_message = message.replace(' ', '')

        # convert string to dict
        order = {
            int(num): (int(val) - 1) for num, val in enumerate(self.key)
        }
        length = len(self.key)
        result = ''
        matrix = self.split_array_by_len(new_message, length)

        for column in sorted(order.keys()):
            for row in matrix:
                try:
                    result += row[order[column]]
                except IndexError:
                    continue
        
        # add space remember
        for index in indexs_remember:
            result = result[:index] + ' ' + result[index:]

        return result


    def decode(self, message):
        # remember indexs
        indexs_remember = [i for i, char in enumerate(message) if char == ' ']

        # remove spacing
        new_message = message.replace(' ', '')

        # convert string to dict
        order = {
            int(val): (int(num)) for num, val in enumerate(self.key)
        }
        length = int(len(new_message) / len(self.key)) + (len(new_message) % len(self.key) > 0)
        matrix = self.split_array_by_len(new_message, length)

        result = ''
        
        for i in range(length):
            part = ''
            for column in sorted(order.keys()):
                matrix_index = order[column]
                try:
                    part += matrix[matrix_index][i]
                except IndexError:
                    continue

            result += part
        
        # add space remember
        for index in indexs_remember:
            result = result[:index] + ' ' + result[index:]

        return result
