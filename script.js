// let products = [
//     {
//         name: "soda",
//         price: 10000,
//         godno: 2040
//     },
//     {
//         name: "chocolate",
//         price: 8000,
//         godno: 2024
//     },
//     {
//         name: "ice cream",
//         price: 13000,
//         godno: 2023
//     },
//     {
//         name: "yogurt",
//         price: 9000,
//         godno: 2023
//     },
//     {
//         name: "lienergy",
//         price: 21000,
//         godno: 2024
//     },
//     {
//         name: "fusetea",
//         price: 7000,
//         godno: 2024
//     },
//     {
//         name: "lays",
//         price: 18000,
//         godno: 2023
//     },
//     {
//         name: "18+",
//         price: 8000,
//         godno: 2024
//     },
//     {
//         name: "namak",
//         price: 2000,
//         godno: 2024
//     },
//     {
//         name: "orange juice",
//         price: 10000,
//         godno: 2024
//     },
//     {
//         name: "clear man",
//         price: 50000,
//         godno: 2025
//     },
//     {
//         name: "saxar",
//         price: 12000,
//         godno: 2025
//     },
//     {
//         name: "moloko",
//         price: 11000,
//         godno: 2023
//     },
//     {
//         name: "pechenki",
//         price: 15000,
//         godno: 2024
//     },
//     {
//         name: "muka",
//         price: 150000,
//         godno: 2024

//     },
// ]

// let discount = +prompt('discount %')

// for(let item of products) {
//     let minus = item.price - (item.price / 100) * discount
//     console.log(item.name + ":", minus)
// }


let people = [
    {
        name: "Bernard",
        age: 21,
        isMarried: true,
        wifes: ['Suzy', 'Linda']
    },
    {
        name: "Miles",
        age: 19,
        isMarried: true,
        wifes: ['Anna']
    },
    {
        name: "Alex",
        age: 32,
        isMarried: false,
        wifes: ['Jessica', 'Janet', 'Dora']
    },
    {
        name: "Daniel",
        age: 16,
        isMarried: true,
        wifes: ['Sofiya', 'Sara']
    },
    {
        name: "Justin",
        age: 18,
        isMarried: true,
        wifes: ['Tracy']
    },
    {
        name: "Lionel",
        age: 36,
        isMarried: true,
        wifes: ['Antonela']
    },
    {
        name: "Bob",
        age: 18,
        isMarried: false,
        wifes: []
    },
    {
        name: "Martin",
        age: 24,
        isMarried: true,
        wifes: ['Stella', 'Ashley']
    },
    {
        name: "Erik",
        age: 15,
        isMarried: false,
        wifes: []
    },
]

let guilties = []
let normal_people = []

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18 && people[i].wifes.length <= 1) {
        normal_people.push(people[i].name)
    } else if (people[i].age < 18 && people[i].wifes.length === 0) {
        normal_people.push(people[i].name)
    } else {
        guilties.push(people[i].name)
    }
}

document.write(`Guilties: <br/> ${guilties}`)
document.write('<hr/>')
document.write(`Normal people: <br/> ${normal_people}`)