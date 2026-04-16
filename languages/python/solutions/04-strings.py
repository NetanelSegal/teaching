# s = 'tHis iS a sTrIng'.lower()
# ns = s[::2].split('') + s[1::2].upper().split('')
# print(ns)
# # for i in range(len(s)):
# #     ns += s[i] if i % 2 == 0 else s[i].upper()
#
# print(ns)


def q11():
    answer = input("Are you above 18? ").strip().lower()
    if answer == "yes":
        print("Proceed")
    else:
        print("Canceled")


# q11()

# nl = [('a',3),('b',3),()]

test_tuple = ({1},2,3,4,5,6)
print(test_tuple[0])
print(test_tuple[2:4])

test_tuple[0] = 100
