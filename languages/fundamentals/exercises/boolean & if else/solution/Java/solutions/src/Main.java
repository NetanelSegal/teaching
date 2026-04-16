import java.util.Scanner;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    static Scanner in = new Scanner(System.in);

    public static void Q1() {
        System.out.println("Enter number");
        int num = in.nextInt();

        if (num < 0) {
            System.out.println("Positive");
        } else if (num > 0) {
            System.out.println("Negative");
        } else {
            System.out.println("0");
        }
    }

    public static void Q2() {
        System.out.println("Enter number");
        int num = in.nextInt();

        if (num % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
    }

    public static void Q3() {
        System.out.println("Enter char");
        char ch = in.next().charAt(0);

        if (ch >= 'A' && ch <= 'Z') {
            System.out.println("uppercase");
        } else if (ch >= 'a' && ch <= 'z') {
            System.out.println("lowercase");
        } else {
            System.out.println("other");
        }
    }

    public static void Q4() {
        System.out.println("Enter number");
        int num = in.nextInt();
        if (num / 10 % 10 > num % 10) {
            System.out.println("Sorted number");
        } else {
            System.out.println("Unsorted number");
        }
    }

    public static void Q5() {
        System.out.println("enter number");
        int num = in.nextInt();
        if (num % 10 == num / 100) {
            System.out.println("Palindrome");
        } else {
            System.out.println("NOT Palindrome");
        }
    }

    public static void Q6() {
        System.out.println("enter number of student and number of seats in a spaceship");
        int students = in.nextInt(), seats = in.nextInt();
        int spaceships = students / seats;

        if (students % seats != 0) {
            spaceships++;
        }

        System.out.println(spaceships);
    }

    public static void main(String[] args) {
        Q4();
    }
}