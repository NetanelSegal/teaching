package multiplayer;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        System.out.print("Enter number of players: ");
        int numPlayers = in.nextInt();
        in.nextLine();

        while (numPlayers < 1) {
            System.out.println("\n" + numPlayers + " is not a valid input\n");
            System.out.print("Enter number of players: ");
            numPlayers = in.nextInt();
            in.nextLine();
        }

        Player[] players = new Player[numPlayers];

        for (int i = 0; i < numPlayers; i++) {
            System.out.print("Enter name for multiplayer.Player " + (i + 1) + ": ");
            String name = in.nextLine();
            players[i] = new Player(name);
        }

        Game game = new Game(players);
        game.play();

        Player bestPlayer = game.getWinner();
        if (bestPlayer != null) {
            System.out.println("\n🏆 Best multiplayer.Player: " + bestPlayer.getName() + " (ID: " + bestPlayer.getId() + ") with " + bestPlayer.getAttempts() + " attempts!");
        }
    }
}
