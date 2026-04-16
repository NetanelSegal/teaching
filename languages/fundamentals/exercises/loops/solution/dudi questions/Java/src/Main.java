import java.util.Scanner;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void Q2() {
        Scanner in = new Scanner(System.in);
        int start, end, sum = 0;
        System.out.println("Enter numbers");
        start = in.nextInt();
        end = in.nextInt();

        if (start > end) {
            int tmp = start;
            start = end;
            end = tmp;
        }

        for (int i = start; i <= end; i++) {
            sum += i;
        }

        System.out.println(sum);
    }

    public static void Q3() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter how many ages");
        int minimum, maximum, n = in.nextInt();

        System.out.println("Enter 1 number");
        minimum = maximum = in.nextInt();

        for (int i = 1; i < n; i++) {
            System.out.println("Enter " + (i + 1) + " number");
            int num = in.nextInt();
            if (num < minimum) {
                minimum = num;
            } else if (num > maximum) {
                maximum = num;
            }
        }
        if (maximum - minimum > 3) {
            System.out.println("Hetrogenit");
        } else {
            System.out.println("Homogenit");
        }
    }

    public static void Q4() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter m and n");
        int m = in.nextInt(), n = in.nextInt();
        int max = 0, secondMax = 0;

        for (int i = 0; i < n && max + secondMax <= m; i++) {
            System.out.println("Enter number " + (i + 1) + ": ");
            int currentNumber = in.nextInt();

            if (currentNumber > max) {
                secondMax = max;
                max = currentNumber;
            } else if (currentNumber > secondMax) {
                secondMax = currentNumber;
            }
        }

        if (max + secondMax > m) {
            System.out.println("The pair is: " + max + ", " + secondMax);
        } else {
            System.out.println("no pair found");
        }
    }

    public static void Q10() {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a q n: ");
        int a = in.nextInt(), q = in.nextInt(), n = in.nextInt();

        int i = 0;
        for (; i < n; ) {
            System.out.println(a);
            a *= q;
            i++;
        }

    }

    public static void Q11() {
        int sum = 0;
        for (int i = 0; i < 20; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        System.out.println(sum);
    }

    public static void Q12() {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a: ");
        int a = in.nextInt();
        for (int i = 10; i <= 99; i++) {
            if (i / 10 + i % 10 == a) {
                System.out.println(i);
            }
        }
    }

    public static void Q13() {
        for (int b = 10; b <= 99; b++) {
            for (int a = 10; a < b; a++) {
                if (a % 10 == b / 10) {
                    int tensA = a / 10;
                    int unitsB = b % 10;
                    if ((double) tensA / unitsB == (double) a / b) {
                        System.out.println(a + "/" + b);
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
//        Q12();

        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for (int j = 0; j < n; j++) {
            for (int i = 0; i < n - j; i++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int j = 0; j < n; j++) {
            for (int i = 0; i < n - j - 1; i++) {
                System.out.print(" ");
            }
            for (int i = 0; i < j + 1; i++) {
                System.out.print("*");
            }
            System.out.println();
        }

    }
}