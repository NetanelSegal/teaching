package DS;

import DS.Utils.IntNode;
import DS.Utils.Node;

public class NodeList {
    public static <T> void printReverse(Node<T> head) {
        if (head == null) return;
        printReverse(head.getNext());
        System.out.println(head.getVal());
    }

    public static <T> Node<T> addAt(Node<T> head, int index, T value) {
        if (index == 0) {
            return new Node<>(value, head);
        }


        Node<T> current = head;
        int i = 0;
        while (current != null) {
            i++;
            if (i == index) {
                current.setNext(new Node<>(value, current.getNext()));
                return head;
            }
            current = current.getNext();
        }
        System.out.println("Index out of bounds not added");
        return head;
    }

    public static <T> Node<T> addElementsAt(Node<T> head, T[] values, int index) {
        if (values == null || values.length == 0) {
            return head;
        }
        Node<T> headListToAdd = new Node<>(values[0]);
        Node<T> tmpListToAdd = headListToAdd;
        for (int i = 1; i < values.length; i++) {
            tmpListToAdd.setNext(new Node<>(values[i]));
            tmpListToAdd = tmpListToAdd.getNext();
        }

        if (index == 0) {
            tmpListToAdd.setNext(head);
            return headListToAdd;
        }

        Node<T> tmpOriginalList = head;
        for (int i = 1; tmpOriginalList != null; i++) {
            if (i == index) {
                tmpListToAdd.setNext(tmpOriginalList.getNext());
                tmpOriginalList.setNext(headListToAdd);
                return head;
            }

            tmpOriginalList = tmpOriginalList.getNext();
        }

        System.out.println("Index out of bound of list");

        return head;
    }

    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3};
        Node<Integer> res = arrayToList(arr);
        System.out.println(res);
    }

    public static <T> Node<T> arrayToList(T[] arr) {
        Node<T> head = null;
        Node<T> curr = null;
        for (int i = 0; i < arr.length; i++) {
            if (head == null) {
                curr = head = new Node<>(arr[i]);
            } else {
                curr.setNext(new Node<>(arr[i]));
                curr = curr.getNext();
            }
        }
        return head;
    }
}
