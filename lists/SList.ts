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

    /**
        Creates an instance of SinglyLinkedList.
    */
    constructor() {
        this._head = null;
        this._tail = null;
    }

    /**
        Returns the first node of the list.
        @returns {Node<T>|null} The first node of the list or null if the list is empty.
    */
    peakFirst(): Node<T> | null {
        return this._head;
    }

    /**
        Returns the last node of the list.
        @returns {Node<T>|null} The last node of the list or null if the list is empty.
    */
    peakLast(): Node<T> | null {
        return this._tail;
    }
}