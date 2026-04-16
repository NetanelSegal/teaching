
public class Main {
    public static void printAscendingOrder(int n) {
        if (n == 0) return;
        printAscendingOrder(n - 1);
        System.out.println(n);
    }

    public static void printDescendingOrder(int n) {
        if (n == 0) return;
        System.out.println(n);
        printDescendingOrder(n - 1);
    }

    public static int numOfDigits(int n) {
        if (n < 10) return 1;
        return 1 + numOfDigits(n / 10);
    }

    public static int sumOfDigits(int n) {
        if (n < 10) return n;

        return n % 10 + sumOfDigits(n / 10);
    }

    public static int biggestDigit(int n) {
        if (n < 10) return n;
        int curr = biggestDigit(n / 10);
        return Math.max(n % 10, curr);
    }

    public static boolean areAllDigitsEven(int n) {
        if (n < 10) return n % 2 == 0;
        return n % 2 == 0 && areAllDigitsEven(n / 10);
    }

    public static boolean isDivisor(int num, int divisor) {
        if (num == 0) return true;
        if (num < 0) return false;
        return isDivisor(num - divisor, divisor);
    }

    public static boolean seekString(String str, char letter) {
        if (str.isEmpty()) return false;
        if (str.charAt(0) == letter) return true;
        return seekString(str.substring(1), letter);
    }
    public static boolean isPalindromeRec(String str) {
        System.out.println("str: |" + str + "|");
        if (str.length() < 2) return true;
        if (str.charAt(0) != str.charAt(str.length() - 1)) return false;

        return isPalindromeRec(str.substring(1, str.length() - 1));
    }

    public static void main(String[] args) {
//        printAscendingOrder(5);
//        printDescendingOrder(5);
//        System.out.println(numOfDigits(123));
//        System.out.println(sumOfDigits(123413));
//        System.out.println(biggestDigit(17593));
//        System.out.println(areAllDigitsEven(222681));
//        System.out.println(isDivisor(4,2));
//        System.out.println(seekString("abcde", 'e'));
//        System.out.println(isPalindromeRec("abba"));
    }

}
