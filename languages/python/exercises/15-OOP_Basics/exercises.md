# Exercises: OOP Basics (Classes & Objects)

## Level 1: Beginner
1. **Simple Person Class:** Create a class `Person` with attributes `name` and `age`. Instantiate two people and print their details.
2. **Method Creation:** Add a method `greet()` to the `Person` class that prints "Hello, my name is [name]".
3. **Bank Account:** Create a `BankAccount` class with a `balance` attribute (defaulting to 0). Add methods `deposit(amount)` and `withdraw(amount)`.

## Level 2: Intermediate
4. **Inheritance:** Create a base class `Animal` with a method `make_sound()`. Create subclasses `Dog` and `Cat` that override `make_sound()`.
5. **Private Attributes:** Create a `Car` class with a private attribute `__odometer`. Add methods to get and "increment" the odometer, but prevent direct external modification.
6. **Class vs. Instance:** Create a `Student` class with a class attribute `school_name`. Demonstrate that changing `school_name` on the class level affects all instances.

## Level 3: Advanced
7. **Dunder Methods:** In the `BankAccount` class, implement the `__str__` method to return a pretty string representation of the account balance.
8. **Equality Check:** Implement the `__eq__` method in a `Point(x, y)` class so that two points with the same coordinates are considered equal.
9. **Book Management:** Create a `Library` class that contains a list of `Book` objects. Add methods to add books, find books by author, and display all book titles.
