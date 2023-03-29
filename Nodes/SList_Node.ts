

/**
 * Represents a node in a single linked list.
 * @template T - The type of data stored in the node.
 */
export default class Node<T> {
    /**
     * The value stored in the node.
     * @private
     */
    private _value: T;

    /**
     * The next node in the linked list.
     * @private
     */
    private _next: Node<T> | null;


    /**
     * Creates a new node with the specified data.
     * @param data - The data to store in the node.
     */
    constructor(data: T) {
        this._value = data;
        this._next = null;
    }

    // GETTERS

    /**
     * Returns the data stored in the node.
     * @returns The data stored in the node.
     */
    public getValue(): T {
        return this._value;
    }

    /**
     * Returns the next node in the linked list.
     * @returns The next node in the linked list, or null if there is no next node.
     */
    public getNext(): Node<T> | null {
        return this._next;
    }


    // SETTERS

    /**
     * Sets the data stored in the node.
     * @param data - The data to store in the node.
     */
    public setValue(data: T): void {
        this._value = data;
    }

    /**
     * Sets the next node in the linked list.
     * @param nextNode - The next node in the linked list.
     */
    public setNext(nextNode: Node<T>): void {
        this._next = nextNode;
    }

}
