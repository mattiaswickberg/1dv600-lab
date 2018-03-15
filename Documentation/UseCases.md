# Use cases

## List of use cases. 
Use cases for the scope of this project:
1. User wants to list all the books in the library
2. User wants to add new book
3. User wants to find book(s) with a certain title
4. User wants to find all books of a certain author
5. User wants to delete book
6. User wants to change details of book

## Use Case 1
User wants to list all the books in the library

### Precondition

### Postcondition


### Main Scenario


### Secondary Scenarios

## Use Case 2
User wants to add new book

### Precondition

### Postcondition


### Main Scenario


### Secondary Scenarios

## Use Case 3
User wants to find book(s) with a certain title

### Precondition

### Postcondition


### Main Scenario


### Secondary Scenarios

## Use Case 4
User wants to find book(s) by a certain author

### Precondition
User is on library main page

### Postcondition
List of Neil Gaiman novels is displayed on the page

### Main Scenario
1. The person types in "Neil Gaiman" into the search field
2. A list of Neil Gaiman novels appears
3. User clicks on titles and reads about them
4. User finds a book to read

### Secondary Scenarios
##### 1.1 User spells search words wrong
1. System returns empty list.
2. User corrects spelling and searches again
##### 1.2 System contains no books by chosen author
1. System returns empty list.

## Use Case 5
User wants to delete book

### Precondition

### Postcondition


### Main Scenario


### Secondary Scenarios


## Use Case 6
User wants to change details of book
### Precondition

### Postcondition


### Main Scenario


### Secondary Scenarios







### Detailed use case 2: User wants to borrow a certain book

User wants to check out a specific title

Precondition: User is on main library page

Postcondition: The corrrect book is displayed on page

#### Main scenario
1. The person types in title of book into search field
2. User clicks search
3. System returns list of book(s) with correct title
4. User clicks on borrow book
5. System checks availability of book
6. System checks that user has no outstanding fines that blocks borrowing
7. System returns book to user

#### Secondary scenarios
##### 5.1 Book is not available
1. System returns a message that book is not available
##### 6.1 User has outstanding fines to pay
1. System returns messages that user has to pay fines before borrowing the book.
2. System gives user options to pay
3. User pays fines and continues with transaction
 
