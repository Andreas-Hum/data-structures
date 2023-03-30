import Node from "../Nodes/DList_Node";


export default class DoublyLinkedList<T> {
    /**
        The head of the list.
        @private
    */
    private _head: Node<T> | null = null;

    /**
        The tail of the list.
        @private
    */
    private _tail: Node<T> | null = null;

    public length: number = 0;

    /**
      Creates an instance of DoublyLinkedList.
    */
    constructor(...items: (T | Node<T>)[]) {
        if (items.length > 0) {
            this.push(...items)
        }

    }



    /**
        Returns the first node of the list.
        @returns {Node<T>|null} The first node of the list or null if the list is empty.
    */
    public peek(): Node<T> | null {
        return this._head;
    }

    /**
        Returns the last node of the list.
        @returns {Node<T>|null} The last node of the list or null if the list is empty.
    */
    public peakTail(): Node<T> | null {
        return this._tail;
    }

    /**
     * Appends new elements to the end of an list, and returns the new length of the list.
     * @param items — New elements to add to the list.
     * @returns The length of the list
    */
    public push(...items: (T | Node<T>)[]): number {
        let current_tail: Node<T> | null = this._tail;

        for (let i = 0; i < items.length; i++) {
            let new_node: Node<T>

            if (items[i] instanceof Node<T>) {
                new_node = items[i] as Node<T>;
            } else {
                new_node = new Node<T>(items[i] as T);

            }

            if (current_tail) {
                current_tail.setNext(new_node);
                new_node.setPrev(current_tail)
            } else {
                this._tail = new_node
                this._head = this._tail
            }



            current_tail = new_node;
            this.length += 1;
        }
        this._tail = current_tail
        return this.length;
    }

    /**
     * Appends new elements to the start of an list, and returns the new length of the list.
     * @param items — New elements to add to the list.
     * @returns The length of the list
    */
    public unshift(...items: (T | Node<T>)[]): number {
        let current_head: Node<T> | null = this._head;

        for (let i = items.length - 1; i >= 0; i--) {
            let new_node: Node<T>

            if (items[i] instanceof Node<T>) {
                new_node = items[i] as Node<T>;
            } else {
                new_node = new Node<T>(items[i] as T);

            }

            if (current_head) {
                new_node.setNext(current_head);
                current_head.setPrev(new_node)
            } else {
                this._head = new_node
                this._tail = this._head
            }


            current_head = new_node;
            this.length += 1;
        }
        this._head = current_head
        return this.length;
    }

    public printElements(): void {
        let current = this._head
        if (current === null) {
            console.log("List is empty")
        }
        while (current) {
            console.log(current.getValue())
            current = current.getNext()
        }
    }
}


