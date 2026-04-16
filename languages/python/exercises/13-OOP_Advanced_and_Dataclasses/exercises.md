# Exercises: OOP Advanced & Dataclasses

## Level 1: Beginner
1. **Simple Dataclass:** Create a `@dataclass` named `Product` with `id`, `name`, and `price`. Instantiate it and print the object.
2. **Default Values:** Modify the `Product` dataclass to have a default value for `price`.

## Level 2: Intermediate
3. **Property Decorator:** Create a `Temperature` class with a `_celsius` attribute. Use `@property` to create `fahrenheit` getters and setters.
4. **Abstract Base Classes:** Use `abc.ABC` to create an abstract `Shape` class with an abstract method `area()`. Implement `Circle` and `Square` subclasses.
5. **Class Methods:** Add a class method `from_string(data_string)` to the `Product` class that parses a string like `"1,Laptop,1000"` into a `Product` object.

## Level 3: Advanced
6. **Composition vs Inheritance:** Design a `Robot` class that uses composition (e.g., `Motor`, `Sensor`, `CPU` classes) instead of deep inheritance.
7. **Multiple Inheritance:** Create a `FlyingBoat` that inherits from both `Airplane` and `Boat`. Demonstrate how the Method Resolution Order (MRO) works.
8. **Immutable Dataclasses:** Use `@dataclass(frozen=True)` to create an immutable `Config` object and try to modify it to observe the error.
