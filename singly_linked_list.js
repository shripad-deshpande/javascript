function SinglyLinkedList() {
    this.head = null;
}

SinglyLinkedList.prototype.size = function () {
    var size = 0;
    var current = this.head;
    while (current != null) {
        size++;
        current = current.next;
    }
    return size;
};

SinglyLinkedList.prototype.prepend = function (val) {
    var node = {
        val: val,
        next: this.head
    };
    this.head = node;
};

SinglyLinkedList.prototype.append = function (val) {
    var current = this.head;
    if (current === null) {
        this.prepend(val); 
    } else {
        var node = {
            val: val,
            next: null
        };
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }
};

SinglyLinkedList.prototype.addAtPosition = function (position, val) {
    var node, prev, current, counter, size;
    size = this.size();
    if (position > size || position < 1) {
        throw new Error (position  + " is an inavlid postion ");
    }
    else if (position === 1) {
        this.prepend(val);
    } else {
        var node = {
            val: val,
            next: null
        }
        prev = null;
        current = this.head;
        counter = 1;
        while (counter <= size && counter !== position) {
            prev = current;
            current = current.next;
            counter++;
        }
        node.next = current;
        prev.next = node;
    }
};

SinglyLinkedList.prototype.findAtPosition = function (position) {
    var current, size, counter;
    size = this.size();
    if (position > size || position < 1) {
        throw new Error(position + " is an invalid position");
    }
    current = this.head;
    counter = 1;
    while (counter <= position && counter != position) {
        current = current.next;
        counter++;
    }
    return current.val;
};

SinglyLinkedList.prototype.remove = function (val) {
    var current, prev;
    current = null;
    prev = null;

    if (this.head.val === val) {
        this.head = this.head.next;
    }
    else {
        current = this.head;
        while(current.val !== val) {
            prev = current;
            current = current.next
        }
        prev.next = current.next;
    }
}

SinglyLinkedList.prototype.removeFromPosition = function (position) {
    var current, prev, size, count;
    size = this.size();
    if (position > size || position < 1) {
        throw new Error(position +" is an invalid position");
    } else {
        count = 1;
        current = this.head;
        while (position > count) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = current.next;
    }
};


var list = new SinglyLinkedList();
list.append("Amruta");
list.append("Aarush");
list.append("Shripad");
list.prepend("Anvi");
list.append("Ketaki");
console.log(JSON.stringify(list));
list.removeFromPosition(5);
console.log(JSON.stringify(list));