
const addBox = document.getElementById('addBox');
const addBtn = document.getElementById('addBtn');
const ul = document.querySelector('ul');
const lis= document.querySelectorAll('li');
const removeKeys = document.querySelectorAll('span.remove');
const chkB = document.getElementById("chkb");
const srchBox = document.getElementById("srchBox");

// var newBook;
// addBox.oninput= function(){
//     newBook = addBox.value;
// }
addBtn.addEventListener('click', function(e){
    // if(addBox.value !== ""){
    const spanTitle = document.createElement('span');
    spanTitle.className = 'title';
    spanTitle.innerHTML = addBox.value;
    const spanRemove = document.createElement('span');
    spanRemove.className = 'remove';
    spanRemove.innerHTML = 'remove';
    const newLi = document.createElement('li');
    newLi.appendChild(spanTitle);
    newLi.appendChild(spanRemove);
    ul.appendChild(newLi);
    storeToLocalStorage(addBox.value);
    addBox.value = "";
    e.preventDefault();
    // }
});
function storeToLocalStorage(bookName){
    let books;
    if(localStorage.getItem("book list") === null){
        books = [];
    }else{
        books = localStorage.getItem('book list').split(',');
    }
    books.push(bookName);
    localStorage.setItem("book list", books);
}

document.addEventListener('DOMContentLoaded',function(){
    let books;
    if(localStorage.getItem("book list") === null){
        books= [];
    }else{
        books = localStorage.getItem('book list').split(',');
    }
    for(let item of books){
        let spanName = document.createElement('span');
        spanName.className = "title";
        spanName.innerHTML = item;
        let spanRemove = this.createElement('span');
        spanRemove.className= "remove";
        spanRemove.innerHTML = "remove";
        let newLi = this.createElement('li');
        newLi.appendChild(spanName);
        newLi.appendChild(spanRemove);
        ul.appendChild(newLi);
    }
})

ul.addEventListener('click', function(e){
    if(e.target.className == "remove"){ 
        e.target.parentElement.remove();

        let remName = e.target.parentElement.children[0].textContent;
        removeFromLocalStorage(remName);
    }
});

function removeFromLocalStorage(remItem){
    let books;
    if(localStorage.getItem("book list") === null){
        books= [];
    }else{
        books = localStorage.getItem('book list').split(',');
    }
    for(let i=0; i< books.length; i++){
        if(books[i] === remItem){
            books.splice(i, 1);
        }
    }
    
    if(localStorage.length === 0){
        localStorage.clear();
    }else{
        localStorage.setItem("book list", books);
    }
}

chkB.addEventListener('change', function(e){
    if(chkB.checked == true){
        ul.style.display = 'none';
    }else{
        ul.style.display = 'block';
    }
})

srchBox.addEventListener('keyup', function(){
    for(let book of ul.children){
        console.log(book.firstElementChild);
        if(book.firstElementChild.textContent.indexOf(srchBox.value) === -1){
            book.style.display= 'none';
        }else{
            book.style.display = 'block';
        }
    }
})

