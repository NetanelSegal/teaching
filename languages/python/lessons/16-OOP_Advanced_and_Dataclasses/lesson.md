# Lesson 16: Advanced OOP & Dataclasses - Building Scalable Systems

**The Hook**
Imagine you're building a video game with 100 different types of monsters. Each monster has health, a position, and a name. If you write the same health-reduction logic 100 times, you’ll spend your life fixing bugs in 100 places. Advanced Object-Oriented Programming (OOP) is about "Don't Repeat Yourself" (DRY). It’s the difference between a chaotic pile of bricks and a modular, architectural blueprint that can scale to millions of lines of code.

**Deep Theory & Mechanics**
- **Inheritance vs. Composition:** Inheritance is an "is-a" relationship (A `Warrior` is a `Player`). Composition is a "has-a" relationship (A `Player` has a `Weapon`). Senior devs prefer composition because it’s more flexible.
- **Method Resolution Order (MRO):** When you use multiple inheritance, Python needs to know which parent's method to call first. It follows the C3 Linearization algorithm.
- **The Power of `super()`:** It’s not just for `__init__`. It allows you to delegate work to parent classes without explicitly naming them, making your code resilient to refactoring.
- **Dataclasses:** Introduced in Python 3.7, these are "code generators." They handle the "boilerplate" (the boring, repetitive parts) like `__init__`, `__repr__`, and `__eq__` automatically, letting you focus on data.

**Code Examples**

### Good: Clean Inheritance and Dataclasses
```python
from dataclasses import dataclass, field

@dataclass
class Entity:
    name: str
    hp: int = 100

    def take_damage(self, amount: int):
        self.hp -= amount
        print(f"{self.name} took {amount} damage!")

@dataclass
class Boss(Entity):
    # boss_id is generated uniquely
    boss_id: int = 0 
    abilities: list = field(default_factory=list)

    def take_damage(self, amount: int):
        # Using super() to keep the core logic
        super().take_damage(amount // 2) 
        print(f"Boss {self.name} shrugs off half the damage.")
```

### Bad: Manual Boilerplate & Rigid Inheritance
```python
class OldSchoolEntity:
    def __init__(self, name, hp=100):
        self.name = name
        self.hp = hp
    
    def __repr__(self):
        return f"Entity(name='{self.name}', hp={self.hp})"
    
    def __eq__(self, other):
        if not isinstance(other, OldSchoolEntity):
            return False
        return self.name == other.name and self.hp == other.hp

# This is fragile, verbose, and hard to maintain!
```

**[EXERCISE BREAK]**
1. Create a `@dataclass` called `Product` with `name`, `price`, and `quantity`.
2. Implement a method `total_value` that returns `price * quantity`.
3. Create a subclass `DigitalProduct` that adds a `download_link` and overrides `total_value` to always return the price (since quantity is infinite).

**Edge Cases & Senior Pitfalls**
- **The "God Object" Problem:** Don't inherit everything from one giant base class. It makes the system rigid.
- **Mutable Defaults in Dataclasses:** Never use `abilities: list = []`. Dataclasses will share that list across ALL instances. Use `field(default_factory=list)`.
- **MRO Confusion:** In multiple inheritance, the order matters: `class C(A, B)` is different from `class C(B, A)`. Use `C.mro()` to debug.

**Summary Checklist**
- [ ] Do I use `@dataclass` for classes that primarily store state?
- [ ] Am I using `super()` instead of hardcoding parent class names?
- [ ] Have I considered if "Composition" (having an object) is better than "Inheritance" (being an object)?
- [ ] Do I understand why `default_factory` is necessary for lists/dicts in dataclasses?
