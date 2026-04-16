public class Fruit {
    String color, taste;
    boolean hasGarinim;
    double waight;

    public Fruit(String color, String taste, boolean hasGarinim, double waight){
        this.waight = waight;
        this.color = color;
        this.taste = taste;
        this.hasGarinim = hasGarinim;
    }

    public void rotten(){
        this.taste = "shit";
    }

}
