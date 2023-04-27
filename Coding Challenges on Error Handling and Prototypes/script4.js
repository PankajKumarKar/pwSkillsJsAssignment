/*
4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books,and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.
*/

const books=[
    {title:"ABC",author:"Z",year:"2012"},
    {title:"XYZ",author:"y",year:"2016"},
    {title:"KBC",author:"j",year:"2014"},
    {title:"RNC",author:"x",year:"2013"}
]

function list(arr,newList){
    newArr=arr.map(book=>book.title);

    newList(newArr);
}

function newList(newArr){
    sortArr=newArr.sort();
    console.log(sortArr);
}

list(books,newList);