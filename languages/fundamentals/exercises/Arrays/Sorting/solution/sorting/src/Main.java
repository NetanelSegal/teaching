import java.util.Arrays;

class Main {
    public static void main(String[] args) {
//        int[] arr = {100000, 1, 1000, 100, -1};

//        System.out.println(Arrays.toString(arr));
//        mergeSort(arr);
//        bubbleSort(arr);
//        System.out.println(Arrays.toString(arr));

    }

    public static void selectionSort(int[] a) {
        for (int i = 0; i < a.length; i++) {
            int minIndex = i;
            for (int j = i; j < a.length; j++) {
                if (a[j] < a[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = a[i];
            a[i] = a[minIndex];
            a[minIndex] = temp;
        }
    }

    public static void bubbleSort(int[] a) {
        int endSortedCount = 0;

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j] > a[j + 1]) {
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                    endSortedCount = 0;
                } else {
                    endSortedCount++;
                }
            }

            i += endSortedCount;
        }
    }

    public static void mergeSort(int[] a) {
        mergeHelper(a, 0, a.length);
    }

    public static void mergeHelper(int[] a, int start, int end) {
        if (end - start == 1) return;
        int mid = (start + end) / 2;

        mergeHelper(a, start, mid);
        mergeHelper(a, mid, end);
        System.out.println("start: " + start + ", mid:" + mid);

        int i = start, j = mid;
        while (i < j && j < end) {
            System.out.println("i: " + i + ", j:" + j);
            System.out.println(a[i] + ":" + a[j]);

            if (a[j] < a[i]) {
                System.out.println("Swapping");
                int temp = a[j];
                a[j] = a[i];
                a[i] = temp;
//                j++;
            } else
                System.out.println("Not Swapping");
            i++;


            System.out.println(Arrays.toString(a));

        }
//        while ()
    }

}