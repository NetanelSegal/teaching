import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Date;

public class TestParkingLot {
    public static void main(String[] args) {
//        System.out.println("Testing parking lot");
//        Date d = new Date();

//        LocalDateTime now = LocalDateTime.now();
//        LocalDateTime later = LocalDateTime.of(2025, 12, 18, 14, 0);
//        System.out.println(later.minusHours(now.getHour()).getHour());

        ParkingLot parkingLot = new ParkingLot(2, 10);
        parkingLot.show();
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234567", VehicleType.CAR))));
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234568", VehicleType.CAR))));
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234570", VehicleType.MOTORCYCLE))));
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234571", VehicleType.MOTORCYCLE))));
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234572", VehicleType.MOTORCYCLE))));
        System.out.println("Returned: " + Arrays.toString(parkingLot.enter(new Vehicle("1234573", VehicleType.MOTORCYCLE))));
        parkingLot.show();

        System.out.println("Returned: " + parkingLot.enterSpecific(new Vehicle("1234570", VehicleType.MOTORCYCLE), 0, 2));
        parkingLot.show();


        System.out.println("Returned: " + Arrays.toString(parkingLot.exit("1234567")));

    }
}

