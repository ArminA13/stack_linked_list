// Queue
// Task Title: JavaScript Queue Implementation
// Task Description: Implement a queue data structure in JavaScript using a class called Queue. The queue
// should have the following functionalities:
// . enqueue(element): Add an element to the back of the queue.
// . dequeue(): Remove and return the front element of the queue.
// . front(): Return the front element of the queue without removing it.
// . isEmpty(): Check if the queue is empty.
// . size(): Return the number of elements in the queue.
// . print(): Print the elements of the queue.
// Your implementation should use an array to store the elements of the queue. Ensure that the queue follows
// the first-in-first-out (FIFO) principle, where elements are removed from the front of the queue.


class Queue{
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.length > 0? this.items.shift():"Queue is empty"
    }

    front() {
        return this.items.length > 0? this.items[0]:"Queue is empty"
    }

    isEmpty() {
        return this.items.length ===0? true:false;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items.join(" ");
    }
}

const queue = new Queue(); 
 
queue.enqueue(1); 
queue.enqueue(2); 
queue.enqueue(3); 
 
console.log(queue.print()); // Output: 1 2 3 
 
console.log("Front element: " + queue.front()); // Output: Front element:1 
 
console.log(queue.dequeue()); 
console.log(queue.print()); // Output: 2 3 
 
console.log("Queue size: " + queue.size()); // Output: Queue size: 2