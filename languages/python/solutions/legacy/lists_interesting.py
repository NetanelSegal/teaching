# תרגיל 1: דחיסת רצפים
def compress_list(items):
    if not items: return []

    result = []
    current_char = items[0]
    count = 1

    for i in range(1, len(items)):
        if items[i] == current_char:
            count += 1
        else:
            result.append((current_char, count))
            current_char = items[i]
            count = 1

    result.append((current_char, count))
    return result


# תרגיל 2: ממוצע נע
def moving_average(numbers, window_size):
    averages = []
    if len(numbers) < window_size:
        return []

    for i in range(len(numbers) - window_size + 1):
        current_window = numbers[i: i + window_size]

        window_sum = 0
        for num in current_window:
            window_sum += num

        avg = window_sum / window_size
        averages.append(avg)

    return averages


# תרגיל 3: איקס עיגול
def check_winner(board):

    for row in board:
        if row[0] == row[1] == row[2] and row[0] != "":
            return row[0]

    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != "":
            return board[0][col]

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != "":
        return board[0][0]

    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != "":
        return board[0][2]

    return None


# תרגיל 4: חיפוש זוג (Two Sum)
def find_pair_with_sum(numbers, target):
    n = len(numbers)
    for i in range(n):
        for j in range(i + 1, n):
            if numbers[i] + numbers[j] == target:
                return (i, j)
    return None


# תרגיל 5: הזזה מעגלית
def rotate_list(my_list, k):
    if not my_list: return []
    k = k % len(my_list)

    part1 = my_list[-k:]
    part2 = my_list[:-k]

    return part1 + part2


chars = ['a', 'a', 'a', 'b', 'c', 'c']
print(f"Compress: {compress_list(chars)}")

nums = [10, 20, 30, 40, 50]
print(f"Moving Avg: {moving_average(nums, 3)}")

board = [
    ['X', 'O', 'O'],
    ['X', 'X', 'O'],
    ['O', 'O', 'X']
]
print(f"Winner: {check_winner(board)}")

print(f"Two Sum: {find_pair_with_sum([2, 7, 11, 15], 9)}")

print(f"Rotate: {rotate_list([1, 2, 3, 4, 5], 2)}")