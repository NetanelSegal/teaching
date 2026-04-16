# Lesson 13: Advanced OOP - Inheritance & Dataclasses

In this lesson, we move from simple objects to complex systems using inheritance, polymorphism, and modern Python shortcuts.

---

## 1. Inheritance (Reusing Logic)
Inheritance allows a "Child" class to take attributes and methods from a "Parent" class.

```python
class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal): # Dog inherits from Animal
    def speak(self): # Overriding
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow!")
```

### The `super()` function
Use `super()` to call a method from the parent class.
```python
class ElectricCar(Car):
    def __init__(self, brand, model, battery_size):
        super().__init__(brand, model) # Call Car's __init__
        self.battery_size = battery_size
```

---

## 2. Encapsulation (Private vs Public)
Python doesn't have true "private" members like Java, but we use conventions:
- `_name`: "Protected" (Please don't touch this outside the class).
- `__name`: "Private" (Name mangling makes it harder to access).

### The `@property` Decorator
Use properties to create "Getters" and "Setters" that look like normal attributes.
```python
class User:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name.upper()
```

---

## 3. Dataclasses (Python 3.7+)
If your class only stores data, use a `@dataclass`. It automatically creates `__init__`, `__repr__`, and `__eq__` for you.

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p1 = Point(10, 20)
print(p1) # Result: Point(x=10, y=20)
```

---

## 4. Composition over Inheritance
**A common senior developer rule:** Don't inherit unless you have to. Often, it's better for a class to **have** an object rather than **be** an object.
- **Inheritance:** A `Manager` **is** an `Employee`.
- **Composition:** A `Car` **has** an `Engine`.

---

## 5. Edge Cases & Pitfalls
- **Multiple Inheritance (MRO):** When a class inherits from two parents, which method runs? Python uses **Method Resolution Order**. Check it with `MyClass.mro()`.
- **Deep Inheritance Chains:** If you have 10 levels of inheritance, your code becomes impossible to debug. Keep it flat!
- **Over-using Dataclasses:** If your class has complex logic and behavior, use a standard `class` instead.

---

## 6. Summary Checklist
- [ ] Do I know when to use `super()`?
- [ ] Can I explain the benefits of `@dataclass`?
- [ ] Do I understand why Composition is often better than Inheritance?
