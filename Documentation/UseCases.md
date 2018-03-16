# Use cases

## List of use cases. 
Use cases for the scope of this project:
1. User wants to list all the books in the library
2. User wants to add new book
3. User wants to find book(s) with a certain title
4. User wants to find all books by a certain author
5. User wants to delete book
6. User wants to change details of book

## Use Case 1
User wants to list all the books in the library

### Precondition
User is on main library page, without any books listed

### Postcondition
User is on books page with books listed

### 1.1 Main Scenario
1. User clicks on Books
2. Page changes yo books page, and displays book list from database

### Secondary Scenarios
#### 1.2 There are no books in database
1. User clicks on books
2. Page changes to books page, but no books are shown

## Use Case 2
User wants to add new book

### Precondition
User is on main page

### Postcondition
User is on books page, books listed including the one added

### 2.1 Main Scenario
1. User clicks on books
2. User clicks on New Book
3. User fills in form
4. User clicks on Save
5. System displays books page, with newly added book in list

### Secondary Scenarios
#### 2.2 User doesn't fill in title
1. User clicks on books
2. User clicks on New Book
3. User fills in form, but not title field
4. User clicks on Save
5. System displays books page, without any changes

## Use Case 3
User wants to find book(s) with a certain title

### Precondition
User is on main page

### Postcondition
User is on books page, wich lists the books that has the sought-after title

### 3.1 Main Scenario
1. User clicks in search field
2. User types title
3. User clicks Submit
4. System displays book page, with list of books with that title

### Secondary Scenarios
#### 3.2 No books with that title are in the database
1. User clicks in search field
2. User types title
3. User clicks Submit
4. System displays book page, without any books listed

## Use Case 4
User wants to find book(s) by a certain author

### Precondition
User is on library main page

### Postcondition
List of Neil Gaiman novels is displayed on the page

### 4.1 Main Scenario
1. The person types in "Neil Gaiman" into the search field
2. A list of Neil Gaiman novels appears
3. User clicks on titles and reads about them
4. User finds a book to read

### Secondary Scenarios
#### 4.2 User spells search words wrong
1. System returns empty list.
2. User corrects spelling and searches again
#### 4.3 System contains no books by chosen author
1. System returns empty list.

## Use Case 5
User wants to delete book

### Precondition
User is on main page
### Postcondition
User is on books page, which lists all books, which does not contain deleted book

### 5.1 Main Scenario
1. User clicks in search field
2. User types title
3. User clicks Submit
4. System returns list of books with matching title
5. User clicks on book
6. User clicks on Delete
7. System displays Books page, without deleted book

### Secondary Scenarios


## Use Case 6
User wants to change details of book
### Precondition
User is on main page

### Postcondition
User is on book page with chosen book changed.

### 6.1 Main Scenario
1. User clicks in search field
2. User types title
3. User clicks Submit
4. System returns list of books with matching title
5. User clicks on book
6. User makes changes in fields
7. User clicks save
7. System displays book page with changes
### Secondary Scenarios
#### 6.2 User removes title
1. User clicks in search field
2. User types title
3. User clicks Submit
4. System returns list of books with matching title
5. User clicks on book
6. User removes title
7. User clicks save
7. System displays book page without changes
 
