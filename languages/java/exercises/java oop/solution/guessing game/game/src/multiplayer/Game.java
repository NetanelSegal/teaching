package multiplayer;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Game {
    private static final int MAX_ATTEMPTS = 25;
    private Player[] players;

    public Game(Player[] players) {
        this.players = players;
    }

    public void play() {
        Scanner in = new Scanner(System.in);
        System.out.println("\n🎯 Welcome to the Guessing Game!");
        System.out.println("Try to guess the number between 1 and 100 in a maximum of " + MAX_ATTEMPTS + " attempts.");

        for (Player p : players) {
            System.out.println("\n🔥 " + p.getName() + " (ID: " + p.getId() + "), your game has started!");
            int secretNumber = new Random().nextInt(100) + 1;

            while (p.getAttempts() < MAX_ATTEMPTS) {
                System.out.print("➡️ " + p.getName() + ", enter your guess: ");
                int guess = in.nextInt();
                p.incrementAttempts();

                if (guess == secretNumber) {
                    System.out.println("🎉 Congratulations, " + p.getName() + "! You guessed the number in " + p.getAttempts() + " attempts!");
                    break; // Move to next player
                }

                if (guess > secretNumber) {
                    System.out.println("🔽 Lower!");
                } else {
                    System.out.println("🔼 Higher!");
                }
            }

            if (p.getAttempts() >= MAX_ATTEMPTS) {
                System.out.println("❌ Sorry, " + p.getName() + ", you've reached the max attempts. The correct number was " + secretNumber);
            }
        }
    }

    public Player getWinner() {
        System.out.println(Arrays.toString(players));
        Player winner = this.players[0];

        for (int i = 1; i < players.length; i++) {
            if (players[i].getAttempts() < winner.getAttempts()) {
                winner = players[i];
            }
        }

        return winner;
    }

    public Player[] getLeaderboard(){
        return null;
    }
}
