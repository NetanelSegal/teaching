# Lesson 12: OOP Basics - Thinking in Objects

Object-Oriented Programming (OOP) is a paradigm that organizes code into **Objects** which combine data (Attributes) and actions (Methods).

---

## 1. The Class (The Blueprint)
A class is the definition. An **Instance** is the actual object created from that class.

```python
class Car:
    # The Constructor
    def __init__(self, brand, model):
        self.brand = brand   # Attribute
        self.model = model   # Attribute
        self.mileage = 0

    # A Method (Action)
    def drive(self, miles):
        self.mileage += miles
        print(f"The {self.brand} drove {miles} miles.")

# Creating an Instance
my_car = Car("Toyota", "Corolla")
my_car.drive(50)
```

---

## 2. The `self` Keyword
`self` represents the specific instance of the object. It allows methods to access and modify the object's own attributes.

---

## 3. Instance vs Class Attributes
- **Instance Attributes:** Unique to each object (e.g., a car's color).
- **Class Attributes:** Shared by ALL instances of the class.

```python
class Employee:
    company = "TechCorp" # Class Attribute

    def __init__(self, name):
        self.name = name # Instance Attribute
```

---

## 4. Dunder Methods (Magic Methods)
Dunder (Double Under) methods allow your objects to work with built-in Python features.
- `__str__`: Controls what happens when you `print(obj)`.
- `__len__`: Controls what happens when you call `len(obj)`.

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"'{self.title}' ({self.pages} pages)"

my_book = Book("Python 101", 300)
print(my_book) # Result: 'Python 101' (300 pages)
```

---

## 5. Edge Cases & Pitfalls
- **Forgetting `self`:** If you define `def drive(miles):` without `self` as the first argument, Python will throw an error when you call it.
- **Direct Attribute Access:** While Python allows `car.mileage = -100`, it's better to use methods to protect your data.
- **The Init Mistake:** Trying to return a value from `__init__`. The constructor MUST return `None`.

---

## 6. Summary Checklist
- [ ] Can I explain the difference between a Class and an Instance?
- [ ] Do I know what `self` does?
- [ ] Have I implemented a `__str__` method in my class?
