class Test {
    static int x;
    int num;

    public static void incrementX() {
        asd();
        x++;
    }

    public Test() {
        num = 10;
        x++;
    }

    public void asd(){
        incrementX();
    }
}

public class Main {
    public int sum() {
        return 6;
    }

    public static void main(String[] args) {
        sum();
    }
}
