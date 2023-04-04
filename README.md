# TypeScript Data Structures

This is a TypeScript library containing implementations of various data structures. It allows for defining user-defined types, making it more flexible and customizable to fit various use cases. Additionally, this library enforces type safety by allowing the definition of types on every single datatype

## Table of Contents

- [TypeScript Data Structures](#typescript-data-structures)
  - [Table of Contents](#table-of-contents)
  - [Available Data Structures](#available-data-structures)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [Author](#author)
- [Documentation](#documentation)
    - [**Usage**](#usage)
      - [**Example**](#example)
      - [**Parameter:**](#parameter)
    - [**Properties:**](#properties)
    - [**Methods**](#methods)
    - [](#)

## Available Data Structures

- **Nodes**: 
  - Singly linked list node
  - Doubly linked list node

- **Lists**:
  - Singly linked list
  - Doubly linked list

- **Hash Tables**:
  - Direct address table

Each data structure has its own folder within the `src` directory, containing the TypeScript implementation file and a corresponding test file.

## Getting Started

To use these data structures in your TypeScript projects, you can import them as follows:

```typescript
import { SinglyLinkedListNode, DoublyLinkedListNode } from 'data-structures/nodes';
import { SinglyLinkedList, DoublyLinkedList } from 'data-structures/lists';
import { DirectAddressTable } from 'data-structures/hashTables';

etc...
```

You can then create instances of these data structures and use their methods as appropriate for your use case.

## Contributing
Contributions to this project are welcome! If you find a bug, have a suggestion for an improvement, or would like to add a new data structure implementation, feel free to open an issue or submit a pull request.

## Author
This library was created by Andreas Hummelmose, a computer science student at Aalborg University.


# Documentation
<details><summaryNodes</summary>

  - <details><summary>Singly linked list node</summary>
  
    - [constructor]
      - Node`<T>`() constructor
    - [Properties]
      - Node`<T>`: length
    - [Methods]
      - Node`<T>`.setValue()
      - Node`<T>`.setNext()
      - Node`<T>`.getNext
      - Node`<T>`.getValue

</details>

</details>

---
<br>

<details><summary>Nodes</summary>

- <details><summary>Singly linked list node:</summary>

  This module exports a `Node<T>` class which represents a node in a singly linked list.

  ### **Usage**

  To use this singly linked list node in your TypeScript project, first import the `Node<T>` class:

  #### **Example**

  ```Typescript
  import { Node } from 'data-structures/lists/SinglyLinkedList';
  ```
    ### **node constructor**
    The `node<T>()` constructor creates an instance of the `node<T>()` class.

    #### **Syntax**
    ```Typescript
    import { Node } from 'data-structures/lists/SinglyLinkedList';

    const node_init: Node<number> = new Node<number>(1)
    const node: Node<number> = new Node<number>()
    ```
  #### **Parameter:**
  - `data:T` (optional): The data of type T to be stored in the node
    - Remark if no data is given data will be null

  <br>

  ### **Properties:**
   - `Node<T>:length` The length data property of an `Node<T>` instance represents the number of elements in that list.

  ### **Methods**

  - #### **`Node<T>`.setValue():**
    The `setValue()` Sets the value of the node
  ###

</details>
</details>








<!-- 
- ### List:
    - **SinglyLinkedList**:
    
    A singly linked list is a linear data structure in which elements are stored in nodes, and each node points to the next node in the sequence.



Adds an element to the end of the list.

### Parameters:
- `element`: The element to add to the end of the list.

### Use case:
This method is useful when you want to add an element to the end of a list.

### Remarks:
- Runtime: O(1)

### Example:
```typescript
const list = new SinglyLinkedList<number>();
list.push(1);
list.push(2);
list.push(3);
// The list now contains the elements 1, 2, and 3.
``` -->
