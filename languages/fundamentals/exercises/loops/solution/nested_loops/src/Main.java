import java.util.Scanner;

public class Main {
    // big questions
    public static void Q1() {
        int count = 0;
        for (int i = 1; i <= 6; i++) {
            for (int j = 1; j <= 6; j++) {
                for (int k = 1; k <= 6; k++) {
                    count++;
                    System.out.println("(" + i + "," + j + "," + k + ")");
                }
            }
        }
        System.out.println("Count: " + count);
    }

    public static void Q2() {
        final int MAX_MONEY = 20;
        final int BREAD = 5;
        final int MILK = 6;
        final int EGG = 2;

        int count = 0;

        for (int eggs = 0; eggs * EGG <= MAX_MONEY; eggs++) {
            for (int breads = 0; breads * BREAD <= MAX_MONEY - eggs * EGG; breads++) {
                for (int milks = 0; milks * MILK <= MAX_MONEY - eggs * EGG - breads * BREAD; milks++) {
                    int sum = eggs * EGG + breads * BREAD + milks * MILK;

                    if (sum == MAX_MONEY) {
                        count++;
                        System.out.println("eggs=" + eggs + ", breads=" + breads + ", milks=" + milks);
                    }
                }
            }
        }

        System.out.println("Total combinations: " + count);
    }

    public static void Q2_req() {
        final int MAX_MONEY = 20;
        final int BREAD = 5;
        final int MILK = 6;
        final int EGG = 2;
        int productNum = 0;
        helper_req(0, 0, 0, 0, productNum);
    }

    public static int helper_req(int sum, int eggCount, int breadCount, int milkCount, int productNum) {
        if (sum > 20) return productNum + 1;
        if (sum == 20) {
            System.out.println("eggs=" + eggCount + ", breads=" + breadCount + ", milks=" + milkCount);
            return productNum - 1;
        }

        if (productNum == 0) {
            productNum = helper_req(sum + 6, eggCount, breadCount, milkCount + 1, productNum);
        }

        if (productNum == 1) {
            productNum = helper_req(sum + 5, eggCount, breadCount + 1, milkCount, productNum);
        }

        if (productNum == 2) {
            productNum = helper_req(sum + 2, eggCount + 1, breadCount, milkCount, productNum);
        }
        System.out.println(productNum);
        return productNum;
    }

    public static void Q3() {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number n: ");
        int n = in.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter " + (i + 1) + " number: ");
            int num = in.nextInt(), sum = 0;
            int temp = num;
            while (num != 0) {
                int rightDigit = num % 10;
                sum += rightDigit;
                num /= 10;
            }

//            boolean isSumEven = sum % 2 == 0;
//            System.out.print("The sum " + sum + " of the number " + temp + " is " + (isSumEven ? "even" : "odd"));
            System.out.print("The sum " + sum + " of the number " + temp + " is ");

            if (sum % 2 == 0) {
                System.out.println("even");
            } else {
                System.out.println("odd");
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number to sort: ");
        int num = in.nextInt(), res = 0;
        num = Math.abs(num);
        while (num > 0) {
            int temp = 0;

            while (num % 10 < res % 10) {
                temp = temp * 10 + res % 10;
                res /= 10;
            }

            res = res * 10 + num % 10;

            while (temp > 0) {
                res = res * 10 + temp % 10;
                temp /= 10;
            }

            num /= 10;
        }

        System.out.println("res: " + res);
    }
}