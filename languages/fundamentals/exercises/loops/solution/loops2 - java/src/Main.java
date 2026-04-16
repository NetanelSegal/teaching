import java.util.Scanner;

public class Main {
    public static boolean isPerfect(int num) {
        int sum = 0;
        for (int i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        return sum == num;
    }

    public static void Q1() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter start & end");
        int start = in.nextInt(), end = in.nextInt();
        System.out.print("The perfect numbers from " + start + " to " + end + " are: ");
        for (int i = start; i <= end; i++) {
            if (isPerfect(i)) {
                System.out.print(i + ", ");
            }
        }
    }

    public static void Q2() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a number to check if palindrome");
        int num = in.nextInt(), copy = num, reversed = 0;
        while (copy > 0) {
            reversed *= 10;
            reversed += copy % 10;
            copy /= 10;
        }
        System.out.println("Is plandrom: " + (num == reversed));
    }

    public static void Q3() {

    }

    public static void main(String[] args) {
        Q1();
    }
}