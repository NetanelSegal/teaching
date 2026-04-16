import java.util.Arrays;
import java.util.Date;
import java.util.Random;
import java.util.Scanner;

public class Main {
    static Scanner in = new Scanner(System.in);

    public static void Q1_a() {
        System.out.println("Enter n: ");
        int n = in.nextInt(), first, curr, count = 0, sum = 0;
        System.out.println("Enter #1 number");
        first = in.nextInt();
        for (int i = 2; i <= n; i++) {
            System.out.println("Enter #" + i + " number");
            curr = in.nextInt();
            if (curr < first) {
                sum += curr;
                count++;
            }
        }
        System.out.println("Average: " + (float) sum / count);
    }

    public static void Q1_b() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter n: ");
        int n = in.nextInt(), count = 0, sum = 0;
        int[] numbers = new int[n];
        for (int i = 0; i < numbers.length; i++)
            numbers[i] = in.nextInt();

        for (int i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] < numbers[numbers.length - 1]) {
                count++;
                sum += numbers[i];
            }
        }

        System.out.println("Average: " + (float) sum / count);
    }

    public static void Q2() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int number = in.nextInt();
        int[] counters = new int[10];

        while (number > 0) {
            int digit = number % 10;
            counters[digit]++;
            number /= 10;
        }

        for (int i = 0; i < counters.length; i++) {
            if (counters[i] > 0) {
                System.out.println("the digit " + i + " appears " + counters[i] + " times");
            }
        }

        /*
        int[] digitsArray = new int[10];
        System.out.println("Enter number: ");
        int num = in.nextInt();
        while (num > 0) {
            digitsArray[num % 10]++;
            num /= 10;
        }

        for (int i = 0; i < digitsArray.length; i++) {
            if (digitsArray[i] > 0) {
                System.out.println("The number " + i + " appears " + digitsArray[i] + " times");
            }
        }

         */
    }

    public static int findMissing(int[] a, int n) {
        int sumOfN = 0;

        for (int i = 1; i <= n; i++) {
            sumOfN += i;
        }

        int sumArr = 0;

        for (int num : a) {
            sumArr += num;
        }
        return sumOfN - sumArr;
    }

    public static void Q3() {
        int[] arr = {1, 2, 4};
        System.out.println(findMissing(arr, 4));

    }

    public static void Q4() {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a binary number with 12 digits: ");
        long number = in.nextLong();
        int countOnes = 0;
        int[] seriesCounters = new int[13];
        while (number > 0) {
            int currentDigit = (int) (number % 10);
            if (currentDigit == 1) {
                countOnes++;
            } else {
                if (countOnes > 0) {
                    seriesCounters[countOnes]++;
                }
                countOnes = 0;
            }
            number /= 10;
        }

        if (countOnes > 0) {
            seriesCounters[countOnes]++;
        }

        for (int i = 0; i < seriesCounters.length; i++) {
            if (seriesCounters[i] > 0) {
                System.out.println(seriesCounters[i] + " series of " + i + " ones");
            }
        }
    }

    public static double geometricMean(int[] a) {
        int factorial = 1;
        for (int n : a) factorial *= n;
        return Math.pow(factorial, (float) 1 / a.length);
    }

    public static void Q6() {
        int[] a = {1, 2, 3};
        System.out.println(geometricMean(a));
    }

    public static void printMatrix(int[][] mat) {
        for (int i = 0; i < mat.length; i++) {
            System.out.println(Arrays.toString(mat[i]));
        }
    }

    public static void printSameRowCol(int[][] a, int[][] b) {
        int size = a.length;
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                boolean isRowASameColB = true;
                for (int k = 0; k < size; k++) {
                    if (a[i][k] != b[k][j]) {
                        isRowASameColB = false;
                        break;
                    }
                }
                if (isRowASameColB) {
                    System.out.println("Row " + i + " in matrix A and col " + j + " in matrix B are equal");
                }
            }
        }
    }

    public static void Q8() {
//        System.out.print("Enter the size of the matrix (N): ");
//        int n = in.nextInt();

//        int[][] matrix = new int[n][n];
        int[][] matrix = {{4, 6, 7, 1}, {4, 6, 7, 1}, {4, 6, 7, 1}, {4, 6, 7, 1}};
        int n = matrix.length;
//        System.out.println("Enter the elements of the matrix:");
//        for (int i = 0; i < n; i++) {
//            for (int j = 0; j < n; j++) {
//                matrix[i][j] = in.nextInt();
//            }
//        }

        int[][] newMatrix = new int[matrix.length][matrix[0].length];

        System.out.println("Original matrix:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                newMatrix[i][j] = 0;
                for (int k = i - 1; k <= i + 1; k++) {
                    for (int y = j - 1; y <= j + 1; y++) {
                        if (k >= 0 && k < n && y >= 0 && y < n) {
                            newMatrix[i][j] += matrix[k][y];
                        }
                    }
                }
            }
        }

        System.out.println("New matrix:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(newMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void Q9() {
        int[][] m1 = {{1, 2, 3}, {1, 2, 3}, {1, 2, 3}};
        int[][] m2 = {{1, 1, 1}, {2, 2, 2}, {3, 3, 3}};
        printSameRowCol(m1, m2);
    }

    public static void Q10() {
        Scanner in = new Scanner(System.in);
        int N = 3;
        int M = 2;
        int[][] mat = new int[N][M];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                System.out.println("Enter num [" + i + "][" + j + "]");
                mat[i][j] = in.nextInt();
            }
        }

        printMatrix(mat);

        int[][] newMat = new int[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                newMat[i][j] = mat[N - j - 1][i];
            }
        }

        printMatrix(newMat);
    }

    public static void Q11() {
        Scanner in = new Scanner(System.in);
        int N = 4;
        int[][] mat = new int[N][N];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.println("Enter num [" + i + "][" + j + "]");
                mat[i][j] = in.nextInt();
            }
        }

        printMatrix(mat);

        for (int i = 0; i < N; i++) {
            int minIndex = 0;
            for (int j = 0; j < N; j++) {
                if (mat[i][j] < mat[i][minIndex]) {
                    minIndex = j;
                }
            }
            int tmp = mat[i][i];
            mat[i][i] = mat[i][minIndex];
            mat[i][minIndex] = tmp;
        }
        System.out.println("***************");
        printMatrix(mat);
    }

    public static int countRectangles(int[][] pic) {
        int count = 0;
//        for (int i = 0; i < pic.length; i++) {
//            for (int j = 0; j < pic[0].length; j++) {
//                if (pic[i][j] == 0 && (j + 1 == pic[0].length || pic[i][j + 1] != 0)
//                        && (i + 1 == pic.length || pic[i + 1][j] != 0)) {
//                    count++;
//                }
//            }
//        }
        for (int i = 0; i < pic.length; i++) {
            for (int j = 0; j < pic[0].length; j++) {
                if (pic[i][j] == 0 && pic[i][j + 1] != 0 && pic[i + 1][j] != 0) {
                    count++;
                }
            }
        }
        return count;
    }

    public static void Q13() {
        int[][] picture = {
                {1, 1, 1, 1, 1, 1, 1},
                {1, 0, 0, 0, 1, 1, 1},
                {1, 0, 0, 0, 1, 0, 1},
                {1, 1, 1, 1, 1, 1, 1},
                {1, 0, 0, 1, 1, 0, 1},
                {1, 0, 0, 1, 1, 0, 1},
                {1, 1, 1, 1, 1, 0, 1},
                {1, 1, 1, 1, 1, 1, 1},
        };

        System.out.println("countRectangles: " + countRectangles(picture));
    }

    public static void main(String[] args) {
        /*
        Random r = new Random();
        String s = "Hello world";
        String newS = "";
        int[] arr = new int[s.length()];
        int i = 0;
        for (char ch : s.toCharArray()) {
            int randomIndex = r.nextInt(i, s.length());
            newS += s.charAt(ch);
            arr[i++] = randomIndex;
        }
        System.out.println(s);
        System.out.println(newS);
        System.out.println(Arrays.toString(arr));
         */

        Q4();
    }
}