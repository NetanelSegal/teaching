# Lesson 6: Forms & Input Events 📝

## Goal
Master the interaction between JavaScript and HTML forms. Learn how to capture user input, perform live validation, and handle submissions using modern APIs.

## Hook 🪝
Forms are the primary way users communicate with your application—whether they're signing up, searching for a product, or writing a post. But raw HTML forms are "dumb"; they just refresh the page. By adding JavaScript, you can create "smart" forms that give instant feedback (like a password strength meter) and send data behind the scenes without ever refreshing the page.

## Theory 📚

### 1. The `input` vs. `change` Events
- **`input`**: Fires **every time** the value changes (as the user types). Perfect for live validation or search filters.
- **`change`**: Fires when the element **loses focus** after being changed (or when a checkbox/radio is toggled).

### 2. Form Submission (`submit`)
The most important event for forms. Always use `e.preventDefault()` to stop the browser's default "refresh and send" behavior, allowing JS to handle the data.

### 3. Extracting Data: The `FormData` API
Instead of selecting every input one by one, use `new FormData(formElement)`. 
- `formData.get('name')`: Gets a single value.
- `Object.fromEntries(formData)`: Converts the whole form into a clean JS object.

### 4. Input Types & Values
- **Text/Email**: `input.value`
- **Checkboxes**: `input.checked` (returns true/false)
- **Select/Dropdown**: `select.value`

## Lab 🧪
Open `lab/index.html` and complete the missions in `lab/exercises.js`. You will build a live character counter, a password validator, and a dynamic registration form!

## External Resources
- [Forms: Properties and Methods](https://javascript.info/form-elements)
- [Focusing: focus/blur](https://javascript.info/focus-blur)
- [Forms: submit event and method](https://javascript.info/forms-submit)
