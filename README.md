## Dokumentasi Belajar React

- Konsep pendekatan react adalah komponen. Jadi dari web apps yang dibangun merupakan kumpulan dari komponen - komponen

## ES6
karena react merupakan modern javascript framework, maka penulisanya syntax jsnya juga modern, seperti beberapa fungsi terkenal yaitu:
- Use `let` or `const`
jika variable bisa di `assign` berulang kali, pakailah `let`, jika tidak maka `const`, example
```javascript
const API_URL = 'https://indrakusuma.web.id/api'
let name = 'indra'
```
- Arrow Function 
```javascript
const person = () => {
    return "hello person!"
}

let doubleArray = (array) => array.map(el => el * 2);
```
- Tree Dot (...)
berfungsi untuk mengabil data dari suatu variabel baik type data primitive ataupun objek, misal..
```javascript
const numbers = [1,2,3,4,5];
const extNumbers = [...numbers, 6,7,8]

console.log(extNumbers)
// [1,2,3,4,5,6,7,8]

const student = {
    name: 'Indra',
    age: 21
}

person.name = 'alex';

const newStudent = {
    ...student
}

console.log(newStudent)
// alex
```

## React Component
- untuk bikin component sangat mudah direact, tinggal bikin file baru (taruh dalam folder biar rapi) terus nama file depanya capital, example
- bikin component baru sangat mudah
```javascript
// file Person.js
import React from 'react';

const person = () => {
    return (
      // harus memiliki one root element
      <div>
        <p> Hello </p>
      </div>  
    );
}
```
```javascript
// file App.js
import Person from "./Person.js"

// use component
<Person />
```