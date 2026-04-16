//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static int sum(int a, int b) {
        return a + b;
    }

    public static int max(int a, int b) {
//        return a > b ? a : b;
        if (a > b) return a;
        return b;
    }

    public static boolean isEven(int a) {
        return a % 2 == 0;
    }

    public static int power(int base, int expo) {
        int res = 1;
        for (int i = 0; i < expo; i++) {
            res *= base;
        }
        return res;
    }

    public static String gradeStatus(int grade) {
        if (grade >= 90) return "Excellent";
        if (grade >= 60) return "Passed";
        return "Failed";
    }

    public static void Q10() {
        System.out.println(gradeStatus(92));
    }

    public static int reverse(int n) {
        int res = 0;
        while (n > 0) {
            res = res * 10 + n % 10;
            n /= 10;
        }
        return res;
    }

    public static void main(String[] args) {
//        Q10();

//        int day = 1;
//
//        switch (day) {
//            case 2:
//                System.out.println("שני");
//                break;
//            case 1:
//                System.out.println("ראשון");
//                break;
//            case 3:
//                System.out.println("שלישי");
//                break;
//            case 4:
//                System.out.println("רביעי");
//                break;
//            case 5:
//                System.out.println("חמישי");
//                break;
//            case 6:
//                System.out.println("שישי");
//                break;
//            case 7:
//                System.out.println("שבת");
//                break;
//            default:
//                System.out.println("לא יום");
//        }

    }
}