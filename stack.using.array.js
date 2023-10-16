// Stack
// Create a class of a stack data structure with the following functionalities:
// . push: Add an element onto the stack.
// . pop: Remove and return the top element from the stack.
// . top: Retrieve the top element of the stack without removing it.
// . isEmpty: Check if the stack is empty.
// . getSize: Get the number of elements in the stack.
// Implementation Options:
// . Using an Array:
// Create a class named Stack.
// Initialize an empty array as the stack's storage.
// Implement the push, pop, peek, isEmpty, and getSize methods.
// Test the stack by pushing and popping elements.

class Stack{
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length > 0) {
            return this.items.pop() 
        }
    }

    top() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length ===0?  true:false;
    }

    getSize() {
        return this.items.length
    }
}

const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1



