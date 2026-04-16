package DS.Utils;

public class CharNode {
    private char val;
    CharNode next;

    public CharNode(char val) {
        this.val = val;
        this.next = null;
    }

    public CharNode(char val, CharNode next) {
        this.val = val;
        this.next = next;
    }

    public char getVal() {
        return val;
    }

    public void setVal(char val) {
        this.val = val;
    }

    public CharNode getNext() {
        return next;
    }

    public void setNext(CharNode next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return val + " --> " + next;
    }
}
