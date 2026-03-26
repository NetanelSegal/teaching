# Q1
'''
num = int(input("Enter number: "))
if num < 0:
    print("The number is negative")
elif num > 0:
    print("The number is positive")
else:
    print("The number is zero")
'''
# Q2:
'''
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")
'''
# Q3
'''
age = int(input("Enter your age: "))
if age > 16:
    print("You can enter")
else:
    print("You are too young")
'''
# Q4
'''
n1 = float(input("Enter a number: "))
n2 = float(input("Enter a second number: "))
avg = (n1 + n2) / 2
print(f'The average is {avg}')
'''
# Q5
# '''
n1 = int(input("Enter 1st number: "))
n2 = int(input("Enter 2nd number: "))
n3 = int(input("Enter 3rd number: "))
if n1 > n2 and n1 > n3:
    if n2 > n3:
        print(n1, n2, n3)
    else:
        print(n1, n3, n2)
    # print("The biggest number is ", n1)
elif n2 > n1 and n2 > n3:
    if n1 > n3:
        print(n2, n1, n3)
    else:
        print(n2, n3, n1)
    # print("The biggest number is ", n2)
else:
    if n1 > n2:
        print(n3, n1, n2)
    else:
        print(n3, n2, n1)
    # print("The biggest number is ", n3)
# '''
'''
# Q6
grade = int(input("Enter grade: "))
if grade >= 90:
    print("Excellent")
elif grade >= 60:
    print("Passed")
else:
    print("Failed")
'''

'''
# Q7
r = float(input("Enter grade: "))
s = 3.14 * r **2
if s > 100:
    print("Big circle")
else:
    print("Small circle")
'''

'''
# Q8
time = int(input("Enter time in minutes: "))
h = time // 60
m = time % 60
if h > 1:
    print("more than an hour")
else:
    print("less than an hour")
print(f'{h}:{m}')
'''

'''
# Q9
time = int(input("Enter time in minutes: "))
h = time // 60
m = time % 60
if h > 1:
    print("more than an hour")
else:
    print("less than an hour")
print(f'{h}:{m}')
'''

# didHW = True
# arrivedOnTime = True
# interuptClass = False
# print(5)
# print(5.7)
# print(didHW and arrivedOnTime and not interuptClass)
# if didHW and arrivedOnTime and not interuptClass:
#     print("You can enter the class")
