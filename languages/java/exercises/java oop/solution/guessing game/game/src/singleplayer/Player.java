package singleplayer;

public class Player {

    private static int idCounter = 1;
    private int id;
    private String name;
    private int attempts;

    public Player(String name) {
        this.id = idCounter++;
        this.name = name;
        this.attempts = 0;
    }

    public void incrementAttempts() {
        attempts++;
    }

    public int getAttempts() {
        return attempts;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}

