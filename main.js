// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread'
// ]
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list);

// let [first, second, ...other] = list;
// console.log(first, second,other);

// let arr = [
//     [1,2,3,4,[9,0]],
//     [5,6,7,8]
// ];

// let [[a,b,c,d, [nine,zero]], [newArr, ...other]] = arr;
// console.log(a,b,c,d, newArr, other);
// console.log(nine,zero);

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'

// };

// let name = person.name
// let age = person.age 
// let lastName = person.lastName
// console.log(name,age,lastname);

// let {age,name,lastName} = person;
// console.log(name,age,lastName);


// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// };

// let {subObj:{name}} = obj1
// console.log(name);

// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let {arr: [{name}]} = obj 
// console.log(name);


// function foo({name, age}){
//     console.log(name);
//     console.log(age);
// }
// let person = {
//     name: 'Makers',
//     lastName: 'Bootcamp',
//     age: 2
// };

// foo(person)




//! Деструктуризация Бегимай

//! destructuring
// let names = ['anna', 'harry', 'albert'];
// let [a,b,c] = names;
// console.log(a,b,c);

// let names = ['anna', 'harry', 'albert'];
// let [,,name3] = names;
// console.log(name3); //albert


// let names = ['anna', 'harry', 'albert'];
// let [name1, name2, name3, name4 = "anonim"] = names;
// console.log(name4);


//! spread operator
// let names = ['anna', 'harry', 'albert'];
// let newNames = [...names] 
// console.log(names);
// console.log(newNames);


//! rest operator
// let names = ['anna', 'harry', 'albert'];
// let [name1, name2, ...other] = names;
// console.log(other);
// console.log(name1, name2);

// let names = ['anna', 'harry', 'albert', 'jack', 'nick', 'elena'];
// let lastName = names[names.length -1];
// console.log(lastName);


// let obj = {
//     name: 'Diana',
//     age: 20,
//     skills: ['js','react']
// }
// let {age, name, skills: [skill1, skill2]} = obj;
// console.log(age, name, skill1, skill2);

//! Поверхностное копирование (spread operator), ссылочные данные ссылаются на одну ячейку памяти
// let obj1 = {
//         name: 'Diana',
//         age: 20,
//         skills: ['js','react']
//     }
//     let obj2 = {...obj1}
    

//     obj2.name = 'kate'
//     obj2.skills.push("html/css")
//     console.log(obj1);
//     console.log(obj2);


//! глубокое копирование
// let obj1 = {
    //         name: 'Diana',
    //         age: 20,
    //         skills: ['js','react']
    //     }
    //     // JSON.stringify - переводит в строку
    //     // JSON.parse - переводит в обьект (в первоначальный вид)
    //     let obj2 = JSON.parse(JSON.stringify(obj1))
    //     obj2.name = 'kate'
    //     obj2.skills.push("html/css")
    //     console.log(obj1);
    //     console.log(obj2);
    //     // console.log(typeof obj2);
    
    //! Task 9
    function checkTask(obj){
        let obj1 = JSON.parse
        let {name = 'Аноним', surname = 'Анонимович',age = '? лет'} = obj1;
        console.log(name,surname,age = '? лет');
    
    }
    checkTask ({name: 'Петр', surname: 'Петров', age: '20 лет'} )
    // // }
 

// let str = 'albert einstein';
// let [a,l,b,e,r,t, ...other] = str;
// console.log(a,l,b,e,r,t, other.join(''));



// let str = 'albert einstein';
// let info = str.split(" ");
// let [firstName, lastName] = info;
// console.log(firstName, lastName);
// console.log(info);


//! Task 1
// function checkTask(fullName){
//     let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"] 
//     let [first,,,d] = arr
//     console.log(first,d);
// } 
// checkTask()
 
// ')
// function checkTask(fullName){
//     let [firstName,,,titul] = fullName
//     console.log(firstName, titul);
// } 
// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"] )
 
// // // //! Task 3
// function checkTask(fullName){
//     let str = fullName.split(" ")
//     let [firstName, lastName] = str;
//     let obj = {firstName, lastName}
//     console.log(obj);
// checkTask ('Albert Einstein');
// }

//! Task 4
// function checkTask(obj){
//     let {name,surname,age} = obj;
//     console.log(name,surname,age);

// }
// checkTask({name: 'Петр', surname: 'Петров', age: '20 лет'} )




//! TAsk 5
// function checkTask(obj){
//     let {hello, apple, ...java} = obj;
//     console.log(java);

// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script'} )

//! Task 6
// function checkTask(a, b){
//     [b,a] = [a,b];
//     console.log(a,b);

// }
// checkTask(0,1)

//! Task 7
// function checkTask(arr){
//     let [, elem2 = 'bbb', elem3 = 'eee'] = arr;
//     console.log(elem2, elem3);
// }
// checkTask(['первый', 'второй', 'третий'])


//! Task 8
// function checkTask(obj) {
//     let { hobbies: [hobby1,hobby2] } = obj;
//     console.log(hobby1, hobby2)

// }
// checkTask ({name: 'Jack', age: '22', hobbies: ['football', 'swimming']})



// function checkTask(obj) {
//     let { hobbies: [hobby1, hobby2] } = obj;
//     console.log(hobby1, hobby2)
// }
// checkTask({ name: 'Jack', age: '22', hobbies: ['football', 'swimming'] });

