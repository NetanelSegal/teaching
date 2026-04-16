# Data Structures & OOP Exercises

This folder contains exercises and implementations for fundamental Data Structures and Object-Oriented Programming (OOP) concepts in Java, with a primary focus on Linked Lists.

## Data Structures Provided (in `src/DS/`)
- **`Node<T>`**: A generic node class for a singly linked list.
- **`IntNode` / `CharNode`**: Specific node classes for integers and characters.
- **`NodeList`**: A utility class containing static methods for manipulating linked lists (e.g., `printReverse`, `addAt`, `addElementsAt`, `arrayToList`).

## Linked List Exercises (NodeList Questions)
Implement the following Java functions. You can use the generic `Node<T>` or the specific `IntNode` class for these tasks:

1. **Append Element**: Write a function that appends a specified element to the end of a linked list.
2. **Print Elements**: Write a function that iterates and prints all elements in a linked list.
3. **Print from Position**: Write a function that iterates and prints all elements in a linked list starting at a specified position.
4. **Print Reverse**: Write a function that prints through a linked list in reverse order. *(See `printReverse` in `NodeList.java` for inspiration)*.
5. **Insert at Position**: Write a function that inserts a specified element at a given position in a linked list.
6. **Insert First/Last**: Write a function that inserts elements into the linked list at the first and last positions.
7. **Insert Multiple Elements**: Write a function that inserts multiple elements from an array at a specified position in a linked list.
   - **Signature**: `public static Node addElements(Node head, int[] arr, int index);`
8. **Find Occurrences**: Write a function that retrieves the first and last occurrences of a specified element in a linked list.
9. **Display with Positions**: Write a function that displays elements and their positions (indices) in a linked list.
10. **Remove Element**: Write a function that removes a specified element from a linked list.
11. **Remove First/Last**: Write a function that removes the first and last elements from a linked list.
12. **Swap Elements**: Write a function that accepts the head of a linked list and two indices, and swaps the two elements.
13. **Copy List**: Write a function that copies a linked list into a new linked list.
14. **Element Exists**: Write a function that checks if a particular element exists in a linked list.
15. **Convert to Array**: Write a function that converts a linked list to an array/ArrayList.
16. **Compare Lists**: Write a function that compares two linked lists for equality.
17. **Replace Element**: Write a function that replaces an element in a linked list.
