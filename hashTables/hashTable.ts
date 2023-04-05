import DoublyLinkedList from "../lists/doublyLinkedList";


interface HashSettings<K, V> {
    defaultHashFunction?: 'modulo' | 'multiplication'
    customHashFunction?: (key: K) => number,
    resize?: boolean,
    maxLoadFactor?: number

}


export default class HashTable<K, V>{
    private readonly _size: number;
    private readonly _table: Array<DoublyLinkedList<[K, V]>>;
    private readonly _hashFunction: (key: K) => number;
    private _loadFactor: number = 0
    private _totalItems: number = 0
    private _settings: HashSettings<K,V> | undefined;

    constructor(size: number = 10, settings?: HashSettings<K, V>) {
        this._settings = settings
        this._size = size;
        this._table = new Array(this._size);

        if (settings?.defaultHashFunction?.toLowerCase() === "multiplication") {
            this._hashFunction = this._multiplicationHashFunction
        } else {
            this._hashFunction = this._moduloHashFunction;
        }

        this._hashFunction = settings?.customHashFunction ?? this._hashFunction;

    }



    public getLoadFactor(): number {
        return this._loadFactor
    }


    public insert(key: K, value: V): number {
        const index: number = this._hashFunction(key)
        if (!this._table[index]) {
            this._table[index] = new DoublyLinkedList<[K, V]>()
        }

        const exists: number = this._table[index].indexOf(ele => ele[0] === key)

        if (exists === -1) {
            this._table[index].push([key, value])
        } else {
            this._table[index].setIndex(exists, [key, value])
        }


        this._totalItems++

        this._loadFactor = this._totalItems / this._size

        return this._loadFactor
    }

    public get(key: K): V | undefined | null {

        const index: number = this._hashFunction(key)

        if (!this._table[index]) {
            return undefined
        }

        const exists: number = this._table[index].indexOf(ele => ele[0] === key)

        if (exists === -1) {
            return undefined
        } else {
            return this._table[index].getIndex(exists)?.getValue()![1]
        }
    }



    //Hashing functions

    private _moduloHashFunction(key: K): number {
        const hash: number = String(key)
            .split('')
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return hash % this._size
    }

    private _multiplicationHashFunction(key: K): number {
        const hash: number = String(key)
            .split('')
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return Math.floor(this._size * (hash * Math.random() % 1));
    }


    public printTable(): void {
        for (let i = 0; i < this._size; i++) {
            const list = this._table[i];
            if (list) {
                let current = list.peek();
                while (current) {
                    console.log(`[${i}] (${current.getValue()![0]}, ${current.getValue()![1]})`);
                    current = current.getNext();
                }
            }
        }
    }


}

const hashTable = new HashTable<string, number>(10);

hashTable.insert("foo", 1);
hashTable.insert("bar", 2);
hashTable.insert("baz", 3);


