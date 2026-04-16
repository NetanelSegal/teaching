import java.util.Random;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void Q1() {
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
    }

    public static void Q1_while() {
        int i = 1;
        while (i <= 10) {
            System.out.print(i + " ");
            i++;
        }
    }

    public static void Q2() {
        for (int i = 2; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
        System.out.println();
        for (int i = 1; i <= 20; i += 2) {
            System.out.print(i + " ");
        }
    }

    public static void Q3() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter positive whole number: ");
        int n = scanner.nextInt();
        System.out.print("Enter power: ");
        int k = scanner.nextInt();

        int result = 1;
        for (int i = 0; i < k; i++) {
            result *= n;
        }

        System.out.println(n + "^" + k + " = " + result);
    }

    public static void Q4() {
        Scanner scanner = new Scanner(System.in);
        int sum = 0;

        System.out.println("Enter 10 numbers:");
        for (int i = 0; i < 10; i++) {
            int num = scanner.nextInt();
            sum += num;
        }

        double average = sum / 10.0;
        System.out.println("sum = " + sum);
        System.out.println("average = " + average);
    }

    public static void Q5() {
        for (int i = 1; i < 1000; i++) {
            int tmp = i, sumDigit = 0;
            while (tmp > 0) {
                sumDigit += tmp % 10;
                tmp /= 10;
            }
            if (i % sumDigit == 0)
                System.out.println(i);
        }
    }

    public static void Q6() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter whole positive number: ");
        int n = scanner.nextInt();

        int factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }

        System.out.println(n + "! is " + factorial);
    }

    public static void Q7() {
        Random random = new Random();
        int targetNumber = random.nextInt(100) + 1;
        Scanner in = new Scanner(System.in);

        System.out.print("Guess a number between 1 and 100: ");
        int guess = in.nextInt();

        while (guess != targetNumber) {
            if (guess < targetNumber) {
                System.out.println("Too low!");
            } else {
                System.out.println("Too high!");
            }
            System.out.print("Guess a number between 1 and 100: ");
            guess = in.nextInt();
        }
        System.out.println("Correct guess!");
    }

    public static void Q8() {
        for (int a = 10; a < 100; a++) {
            for (int b = a + 1; b < 100; b++) {
                //numerator = מונה
                //denominator = מכנה
                int numeratorFirstDigit = a / 10;
                int numeratorSecondDigit = a % 10;
                int denominatorFirstDigit = b / 10;
                int denominatorSecondDigit = b % 10;

                if (numeratorSecondDigit == denominatorFirstDigit) {
                    double originalFraction = (double) a / b;
                    double reducedFraction = (double) numeratorFirstDigit / denominatorSecondDigit;
                    if (originalFraction == reducedFraction) {
                        System.out.println(a + "/" + b + " = " + numeratorFirstDigit + "/" + denominatorSecondDigit);
                    }
                }
            }
        }
    }

    public static boolean isPrime(int n) {
        if (n <= 1) return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void Q9() {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number n: ");
        int n = in.nextInt();

        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                System.out.println(i + " is a prime number");
            } else {
                System.out.print(i + " is divisible by: ");
                for (int j = 2; j < i; j++) {
                    if (i % j == 0) {
                        System.out.print(j + " ");
                    }
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        Q8();
    }
}