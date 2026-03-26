'''
# Q3
n = int(input("Enter base: "))
k = int(input("Enter exponent: "))
res = 1
for i in range(k):
    res *= n
print(res)
'''

'''
# Q5

for i in range(1, 1000):
    units = i % 10
    tens = i // 10 % 10
    hundreds = i // 100
    sum_digits = units + tens + hundreds
    if i % sum_digits == 0:
        print(f'the number {i} is divisible by {sum_digits}')
'''