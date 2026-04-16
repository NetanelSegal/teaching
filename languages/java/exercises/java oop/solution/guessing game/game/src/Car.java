public class Car {
    private boolean isStarted;
    private int wheelsCount, year;
    private String brand, model;

    public Car(String brand, String model, int wheelsCount, int year) {
        this.brand = brand;
        this.year = year;
        this.model = model;
        this.wheelsCount = wheelsCount;
        this.isStarted = false;
    }

    public void setWheelsCount(int wheelsCount) {
        if (wheelsCount % 2 != 0) return;

        this.wheelsCount = wheelsCount;
    }

    public int getWheelsCount() {
        return this.wheelsCount;
    }

    public void start() {
        if (isStarted) {
            System.out.println("Error cannot start again");
            return;
        }

        isStarted = true;
        System.out.println("started");
    }

    public void drive() {
        if (!isStarted) {
            System.out.println("Cannot drive when off");
            return;
        }
        System.out.println("Driving");
    }

    public void printData() {
        System.out.println("model: " + model);
        System.out.println("brand: " + brand);
        System.out.println("year: " + year);
        System.out.println("wheelsCount: " + wheelsCount);
        System.out.println("isStarted: " + isStarted);
    }
}
