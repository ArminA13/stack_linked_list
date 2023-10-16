// Linked List
// Create a class that implements a basic singly linked list, allowing you to perform common operations on it,
// such as appending, prepending, inserting, removing, and printing elements.
// Task Instructions:
// . Define a Node class:
// Create a Node class with a constructor that takes one parameter, data, and initializes two
// properties: data and next.
// The data property should store the data for the node.
// The next property should initially be set to null.
// . Define a LinkedList class:
// Create a LinkedList class with a constructor that initializes two properties: head and size.
// The head property should initially be set to null, indicating an empty list.
// The size property should initially be set to 0 to keep track of the number of elements in the
// list.
// . Implement the following methods in the LinkedList class:
// append(data): Adds a new node with the given data to the end of the list.
// prepend(data): Adds a new node with the given data to the beginning of the list.
// insert(data, index): Inserts a new node with the given data at the specified index in the
// list. If the index is out of bounds, return false.
// removeAt(index): Removes the node at the specified index and returns its data. If the index
// is out of bounds, return null.
// remove(data): Removes the first occurrence of a node with the specified data from the list. If
// the data is not found, return false.
// getSize(): Returns the current size of the linked list.
// isEmpty(): Returns true if the linked list is empty (size is 0), otherwise returns false.
// printList(): Logs the data of all nodes in the linked list to the console.
// const list = new LinkedList();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.size++;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
        return this;
    }

    prepend(value) {
        let newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.size++;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
        }

        return this;
    }

    getIndex(value) {
        let current = this.head;
        let index = 0 ;
        while(index < value) {
            current = current.next;
            index ++;
        }
        return current;
    }

    insert(position, value) {

        let newNode = new Node(value);

        let current = this.getIndex (position);
        let  nextCurrent = current.next;
        current.next = newNode;
        newNode.next = nextCurrent;
        this.size ++;
        return this
    }

    remove(value) {
        let current = this.head;
        while(current.data = value){
            
        }

    }
}

const list = new LinkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.append(5));
console.log(list.prepend(0));
console.log("bzz")
console.log(list.getIndex(4));
console.log(list.insert(3, 8));
list.printList(); // Output: 0 1 2 3
console.log("Size:", list.getSize()); // Output: Size: 4
list.remove(2);
list.removeAt(2);
list.printList(); // Output: 0 1
console.log("Size:", list.getSize()); // Output: Size: 2
