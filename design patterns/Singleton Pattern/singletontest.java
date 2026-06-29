package Week1.SingletonPatternExample;

public class TestLogger {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();
        l1.log("first Logger");
        l2.log("second Logger");
        System.out.println("Same instance? = "+(l1==l2));
    }
}
