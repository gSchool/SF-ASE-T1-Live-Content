genres = [{
    typeOfGenre: "Fiction",
},
{
    typeOfGenre: "Non-Fiction"
},
{
    typeOfGenre: "Education"
},
{
    typeOfGenre: "Biography"
},
{
    typeOfGenre: "Children"
}]

authors = ["J.K. Rowling", "Stephen King", "L. E. Modesitt Jr.", "J.R.R. Tolkein", "John Steinbeck"];
ISBN = [2, 3, 4, 5, 6, 7, 8, 9, 10];
prices = [{
    ISBN: ISBN[0],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[2],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[1],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[3],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[4],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[5],
    price: 10,
    modifier: 0
},
{
    ISBN: ISBN[6],
    price: 10,
    modifier: 0
}];

books = [{
    ISBN: ISBN[0],
    title: "Harry Potter and the Sorcerer's Stone",
    author: authors[0],
    genre: genres[0].typeOfGenre
},
{
    ISBN: ISBN[1],
    title: "Of Mice and Men",
    author: authors[4],
    genre: genres[0].typeOfGenre
},
{
    ISBN: ISBN[2],
    title: "The Order War",
    author: authors[2],
    genre: genres[0].typeOfGenre
},
{
    ISBN: ISBN[3],
    title: "The Shining",
    author: authors[1],
    genre: genres[0].typeOfGenre

},
{
    ISBN: ISBN[4],
    title: "Carrie",
    author: authors[1],
    genre: genres[0].typeOfGenre

},
{
    ISBN: ISBN[5],
    title: "It",
    author: authors[1],
    genre: genres[0].typeOfGenre

},
{
    ISBN: ISBN[6],
    title: "The Lord of the Rings",
    author: authors[3],
    genre: genres[0].typeOfGenre

}];

function getAllTitlesAndPrices(inputArray, priceArray) {
    let result = [];
    for (const book of inputArray) {

        let correctPrice;
        for (const price of priceArray) {
            if (book.ISBN === price.ISBN) correctPrice = price;
        }

        if (book.title && correctPrice.price) result.push({ title: book.title, price: correctPrice.price });
    }
    return result;
}

function printAllTitlesAndPrices(inputArray) {
    console.log(
        `==========
List of Titles and Prices:
===`);
    for (const book of inputArray) {
        console.log(book.title, book.price)
    }
    console.log(
        `==========`);
}
printAllTitlesAndPrices(getAllTitlesAndPrices(books, prices))

function findBooksByAuthor(author, titlesArray) {
    let booksBy = [];
    for (const book of titlesArray) {
        if (book.author === author && book.title) booksBy.push(book.title)
    }
    return booksBy
}

console.log(
    `----------
 List of Specific Author Books:
 ---
 ${findBooksByAuthor("Stephen King", books)}
 ----------`)