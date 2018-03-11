# Plan for project stage
Project goal: Have a working library system with all basic functionality implemented. Basic functions are:
- View a book
- View a list of books
- Add a book
- Edit a book
- Delete a book
- Search a book by author or title (this one is optional)

Of the functions above, the view list of books, view book, and delete book are already implemented at this stage of development. Thus there are two functions that are imperative that they get finished, and then one that is optional, but needed for the project to feel complete. 

### Milestones:
Iteration 1 milestone: Get book (by id) implemented.

Iteration 2 milestone: Add book function fully implemented and tested.  

Iteration 3 milestone: Edit book function fully implemented and tested
Stretch Goal: Search for specific book fully implemented and tested, allowing search by both author and title.

### Iteration time plan
Iteration 1: 6 hours
Iteration 2: 6 hours
Iteration 3: 8 hours

## Iteration #1
Tasks in I1:
- Create use case diagram for project 30 minutes 
- Create sequence diagram for Get book by id function: 45 minutes
- Describe design: 30 minutes
- Write a test plan for I1: 30 minutes
- Write manual tests: 30 minutes
- Write unit tests for I1: 60 minutes
- Write code: 60 minutes
- Test functionality: 15 minutes
- Document process: 30 minutes
- Reflect: 30 minutes

### Design comments
The choice of designing the GetBookResource was not my original plan - after all, the function seems not to be used at all by the client, and as such seemed unneccessary. However, it dawned on me that while the function is not at this point useful for the API, I still need a function that does this job to be able to test the other functions properly, and so the most logical place to start would be this one, even though it makes a poorer example for some of the documentation needed for this course. 

### Test plan
This is probably when choosing this function may lead me to a failing grade - I don't really see a way of properly making manual tests for a function that is not used in the client API in any way that I can see. Thus, I can't make proper manual tests for this iteration.

### Unit tests 
Two unit tests seem logical for the implementation of this method. One to make sure that the id of the returned book is the one expected, and one checking that if an id that doesn't correspond to any book, then the function returns an empty object.

## Iteration #2
Tasks in I2:
- Review and update use case diagram for Add book function: 15 minutes
- Create sequence diagram for Add book function: 45 minutes
- Describe design: 30 minutes
- Write a test plan for I1: 30 minutes
- Write manual tests: 30 minutes
- Write unit tests for I1: 60 minutes
- Write code: 60 minutes
- Test functionality: 15 minutes
- Document process: 30 minutes
- Reflect: 30 minutes

## Design comments
The functionality to add a new book into the library systam database is a primary one of course. The API for this functionality specifies that the client will send a reqest with a json object to the server. This json object will on the server side be sent from books.js to the AddBookResource method, which in turn will fetch the current list of books, convert these into json format - functionality that is already in place from the GetBooksResource method - and add in the new book into this list. The book list will then be converted back into xml format - also in place from earlier stages of development, and write the expanded book list back to the file books.xml

### Test plan
In this iteration I want to make two manual test cases: One adding a new book with all fields filled out, and one adding a new book with no title or author given. The first should result in a book being added, but the second should not (title at least should be mandatory, though author could be implemented to setting a default of unknown if none is provided). 

### Unit tests
Two unit tests should be implemented, one to check that AddBookResource actually creates a book with the correct id, and one to check that no book is created if input lacks title. 


## Iteration #3
Tasks in I3:
- Review and update use case diagram for Edit book functionality: 15 minutes
- Create sequence diagram for Edit book functionality: 60 minutes
- Describe design: 30 minutes
- Write a test plan for I1: 30 minutes
- Write manual tests: 60 minutes
- Write unit tests for I1: 60 minutes
- Write code: 120 minutes
- Test functionality: 15 minutes
- Document process: 30 minutes
- Reflect: 30 minutes


