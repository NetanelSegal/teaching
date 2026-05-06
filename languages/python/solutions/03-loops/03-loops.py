import math


def q11():
    base = int(input("Enter base:"))
    exp = int(input("Enter exponent:"))
    res = 1
    for i in range(exp):
        res *= base

    print(f'{base}^{exp}={res}')


def q12():
    n = int(input("Check if number is a prime\nEnter a number:"))
    is_prime = True
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            is_prime = False
            break

    if is_prime:
        print(f'{n} is a prime number')
    else:
        print(f'{n} is not a prime number')


def q15():
    start = int(input("Enter start range: "))
    end = int(input("Enter end range: "))

    if start > end:
        start, end = end, start

    sum_dividors = 0
    for n in range(start, end + 1):
        for i in range(2, n):
            if n % i == 0:
                sum_dividors += i

    print(f'sum {sum_dividors}')


q15()
