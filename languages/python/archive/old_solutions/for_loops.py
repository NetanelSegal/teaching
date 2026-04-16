# # 1
# for i in range(1, 11):
#     print(i)
#
# # 2
# for i in range(10, 0, -1):
#     print(i)
#
# # 3
# for i in range(2, 21, 2):
#     print(i)
#
# # 4
# for i in range(1, 11):
#     print(i, i**2)
#
# # 5
# for i in range(5, 51, 5):
#     print(i)
#
# # 6
# total = 0
# for i in range(1, 101):
#     total += i
# print(total)
#
# # 7
# s = 0
# for i in range(1, 11):
#     s += i
# print(s / 10)
#
# # 8
# s = 0
# for i in range(2, 101, 2):
#     s += i
# print(s)
#
# # 9
# count = 0
# for i in range(1, 101):
#     if i % 3 == 0 or i % 5 == 0:
#         count += 1
# print(count)
#
# # 10
# n = int(input('Enter n: '))
# f = 1
# for i in range(1, n + 1):
#     f *= i
# print(f)
#
# # 11
# base = int(input('base: '))
# power = int(input('power: '))
# res = 1
# for i in range(power):
#     res *= base
# print(res)
#
# # 12
# n = int(input('Enter number: '))
# prime = True
# if n < 2:
#     prime = False
# else:
#     for i in range(2, int(n**0.5) + 1):
#         if n % i == 0:
#             prime = False
#             break
# print('Prime' if prime else 'Not prime')
#
# # 13
# n = int(input('Enter number: '))
# sum_div = 0
# for i in range(1, n):
#     if n % i == 0:
#         sum_div += i
# print('Perfect' if sum_div == n else 'Not perfect')
#
# # 14
# start = int(input('Start: '))
# end = int(input('End: '))
# s = 0
# for i in range(start, end + 1):
#     s += i
#
# print(s)
