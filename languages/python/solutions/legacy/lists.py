# Q1
def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# Q2
def calculate_average(numbers):
    if len(numbers) == 0: return 0
    return sum_list(numbers) / len(numbers)

# Q3
def find_max(numbers):
    if not numbers: return None
    current_max = numbers[0]
    for num in numbers:
        if num > current_max:
            current_max = num
    return current_max

# Q4
def filter_evens(numbers):
    evens = []
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
    return evens

# Q5
def count_occurrences(my_list, target):
    count = 0
    for item in my_list:
        if item == target:
            count += 1
    return count

# Q6
def get_word_lengths(words):
    lengths = []
    for word in words:
        lengths.append(len(word))
    return lengths

# Q7
def contains_item(my_list, value):
    for item in my_list:
        if item == value:
            return True
    return False


# Q8
def reverse_list(original_list):
    reversed_list = []
    for item in original_list:
        reversed_list.insert(0, item)
    return reversed_list


# Q9
def remove_duplicates(my_list):
    unique_list = []
    for item in my_list:
        if item not in unique_list:
            unique_list.append(item)
    return unique_list


# Q10
def find_common_elements(list1, list2):
    common = []
    for item in list1:
        if item in list2 and item not in common:
            common.append(item)
    return common


# Q11
def is_sorted(numbers):
    for i in range(len(numbers) - 1):
        if numbers[i] > numbers[i + 1]:
            return False
    return True


# Q12
def flatten_matrix(matrix):
    flat_list = []
    for sublist in matrix:
        for item in sublist:
            flat_list.append(item)
    return flat_list


nums = [1, 2, 3, 2, 1, 4]
list_a = [10, 20, 30, 40]
list_b = [30, 40, 50, 60]
unsorted = [1, 5, 2, 8]
sorted_list = [1, 2, 3, 4]
matrix = [[1, 2, 3], [4, 5], [6]]

print("--- בדיקות בסיסיות ---")
print(f"Max: {find_max(nums)}")  # 4
print(f"Evens: {filter_evens(nums)}")  # [2, 2, 4]

print("\n--- בדיקות אתגר ---")
print(f"Unique: {remove_duplicates(nums)}")  # [1, 2, 3, 4]
print(f"Common: {find_common_elements(list_a, list_b)}")  # [30, 40]
print(f"Is sorted (unsorted): {is_sorted(unsorted)}")  # False
print(f"Is sorted (sorted): {is_sorted(sorted_list)}")  # True
print(f"Flattened: {flatten_matrix(matrix)}")  # [1, 2, 3, 4, 5, 6]
