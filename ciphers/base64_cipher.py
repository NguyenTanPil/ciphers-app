


class Base64:
    def __init__(self):
        self.group_bits_len = 6
        self.output_group_len = 4
        self.byte_len = 8

    
    def create_base64_array(self):
        base64_array = []
        for i in range(26):
            base64_array.append(chr(ord('A') + i))
        for i in range(26):
            base64_array.append(chr(ord('a') + i))
        for i in range(10):
            base64_array.append(str(i))
        base64_array.extend(['+', '/'])

        return base64_array


    def string_to_bin(self, string):
        # rav => 01110010 01100001 01110110
        return ''.join(format(ord(char), 'b').zfill(8) for char in string)

    def convert_bins_to_array_number(self, bins):
        # 01110010 01100001 01110110 => [28 38 5 54]
        bins_mode_group_len = len(bins) % self.group_bits_len
        if bins_mode_group_len != 0:
            len_zeros = len(bins) + self.group_bits_len - bins_mode_group_len
            bins = bins.ljust(len_zeros, '0')

        string_split = [bins[i:i + self.group_bits_len] for i in range(0, len(bins), self.group_bits_len)]
        return [int(item, 2) for item in string_split]

    def convert_numbers_to_chars(self, numbers):
        # [28 38 5 54] => [c, m, F, 2]
        result = ''.join([self.base_array[number] for number in numbers])
        numbers_mode_group_output_len = len(result) % self.output_group_len

        if numbers_mode_group_output_len != 0:
            len_equals_char = len(result) + self.output_group_len - numbers_mode_group_output_len
            result = result.ljust(len_equals_char, '=')
        return result

    def convert_chars_to_bins(self, string):
        result = ''
        for char in string:
            result += "{0:b}".format(self.base_array.index(char)).zfill(6)

        return result

    def convert_bins_to_chars(self, bins):
        result = ''
        parts = int(len(bins) / self.byte_len)

        for i in range(0, self.byte_len * parts, self.byte_len):
            part_bin = bins[i:i + self.byte_len]
            result += chr(int(part_bin, 2))

        return result

    def encode(self, string):
        self.base_array = self.create_base64_array()
        bins = self.string_to_bin(string)
        numbers = self.convert_bins_to_array_number(bins)
        chars = self.convert_numbers_to_chars(numbers)
        return chars

    def decode(self, string):
        self.base_array = self.create_base64_array()
        # remove padding
        string = string.replace('=', '')
        bins = self.convert_chars_to_bins(string)
        chars = self.convert_bins_to_chars(bins)
        return chars


base64 = Base64()
print(base64.encode('rave!'))
print(base64.decode('cmF2ZSE='))
