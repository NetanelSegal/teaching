'''
# Q1
firstname = input('Enter first name:')
lastname = input('Enter last name:')
# print(f'My name is {firstname} {lastname}')
# print('My name is', firstname, lastname)
print('My name is ' + firstname + ' ' + lastname)
'''
from subprocess import check_output

'''
# Q2
word = input('Enter first name:')
# print(f'Length: {len(word)}')
print('Length:' + str(len(word)))
'''

'''
# Q3
sentence = input('Enter a sentence:')
print(sentence, sentence)
'''

'''
# Q4
word = input('Enter a word:')
print(word[0], word[-1])
'''

'''
# Q5
w1 = input('Enter a word')
w2 = input('Enter a second word')
print(w1 == w2)
'''

'''
# Q6
word = input("Enter a word: ")
count_a = 0
for ch in word:
    if ch.lower() == 'a':
        count_a += 1
print('a\'s count:', count_a)
'''

'''
# Q7
sentence = input('Enter a sentence: ')
count = 0
for ch in sentence:
    if ch == ' ':
        count += 1
print(count)
'''

'''
# Q8
sentence = input('Enter a sentence: ')
for ch in sentence:
    if ch.isdigit():
        print(ch, end='')
'''

'''
# Q9
sentence = input('Enter a sentence: ')
for ch in sentence:
    if ch.isupper():
        print(ch, end='')
'''

'''
# Q10
text = input('Enter text: ')
new_text = ''
for ch in text:
    if ch != ' ':
        new_text += ch

# new_text = text.replace(' ', '')
print(new_text)
'''

'''
# Q11
user_choise = input('Do you want to continue? (enter yes to continue): ')
if user_choise.strip().lower() == 'yes':
    print('Proceed')
else:
    print('Canceled')
'''

'''
# Q12
file_name = input('Enter file name: ').strip().lower()
dot_index = -1
i = 0
for i in range(len(file_name)):
    if file_name[i] == '.':
        dot_index = i

file_ext = file_name[dot_index + 1:]

# dot_index = file_name.rindex('.')
# file_ext = file_name[dot_index + 1:]

print(file_ext)
if file_ext == 'png' or file_ext == 'jpg':
    print('Image file')
elif file_ext == 'txt':
    print('Text file')
else:
    print('Unknown')

# filename = input("Enter filename: ")
# if filename.endswith(".png") or filename.endswith(".jpg"):
#     print("Image file")
# elif filename.endswith(".txt"):
#     print("Text file")
# else:
#     print("Unknown")
'''

'''
# 13
text = input("Enter text: ")
word = input("Enter word to count: ")
print("Count:", text.count(word))
'''

'''
# 14
text = input("Enter text: ")
old = input("Old char: ")
new = input("New char: ")
if old in text:
    print(text.replace(old, new))
else:
    print("Char not found")
'''

'''
# 15
text = input("Enter text: ")
pos = text.find("Python")
if pos == -1:
    print("Not found")
else:
    print("Found at:", pos)
'''

'''
# 16
word = input("Enter a word: ")
print("Reversed:", word[::-1])
'''

'''
# 17
text = input("Enter text: ")
result = ""
for i in range(len(text)):
    if i % 2 == 1:
        result += text[i].upper()
    else:
        result += text[i].lower()
print(result)
'''

'''
# 18
sentence = input("Enter sentence: ").strip()
words = sentence.split()
print("Word count:", len(words))
'''

'''
# 19
text = input("Enter text: ").strip().lower()
if text == text[::-1]:
    print("Palindrome")
else:
    print("Not palindrome")
'''

'''
# 20
password = input("Enter password: ")
length = len(password)

has_letter = False
has_digit  = False

for ch in password:
    if ch.isalpha():
        has_letter = True
    elif ch.isdigit():
        has_digit = True
    if has_letter and has_digit:
        break

if length >= 8 and has_letter and has_digit:
    print("Strong")
else:
    print("Weak")
'''

