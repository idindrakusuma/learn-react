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

- Using Media Query
untuk menggunakan menggunakan media query menggunakan redium, maka perlu impmement <StyleRoot> pada root component. 

### React style using CSS Loader
Salah satu fitur yang sangat direkomendasikan adalah menggunakan css loader webpack. jadi jika menggunakan style ini, kita tidak perlu import Redium, tapi cukup meggunakan webpack. cara penggunaanya adalah dengan melakukan `npm run eject`. kemudian akan muncul 2 folder baru yaitu `config` dan `scripts`.
- Langkah selanjutnya adalah dengan menambahkan option script css berikut:

```javascript
// config/webpack.config.dev.js
options : {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]__[hash:64:5]'
}
```

```javascript
// config/webpack.config.prod.js
options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: shouldUseSourceMap,
    modules: true,
    localIdentName: '[name]__[local]__[hash:64:5]'
},
```

_* Yang ditambahkan cuma `modules` serta `localIdentName`_

### Stateful Components and Stateless Component
inti dari dua tipe ini adalah penggunaan dan fungsi yang bisa dilakukanya. 
- Jika `Stateful Component`, semua lifecycle pada react bisa digunakan, didalamnya juga bisa menggunakan `props`, `function` maupun `state` itu sendiri, cara implementnya

```javascript
import React, {Component} from 'react';

class nameComponent extends Component {
  state = {
    person = []
  }

  nameFunction = () => {

  }

  render () {

    return ();
  }

}

export default nameComponent;
```

sedangkan untuk `Stateless Component` fungsinya hanya bisa menerima `props` saja. hal ini cukup penting untuk memperkecil aplikasi serta lebih fokus pada component terkecil.
> Jika suatu component bisa diselesaikan dengan Stateless Component atau `Functional Component` maka gunakanlah Stateless Component.

untuk implementasinya, 
```javascript
import React from 'react'

const nameComponent = (props) => {
  return ();
}

export default cockpit;
```

### Component Lifecycle
> Don't call this.setState in `componentDidMount` karena itu akan mentrigger untuk melakukan re-rendering.

### Functional Component vs PureComponent
Secara default, jika kita menggunakan component biasa, maka react akan melakukan re-rendering setiap kita melakukan trigger dalam aplikasi `walaupun` data yang ditampilkan sama dengan sebelumnya. Oleh karena itu, agar performa react bisa lebih maksimal maka kita bisa menggunakan `Pure Component` jika `terdapat kondisi yang akan memaksa react melakukan rendering ulang`.

secara default, `Pure Component` aan melakukan pengecekan dengan state selanjutnya, apakah ada perubahan atau tidak. jika ada perubahan, maka react akan melakukan rendering ulang. Jika tidak, maka react tidak akan melakukan rendering. 

Untuk implementasinya, 

```javascript
import React, {PureComponent} from 'react';

class NameComponent extends PureComponent {
  // like component lifecycle
  render () {
    return ();
  }
}

export default NameComponent;
```
Apa kata instruktur soal component lifecycle ini? 
> Sebisa mungkin pakai `functional component`, tetapi jika tidak, gunakanlah `Pure Component` jika ada kondisi memerlukan untuk melakukan pengecekan data sebelum melakukan rendering ulang atau menggunakan `shouldComponentUpdate()` dan jika tidak ada masalah untuk pengecekan data, maka gunakanlah `Component` biasa, agar performa tetap terjaga. Keep in mind to research your component! 
---

### HOC (High Order Component)
Berfungsi sebagai component yang sangat diutamakan. biasanya component ini digunakan untuk wrapping component. 

mengapa perlu?
> karena dalam satu component harus memiliki satu root element, dan jika kita menggunakan div, bisa jadi akan problem dengan class atau style lain, maka diperlukan `hoc` ini.

Masih berlanjut...