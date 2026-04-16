import java.time.LocalDateTime;

public class Vehicle {
    private String plate;
    private VehicleType type;
    private LocalDateTime enterTime;

    public Vehicle(String plate, VehicleType type) {
        this.plate = plate;
        this.type = type;
    }

    @Override
    public String toString(){
        return "Plate: [" + this.plate + "], Type: [" + this.type + "]";
    }

    public String getPlate() {
        return plate;
    }

    public VehicleType getType() {
        return type;
    }

    public void setType(VehicleType type) {
        this.type = type;
    }

    public LocalDateTime getEnterTime() {
        return enterTime;
    }

    public void setEnterTime(LocalDateTime enterTime) {
        this.enterTime = enterTime;
    }
}


