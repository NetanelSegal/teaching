public class MyQuestions {
    // Q1: function that returns the multiplication table
    public static int[][] generateMultiplicationTable() {
        int size = 10;
        int[][] table = new int[size][size];

        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                table[i][j] = (i + 1) * (j + 1);
            }
        }

        return table;
    }

    // Q2: Function that returns the maximum wealth among all customers.
    public int maximumWealth(int[][] accounts) {
        int maxWealth = 0;
        int row = accounts.length;
        int col = accounts[0].length;
        for (int i = 0; i < row; i++) {
            int sum = 0;
            for (int j = 0; j < col; j++)
                sum += accounts[i][j];

            if (sum > maxWealth)
                maxWealth = sum;

        }
        return maxWealth;
    }

    // Q3: sum of diagonals
    public static int diagonalSum(int[][] mat) {
        int sum = 0;
        for (int i = 0; i < mat.length; i++) {
            if (i != mat.length - 1 - i)
                sum += mat[i][i] + mat[i][mat.length - 1 - i];
            else
                sum += mat[i][i];

        }
        return sum;
    }

    // Q4: sort matrix
    public static int[][] matSort(int[][] mat) {
        int[] flattened = new int[mat.length * mat[0].length];
        int index = 0;
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[0].length; j++) {
                flattened[index++] = mat[i][j];
            }
        }

        for (int i = 0; i < flattened.length; i++) {
            for (int j = 0; j < flattened.length - 1 - i; j++) {
                if (flattened[j] > flattened[j + 1]) {
                    int tmp = flattened[j];
                    flattened[j] = flattened[j + 1];
                    flattened[j + 1] = tmp;
                }
            }
        }

        index = 0;
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[0].length; j++) {
                mat[i][j] = flattened[index++];
            }
        }

        /*
        boolean swapped;
        int sortedCount = 0;
        while (true) {
            swapped = false;
            for (int i = 0; i < mat.length; i++) {
                for (int j = 0; j < mat[0].length - 1; j++) {
                    if (mat[i][j] > mat[i][j + 1]) {
                        int tmp = mat[i][j];
                        mat[i][j] = mat[i][j + 1];
                        mat[i][j + 1] = tmp;
                        swapped = true;
                    }
                }
                if (i + 1 < mat.length && mat[i][mat[i].length - 1] > mat[i + 1][0]) {
                    int tmp = mat[i][mat[i].length - 1];
                    mat[i][mat[i].length - 1] = mat[i + 1][0];
                    mat[i + 1][0] = tmp;
                    swapped = true;
                }
            }
            sortedCount++;
            if (!swapped) break;
        }
        return mat;
*/
        return mat;
    }

    public static void main(String[] args) {
        // Q1
//        for (int[] a : generateMultiplicationTable()) {
//            System.out.println(Arrays.toString(a));
//        }

        // Q3
//        int[][] mat = {{7, 3, 1, 9}, {3, 4, 6, 9}, {6, 9, 6, 6}, {9, 5, 8, 5}};
//        System.out.println(diagonalSum(mat));

        // Q4
//        int[][] mat = {{10, 37, 34}, {5, 14, 26}, {1, 2, 3}};
//        System.out.println(Arrays.deepToString(matSort(mat)));



    }
}