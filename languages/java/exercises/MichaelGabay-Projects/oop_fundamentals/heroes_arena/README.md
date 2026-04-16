# Heroes Arena Game - OOP Assignment ⚔️

Welcome to the Heroes Arena project! In this assignment, you will build a turn-based combat game using Object-Oriented Programming concepts in Java. You'll practice abstract classes, inheritance, interfaces, encapsulation, and polymorphism.

## 🎯 Objectives

By completing this project, you will:

1. Create and use **abstract classes**
2. Implement **inheritance** with subclasses
3. Work with **interfaces**
4. Practice **encapsulation** with access modifiers
5. Understand **polymorphism** through method overriding
6. Organize code using **packages**

---

## 📂 Project Structure

Your project should be organized as follows:

```
heroes_arena/
├── README.md
└── src/
   ├── Main.java
   ├── Weapon.java
   ├── GameCharacter.java
   ├── Healable.java
   ├── Warrior.java
   ├── Mage.java
   └── Arena.java
```

**Important:** All your Java files should have the package declaration:

```java
package oop_fundamentals.heroes_arena;
```

---

## 📝 Step-by-Step Instructions

### Step 1: Create the Weapon Class

Create a `Weapon.java` file that represents weapons in the game.

**The Task:**

1. Create a class called `Weapon`.
2. Add two **private** fields: `name` (String) and `damage` (int).
3. Create a constructor that takes `name` and `damage` as parameters and initializes the fields.
4. Create getter methods: `getDamage()` and `getName()` to access the private fields.

> **Hint:** This demonstrates **encapsulation** - the fields are private, but accessible through public getters.

---

### Step 2: Create the Healable Interface

Create an interface that defines the ability to heal.

**The Task:**

1. Create an interface called `Healable`.
2. Add one method declaration: `void heal()` (no implementation, just the method signature).

> **Hint:** Interfaces define a contract - any class that implements this interface must provide a `heal()` method.

---

### Step 3: Create the Abstract GameCharacter Class

Create an abstract base class for all game characters.

**The Task:**

1. Create an **abstract** class called `GameCharacter`.
2. Add the following fields:
   - `protected String name`
   - `private int hp` (health points)
   - `protected int power`
   - `protected Weapon weapon`
3. Create a constructor that takes `name`, `hp`, `power`, and `weapon` as parameters.
4. Create getter and setter for `hp`:
   - `getHp()` - returns the current HP
   - `setHp(int hp)` - sets HP, but ensure it never goes below 0 (use `Math.max(0, hp)`)
5. Create a method `isAlive()` that returns `true` if HP is greater than 0.
6. Create an **abstract** method: `public abstract void attack(GameCharacter target);`
7. Override the `toString()` method to return: `name + " (HP: " + hp + ")"`

> **Hint:** Abstract classes cannot be instantiated. They provide a template for subclasses. The `attack()` method must be implemented by any class that extends `GameCharacter`.

---

### Step 4: Create the Warrior Class

Create a concrete class that extends `GameCharacter`.

**The Task:**

1. Create a class called `Warrior` that **extends** `GameCharacter`.
2. Create a constructor that takes `name` and `weapon` as parameters.
3. In the constructor, call `super()` with: `name`, `150` (HP), `10` (power), and `weapon`.
4. **Override** the `attack()` method:
   - Calculate total damage: `power + weapon.getDamage()`
   - Print: `"[name] swings [weapon name] with fury!"`
   - Reduce the target's HP: `target.setHp(target.getHp() - totalDamage)`
   - Print: `"   > Dealt [damage] damage to [target name]"`

> **Hint:** Use `super()` to call the parent class constructor. Use `this.power` and `this.weapon` to access inherited fields.

---

### Step 5: Create the Mage Class

Create a class that extends `GameCharacter` and implements `Healable`.

**The Task:**

1. Create a class called `Mage` that **extends** `GameCharacter` and **implements** `Healable`.
2. Import `java.util.Random` at the top of the file.
3. Create a constructor that takes `name` and `weapon` as parameters.
4. In the constructor, call `super()` with: `name`, `100` (HP), `20` (power), and `weapon`.
5. **Override** the `attack()` method with special logic:
   - Create a `Random` object
   - Generate a random number between 0-99
   - If the number is less than 20: print "[name] tried to cast a spell but slipped!" and return (no damage)
   - Else if the number is greater than 80: calculate damage as `(power + weapon.getDamage()) * 2` and print "✨ CRITICAL HIT! [name] blasts generic magic!"
   - Otherwise: calculate normal damage as `power + weapon.getDamage()` and print "[name] casts a fireball with [weapon name]"
   - Reduce target's HP and print the damage dealt
6. **Implement** the `heal()` method from the `Healable` interface:
   - Generate a random heal amount between 15-24 (use `rand.nextInt(10) + 15`)
   - Increase the Mage's HP: `this.setHp(this.getHp() + healAmount)`
   - Print: "💚 [name] used a healing potion! (+ [healAmount] HP)"

> **Hint:** A class can extend one class AND implement one or more interfaces. Use `Random` for the chance-based mechanics.

---

### Step 6: Create the Arena Class

Create a class that manages the battle between two characters.

**The Task:**

1. Create a class called `Arena`.
2. Create a **static** method `startDuel(GameCharacter p1, GameCharacter p2)`:
   - Print a battle start message with both character names
   - Initialize a `round` variable to 1
   - Create a `while` loop that continues while both characters are alive (`p1.isAlive() && p2.isAlive()`)
   - Inside the loop:
     - Print the round number and both characters' status
     - Call `performTurn(p1, p2)` to have player 1 attack
     - If player 2 is not alive, break out of the loop
     - Call `performTurn(p2, p1)` to have player 2 attack
     - Increment the round counter
     - Add a delay: `Thread.sleep(1000)` (wrap in try-catch)
   - After the loop, print the winner
3. Create a **private static** method `performTurn(GameCharacter attacker, GameCharacter defender)`:
   - Check if the attacker implements `Healable` AND has HP less than 30
   - If true: cast to `Healable`, call `heal()`, and print a low health warning
   - Otherwise: call `attacker.attack(defender)`

> **Hint:** Use `instanceof` to check if an object implements an interface. Use casting `(Healable) attacker` to access interface methods.

---

### Step 7: Create the Main Class

Create the entry point that starts the game.

**The Task:**

1. Create a `public class Main` with a `main` method.
2. Create two `Weapon` objects:
   - A sword named "Excalibur" with 10 damage
   - A staff named "Ancient Staff" with 10 damage
3. Create a `Warrior` named "Conan" with the sword.
4. Create a `Mage` named "Saruman" with the staff.
5. Call `Arena.startDuel()` with both characters.

> **Hint:** Use polymorphism - declare variables as `GameCharacter` type, but instantiate as `Warrior` or `Mage`.

---

## 🚀 How to Compile and Run

1. **Navigate to the project directory:**

   ```bash
   cd java/oop_fundamentals/heroes_arena
   ```

2. **Compile all Java files:**

   ```bash
   javac src/oop_fundamentals/heroes_arena/*.java
   ```

3. **Run the game:**
   ```bash
   java -cp src oop_fundamentals.heroes_arena.Main
   ```

### Using an IDE

- **IntelliJ IDEA / Eclipse**:
  - Open the `heroes_arena` folder as the project root
  - Mark `src` as the source root
  - Right-click `Main.java` → Run
- **VS Code**:
  - Install Java extensions
  - Open the `heroes_arena` folder
  - Click "Run" above the `main` method

---

## 💡 Tips for Success

- **Start Simple**: Build one class at a time and test it before moving to the next
- **Use the Hints**: Each step includes hints to guide you
- **Test Frequently**: Compile and test after each step to catch errors early
- **Understand the Concepts**: Don't just copy code - understand why each part is needed
- **Read Error Messages**: Java error messages tell you exactly what's wrong
- **Package Declaration**: Don't forget `package oop_fundamentals.heroes_arena;` at the top of each file

---

## 🎓 Concepts You're Learning

- **Abstract Classes**: `GameCharacter` cannot be instantiated - it's a template
- **Inheritance**: `Warrior` and `Mage` inherit from `GameCharacter`
- **Interfaces**: `Healable` defines a contract that `Mage` implements
- **Encapsulation**: `Weapon` uses private fields with public getters
- **Polymorphism**: `GameCharacter` references can point to `Warrior` or `Mage` objects
- **Method Overriding**: Each subclass provides its own `attack()` implementation

---

## 🚀 Bonus Challenges (Optional)

If you finish early, try these extensions:

1. **Add More Character Types**: Create an `Archer` or `Rogue` class
2. **Add Status Effects**: Implement poison, burn, or freeze mechanics
3. **Add More Weapons**: Create different weapon types with special abilities
4. **User Input**: Let players choose their characters and weapons
5. **Save/Load**: Save character stats to a file

---

## ✅ Checklist

Use this to track your progress:

- [ ] Created `Weapon` class with encapsulation
- [ ] Created `Healable` interface
- [ ] Created abstract `GameCharacter` class
- [ ] Created `Warrior` class extending `GameCharacter`
- [ ] Created `Mage` class extending `GameCharacter` and implementing `Healable`
- [ ] Created `Arena` class with battle logic
- [ ] Created `Main` class to start the game
- [ ] Successfully compiled all files
- [ ] Successfully ran the game and saw the battle

---

Good luck! 🍀

Remember: This project teaches core OOP concepts. Take your time with each step and make sure you understand each concept before moving forward. If you get stuck, review the Java Learning Path README for detailed explanations of these concepts.
