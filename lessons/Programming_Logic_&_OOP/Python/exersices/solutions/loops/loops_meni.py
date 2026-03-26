# Q1
'''
num = int(input("Enter num: "))
while num <= 0:
    num = int(input("Enter num again: "))
else:
    print("Valid input")

div = int(input("Enter div: "))
while div == 0:
    div = int(input("Enter div again: "))
else:
    print("Valid input")

for i in range(1, num + 1):
    print(i)
    if i % div == 0:
        print(i)
'''

# Q2:
'''
number = int(input("Enter a number"))
count = 0
while number != -1:
    count += 1
    number = int(input("Enter a number"))
    
print('count of number entered:', count)
'''

# Q3 - a
'''
num = int(input("Enter number: "))
prev = -1
while num != -1:
    if num <= prev:
        print("The series is Not really increasing")
        break

    prev = num
    num = int(input("Enter another number: "))
else:
    print("The series is really increasing")
'''

# Q3 - b
'''
prev = -1
is_increasing = True

num = int(input("Enter number: "))
while num != -1:
    if num <= prev:
        is_increasing = False

    prev = num
    num = int(input("Enter another number: "))

if is_increasing:
    print("The series is really increasing")
else:
    print("The series is Not really increasing")
'''

# Q4 - a
'''
n = int(input("Enter how many numbers in the sequence: "))
prev_num_in_sequence = -1
is_increasing = True

for i in range(n):
    current_num_in_sequence = int(input(f"Enter #{i + 1} num: "))
    if current_num_in_sequence <= prev_num_in_sequence:
        is_increasing = False

    prev_num_in_sequence = current_num_in_sequence

if is_increasing:
    print("The series is really increasing")
else:
    print("The series is Not really increasing")
'''

# Q4 - b
'''
n = int(input("Enter how many numbers in the sequence: "))
prev_num_in_sequence = -1
is_increasing = True

for i in range(n):
    current_num_in_sequence = int(input(f"Enter #{i + 1} num: "))
    if current_num_in_sequence <= prev_num_in_sequence:
        is_increasing = False
        break

    prev_num_in_sequence = current_num_in_sequence

if is_increasing:
    print("The series is really increasing")
else:
    print("The series is Not really increasing")
'''

# Q5 - a
'''
number = int(input("Enter a number (-1 to stop): "))
max_number = -1
while number != -1:
    if number > max_number:
        max_number = number

    number = int(input("Enter a number (-1 to stop): "))

print(f'Max number entered is {max_number}' if max_number != -1 else 'No numbers entered')
'''

# Q5 - a
'''
number = int(input("Enter a number (-1 to stop): "))
max_number = -1
second_max_number = -1
while number != -1:
    if number > max_number:
        second_max_number = max_number
        max_number = number
    elif number > second_max_number:
        second_max_number = number

    number = int(input("Enter a number (-1 to stop): "))

if max_number == second_max_number == -1:
    print('No numbers where entered')
elif second_max_number == -1 != max_number:
    print(f'Max number entered is {max_number} and second max wasn\'t entered' )
else:
    print(f'Max number entered is {max_number} and second max is {second_max_number}')
'''

# Q6
'''
num = int(input("Enter a number: "))
max_digit = -1
max_digit_first_index = -1
max_digit_last_index = -1
count_digits = 0

while num > 0:
    current_digit = num % 10
    if current_digit > max_digit:
        max_digit = current_digit
        max_digit_last_index = max_digit_first_index = count_digits
    elif current_digit == max_digit:
        max_digit_last_index = count_digits

    count_digits += 1
    num //= 10

print(f'The max digit is {max_digit}\n'
      f'the first appearance is {max_digit_first_index}\n'
      f'and the last appearance is {max_digit_last_index}')
'''

# Q7 - a
'''
print("Convert from binary to decimal")

index = 0
result = 0
digit = int(input("Enter the first digit from the binary number: "))

while 0 <= digit <= 1:
    result += digit * 2 ** index
    digit = int(input("Enter another digit from the binary number: "))
    index += 1
    
print('result', result)
'''

# Q7 - b
'''
print("Convert from binary to decimal")

result = 0
digit = int(input("Enter the first digit from the binary number: "))

while 0 <= digit <= 1:
    result *= 2
    result += digit
    digit = int(input("Enter another digit from the binary number: "))

print('result', result)
'''

# Q8
'''
print("Lets do a multiplication using +")
small_number = int(input("Enter first number: "))
big_number = int(input("Enter second number: "))

if big_number < small_number:
    tmp = small_number
    small_number = big_number
    big_number = tmp

result = 0
for i in range(small_number):
    result += big_number

print(f'{big_number}*{small_number}={result}')'''
