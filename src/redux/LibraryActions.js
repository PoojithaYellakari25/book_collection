export const Add_Book = 'add_book';
export const Delete_Book = 'delete_book';
export const Update_Book = 'update_book';
export const Set_Progress = 'set_progress';
export const Search_By_Book='search_book';
export const Search_By_Author ='search_author';
export const Search_By_Date = 'search_date';
export const RESET_SEARCH = 'reset_search';

export const addBook = (book) =>({
    type: Add_Book,
    payload:book
})

export const updateBook = (book,id) => ({
    type:Update_Book,
    payload:{book,id}
})
export const deleteBook = (id) => ({
    type:Delete_Book,
    payload:id,
})
export const setReadingProgess = (bookId,progress) => ({
    type:Set_Progress,
    payload : {bookId,progress}
})
export const searchByBook = (bookName) => ({
    type:Search_By_Book,
    payload:bookName
})
export const searchByAuthor = (authorName) => ({
    type:Search_By_Author,
    payload:authorName
})
export const searchByDate = (publishingDate) => ({
    type:Search_By_Date,
    payload:publishingDate
})

export const resetSearch = () => ({
    type: RESET_SEARCH
});