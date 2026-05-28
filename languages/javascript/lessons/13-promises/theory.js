/**
 * Theory: Promises
 * 
 * A Promise is an object that will produce a value in the future.
 */

// 1. Creating a Basic Promise
console.log("--- 1. Creating a Promise ---");
const pizzaPromise = new Promise((resolve, reject) => {
    const isKitchenOpen = true;

    console.log("Cooking pizza...");
    
    setTimeout(() => {
        if (isKitchenOpen) {
            resolve("🍕 Here is your Pizza!");
        } else {
            reject("🏠 Sorry, the kitchen is closed.");
        }
    }, 2000);
});


// 2. Consuming the Promise
console.log("--- 2. Consuming the Promise ---");
pizzaPromise
    .then((message) => {
        console.log("Resolved:", message);
    })
    .catch((error) => {
        console.log("Rejected:", error);
    })
    .finally(() => {
        console.log("Transaction finished.");
    });


// 3. Promise Chaining
console.log("\n--- 3. Promise Chaining ---");
function stepOne() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 1000);
    });
}

stepOne()
    .then(result => {
        console.log("Step 1 result:", result);
        return result * 2; // Returns a new resolved promise with value 20
    })
    .then(result => {
        console.log("Step 2 result:", result);
        return result + 5;
    })
    .then(result => {
        console.log("Final result:", result);
    });


// 4. The "Wait" Utility (Essential Pattern)
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

wait(3000).then(() => console.log("Waited 3 seconds!"));
