//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        q17();
    }

    public static void printMinIndex(int[][] m) {
        int finalI = 0, finalJ = 0;
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length; j++) {
                if (m[i][j] < m[finalI][finalJ]) {
                    finalI = i;
                    finalJ = j;
                }
            }
        }
        System.out.println("(" + finalI + ", " + finalJ + ")" + " The value is: " + m[finalI][finalJ]);
    }

    public static void Q10() {
        int[][] mat = {
                {7, -1, 5},
                {-7000, 51, -235},
                {432, -12, 76},
        };

        printMinIndex(mat);

    }

    public static void printAboveAverage(double[][] m) {
        double sum = 0;
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length; j++) {
                sum += m[i][j];
            }
        }

        double avg = sum / (m.length * m[0].length);

        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length; j++) {
                if (m[i][j] > avg) {
                    System.out.print(m[i][j] + ", ");
                }
            }
        }
    }


    public static void Q11() {
        double[][] mat = {
                {7, -1, 5},
                {-7000, 51, -235},
                {432, -12, 76},
        };

        printAboveAverage(mat);

    }

    public static int q12(String[][] str) {
        int bigerLentgth = 0;
        int row = -1;
        for (int i = 0; i < str.length; i++) {
            for (int j = 0; j < str[i].length; j++) {
                if (str[i][j].length() > bigerLentgth) {
                    bigerLentgth = str[i][j].length();
                    row = i;
                }

            }
        }
        return row;
    }

//    תרגיל13
//    כתוב פעולה המקבלת מערךדו מיימדישל מספרים שלמים ומחזירהtrueאם
//    כל שורה במערך ממוינתבסדר עולה. אחרת, הפעולה תחזירfalse

    public static boolean isSorted(int[][] m) {
        for (int i = 0; i < m.length; i++) {
            for (int j = 0; j < m[0].length - 1; j++) {
                if (m[i][j] > m[i][j + 1]) {
                    return false;
                }
            }
        }
        return true;
    }

    public static void q13() {
        int[][] mat = {
                {1, 4, 3},
                {4, 5, 6},
        };

        System.out.println(isSorted(mat));

    }

    public static int multyDigits(char[][] chars) {
        int result = 1;
        for (int i = 0; i < chars.length; i++) {
            for (int j = 0; j < chars[0].length; j++) {
                if (Character.isDigit(chars[i][j])) {
                    result *= chars[i][j] - '0';
                }
            }
        }

        return result;
    }

    public static boolean isDigit(char ch) {
        return ch >= '0' && ch <= '9';
    }

    public static void q17() {
        char[][] chars = {
                {'a', 'b', 'c'},
                {'2', '5', '?'},
                {'3', 'f', 'r'}
        };

        System.out.println(multyDigits(chars));
    }
}