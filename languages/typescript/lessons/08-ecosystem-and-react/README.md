# Lesson 08: Ecosystem & React Integration

## Goal
Learn how to apply TypeScript to a React environment, typing components, props, hooks, and external libraries.

## The "Why?" (The Hook)
In a vanilla React project, you might pass a `user` object to a component, but forget that the component expects `user.firstName` while you are passing `user.name`. React won't warn you; it will just render nothing or crash.

With TypeScript, your **Props** are strictly typed. Your IDE will highlight the error in red before you even save the file.

---

## Theory: React + TS

### 1. Typing Component Props
Use an interface to define the props of a component.
```tsx
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return <button onClick={onClick} disabled={disabled}>{label}</button>;
};
```

### 2. Typing Hooks
*   **`useState`**: Often inferred, but can be explicit for complex types.
    ```tsx
    const [user, setUser] = useState<User | null>(null);
    ```
*   **`useRef`**: Specify the DOM element type.
    ```tsx
    const inputRef = useRef<HTMLInputElement>(null);
    ```

### 3. Event Types
React provides built-in types for events.
```tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};
```

### 4. The Ecosystem (`@types`)
Many libraries are written in JS. To use them in TS, we install "Declaration Files" from DefinitelyTyped.
```bash
npm install @types/lodash --save-dev
```

---

## Hebrew Summary (סיכום)
*   **React + TS**: השילוב שמאפשר לנו לוודא שה-Props שאנחנו מעבירים לקומפוננטות הם נכונים.
*   **Hooks Typing**: הגדרת סוג הנתונים בתוך `useState` או `useRef` כדי למנוע טעויות לוגיות.
*   **Declaration Files (קובצי הצהרה)**: קבצים עם סיומת `.d.ts` שמסבירים ל-TS איך להשתמש בספריות שנכתבו ב-JS.

## External Resources
*   [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
