import Node from "../Nodes/SList_Node";

/**
    A generic Singly Linked List data structure.
    @template T The type of the elements stored in the list.
*/
export default class SinglyLinkedList<T> {
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

    public length: number;

    /**
        Creates an instance of SinglyLinkedList.
    */
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    /**
        Returns the first node of the list.
        @returns {Node<T>|null} The first node of the list or null if the list is empty.
    */
    peek(): Node<T> | null {
        return this._head;
    }

    /**
        Returns the last node of the list.
        @returns {Node<T>|null} The last node of the list or null if the list is empty.
    */
    peakTail(): Node<T> | null {
        return this._tail;
    }


    //ADDING ELEMENTS TO THE LIST

    /**
     * Appends new elements to the end of an list, and returns the new length of the list.
     * @param items — New elements to add to the list.
     * @returns The length of the list
    */
    push(...data: T[]): number {
        let current_tail: Node<T> | null = this._tail;

        for (let i = 0; i < data.length; i++) {
            const new_node: Node<T> = new Node<T>(data[i]);

            if (current_tail) {
                current_tail.setNext(new_node);
            }

            current_tail = new_node;
            this.length += 1;
        }

        this._tail = current_tail;
        return this.length;
    }

    /**
     * Appends new elements to the start of an list, and returns the new length of the list.
     * @param items — New elements to add to the list.
     * @returns The length of the list
    */
    unshift(...data: T[]): number {
        let current_head: Node<T> | null = this._head;

        for (let i = 0; i < data.length; i++) {
            const new_node: Node<T> = new Node<T>(data[i]);

            if (current_head) {
                new_node.setNext(current_head);
            }

            current_head = new_node;
            this.length += 1;
        }

        this._head = current_head;
        return this.length;
    }
}

