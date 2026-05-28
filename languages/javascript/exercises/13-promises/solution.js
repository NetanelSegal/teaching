// Solution 1
const successPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

successPromise.then((result) => console.log(result));

// Solution 2
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");
    }, 1000);
});

errorPromise.catch((error) => console.error(error));
