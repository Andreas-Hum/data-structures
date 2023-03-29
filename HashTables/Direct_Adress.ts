/**
 * Represents a direct address table that maps integer keys to values of type T.
 */
export default class DirectAddressTable<T> {
    /**
     * The underlying array used to store key-value pairs in the direct address table.
     * @private
     */
    private _table: (T | undefined)[];
  
    /**
     * Constructs a new DirectAddressTable with the given capacity.
     * @param {number} n - The capacity of the table.
     */
    constructor(n: number) {
      this._table = new Array<T>(n);
    }
  
    /**
     * Inserts a key-value pair into the direct address table.
     * @param {number} key - The key to insert.
     * @param {T} value - The value to insert.
     * @returns {void}
     */
    public insert(key: number, value: T): void {
      this._table[key] = value;
    }
  
    /**
     * Deletes the key-value pair associated with the given key from the direct address table.
     * @param {number} key - The key to delete.
     * @returns {void}
     */
    public delete(key: number): void {
      this._table[key] = undefined;
    }
  
    /**
     * Updates the value associated with the given key in the direct address table.
     * @param {number} key - The key to update.
     * @param {T} value - The new value.
     * @returns {void}
     */
    public update(key: number, value: T): void {
      this._table[key] = value;
    }
  
    /**
     * Searches for the value associated with the given key in the direct address table.
     * @param {number} key - The key to search for.
     * @returns {T|undefined} - The value associated with the key, or undefined if the key is not present in the table.
     */
    public search(key: number): T | undefined {
      return this._table[key];
    }
  }
  