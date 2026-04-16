package DS.Utils;

public class IntNode {
    private int val;
    IntNode next;

    public IntNode(int val) {
        this.val = val;
        this.next = null;
    }

    public IntNode(int val, IntNode next) {
        this.val = val;
        this.next = next;
    }

    public int getVal() {
        return val;
    }

    public void setVal(int val) {
        this.val = val;
    }

    public IntNode getNext() {
        return next;
    }

    public void setNext(IntNode next) {
        this.next = next;
    }

    @Override
    public String toString() {
        return val + " --> " + next;
    }
}
