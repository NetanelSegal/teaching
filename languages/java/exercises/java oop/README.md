# Java Object-Oriented Programming (OOP) Exercises

## Subject: Basic Classes and Objects

1. **Person Class**
   Write a Java program to create a class called `Person` with a `name` and `age` attribute. Create two instances of the `Person` class, set their attributes using the constructor, and print their name and age.

2. **Dog Class**
   Write a Java program to create a class called `Dog` with a private `name` and `breed` attribute. Create two instances of the `Dog` class, set their attributes using the constructor, modify the attributes using the setter methods, and print the updated values using getters.

3. **Rectangle Class (Basic)**
   Write a Java program to create a class called `Rectangle` with `width` and `height` attributes.
   Add 2 methods:
   * Calculate the area of the rectangle and return it.
   * Calculate the perimeter of the rectangle and return it.

## Subject: Geometry and Interactions

4. **Points, Rectangles, and Circles**
   * **`Point` Class:** Represents a 2D point.
     * Fields: `int x`, `int y`
     * Methods: Constructor to initialize `x` and `y`, getters and setters, `toString()` (returns `"(x,y)"`).
   * **`Rectangle` Class:** Represents a rectangle using 2 edge points.
     * Fields: `Point bottomLeft`, `Point topRight`
     * Methods: Constructor (takes 2 points), `getArea()`, `getPerimeter()`, `toString()` (returns `"Rectangle: [(x1,y1), (x2,y2)]"`).
     * Formulas: `width = topRight.x - bottomLeft.x`, `height = topRight.y - bottomLeft.y`. Area = `width * height`, Perimeter = `(width + height) * 2`.
   * **`Circle` Class:** Represents a circle by center and radius.
     * Fields: `Point center`, `int radius`
     * Methods: Constructor, `getArea()`, `getPerimeter()`, `toString()` (returns `"Circle: [(x,y), r:radius]"`).
     * Formulas: Area = `π × r²`, Perimeter = `π × r × 2`.
   * **Testing (`main`):** Create some points, a rectangle, and a circle. Print their areas and perimeters.

## Subject: Games and Advanced OOP

5. **Card Class (Card Game Foundation)**
   Implement a `Card` class representing a playing card.
   * **Fields:** 
     * `private int number` (values 2–14, where J=11, Q=12, K=13, A=14).
     * `private char shape` (one of '♠', '♥', '♦', '♣').
   * **Methods:**
     * Constructor.
     * Getters and setters.
     * `public int compare(Card other)`: Returns 1 if the current card is stronger, -1 if weaker, and 0 if they have the same value.
     * `public String toString()`: Returns a string describing the card (e.g., "Q♦", "10♠").
   * **Testing:** Create some cards, print them, and compare them.

6. **Number Guessing Game**
   Build a number guessing game.
   * **`Player` Class:** 
     * Fields: `static int idCounter`, `int id`, `String name`, `int attempts`.
     * Methods: Constructor, `incrementAttempts()`, getters.
   * **`Game` Class:**
     * Fields: `MAX_ATTEMPTS` (e.g., 25), `Player[] players`.
     * Methods: Constructor, `play()` (runs the main game loop, generates a random number 1-100, gives hints "Higher"/"Lower" per player, stops when someone guesses right), `getWinner()`.
   * **`Main` Class:** Ask for the number of players, create the players array, initialize the game, run it, and print the winner.