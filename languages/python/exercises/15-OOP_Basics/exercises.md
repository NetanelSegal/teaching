# Exercises: OOP Basics (Classes & Objects)

## Level 1: Beginner
1. **Simple Person Class:** Create a class `Person` with attributes `name` and `age`. Instantiate two people and print their details.
2. **Method Creation:** Add a method `greet()` to the `Person` class that prints "Hello, my name is [name]".
3. **Bank Account:** Create a `BankAccount` class with attributes `owner` and `balance` (defaulting to 0). Add methods `deposit(amount)` and `withdraw(amount)`. Prevent withdrawals that would drop the balance below zero.

## Level 2: Intermediate
4. **`__str__` Method:** Add `__str__` to `BankAccount` so `print(account)` shows `"Owner: Alice | Balance: $500"`.
5. **Address Composition:** Create an `Address` class (`street`, `city`, `zip_code`) and a `Person` class that **has an** `Address`. Add `relocate(new_address)` and `__str__` on `Person` that prints name and full address.
6. **Engine & Car:** Create an `Engine` class (`horsepower`, `start()`, `stop()`) and a `Car` class that **has an** `Engine`. The car's `drive()` method should start the engine and print how far it drove.
7. **Book `__str__`:** Create a `Book` class (`title`, `author`, `pages`) with `__str__` that returns a readable one-line summary.

## Level 3: Advanced — Lists, Loops & Composition
8. **Book Management:** Create a `Library` class that holds a list of `Book` objects. Add methods to add a book, find books by author (loop + filter), and `show_all()` that prints every title.
9. **Team Roster:** Build `Player` (name, jersey number, position) and `Team` (name, coach, roster list). Implement `add_player`, `remove_player(name)`, `find_by_position` (loop + filter), and `show_roster` (loop + print).
10. **Shopping Cart:** Create `Product` (name, price), `CartItem` (product, quantity), and `ShoppingCart` (list of items). Add `add_product`, `remove_product`, `total_price` (loop + sum), and `item_count`.

## Level 4: Bigger Projects
11. **School Management System**
    - **Classes:** `Teacher` (name, subject), `Student` (name, grade), `Classroom` (subject, teacher, list of students).
    - **Requirements:**
      - Enroll and unenroll students in a classroom.
      - Prevent enrolling the same student twice.
      - `class_summary()` prints teacher name, subject, and student count.
      - `honor_roll()` loops over students and returns those with grade >= 90.
    - **Stretch:** Add a `School` class that owns multiple `Classroom` objects and can search for a student by name across all classes.

12. **RPG Party Builder**
    - **Classes:** `Weapon` (name, damage), `Armor` (name, defense), `Character` (name, hp, weapon, armor), `Party` (name, list of characters).
    - **Requirements:**
      - `Character.attack()` returns weapon damage.
      - `Character.defend(incoming_damage)` subtracts armor defense from damage, then reduces hp (minimum 0).
      - `Party.add_member`, `Party.remove_member`, `Party.total_attack_power` (loop + sum).
      - `Party.weakest_member()` loops and returns the character with the lowest hp.
    - **Stretch:** Simulate combat where each party member attacks a `Monster(hp, armor)` in a loop until the monster is defeated or every character has 0 hp.

13. **Restaurant Order System**
    - **Classes:** `MenuItem` (name, price, category), `OrderLine` (menu_item, quantity), `Order` (table_number, lines), `Restaurant` (name, menu list).
    - **Requirements:**
      - Add and remove items from an order.
      - `Order.subtotal()`, `Order.tax(rate)`, and `Order.total(rate)` using loops over line items.
      - `Restaurant.most_popular_category(orders)` — loop over all orders and line items to find the most-ordered category.
    - **Stretch:** Implement `Order.apply_discount(percent)` and ensure totals never go below zero.

14. **Library Card Catalog (Mini Capstone)**
    - **Classes:** `Author` (name), `Book` (title, author, isbn, is_available), `Member` (name, member_id, borrowed_books list), `Library`.
    - **Requirements:**
      - `Library.add_book`, `Library.register_member`.
      - `Library.checkout(member, isbn)` — fail if the book is unavailable or the member already has 3 books.
      - `Library.return_book(member, isbn)` — mark book available and remove from member's list.
      - `Library.search_by_author(author_name)` — loop over books and return matches.
      - Implement `__str__` on `Book` and `Member` for readable output.
    - **Goal:** Practice composition (objects inside objects, lists of objects) and loop-based search logic in one cohesive system.
