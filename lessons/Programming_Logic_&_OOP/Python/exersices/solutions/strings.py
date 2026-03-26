# Q1
'''
first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
print(f"My name is {first_name} {last_name}")
'''

# Q2
'''
word = input("Enter a word: ")
print(len(word))
'''

# Q3
'''
sentence = input("Enter a sentence: ")
print(sentence + " " + sentence)
'''

# Q4
'''
word = input("Enter a word: ")
print(word[0], word[-1])
'''

# Q5
'''
word1 = input("Word 1: ")
word2 = input("Word 2: ")
print(word1 == word2)
'''

# Q6
'''
word = input("Enter a word: ")
count = 0

for ch in word:
    if ch == 'a' or ch == 'A':
        count += 1
        
print(count)
'''

# Q7
'''
sentence = input("Enter a word: ")
count = 0

for ch in sentence:
    if ch == ' ':
        count += 1
        
print(count)
'''

# Q8
'''
text = input("Enter text: ")

for char in text:
    if char.isdigit():
        print(char, end='')
print()
'''

# Q9
'''
text = input("Enter text: ")
for char in text:
    if char.isupper():
        print(char, end='')
print()
'''

# Q10
'''
text = input("Enter text: ")
# replace מחזירה מחרוזת חדשה, היא לא משנה את המקורית (כי מחרוזות הן immuntable)
print(text.replace(" ", ""))
'''

# Q11
'''
answer = input("Enter Yes/No: ")
# בדיקה לא תלוית רישיות
if answer.lower() == 'yes':
    print("Proceed")
else:
    print("Canceled")
'''

# Q12
'''
filename = input("Enter filename: ")
if filename.endswith(".png") or filename.endswith(".jpg"):
    print("Image file")
elif filename.endswith(".txt"):
    print("Text file")
else:
    print("Unknown")
'''

# Q13
'''
text = input("Enter text: ")
word = input("Enter word to count: ")
print(text.count(word))
'''

# Q14
'''
text = input("Enter text: ")
old_char = input("Old char: ")
new_char = input("New char: ")

if old_char in text:
    print(text.replace(old_char, new_char))
else:
    print("Char not found")
'''

# Q15
'''
sentence = input("Enter sentence: ")
# find מחזירה את האינדקס או 1- אם לא נמצא.
# נשתמש בזה כדי להדפיס הודעה מותאמת אישית
index = sentence.find("Python")
if index != -1:
    print(index)
else:
    print("Not found")
'''

# Q16
'''
word = input("Enter a word: ")
# [start:end:step] -> שימוש בצעד שלילי הופך את המחרוזת
print(word[::-1])
'''

# Q17
'''
text = input("Enter text: ")
new_text = ""
# enumerate נותן לנו גם את האינדקס וגם את התו בלולאה אחת
for i, char in enumerate(text):
    if i % 2 == 0:
        new_text += char.lower()
    else:
        new_text += char.upper()
print(new_text)
'''

# Q18
'''
sentence = input("Enter sentence: ")
words_list = sentence.split() # ברירת מחדל מפצלת לפי רווחים
print(len(words_list))
'''

# Q19
'''
text = input("Enter text for palindrome check: ")
# ניקוי המחרוזת: הסרת רווחים והמרה לקטן
clean_text = text.replace(" ", "").lower()
# השוואה בין המחרוזת הנקייה להיפוך שלה
print(clean_text == clean_text[::-1])
'''

# Q20
'''
password = input("Enter password: ")

has_letter = False
has_digit = False

# בדיקת אורך
if len(password) >= 8:
    for char in password:
        if char.isalpha():
            has_letter = True
        if char.isdigit():
            has_digit = True

    # בדיקה סופית האם כל התנאים התקיימו
    if has_letter and has_digit:
        print("Strong")
    else:
        print("Weak")
else:
    print("Weak")
'''
