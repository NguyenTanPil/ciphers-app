import numpy as np

class DES:
    def __init__(self, primary_key):
        self.primary_key = primary_key
        self.len_of_loop = 16
        self.keys = None

    def initializeProps(self):
        # input
        ip_table = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40,
                    32,
                    24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63,
                    55, 47,
                    39, 31, 23, 15, 7]
        pc1_table = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36,
                    63, 55,
                    47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
        pc2_table = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47,
                    55, 30,
                    40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
        s_box_table = [
            [
                14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7, 0, 15, 7, 4, 14, 2,
                13, 1, 10, 6, 12, 11, 9, 5, 3, 8, 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7,
                3, 10, 5, 0, 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13,
            ],
            [
                15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10, 3, 13, 4, 7, 15, 2, 8,
                14, 12, 0, 1, 10, 6, 9, 11, 5, 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9,
                3, 2, 15, 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9,
            ],
            [
                10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8, 13, 7, 0, 9, 3, 4, 6,
                10, 2, 8, 5, 14, 12, 11, 15, 1, 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 15,
                10, 14, 7, 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12,
            ],
            [
                7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15, 13, 8, 11, 5, 6, 15,
                0, 3, 4, 7, 2, 12, 1, 10, 14, 9, 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14,
                5, 2, 8, 4, 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14,
            ],
            [
                2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9, 14, 11, 2, 12, 4, 7,
                13, 1, 5, 0, 15, 10, 3, 9, 8, 6, 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6,
                3, 0, 14, 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3,
            ],
            [
                12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11, 10, 15, 4, 2, 7, 12,
                9, 5, 6, 1, 13, 14, 0, 11, 3, 8, 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1,
                13, 11, 6, 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13,
            ],
            [
                4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 11, 3, 0, 11, 7, 4, 9, 1,
                10, 14, 3, 5, 12, 2, 15, 8, 6, 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0,
                5, 9, 2, 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12,
            ],
            [
                13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7, 1, 15, 13, 8, 10, 3,
                7, 4, 12, 5, 6, 11, 0, 14, 9, 2, 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13,
                15, 3, 5, 8, 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11,
            ]
        ]
        p_table = [16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22,
                11, 4,
                25]

        extend_table = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20,
                        21, 20, 21,
                        22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32, 1]
        loop_arr = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]

        # set props
        self.ip_table = ip_table
        self.pc1_table = pc1_table
        self.pc2_table = pc2_table
        self.s_box_tables = s_box_table
        self.p_table = p_table
        self.extend_table = extend_table
        self.loop_array = loop_arr

    def permutation(self, keys, table):
        return ''.join(list(map(lambda x: keys[x - 1], table)))


    def get_left_shift(self, keys, number):
        return keys[number:] + keys[0:number]


    def mix_keys(self, first_key, second_key):
        return ''.join([str((int(first_key[index]) ^ int(second_key[index]))) for index, _ in enumerate(first_key)])


    def bin_to_number(self, binary):
        return int(binary, 2)


    def number_to_bin(self, number):
        # format 4 bits
        return bin(number)[2:].zfill(4)


    def convert_bins_to_string(self, bins):
        result = ''
        len_of_part = 4
        for index in range(0, len(bins), len_of_part):
            bin_part = bins[index:index + len_of_part]
            result += hex(self.bin_to_number(bin_part))[2:]

        return result


    def convert_hex_string_to_bins(self, hex_string):
        hex_scale = 16
        len_of_bits_io = 64
        int_of_hex_string = int(hex_string, base=hex_scale)
        print(bin(int_of_hex_string))
        print(int_of_hex_string)
        return bin(int_of_hex_string)[2:].zfill(len_of_bits_io)


    def make_keys(self, key):
        middle_index = int(len(key) / 2)
        keys = []
        cd_list = []

        for index in range(self.len_of_loop):
            # first loop
            if not keys:
                first_child_key = key[0:middle_index]
                second_child_key = key[middle_index:]
            # second to n loop
            else:
                first_child_key = cd_list[index - 1][0:middle_index]
                second_child_key = cd_list[index - 1][middle_index:]

            first_child_key_left_shift = self.get_left_shift(first_child_key, self.loop_array[index])
            second_child_key_left_shift = self.get_left_shift(second_child_key, self.loop_array[index])
            cd_item = first_child_key_left_shift + second_child_key_left_shift
            permutation_key = self.permutation(cd_item, self.pc2_table)
            cd_list.append(cd_item)
            keys.append(permutation_key)

        return keys

    def extend_key(self, key):
        return ''.join(list(map(lambda x: key[x - 1], self.extend_table)))

    def instead_s_boxes(self, key):
        columns_box = 16
        len_part = 6
        result = ''
        for index in range(0, len(key), len_part):
            key_item = key[index:index + len_part]
            number_row = self.bin_to_number(key_item[0] + key_item[-1])
            number_column = self.bin_to_number(key_item[1:-1])

            box_index = int(index / len_part)
            box = np.array(self.s_box_tables[box_index]).reshape(-1, columns_box)
            result += self.number_to_bin(box[number_row][number_column])

        return result

    def loop_for_16_times(self, root, keys):
        middle_index = int(len(root) / 2)
        root_left = root[0:middle_index]
        root_right = root[middle_index:]

        extend_list = []
        mix_right_key_list = []
        box_output_list = []
        fiestel_list = []
        left_child_list = [root_left]
        right_child_list = [root_right]
        for index in range(1, self.len_of_loop + 1):
            extend_right = self.extend_key(right_child_list[index - 1])
            extend_list.append(extend_right)

            mix_right_child_key_of_index = self.mix_keys(extend_right, keys[index - 1])
            mix_right_key_list.append(mix_right_child_key_of_index)

            instead_box = self.instead_s_boxes(mix_right_child_key_of_index)
            permutation_instead_box = self.permutation(instead_box, self.p_table)
            box_output_list.append(permutation_instead_box)

            fiestel = self.mix_keys(permutation_instead_box, left_child_list[index - 1])
            fiestel_list.append(fiestel)

            if index == 16:
                left_child_list.append(fiestel)
                right_child_list.append(right_child_list[index - 1])
            else:
                left_child_list.append(right_child_list[index - 1])
                right_child_list.append(fiestel)

        return extend_list, mix_right_key_list, box_output_list, fiestel_list, left_child_list[1:], right_child_list[1:]

    def revert_ip_table(self):
        return [self.ip_table.index(index + 1) + 1 for index, _ in enumerate(self.ip_table)]

    def set_up_keys(self):
        pc1_bin = self.convert_hex_string_to_bins(self.primary_key)
        permutation_pc1_bin = self.permutation(pc1_bin, self.pc1_table)
        self.keys = self.make_keys(permutation_pc1_bin)

    def transition_code(self, message, encrypt=True):
        indexs_remember = [i for i, char in enumerate(message) if char == ' ']
        message = message.replace(' ', '')

        plaintext_to_bin = self.convert_hex_string_to_bins(message)
        permutation_plaintext_bin = self.permutation(plaintext_to_bin, self.ip_table)
        if not self.keys:
            self.set_up_keys()

        if encrypt:
            new_keys = self.keys
        else:
            new_keys = self.keys[::-1]

        extend_list, mix_right_key_list, box_output_list, fiestel_list, left_child_list, right_child_list = self.loop_for_16_times(
            permutation_plaintext_bin, new_keys)

        # result_list = pd.DataFrame(
        #     [extend_list, self.keys, mix_right_key_list, box_output_list, fiestel_list, left_child_list,
        #      right_child_list],
        #     ['E(Ri)', 'Ki', 'E(Ri) ^ Ki', 'S Box', 'f(Ri, Ki)', 'Li', 'Ri']).T
        end_bins = left_child_list[self.len_of_loop - 1] + right_child_list[self.len_of_loop - 1]
        rev_ip_table = self.revert_ip_table()
        permutation_end_bins = self.permutation(end_bins, rev_ip_table)

        result = self.convert_bins_to_string(permutation_end_bins)
        for i in range(len(indexs_remember)):
            index = indexs_remember[i]
            result = result[:index] + ' ' + result[index:]

        return result

    def encode(self, message):
        self.initializeProps()
        return self.transition_code(message)

    def decode(self, message):
        self.initializeProps()
        return self.transition_code(message, False)
