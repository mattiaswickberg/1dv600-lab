# Test Plan 

## Test objectives
The objectives for the tests in this stage of the development process are threefold. One is to prepare manual tests for the most important parts of the functionality, to make sure that not only the technical aspects of the system is on par, but that it is also usable from the client side. Two is to implement unit tests for both one of the implemented functions, to continuously check that I don't break what's working as I go forth, and for the next planned function, bring the function to add a book to the library. The third is to write API tests to check that everything will work as intended going forward.

## Static testing
Standard JS for code structure evaluation, check before each commit. 

## Manual test cases

### Test #1 
ID: MT1. Testing use case 'add new book'. Before anything else being used in a library system, there needs to be books added to it. For a user of this system the the first thing to be done is probably adding books. This needs to work before editing, deleting or looking up any books. 


### Test #2
ID MT2. Testing use case 'find a specific book'. This seems to me to be one of the most important, and most used, functions of a system like this - to check if a certain book is in there. 


## Automated unit tests

Unit test #1: Get books method, being a more important method than the delete method of the ones already implemented as you generally want to find a book in the system before deleting it. First test: Check that list books actually returns a list of objects. 

Unit test # 2: Get books method. Check that every object in the list return is a book object, and nothing else, to make sure there is no unneccessary data cluttering the database. 

Unit test #3: Add book, being the next method to implement. Test that Add book returns a book JSON object.

## Automated API tests
List books API call, test that a call to this actually returns a list of book objects. 

- [ ] Test passed
- [ ] Test failed

