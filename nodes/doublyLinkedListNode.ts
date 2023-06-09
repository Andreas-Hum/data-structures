

/**
 * Represents a node in a doubly linked list.
 * @template T - The type of data stored in the node.
 */
export default class Node<T> {
    /**
     * The value stored in the node.
     * @private
     */
    private _value: T | null;

    /**
     * The next node in the linked list.
     * @private
     */
    private _next: Node<T> | null;

    /**
     * The previous node in the linked list.
     * @private
     */
    private _prev: Node<T> | null;

    /**
     * Creates a new node with the specified data.
     * @param data - The data to store in the node.
     */
    constructor(data?: T) {
        if (data === undefined) {
            this._value = null;
        } else {
            this._value = data;
        }

        this._next = null;
        this._prev = null;
    }

    // Getters

    /**
     * Returns the data stored in the node.
     * @returns The data stored in the node.
     */
    public getValue(): T | null {
        return this._value;
    }

    /**
     * Returns the next node in the linked list.
     * @returns The next node in the linked list, or null if there is no next node.
     */
    public getNext(): Node<T> | null {
        return this._next;
    }

    /**
     * Returns the previous node in the linked list.
     * @returns The previous node in the linked list, or null if there is no previous node.
     */
    public getPrev(): Node<T> | null {
        return this._prev;
    }

    // Setters

    /**
     * Sets the data stored in the node.
     * @param data - The data to store in the node.
     */
    public setValue(data: T | null): void {
        this._value = data;
    }

    /**
     * Sets the next node in the linked list.
     * @param nextNode - The next node in the linked list.
     */
    public setNext(nextNode: Node<T> | null): void {
        this._next = nextNode;
    }

    /**
     * Sets the previous node in the linked list.
     * @param prevNode - The previous node in the linked list.
     */
    public setPrev(prevNode: Node<T> | null): void {
        this._prev = prevNode;
    }
}
