# Use cases

## List of use cases
I'm aware that at least for the scope of this project, there will only be one type of user. 
Use cases for the scope of this project:
* Library user wants to list all the books in the library
* Library user wants to find a specific book and see details
* Library user wants to find book(s) with a certain title
* Librarian wants to add new book
* Librarian wants to delete book
* Librarian wants to change details of book

Use cases that would be reasonable to expect for a proper library system
* Library user wants to find all books of a certain type
* Library user wants to find all books of a certain author
* Library user wants to put in request for a book (if not a personal library)

### Detailed use case 1: Search for book by genre

User wants to find a new book to read, but has no particular book in mind. However, user does like Science Fiction.

Precondition: User does not know what book to borrow

Postcondition: User has found a book to borrow

#### Main scenario
1. The person types in "Science Fiction" into the search field
2. A list of Science Fiction novels appears
3. User clicks on titles and reads about them
4. User finds a book to read

#### Secondary scenarios
##### 1.1 User spells search words wrong
1. System returns empty list, explaining that no books are in the library that matches that search term, and suggests user checks spelling or search for something different
2. User corrects spelling and searches again
##### 1.2 System contains no books of chosen genre
1. System returns empty list, explaining that no books are in the library that matches that search term, and suggests user checks spelling or search for something different


### Detailed use case 2: User wants to borrow a certain book

User wants to borrow a book

Precondition: User knows what book to borrow, and wants to request to borrow it

Postcondition: User has borrowed a book

#### Main scenario
1. The person looks up the specific book in system
2. User requests to borrow book
3. System checks availability of book
4. System checks that user has no outstanding fines that blocks borrowing
5. System returns book to user

#### Secondary scenarios
##### 3.1 Book is not available
1. System returns a message that book is not available
##### 4.1 User has outstanding fines to pay
1. System returns messages that user has to pay fines before borrowing the book.
2. System gives user options to pay
3. User pays fines and continues with transaction
 
