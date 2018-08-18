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

### State
secara sederhana, state berfungsi untuk menyimpan data. penulisan state sendiri harus didalam component yang extend component, maksudnya?
```javascript
class App extends Component {
    // App is name class
    state = {
        person: []
    }
}
```

### Event Handler react
untuk bisa menggunakan event handler, penulisan fungsi di rekomendasikan menggunakan `arrow function`. Penulisan fungsinya di bawah state,
```javascript
class App extends Component {
    // App is name class
    state = {
        person: [
            { name: 'Indra', age: 21 }
        ]
    }
    
    changeValueState = () => {
        // change value state using this.setState => this function by react
        this.setState({
            person: [
                { name: 'max', age: 23 }
            ]
        })
    }
}
```

### React Style CSS
Penting banget ngerti perananan CSS dalam react. Selayaknya waktu belajar vueJS dulu, bahwa style dibagi menjadi dua, global dan local (scope).
Di react pun sama, jadi model style css bisa berbagai macam. 
- kalau pengen global mode, bisa bikin file css dari componentnya, misal component `Person.js` bikin `Person.css`. Nah didalamnya itu akan menjadi style global. Atau bisa taruh file css di `public/index.html`, kalau yang ini sama kayak biasa lah.
- sedangkan kalau pengen inline, atau hanya berlaku pada component tersebut maka perlu bikin object style di compoenent tersebut. example
```javascript
import React from 'react'

class Person extends Component {
    render () {
        const styleButton = {
            backgroundColor: 'red',
            textTransform: 'uppercase'
        }
        
     return ({
        <div className="container">
            <button style={style}> Hello button! </button>
        </div>
     });   
    };
}
```

### React Style using pseudo selector css
ada satu problem ketika ingin melakukan styling pada local component, yaitu tidak bisanya menggunakan pseudo selector seperti :hover, :active atau @media. oleh karena itu diperlukan package baru yaitu `Radium`.
```javascript
// npm install radium
// import di component
import Radium from 'radium'

class App extends Component {
// ... 
}

export default Radium(App)

```