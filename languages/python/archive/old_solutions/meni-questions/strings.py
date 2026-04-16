def Q1_a():
    chars = input("Enter a character: ")
    ab_count = 0
    a_count = 0
    while chars != ".":
        if chars == "a":
            a_count += 1
        elif chars == "b":
            ab_count += a_count
        chars = input("Enter a character: ")
    print(ab_count)


def Q1_b():
    chars = input("Enter a character: ")
    ab_count = 0
    a_count = 0
    while chars != ".":
        if chars == "a":
            a_count += 1
        elif chars == "c":
            a_count = 0
        elif chars == "b":
            ab_count += a_count
        chars = input("Enter a character: ")
    print(ab_count)


def Q1_c():
    chars = input("Enter a character: ")
    a_count = 0
    ac_count = 0
    acb_count = 0
    while chars != ".":
        if chars == "a":
            a_count += 1
        elif chars == "c":
            ac_count = a_count
            a_count = 0
        elif chars == "b":
            acb_count += ac_count
        chars = input("Enter a character: ")

    print(acb_count)


def Q2():
    for i in range(15):
        s = input("Enter text: ")
        if s != '' and s[0] == s[-1]:
            print(s)


def Q3():
    s1 = input("Enter text: ")
    s2 = input("Enter text: ")
    len1 = len(s1)
    len2 = len(s1)
    if len1 > len2:
        if len1 >= len2 * 2:
            print(s1)
        else:
            print(s2)
    else:
        if len2 >= len1 * 2:
            print(s2)
        else:
            print(s1)


def Q4():
    s1 = input("Enter text 1: ")
    s2 = input("Enter text 2: ")
    s1Len = len(s1)
    s2Len = len(s2)
    count = 0
    for i in range(s1Len):
        if s1[i:i + s2Len] == s2:
            count += 1
    print('count', count)


Q4()
