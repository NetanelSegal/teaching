# Q1

'''
smaller = int(input("Enter number: "))
bigger = int(input("Enter number: "))

if bigger < smaller:
    tmp = smaller
    smaller = bigger
    bigger = tmp

result = 0

for i in range(smaller):
    result += bigger

print('result:', result)
'''

# Q2
# '''
number = int(input("Enter a number: "))
max_digit = left_index = right_index = i = 0

while number > 0:
    current_digit = number % 10
    if current_digit > max_digit:
        max_digit = current_digit
        left_index = right_index = i
    elif current_digit == max_digit:
        left_index = i
    i += 1
    number //= 10

print('max digit:', max_digit)
print('right index:', right_index)
print('left index:', left_index)
# '''

# Q3
'''
number = int(input("Enter a number: (-1 to stop): "))
max_number = second_max = 0

while number != -1:
    if number > max_number:
        second_max = max_number
        max_number = number
    elif max_number > number > second_max:
        second_max = number

    number = int(input("Enter a number: (-1 to stop): "))

print('max number', max_number)
print('second max number', second_max)
'''

# Q4
'''
number = int(input("Enter a number: (-1 to stop): "))
prev = -1
is_increasing = True

while number != -1:
    if prev >= number:
        is_increasing = False

    prev = number
    number = int(input("Enter a number: (-1 to stop): "))

print(f"The series is {'' if is_increasing else 'not '}increasing")
'''