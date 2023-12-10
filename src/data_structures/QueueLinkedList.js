

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.head = null;
    }

    extenqueue(data) {
        let newnode = new Node(data);
        let current;

        if (this.head == null) {
            this.head = newnode;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newnode;
        }

        this.updateLocalStorageQueue()
    }

    extdequeue() {
        if (this.head == null) {
            this.head = null;
            window.localStorage.removeItem("Main Queue");
        }
        else {
            this.head = this.head.next
            this.updateLocalStorageQueue();
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    updateLocalStorageQueue() {
        window.localStorage.setItem("Main Queue", JSON.stringify(this.head))
    }
}

const mainQueue = new QueueLinkedList();

export default mainQueue;