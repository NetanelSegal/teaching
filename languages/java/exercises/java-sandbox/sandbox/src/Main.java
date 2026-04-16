//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Fruit apple = new Fruit("green", "sour", true, 10);
        Fruit apple2 = new Fruit("green", "sour", true, 10);

        apple2.rotten();

        System.out.println(apple.taste);
        System.out.println(apple.color);
        System.out.println(apple.waight);
        System.out.println(apple.hasGarinim);

    }

    public static int sumArray(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

}