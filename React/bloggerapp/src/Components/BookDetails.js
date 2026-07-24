import React from "react";

export const books = [
    {
        id:101,
        name:"Master React",
        price:670
    },
    {
        id:102,
        name:"Deep Dive into Angular 11",
        price:800
    },
    {
        id:103,
        name:"Mongo Essentials",
        price:450
    }
];

function BookDetails() {

    const bookdet = (
        <ul>
            {
                books.map((book)=>(
                    <div key={book.id}>
                        <h3>{book.name}</h3>
                        <h4>{book.price}</h4>
                    </div>
                ))
            }
        </ul>
    );

    return(
        <div>
            <h1>Book Details</h1>
            {bookdet}
        </div>
    );
}

export default BookDetails;