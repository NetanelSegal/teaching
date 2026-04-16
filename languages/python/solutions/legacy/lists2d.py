# Q1
def sum_matrix(matrix):
    total = 0
    for row in matrix:
        for num in row:
            total += num
    return total


# Q2
def find_max_in_matrix(matrix):
    if not matrix: return 0
    current_max = matrix[0][0]
    for row in matrix:
        for num in row:
            if num > current_max:
                current_max = num
    return current_max


# Q3
def get_dimensions(matrix):
    rows = len(matrix)
    if rows > 0:
        cols = len(matrix[0])
    else:
        cols = 0
    return (rows, cols)


# Q4
def sum_specific_row(matrix, row_index):
    target_row = matrix[row_index]
    total = 0
    for num in target_row:
        total += num
    return total


# Q5
def sum_specific_column(matrix, col_index):
    total = 0
    for row in matrix:
        total += row[col_index]
    return total


# Q6
def scalar_multiply(matrix, number):
    new_matrix = []
    for row in matrix:
        new_row = []
        for item in row:
            new_row.append(item * number)
        new_matrix.append(new_row)
    return new_matrix


# Q7
def is_square(matrix):
    rows = len(matrix)
    if rows == 0: return False
    cols = len(matrix[0])
    return rows == cols


# Q8
def sum_main_diagonal(matrix):
    total = 0
    for i in range(len(matrix)):
        total += matrix[i][i]
    return total


# Q9
def flatten(matrix):
    flat_list = []
    for row in matrix:
        for item in row:
            flat_list.append(item)
    return flat_list


# Q10
def transpose_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    new_matrix = []

    for i in range(cols):
        new_row = []
        for j in range(rows):
            new_row.append(matrix[j][i])
        new_matrix.append(new_row)

    return new_matrix


mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

dims = get_dimensions(mat)
print(f"Dimensions (Tuple): {dims}")

# שאר הבדיקות
print(f"Sum All: {sum_matrix(mat)}")
print(f"Flatten: {flatten(mat)}")
print(f"Transpose: {transpose_matrix(mat)}")
