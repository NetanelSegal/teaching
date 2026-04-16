# Function Exercises

This folder contains exercises for working with functions (methods) in Java and C.

## Java Methods
### Level 1: Basic Void Methods
1. **Welcome**: Write a method `welcome()` that prints "Welcome to methods in Java!". Call it twice from `main`.
2. **Greet**: Write a method `greet(String name)` that prints "Hello [name]!". Call it with three different names.
3. **Full Name**: Write a method `fullName(String first, String last)` that prints the full name with a space.

### Level 2: Return Values
4. **Sum**: `int sum(int a, int b)` returns the sum of two integers.
5. **Rectangle Area**: `int rectangleArea(int length, int width)` returns the area.
6. **Max**: `int max(int a, int b)` returns the larger of two numbers.
7. **Is Even**: `boolean isEven(int num)` returns true if even.
8. **Average**: `double avg(int a, int b)` returns the average as a double.
9. **VAT Calculator**: `double withVat(double price, double vatPercent)` returns the final price.

### Level 3: Logic
10. **Grade Status**: `String gradeStatus(int grade)` returns "Excellent" (90+), "Passed" (60-89), or "Failed" (<60).

### Level 4: Loops in Functions
11. **Power**: `int power(int base, int exponent)` calculates $base^{exponent}$ using a loop.
12. **Factorial**: `int factorial(int n)` calculates $n!$.
13. **Product Range**: `long productRange(int a, int b)` returns the product of all numbers from $a$ to $b$.

### Level 5: Method Composition
14. **Compare Rectangles**: `String compareRectangles(int l1, int w1, int l2, int w2)` uses `rectangleArea` to compare two rectangles.
15. **Sum of Squares**: `int sumOfSquares(int n)` uses a `square(int x)` helper method.
16. **Prime Check**: `boolean isPrime(int n)` uses a `isDivisible(int a, int b)` helper method.

## C Functions
17. **Max Digit Sum**: Find the number in range $[left, right]$ that has the maximum sum of its digits.
18. **Digit Parity**: Check if a number has more even digits than odd digits.
19. **Reverse Digits**: `unsigned long reverse(unsigned int x)` returns the number with digits reversed.
20. **Merge Digits**: `unsigned long merge(unsigned int a, unsigned int b)` merges digits of `a` and `b` alternately (e.g., `12, 34 -> 1324`).
21. **Kaprekar Property**: Find 4-digit numbers $ABCD$ such that $(AB + CD)^2 = ABCD$.
22. **Ring Area**: Calculate the area of a ring formed by two concentric circles.
23. **Temperature Conversion**: Implement Celsius to Fahrenheit and vice versa.
24. **Armstrong Numbers**: Find all 3-digit numbers that are equal to the sum of the cubes of their digits.
25. **ID Validation**: Implement the algorithm to validate an Israeli ID check digit.
