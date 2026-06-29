package Week1.FactoryMethodPatternExample;

public class PdfDocument implements Document {
    @Override
    public void open(){
        System.out.println("PDF Document is opened");
    }
}