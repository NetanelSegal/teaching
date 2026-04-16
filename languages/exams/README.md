# Exams

## Subject: Loops, Functions, Variables, Characters, and Numbers

1. **Character Classification**
   Write a method named `classifyChar` that receives a character (`char`) as a parameter.
   The method will return an integer (`int`) according to the following rules:
   * If the character is a digit (0-9), return 1.
   * If the character is an English letter (uppercase or lowercase A-Z, a-z), return 2.
   * For any other character, return 3.
   
   *Execution Examples:*
   `classifyChar('5')` -> 1
   `classifyChar('B')` -> 2
   `classifyChar('#')` -> 3

2. **Harmonic Sum**
   Write a method named `harmonicSum` that receives a positive integer `n`.
   The method will return (`double`) the sum of the following series up to the n-th term (inclusive):
   `1 + (1/2) + (1/3) + … + (1/n)`
   *Note: Pay attention to accuracy in fraction calculation.*
   
   *Execution Examples:*
   For `n = 1`, returns `1.0`
   For `n = 3`, returns `1.8333` (the result of 1 + 0.5 + 0.333...)

3. **Main Program and Conditional Printing**
   Write a complete program (`main`) which:
   * Asks and receives two integers from the user: `start` and `end`.
   * Prints all numbers in the range between `start` and `end` (inclusive), according to the following rules (by order of priority):
     * If the number is perfectly divisible by 7 – print "Boom".
     * Otherwise, if the number is even – print "Even".
     * In any other case – print the number itself.
   * The program must also handle the case where `start > end`.

   *Execution Example (for input 4, 8 or 8, 4):*
   ```
   Please Enter a number:
   4 8
   Output:
   Even
   5
   Even
   Boom
   Even
   ```

4. **Code Reading and Tracing**
   Given the following method (note: variable names do not indicate their purpose):
   ```java
   public static boolean mystery(int n){
       int x  = 10;
       while(n > 0){
           int y = n % 10;
           if(y >= x){
               return false;
           }
           x = y;
           n /= 10;
       }
       return true;
   }
   ```
   * **A.** Perform a trace (trace table) for the execution of the method for the call: `mystery(159)`. Write down the values of the variables `n`, `x`, `y` in each iteration of the loop and write what the operation returns.
   * **B.** Give an example of any integer (`int`) for which the method will return the opposite result from section A.
   * **C.** Explain in words: What is the general purpose of the method? (What does it check for every `n`?)