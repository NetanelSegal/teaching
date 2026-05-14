/**
 * Lab: Traversal & Manipulation Exercises
 * Refer to index.html for the structure.
 */

// MISSION 0: Profile Editor (Manipulating Existing) 🛠️
// 1. Select the #profile-name, #profile-status, and the #update-profile-btn.
// 2. When #update-profile-btn is clicked:
//    - Change the text of #profile-name to your own name.
//    - Change the text of #profile-status to "Status: Online".
//    - Change the color of the #profile-status element to "green".
// 3. Select #toggle-theme-btn and #profile-card.
// 4. When #toggle-theme-btn is clicked:
//    - Toggle a background color style or a class on #profile-card.
// TODO: your code here


// MISSION 1: Dynamic Fruit List 🍎
// 1. Select the <ul> (#fruit-list) and the button (#add-fruit-btn).
// 2. When the button is clicked:
//    - Create a new <li> element using document.createElement().
//    - Set its text to a random fruit from the array below.
//    - Append it to the list.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// TODO: your code here


// MISSION 2: User Profiles (Template Literals) 👤
// 1. Select the #user-container and #generate-user-btn.
// 2. When clicked, use innerHTML (+=) to inject a card with this structure:
/*
    <div class="user-card">
        <h3>User: John Doe</h3>
        <p>Role: Developer</p>
    </div>
*/
// TODO: your code here


// MISSION 3: Social Feed (Traversal & Removal) 🗑️
// 1. Select ALL buttons with the class 'delete-btn'.
// 2. Loop through them and add a click event listener to each.
// 3. When clicked:
//    - Use .closest('.post-item') to find the parent post.
//    - Remove that post from the DOM.
// TODO: your code here
