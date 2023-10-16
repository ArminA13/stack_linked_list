// Using a Linked List:
// Create a class named Stack.
// Initialize a variable (top) to represent the top of the stack as null and a size counter.
// Implement the push, pop, peek, isEmpty, and getSize methods using a linked list.
// Test the stack by pushing and popping elements.

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if(this.top){
            let data = this.top.data;
            this.top = this.top.next;
            this.size--;
            return data;
        } else {
            return "Stack is empty";
        }
    }

    peek() {
        if(this.top) {
        return this.top.data;
        } else {
            return "Stack is empty";
        }
    }

    isEmpty() {
        if(this.top) {
            return false;
        } else {
            return true;
        }
    }

    getSize() {
        return this.size
    }    
}







const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
stack.push(3); 
console.log(stack.pop()); // Should print 2
console.log(stack.peek()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1