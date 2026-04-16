import java.util.Arrays;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    // Q1: Sum of elements in an array
    public static int sumOfElements(int[] array) {
        int sum = 0;
        for (int n : array) {
            sum += n;
        }
        return sum;
    }

    // Q2: Average of elements in an array
    public static double averageOfElements(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return (double) sum / array.length;
    }

    // Q3: Sum of the largest and smallest numbers in an array
    public static int sumOfLargestAndSmallest(int[] array) {
        int min = array[0];
        int max = array[0];

        for (int num : array) {
            if (num < min) min = num;
            else if (num > max) max = num;
        }

        return min + max;
    }

    // Q4: Final value after operations Strings array
    public static int finalValueAfterOperations(String[] operations) {
        int val = 0;

        for (String s : operations) {
            if (s.equals("++X") || s.equals("X++")) {
                val++;
            } else {
                val--;
            }
        }
        return val;
    }

    // Q5: Remove duplicate elements from an array
    public static int[] removeDuplicates(int[] array) {
        int[] temp = new int[array.length];
        int j = 0;

        for (int i = 0; i < array.length; i++) {
            boolean isDuplicate = false;
            for (int k = 0; k < j; k++) {
                if (array[i] == temp[k]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                temp[j++] = array[i];
            }
        }

        return Arrays.copyOf(temp, j);
    }

    // Q6: Rotate elements of an array to the left by one position
    public static void rotateLeft(int[] array) {
        if (array.length == 0) return;
        int first = array[0];
        for (int i = 1; i < array.length; i++) {
            array[i - 1] = array[i];
        }
        array[array.length - 1] = first;
    }

    // Q7: Frequency count of characters in a string using two separate arrays
    public static void frequencyCount(String str) {
        int[] upperFreq = new int[26]; // For uppercase letters A-Z
        int[] lowerFreq = new int[26]; // For lowercase letters a-z
        for (char c : str.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                upperFreq[c - 'A']++;
            } else if (c >= 'a' && c <= 'z') {
                lowerFreq[c - 'a']++;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (upperFreq[i] > 0) {
                System.out.println((char) (i + 'A') + ": " + upperFreq[i]);
            }
        }
        for (int i = 0; i < 26; i++) {
            if (lowerFreq[i] > 0) {
                System.out.println((char) (i + 'a') + ": " + lowerFreq[i]);
            }
        }
    }

    public static void allPairSumUpToTarget(int[] a, int target) {
        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] + a[j] == target) {
                    System.out.println(a[i] + ", " + a[j]);
                }
            }
        }
    }

    public static void Q8() {
        int[] arr = {2, 4, 3, 7, 5, 8, 9, 2, 8};
        allPairSumUpToTarget(arr, 10);
    }

    public static int[] returnArray(int n) {
        int[] resArr = new int[n];
        for (int i = 0; i < resArr.length; i++) {
            resArr[i] = i + 1;
        }
        return resArr;
    }

    public static void main(String[] args) {
        // Example usage

//         Q1
//        int[] array1 = {1, 2, 3, 4, 5};
//        System.out.println("Q1: Sum: " + sumOfElements(array1));

        // Q2
//        int[] array2 = {1, 2, 3, 4, 5};
//        System.out.println("Q2: Average: " + averageOfElements(array2));

        // Q3
//        int[] array3 = {3, 1, 4, 1, 5};
//        System.out.println("Q3: Sum of largest and smallest: " + sumOfLargestAndSmallest(array3));

//         Q4
//        String[] ops = {"X++", "++X", "--X", "X--", "X++", "++X"};
//        System.out.println(finalValueAfterOperations(ops));

        // Q5
//        int[] array4 = {1, 2, 3, 1, 1, 1};
//        int[] result4 = removeDuplicates(array4);
//        System.out.println("Q4: Array without duplicates: " + Arrays.toString(result4));

        // Q6
//        int[] array5 = {1, 2, 3, 4, 5};
//        rotateLeft(array5);
//        System.out.println("Q5: Array after left rotation: " + Arrays.toString(array5));

        // Q7
//        String str6 = "Hello World";
//        System.out.println("Q6: Frequency count:");
//        frequencyCount(str6);

//        int[] arr = returnArray(10);
//        System.out.println(Arrays.toString(arr));
        Q8();
    }
}