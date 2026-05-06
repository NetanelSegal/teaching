from typing import SupportsIndex


def compress_list(l: list[str]) -> list[tuple[str, int]]:
    prev_item = l[0]
    count = 0
    res_l = []
    for item in l:
        if item != prev_item:
            res_l.append((prev_item, count))
            count = 1
            prev_item = item
        else:
            count += 1

    res_l.append((prev_item, count))
    return res_l


def q1():
    l = ['a', 'a', 'a', 'b', 'b', 'b', 'b']
    print(compress_list(l))


def moving_average(numbers: list[int], window: int) -> list[int]:
    res_list = []
    for i in range(len(numbers) - window + 1):
        average = sum(numbers[i: i + window]) / window
        res_list.append(average)

    return res_list


def q2():
    l = [10, 20, 30, 40, 50, 60]
    print(moving_average(l, 3))


def q3():
    mat = []
    for i in range(10):
        mat.append(i)

    mat = ["a" * i for i in range(10)]  # list comprehension

    print(mat)


def check_tiktaktoe(board: list[list[str]]) -> str | None:
    winner_digl = board[0][0]
    winner_digr = board[0][2]

    for i in range(3):
        winner_row = board[i][0]
        winner_col = board[0][i]

        for j in range(3):
            if board[i][j] == '' or board[i][j] != winner_row:
                winner_row = None

            if board[j][i] == '' or board[j][i] != winner_col:
                winner_col = None

        if winner_row is not None:
            return winner_row

        elif winner_col is not None:
            return winner_col

        if board[i][i] == '' or board[i][i] != winner_digl:
            winner_digl = None

        if board[i][2 - i] == '' or board[i][2 - i] != winner_digr:
            winner_digr = None

    if winner_digr is not None:
        return winner_digr
    elif winner_digl is not None:
        return winner_digl

    return None


def q4():
    board = [['o', 'x', 'o'],
             ['x', 'x', 'o'],
             ['o', 'o', 'x']]
    print(check_tiktaktoe(board))


print(help(dict))


def two_sum(l: list[int], target: int) -> tuple[int, int] | None:
    seen_numbers = {}

    for i, n in enumerate(l):
        compliment = target - n
        if compliment in seen_numbers:
            return i, seen_numbers.get(compliment)

        seen_numbers[n] = i

    return None


def q5():
    l = [2, 3, 5, 10, 7]
    target = 12
    print(two_sum(l, target))


q5()
