import java.time.LocalDateTime;

public class ParkingLot {
    static final double PRICE_PER_HOUR = 50;
    private Vehicle[][] vehicles;

    public ParkingLot(int rows, int cols) {
        this.vehicles = new Vehicle[rows][cols];
    }

    public boolean enterSpecific(Vehicle v, int row, int col) {

        LocalDateTime currentTime = LocalDateTime.now();
        String formattedCurrentTime = formatTime(currentTime);

        boolean isCar = v.getType() == VehicleType.CAR;
        if ((isCar && row == this.vehicles.length - 1)
                || (!isCar && row < this.vehicles.length - 1)) {
            System.out.println(formattedCurrentTime + ": " + v.getType() + " cannot park in a " +
                    (isCar ? VehicleType.MOTORCYCLE : VehicleType.CAR) + " parking");
            return false;
        }

        if (this.vehicles[row][col] == null) {
            v.setEnterTime(currentTime);
            this.vehicles[row][col] = v;
            System.out.println(formattedCurrentTime + ": The vehicle " + v + " was added to row " + row + " and column " + col);
            return true;
        }

        System.out.println(formattedCurrentTime + ": No space, the vehicle " + v + " didn't park");
        return false;
    }

    public int[] enter(Vehicle v) {
        LocalDateTime currentTime = LocalDateTime.now();
        String formattedCurrentTime = formatTime(currentTime);
        int start = v.getType() == VehicleType.CAR ? 0 : this.vehicles.length - 1;
        int end = v.getType() == VehicleType.CAR ? this.vehicles.length - 1 : this.vehicles.length;

        for (int i = start; i < end; i++) {
            for (int j = 0; j < this.vehicles[0].length; j++) {
                Vehicle curr = this.vehicles[i][j];
                if (curr == null) {
                    v.setEnterTime(currentTime);
                    this.vehicles[i][j] = v;
                    System.out.println(formattedCurrentTime + ": The vehicle " + v + " was added to row " + i + " and column " + j);
                    return new int[]{i, j};
                }
            }
        }

        System.out.println(formattedCurrentTime + ": No space, the vehicle " + v + " didn't park");
        return new int[]{-1, -1};
    }

    public int[] exit(String plate) {
        LocalDateTime currentTime = LocalDateTime.now();
        String formattedCurrentTime = formatTime(currentTime);

        for (int i = 0; i < this.vehicles.length; i++) {
            for (int j = 0; j < this.vehicles[i].length; j++) {
                Vehicle v = this.vehicles[i][j];
                if (v != null && v.getPlate().equals(plate)) {
                    int diffTime = currentTime.minusNanos(v.getEnterTime().getNano()).getNano();
                    double totalPrice = diffTime >= 5 ? 5 * PRICE_PER_HOUR : diffTime * PRICE_PER_HOUR;
                    System.out.println(formattedCurrentTime + ": The vehicle " + v + " left the parking row " + i + " column " + j + " the price is " + totalPrice + "$");
                    this.vehicles[i][j] = null;
                    return new int[]{i, j};
                }
            }
        }

        return new int[]{-1, -1};
    }

    public void show() {
        int rows = this.vehicles.length;
        int cols = this.vehicles[0].length;

        System.out.println("---".repeat(cols + 1) + "-");

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                Vehicle v = this.vehicles[i][j];
                String val = (v == null ? "🅿️" : v.getType() == VehicleType.CAR ? "🚗" : "🏍️");
                String end = (j == cols - 1 ? "|\n" : "");
                System.out.print("|" + val + end);
            }

            System.out.println("---".repeat(cols + 1) + "-");
        }
    }

    private static String formatTime(LocalDateTime t) {
        String tAsStr = t.toString();
        return tAsStr.substring(tAsStr.indexOf('T') + 1, tAsStr.lastIndexOf('.'));
    }
}
