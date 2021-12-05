

class XOR:
    def __init__(self, key):
        self.key = key

    def convert_string_to_bins(self, string):
        len_of_byte = 8
        return [format(ord(char), 'b').zfill(len_of_byte) for char in string]


    def xor_bin(self, first_bin, second_bin):
        result = ''
        for i in range(len(first_bin)):
            result += '1' if first_bin[i] != second_bin[i] else '0'

        return result


    def xor_bins(self, first_bins, second_bins):
        result = []
        for i in range(len(first_bins)):
            result.append(self.xor_bin(first_bins[i], second_bins[i]))

        return result


    def convert_bins_to_hex(self, bins):
        result = []
        len_of_chars = 2
        scale = 2
        for item in bins:
            hex_unicode = format(int(item, scale), 'x').zfill(len_of_chars).upper()
            result.append(hex_unicode)

        return result


    def convert_hex_string_to_bins(self, string):
        result = []
        step = 2
        len_of_byte = 8
        scale = 16
        for i in range(0, len(string), step):
            char = string[i: i + step].lower()
            result.append(format(int(char, scale), 'b').zfill(len_of_byte))

        return result


    def bins_to_chars(self, bins):
        result = []
        scale = 2
        for item in bins:
            char = chr(int(item, scale))
            result.append(char)

        return result


    def add_padding_key(self, string):
        key = self.key
        if len(string) == len(key):
            return key
        else:
            index = 0
            while len(string) != len(key):
                if index == 3:
                    index = 0
                key += key[index]
                index += 1
        return key

    def transition_code(self, string, encrypt=True):
        indexs_remember = [i for i, char in enumerate(string) if char == ' ']
        string = string.replace(' ', '')
        bins_of_string = self.convert_string_to_bins(string) if encrypt else self.convert_hex_string_to_bins(string)

        new_key = self.add_padding_key(bins_of_string)
        bins_of_key = self.convert_string_to_bins(new_key)
        bins_xor = self.xor_bins(bins_of_string, bins_of_key)

        result = self.convert_bins_to_hex(bins_xor) if encrypt else self.bins_to_chars(bins_xor)

        for i in range(len(indexs_remember)):
            if encrypt:
             index = indexs_remember[i]
            else:
                index = int(indexs_remember[i] / 2)
            result = result[:index] + [' '] + result[index:]

        print(result)
        return ''.join(result)

    def encode(self, string):
        return self.transition_code(string)

    def decode(self, string):
        return self.transition_code(string, False)


