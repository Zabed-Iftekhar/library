// logic for library app


let add=document.querySelector('#add');
let submit=document.querySelector('#submit');
let displayContainer=document.querySelector('.display-container');
let formDisplay=document.querySelector('.form-display-screen');
let reset=document.querySelector('#reset');
let read=document.querySelector('#read');
let notRead=document.querySelector('#not-read');
let libraryContainer=document.querySelector('.library-container');
let formContainer=document.querySelector('.form-container');
let readStatus;

read.addEventListener('click',()=>{
    readStatus="Read";
})

notRead.addEventListener('click',()=>{
    readStatus="Not Read";
})


const library=[];

checkLibrary();


add.addEventListener('click',(event)=>{
    event.preventDefault()
    
    let author=document.querySelector('#author').value;
    let title=document.querySelector('#title').value;
    let pages=document.querySelector('#pages').value;
 


    class Book{
        constructor(author,title,pages,read){
            this.author=author;
            this.title=title;
            this.pages=pages;
            this.read=read;
        }
    
    }
    

    addBookToLibrary();

//addBookToLibrary()creates a new book using the user input and Book constructor and adds it to the library 
    function addBookToLibrary(){
        let newBook=new Book(author,title,pages,readStatus);
        library.push(newBook);
        console.log(library)
    }

    alert('Book added')

})
    submit.addEventListener('click',(event)=>{
            event.preventDefault();
            formDisplay.innerText="";
            formContainer.style.cssText=`display:grid;
            grid-template-columns:1fr;`
        
            formDisplay.style.cssText=`display:grid;
            grid-template-columns:repeat(auto-fit,minmax(100px,1fr))
            grid-gap:10px;`

    displayBook()
    function displayBook(){

        
            library.forEach((book)=>{
                let div=document.createElement('div');
                let changeReadStatus=document.createElement('button'); // Button that changes the status the book
                let checkReadStatus=book.read;   //Variable that takes read status of book
                changeReadStatus.style.cssText=`
                color: black;
                border-radius: 3px;
                border: none;
                padding:5px 12px;`

                changeStatusColor()
                function changeStatusColor(){
                    if (checkReadStatus==="Read"){
                        changeReadStatus.innerText="Read"
                        changeReadStatus.style.cssText+=' border: 2px solid hsl(141, 100%, 40%);background-color: hsl(141, 100%, 70%);color: hsl(141, 100%, 20%);'
                        
                        changeReadStatus.addEventListener('click',()=>{
                            changeReadStatus.innerText="Not Read"
                            changeReadStatus.style.cssText+=' border: 2px solid hsl(0, 100%, 40%);background-color: hsl(0, 100%, 70%);color: hsl(0, 8%, 95%);'
                            book.read="Not Read"

                        })

                    
                    }


                    else if (checkReadStatus==="Not Read"){
                        changeReadStatus.innerText="Not Read"
                        changeReadStatus.style.cssText+=' border: 2px solid hsl(0, 100%, 40%);background-color: hsl(0, 100%, 70%);color: hsl(0, 8%, 95%);'
                    
                        changeReadStatus.addEventListener('click',()=>{
                            changeReadStatus.innerText="Read"
                            changeReadStatus.style.cssText+=' border: 2px solid hsl(141, 100%, 40%);background-color: hsl(141, 100%, 70%);color: hsl(141, 100%, 20%);'
                            book.read="Read"
                        })
                    
                    }

                }
                   
                
                
                // Create button to delete individual book
                
                let deleteButton=document.createElement('button');
                deleteButton.innerText="Delete Book";
                deleteButton.setAttribute("id","deletebutton");
                deleteButton.addEventListener('click',()=>{
                    formDisplay.removeChild(div);
                })
       
            
                div.innerText=`Author: ${book.author} \nTitle: ${book.title} \nNo.of pages:${book.pages} \nRead Status: ${book.read}`
             
                div.style.cssText=`
                    border: 1px solid lavender;
                    width: 100px;
                    height: 150px;
                    border-radius:10px;
                    font-size: 12px;
                    display: grid;
                    padding: 12px;
                    line-height: 1.1;
                    align-content: stretch;
                    justify-content: center;
                    align-items: center;
                    box-shadow:0px 3px 8px 0px grey`
                
                
                    
                // div.innerHTML+=`<button onclick=deleteButton() id="deletebutton">Delete</button`;
                
                div.appendChild(changeReadStatus);
                div.appendChild(deleteButton);
                formDisplay.appendChild(div);
                

            })
            
    }
})



//Resets the library using the splice() method on the library array.
reset.addEventListener('click',(event)=>{
    event.preventDefault()
    library.splice(0,library.length)
    alert("Library has been reset")
    
    libraryContainer.style.cssText="margin-left:40px;"
    formDisplay.innerText="";
    formDisplay.style.cssText="display=none";
})



//Function to check if Library is empty 

function checkLibrary(){
    if (library.length===0){
        formDisplay.style.cssText="display:none";
    }
}

