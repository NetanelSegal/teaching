package singleplayer;

import java.util.Random;
import java.util.Scanner;

public class Game {
    final static int MAX_ATTEMPTS = 25;
    
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter your name");
        String name = in.nextLine();
        Player p = new Player(name);

        System.out.println("\n🎯 Welcome to the Guessing Game!");
        System.out.println("Try to guess the number between 1 and 100");

        System.out.println("\n🔥 " + p.getName() + ", your game has started!");
        int secretNumber = new Random().nextInt(100) + 1;

        while (p.getAttempts() < MAX_ATTEMPTS) {
            System.out.print("➡️ " + p.getName() + ", enter your guess: ");
            int guess = in.nextInt();
            p.incrementAttempts();

            if (guess == secretNumber) {
                System.out.println("🎉 Congratulations, " + p.getName() + "! You guessed the number in " + p.getAttempts() + " attempts!");
                break;
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
