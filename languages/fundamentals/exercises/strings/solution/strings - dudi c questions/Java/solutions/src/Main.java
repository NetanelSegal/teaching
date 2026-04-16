import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static char lastChar(String s) {
        return s.charAt(s.length() - 1);
    }

    public static void Q2() {
        Scanner in = new Scanner(System.in);
        for (int i = 0; i < 15; i++) {
            System.out.println("Enter string");
            String s = in.nextLine();
            if (s.charAt(0) == lastChar(s)) {
                System.out.println(s);
            }
        }
    }

    public static int countY(String s) {
        int count = 0;
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i + 1) == ' ' && s.charAt(i) == 'Y') {
                count++;
            }
        }
        return count;
    }

    public static void Q3() {
//        System.out.println();
        int countOfY = countY("HAPPY BIRTHDAY TO YOU ");
        System.out.println("countOfY: " + countOfY);
    }

    public static void Q4() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter two strings");
        String bigger = in.nextLine(), smaller = in.nextLine();
        int bigLen = bigger.length(), smallLen = smaller.length();

        if (smallLen > bigLen) {
            int tmp = bigLen;
            bigLen = smallLen;
            smallLen = bigLen;

            String tmpS = bigger;
            bigger = smaller;
            smaller = tmpS;
        }

        if (bigLen >= smallLen * 2) {
            System.out.println(bigger);
        } else {
            System.out.println(smaller);
        }
    }

    public static String reverse(String str) {
        if (str == null || str.length() <= 1) {
            return str;
        }

        int len = str.length();
        for (int i = len - 1; i >= 0; i--) {
            str += str.charAt(i);
        }

        return str.substring(len);
    }

    public static void Q6() {
        System.out.println(reverse("reverse"));
    }

    public static int countOccurrences(String s1, String s2) {
//        if (s2.isEmpty()) {
//            return 0;
//        }
//
//        int count = 0;
//        int index = 0;
//
//        index = s1.indexOf(s2, index);
//        while (index != -1) {
//            count++;
//            index++;
//            index = s1.indexOf(s2, index);
//        }
//
//        return count;
        int count = 0, len1 = s1.length(), len2 = s2.length();
        for (int i = 0; i <= len1 - len2; i++) {
            boolean isContained = true;
            for (int j = 0; j < s2.length(); j++) {
                if (s1.charAt(i + j) != s2.charAt(j)) {
                    isContained = false;
                    break;
                }
            }

            if (isContained) count++;

        }
        return count;
    }

    public static void Q7() {
        System.out.println(countOccurrences("ababa", "aba"));
    }

    public static int sumOfNumberInString(String s) {
        int sum = 0, len = s.length();
        int currentNumber = 0;

        for (int i = 0; i < len; i++) {
            char ch = s.charAt(i);
            if (Character.isDigit(ch)) {
                currentNumber *= 10;
                currentNumber += ch - '0';
            } else {
                sum += currentNumber;
                currentNumber = 0;
            }

        }

        return sum + currentNumber;
    }

    public static void Q8() {
        System.out.println(sumOfNumberInString("1ab13a12b1a1"));
    }

    public static String deleteChar(String s, char ch) {
        String res = "";
        int len = s.length();
        for (int i = 0; i < len; i++) {
            char curr = s.charAt(i);
            if (curr != ch) res += curr;
        }
        return res;
    }

    public static void Q9() {
        System.out.println(deleteChar("-ab-cd-efg-ab-cd-ea--", '-'));
    }

    public static void main(String[] args) {
        Q8();
    }
}