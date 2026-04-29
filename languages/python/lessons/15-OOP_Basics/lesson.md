# Lesson 15: OOP Basics - Thinking in Objects

**The Hook**
Imagine you're coding a video game. You have hundreds of players, enemies, and items. If you try to manage them all with just loose lists and dictionaries, your code will quickly become an unreadable "spaghetti" mess. What if you could create a custom "Template" for a Player that includes their health, name, and power, along with actions they can take like `attack()` or `heal()`? This is the core of Object-Oriented Programming (OOP)—it allows you to model the real world in your code.

**Deep Theory & Mechanics**
OOP is built on two main pillars:
1. **The Class (The Blueprint)**: The abstract definition of what an object is and what it can do. It defines the structure but holds no actual data.
2. **The Instance (The Object)**: A concrete "thing" created from the blueprint. (e.g., `Car` is the class, `your_red_toyota` is the instance).

**The Key Components**:
- **Attributes**: The "data" or "state" of the object (e.g., `color`, `speed`). These are variables attached to the object.
- **Methods**: The "actions" the object can perform (e.g., `drive()`, `brake()`). These are functions attached to the object.
- **`self`**: A reference to the *current* instance of the class. It's how the object accesses its own attributes and methods.
- **`__init__`**: The "Constructor." A special method that runs automatically the moment you create a new object. It's where you set the initial state.

**Code Examples** (Good vs. Bad)

*Bad: The Spaghetti Approach (Hard to scale and maintain)*
```python
player1_name = "Aragon"
player1_hp = 100

def heal_player(name, current_hp, amount):
    print(f"Healing {name}...")
    return current_hp + amount

player1_hp = heal_player(player1_name, player1_hp, 20)
```

*Good: The OOP Approach (Encapsulated and organized)*
```python
class Player:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

    def heal(self, amount):
        self.hp += amount
        print(f"{self.name} healed! Current HP: {self.hp}")

# Creating instances
p1 = Player("Aragon", 100)
p1.heal(20)
```

**[EXERCISE BREAK]**
1. **The Bank Account**: Create a class `BankAccount` with attributes `owner` and `balance`. Add methods `deposit(amount)` and `withdraw(amount)`.
   - **Challenge**: Add logic to `withdraw` to prevent the balance from going below zero.
2. **The Magic String**: Implement the `__str__` dunder method so that when you `print(my_account)`, it outputs a nice summary like: "Owner: Alice | Balance: $500".

**Edge Cases & Senior Pitfalls**
- **The `self` Requirement**: Forgetting `self` as the first argument in a method is the #1 cause of `TypeError` in Python OOP. Always include it!
- **Class vs. Instance Variables**: Variables defined outside `__init__` are shared by **all** instances of the class. If you put a `friends_list = []` there, and Player A adds a friend, Player B will see that friend too! Always put instance-specific data inside `__init__`.
- **The Constructor Return**: `__init__` must always return `None`. If you try to return a string or number, Python will crash.

**Summary Checklist**
- [ ] I can explain the difference between a Class and an Instance.
- [ ] I understand why `self` is necessary in every method.
- [ ] I can write a constructor using `__init__`.
- [ ] I know how to use "Dunder" methods like `__str__` to customize my objects.
