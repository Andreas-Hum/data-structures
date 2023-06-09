import Node from "../nodes/doublyLinkedListNode";


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
    public peekTail(): Node<T> | null {
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

    //TAKING ELEMENTS FROM THE LISTS

    /**
     * Removes the first element from the list and returns it. If the list is empty, undefined is returned and the list is not modified.
     * @returns
     */
    public shift(): T | undefined {
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            const to_be_removed: Node<T> = this._head!;
            this._tail = null;
            this._head = null;
            this.length -= 1;
            return to_be_removed.getValue()!;
        }

        const to_be_removed: Node<T> = this._head!;
        const new_head: Node<T> = to_be_removed.getNext()!

        to_be_removed.setNext(null)
        new_head.setPrev(null)

        this._head = new_head;

        this.length -= 1;

        return to_be_removed.getValue()!

    }

    /**
         * Removes the last element from the list and returns it. If the list is empty, undefined is returned and the list is not modified.
         * @returns
     */
    public pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            const to_be_removed: Node<T> = this._head!;
            this._tail = null;
            this._head = null;
            this.length -= 1;
            return to_be_removed.getValue()!;
        }

        const to_be_removed: Node<T> = this._tail!;
        const new_tail: Node<T> = to_be_removed.getPrev()!

        to_be_removed.setPrev(null)
        new_tail.setNext(null)

        this._tail = new_tail;

        this.length -= 1;

        return to_be_removed.getValue()!
    }


    //INDEX OPERATIONS
    /**
    * Returns the index of the first element in the list that satisfies the search criteria
    *
    * @param searchCriteria The function used to determine if an element satisfies the search criteria
    * @param fromIndex The index at which to begin the search (optional)
    * @return The index of the first element that satisfies the search criteria, or -1 if no element satisfies the criteria
   */
    public indexOf(searchCriteria: (element: T) => boolean, fromIndex?: number): number {
        const startIndex = fromIndex ?? 0;

        if (startIndex > this.length) {
            return -1;
        } else if (this.length === 0) {
            return -1;
        } else if (startIndex === 0) {
            if (searchCriteria(this._head?.getValue()!)) {
                return 0;
            }

            if (searchCriteria(this._tail?.getValue()!)) {
                return this.length - 1;
            }
        }

        let current_node: Node<T>;

        if (Math.floor(startIndex / this.length) > 0.5) {
            current_node = this._tail!;

            if (startIndex > 1) {
                for (let i = this.length - 1; i > startIndex; i--) {
                    if (searchCriteria(current_node!.getValue()!)) {
                        return i;
                    }
                    current_node = current_node.getPrev()!;
                }
            }
        } else {
            let current_node:Node<T> = this._head!;


            if (startIndex > 1) {
                for (let i = 0; i < startIndex; i++) {
                    current_node = current_node.getNext()!;
                }
            }

            for (let i = startIndex; i < this.length; i++) {
                if (searchCriteria(current_node!.getValue()!)) {
                    return i;
                }
                current_node = current_node!.getNext()!
            }
        }


        return -1;
    }

    /**
        Returns the node at the specified index in the singly linked list.
        @param index The index of the node to retrieve.
        @return The node at the specified index, or undefined if the index is out of bounds or the linked list is empty.
    */ 
    public getIndex(index: number): Node<T> | undefined | null {
        if (index > this.length || index < 0 || this.length === 0) {
            return undefined;
        }

        if (index === this.length || index === this.length - 1) {
            return this._tail
        } else if (index === 0) {
            return this._head
        }

        let current_node: Node<T> = this._head!

        for (let i = 1; i < index; i++) {
            current_node = current_node.getNext()!
        }

        return current_node
    }


    /**
        Updates the value of the node at the specified index in the singly linked list.
        @param index The index of the node to update.
        @param newValue The new value to set for the node.
    */
    public setIndex(index: number, newValue: T | null): void {
        if (index > this.length || index < 0 || this.length === 0) {
            return;
        }

        if (index === this.length || index === this.length - 1) {
            this._tail?.setValue(newValue)
        } else if (index === 0) {
            this._head?.setValue(newValue)
        }

        let current_node: Node<T> = this._head!

        for (let i = 1; i < index; i++) {
            current_node = current_node.getNext()!
        }

        current_node.setValue(newValue)
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

