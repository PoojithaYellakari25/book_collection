import { Add_Book, Update_Book,Delete_Book, Set_Progress,Search_By_Book,Search_By_Author,Search_By_Date,RESET_SEARCH } from './LibraryActions';

const email=localStorage.getItem('currentUser');
let users=JSON.parse(localStorage.getItem('users')||'[]');
console.log(email);
if (!Array.isArray(users)) {
    users = [];
}
console.log(users);
const verified=users.find(user=> user.email==email );
console.log(verified);
let initialState=[];
if(verified && verified.books){
    initialState=verified.books;
}

export const bookReducer = (state=initialState,action) => {
    switch(action.type){
        case Add_Book:
            const newBook = {
                ...action.payload,
                id: Date.now(),
            };
            const newBooksAfterAdd = [...state, newBook];
            const updatedUsers = users.map(user => {
                if (user.email === email && user.books) {
                        console.log(...user.books);
                        console.log(newBook);
                    return {
                        ...user,
                        books: [...user.books, newBook]
                    };
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return newBooksAfterAdd;
        case Update_Book:
            const { id, book } = action.payload;
            if(Array.isArray(state)){
                const updatedBooks = state.map((currentBook) => {
                    if (currentBook.id === id) {
                        return {
                            ...currentBook,
                            ...book,
                        };
                    }
                    return currentBook;
                });
                const updatedUsers = users.map(user => {
                    if (user.email === email && user.books && user.books.id===id) {
                        console.log([...user]);
                        console.log(...user.books);
                        console.log(updatedBooks);
                        return {
                            ...user,
                            books: [...user.books, updatedBooks]
                        };
                    }
                    return user;
                });
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                return updatedBooks;
            }else{
                const updatedBooks = state.books.map((currentBook) => {
                    if (currentBook.id === id) {
                        return {
                            ...currentBook,
                            ...book,
                        };
                    }
                    return currentBook;
                });
                const updatedUsers = users.map(user => {
                    if (user.email === email && user.books && user.books.id===id) {
                        console.log([...user]);
                        console.log(...user.books);
                        console.log(updatedBooks);
                        return {
                            ...user,
                            books: [...user.books, updatedBooks]
                        };
                    }
                    return user;
                });
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                return updatedBooks;
            }         
        case Delete_Book:
            if(Array.isArray(state)){
                const delete_book = state.filter((book) => book.id !== action.payload);
                localStorage.setItem('books', JSON.stringify(delete_book));
                return delete_book;
            }else{
                const delete_book = state.books.filter((book) => book.id !== action.payload);
                localStorage.setItem('books', JSON.stringify(delete_book));
                return delete_book;
            }
            
        case Set_Progress: 
            const {bookId,progress} =action.payload;
            if(Array.isArray(state)){
                const updatedProgress = state.map((book)=>{
                    console.log(bookId);
                    if (book.id === bookId){
                        return{
                            ...book,
                            currentPage:parseInt(progress)
                        }
                    }
                    return book;
                })
                console.log(updatedProgress);
                localStorage.setItem('books', JSON.stringify(updatedProgress));
                return updatedProgress; 
            }else{
                const updatedProgress = state.books.map((book)=>{
                    console.log(bookId);
                    if (book.id === bookId){
                        return{
                            ...book,
                            currentPage:parseInt(progress)
                        }
                    }
                    return book;
                })
                console.log(updatedProgress);
                localStorage.setItem('books', JSON.stringify(updatedProgress));
                return updatedProgress; 
            }
             
        case Search_By_Book:
            const bookQuery = action.payload.toLowerCase().trim();
            if(Array.isArray(state)){
                const booksByTitle = state.filter(book =>
                    book.name.toLowerCase().includes(bookQuery)
                );
                return { books:[...state], searchResults: booksByTitle.length > 0 ? booksByTitle : [] };
            }else{
                const booksByTitle = state.books.filter(book =>
                    book.name.toLowerCase().includes(bookQuery)
                );
                return { books:[...state.books], searchResults: booksByTitle.length > 0 ? booksByTitle : [] };
            }
        case Search_By_Author:
            const authorQuery = action.payload.toLowerCase().trim();
            if(Array.isArray(state)){
                const booksByAuthor = state.filter(book =>
                    book.author.toLowerCase().includes(authorQuery)
                );
                return { books:[...state], searchResults: booksByAuthor.length > 0 ? booksByAuthor : [] };
            }else{
                const booksByAuthor = state.books.filter(book =>
                    book.author.toLowerCase().includes(authorQuery)
                );
                return { books:[...state.books], searchResults: booksByAuthor.length > 0 ? booksByAuthor : [] };
            }
        case Search_By_Date:
            const yearQuery = parseInt(action.payload.trim());
            if(isNaN(yearQuery)) {
                if(Array.isArray(state)){
                    return state;
                }
                return state.books;
            }
            if(Array.isArray(state)){
                const booksByYear = state.filter(book => {
                    const bookYear = new Date(book.date).getFullYear();
                    return bookYear === yearQuery; 
                });
                return { books:[...state], searchResults: booksByYear.length > 0 ? booksByYear : [] };
            }else{
                const booksByYear = state.books.filter(book => {
                    const bookYear = new Date(book.date).getFullYear(); 
                    return bookYear === yearQuery; 
                });
                return { books:[...state.books], searchResults: booksByYear.length > 0 ? booksByYear : [] };
            }
        case RESET_SEARCH:
            return state;
        default:
            return state;
    }
}