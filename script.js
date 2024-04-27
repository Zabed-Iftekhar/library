// logic for library app



let add=document.querySelector('#add');
let form=document.querySelector('#form');
let submit=document.querySelector('#submit');
let formDisplay=document.querySelector('.form-display-screen');




const library=[];


//Upon clicking submit, values of user input are taken 
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let author=document.querySelector('#author').value;
    let title=document.querySelector('#title').value;
    let pages=document.querySelector('#pages').value;


//Book constructor
    class Book{
        constructor(author,title,pages){
            this.author=author;
            this.title=title;
            this.pages=pages;
        }
    
    }

//Function addBookToLibrary is called
    addBookToLibrary();

//addBookToLibrary()creates a new book using the user input and Book constructor and adds it to the library 
    function addBookToLibrary(){
        let newBook=new Book(author,title,pages);
        library.push(newBook);
    }

//Calls displayBook()function to display the added books in library on the formDisplayScreen.
    displayBook()
    function displayBook(){


            library.forEach((book)=>{
                let div=document.createElement('div')
                div.innerText=JSON.stringify(book);
                formDisplay.appendChild(div);
                
            })
            
        
    }
})

