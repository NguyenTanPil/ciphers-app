

import numpy as np

class Hill:
    def __init__(self, key):
        self.upper_unicode = 65
        self.lower_unicode = 97
        self.die = 26
        self.key = key

    def create_matrix_of_integers_from_string(self, string):
        integers = [ord(char) - (self.upper_unicode if char.isupper() else self.lower_unicode) for char in string]
        uppers = [True if char.isupper() else False for char in string]
        chars = [x for x in string]

        matrix = self.convert_matrix(integers)
        chars = self.convert_matrix(chars)
        uppers_matrix = self.convert_matrix(uppers)
        return matrix, chars, uppers_matrix

    def find_multiplicative_inverse(self, det):
        for number in range(1, det + 1):
            if (number * det) % self.die == 1:
                return number

        return 0

    def get_matrix_key(self):
        matrix_k, _ = self.create_matrix_of_integers_from_string(self.key)
        return matrix_k

    def make_key(self):
        key = self.key
        matrix_k, _, _ = self.create_matrix_of_integers_from_string(key)

        det = (matrix_k[0][0] * matrix_k[1][1] - matrix_k[0][1] * matrix_k[1][0]) % self.die
        inverse_det = self.find_multiplicative_inverse(det)

        if not inverse_det:
            # error description in client code
            error_mess = 'error_1'
            return [0], 0, error_mess
        elif np.amax([matrix_k]) > 26 and np.amin([matrix_k]) < 0:
            # error description in client code
            error_mess = 'error_2'
            # print(np.amax([matrix_k]), np.amin([matrix_k]))
            return [0], 0, error_mess
        else:
            return matrix_k, det, inverse_det

    def division_matrix(self, matrix_1, matrix_2):
        # division [1,2] * [2,2]
        first_item = (matrix_1[0] * matrix_2[0][0] + matrix_1[1] * matrix_2[1][0]) % self.die
        second_item = (matrix_1[0] * matrix_2[0][1] + matrix_1[1] * matrix_2[1][1]) % self.die

        return [first_item, second_item]

    def convert_matrix(self, matrix):
        result = []
        for i in range(0, len(matrix), 2):
            result.append([matrix[i], matrix[i + 1]])
        return result

    def reverse_matrix(self, matrix, reverse_det):
        # cof matrix
        cof_matrix = [matrix[1][1], -matrix[1][0] , -matrix[0][1], matrix[0][0]]
        cof_matrix_mod = []

        for _, value in enumerate(cof_matrix):
            cof_matrix_mod.append(value % self.die)

        cof_matrix_T = [cof_matrix_mod[0], cof_matrix_mod[2], cof_matrix_mod[1], cof_matrix_mod[3]]

        rev_matrix = []
        for _, value in enumerate(cof_matrix_T):
            rev_matrix.append((value * reverse_det) % self.die)
        
        processes_cof = [self.convert_matrix(cof_matrix), self.convert_matrix(cof_matrix_mod), self.convert_matrix(cof_matrix_T), self.convert_matrix(rev_matrix)]
        return self.convert_matrix(rev_matrix), processes_cof

    def transition_code(self, message, encrypt=True):
        # remember index of space
        indexs_remember = [i for i, x in enumerate(message) if x == ' ']
        len_init_mess = len(message)
        message = message.replace(' ', '')
        matrix_key = None

        matrix_k, _, inverse_det = self.make_key()
        
        if len(matrix_k) > 1:
            rev_matrix, processes_cof = self.reverse_matrix(matrix_k, inverse_det)
            matrix_key = matrix_k
            if encrypt:
                matrix_key = matrix_k
            else:
                matrix_key = rev_matrix
        else:
            # return message error
            return inverse_det,  0
                        
        # check and add 0 char
        len_check = len(message) % 2 == 0
        if not len_check:
            message += 'a'

        matrix_b, matrix_chars, uppers_matrix = self.create_matrix_of_integers_from_string(message)
        result = ''
        
        # show to client
        processes = {'matrix_chars': matrix_chars, 'matrix_chars_as_int': matrix_b,'inverse_det': inverse_det, 'reverse_key': processes_cof, 'steps': []}

        for index, row in enumerate(matrix_b):
            div_matrix = self.division_matrix(row, matrix_key)
            first_unicode = self.upper_unicode if uppers_matrix[index][0] else self.lower_unicode
            first_char = chr(div_matrix[0] + first_unicode)

            second_unicode = self.upper_unicode if uppers_matrix[index][1] else self.lower_unicode
            second_char = chr(div_matrix[1] + second_unicode)
            result += first_char + second_char

            processes['steps'].append({'p': row, 'k': matrix_key, 'result_as_int': div_matrix, 'result_as_char': [first_char, second_char]})

        # add space in new string
        for i in range(len(indexs_remember)):
            result = result[:indexs_remember[i]] + ' ' +  result[indexs_remember[i]:]
        
        # remove redundant char
        return result[:len_init_mess], processes

    def encode(self, message):
        return self.transition_code(message)

    def decode(self, message):
        return self.transition_code(message, False)

