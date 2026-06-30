package Week1.EcommerceSearch;

public class TestSearch {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101,"Laptop","Electronics"),
                new Product(102,"Phone","Electronics"),
                new Product(103,"Shoes","Fashion"),
                new Product(104,"Watch","Accessories"),
                new Product(105,"Bag","Fashion")
        };

        int targetId = 104;

        System.out.println("Linear Search:");

        Product result1 =
                SearchOperations.linearSearch(products,targetId);

        System.out.println(result1);

        System.out.println();

        System.out.println("Binary Search:");

        Product result2 =
                SearchOperations.binarySearch(products,targetId);

        System.out.println(result2);
    }
}