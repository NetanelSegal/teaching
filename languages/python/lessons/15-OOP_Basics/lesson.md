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

**Customizing Output with `__str__`**

By default, `print(my_object)` shows something ugly like `<__main__.Player object at 0x...>`. The `__str__` method lets you control what humans see when they print an object.

```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def __str__(self):
        return f"Owner: {self.owner} | Balance: ${self.balance}"

account = BankAccount("Alice", 500)
print(account)  # Owner: Alice | Balance: $500
```

**Composition: Building Big Things from Small Things**

So far, each class holds simple data like strings and numbers. Real programs are built by **combining** objects inside other objects. This is called **composition** — a **"has-a"** relationship.

- A `Car` **has an** `Engine`.
- A `Team` **has** `Player` objects.
- A `Library` **has** `Book` objects.

Composition answers: *"What is this object made of?"* Instead of one giant class with dozens of attributes, you split responsibility across smaller, focused classes and wire them together in `__init__`.

*Bad: One bloated class doing everything*

```python
class Order:
    def __init__(self, item1_name, item1_price, item2_name, item2_price, customer_name):
        self.item1_name = item1_name
        self.item1_price = item1_price
        # ... 20 more fields for a big order
```

*Good: Compose smaller classes*

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __str__(self):
        return f"{self.name} (${self.price})"

class Customer:
    def __init__(self, name, email):
        self.name = name
        self.email = email

class Order:
    def __init__(self, customer):
        self.customer = customer      # has-a Customer
        self.items = []               # has-a list of Product objects

    def add_item(self, product):
        self.items.append(product)

    def total(self):
        return sum(item.price for item in self.items)
```

**Delegation: Let the Inner Object Do the Work**

When a class contains another object, the outer class often **delegates** — it calls methods on the inner object instead of duplicating logic.

```python
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower
        self.is_running = False

    def start(self):
        self.is_running = True
        print("Engine started.")

class Car:
    def __init__(self, brand, engine):
        self.brand = brand
        self.engine = engine    # composition

    def start(self):
        print(f"Starting the {self.brand}...")
        self.engine.start()     # delegation

v8 = Engine(450)
my_car = Car("Mustang", v8)
my_car.start()
```

**Lists of Objects + Loops**

Most real classes don't hold just one object — they manage a **collection**. You store objects in a list and use loops to search, count, or summarize.

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f'"{self.title}" by {self.author}'

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def find_by_author(self, author):
        results = []
        for book in self.books:
            if book.author == author:
                results.append(book)
        return results

    def show_all(self):
        print(f"--- {self.name} ---")
        for book in self.books:
            print(book)   # uses each Book's __str__

    def count_books(self):
        return len(self.books)
```

Common loop patterns with a list of objects:

- **Print every item**: `for obj in self.items: print(obj)`
- **Search**: loop and compare an attribute (`if book.author == name`)
- **Sum / count**: loop and accumulate (`total += item.price`)
- **Filter into a new list**: append matches inside a loop

**[EXERCISE BREAK]**

1. **The Bank Account**: Create a class `BankAccount` with attributes `owner` and `balance`. Add methods `deposit(amount)` and `withdraw(amount)`.
   - **Challenge**: Add logic to `withdraw` to prevent the balance from going below zero.
2. **The Magic String**: Implement `__str__` so that `print(my_account)` outputs: "Owner: Alice | Balance: $500".
3. **Composition Mini-Lab**: Create `Address` (street, city, zip) and `Person` (name, address). Add `relocate(new_address)` and `__str__` on `Person` that shows the full address.
4. **Team Roster**: Create `Player` (name, position) and `Team` (name, list of players). Add `add_player`, `remove_player`, and `show_roster` that loops over the roster and prints each player.

**Edge Cases & Senior Pitfalls**

- **The `self` Requirement**: Forgetting `self` as the first argument in a method is the #1 cause of `TypeError` in Python OOP. Always include it!
- **The Constructor Return**: `__init__` must always return `None`. If you try to return a string or number, Python will crash.
- **Shared Mutable Defaults**: Never write `def __init__(self, items=[]):`. The same list is reused across every instance. Use `self.items = []` inside `__init__` instead.
- **Composition Without Behavior**: Storing objects inside other objects is only half the win. Add methods on the outer class that *use* the inner objects (`total()`, `show_roster()`, `start()`), or you end up reaching through layers from outside code: `order.customer.email` everywhere.
- **Forgetting to Loop**: If you have `self.players = []`, you need a loop to print or search them. `print(self.players)` shows the raw list, not a nice roster.

**Summary Checklist**

- [ ] I can explain the difference between a Class and an Instance.
- [ ] I understand why `self` is necessary in every method.
- [ ] I can write a constructor using `__init__`.
- [ ] I can implement `__str__` so my objects print nicely.
- [ ] I can model a **has-a** relationship by storing one object inside another.
- [ ] I can delegate work from an outer class to an inner object instead of duplicating logic.
- [ ] I can store objects in a list and use loops to search, print, or calculate totals.
