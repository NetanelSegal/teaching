// TODO: Import java.util.Random

class Mage extends GameCharacter implements Healable {
    // TODO: Create constructor that takes name and weapon
    // Call super() with name, 100 (HP), 20 (power), and weapon
    
    // TODO: Override attack() method with special logic:
    // - Generate random number 0-99
    // - If < 20: spell fails, return early
    // - If > 80: critical hit (double damage)
    // - Otherwise: normal attack
    // - Reduce target's HP and print damage
    
    // TODO: Implement heal() method from Healable interface
    // - Generate random heal amount (15-24)
    // - Increase this character's HP
    // - Print healing message
}
