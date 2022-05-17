// console.log("Hello")

// var name = "Sajib"

// var line1 = "Alamin Hossain" + " " +  name
// var line2 = "Alamin Hossain is Eveing"
// console.log(line1)

// var number = 34.3456
// console.log(Math.floor(number))
// console.log(Math.ceil(number))
// number.toFixed('2')
// number.toString("34")
// console.log(number.toFixed())
// console.log(number.parseInt('34'))
// console.log(parseInt(number))
// console.log(parseFloat(number))

// Number 
// var num1 = 40
// var num2 = "85"
// console.log(num1 + parseInt(num2))

// Undefined
// var firstName;
// console.log(firstName)

// const friends = ["Alamin", "Sajib", "Saiful"]
// console.log(friends)

// const students = {
//   firstName: "Alamin",
//   lastName: "Hossain",
//   age: 40,
//   owner: {
//     backGround: "red",
//   },
//   eyeColor: "Black"
// }

// console.log(students)

// const foo = null
// console.log(foo)


// var number = [1, 2, 3, 4, 5, 6]
// number.push(9)
// number.pop()
// number.shift()
// number.unshift(12) 
// console.log(number)

// const students = {
//   firstName: "Alamin",
//   lastName: "Hossain",
//   age: 40,
//   owner: {
//     backGround: "red",
//   },
//   eyeColor: "Black"
// }

// const students2 = {
//   firstName: "Sajib",
//   lastName: "Arafat",
//   age: 30,
//   owner: {
//     backGround: "red",
// },
//   eyeColor: "Black"
// }

// var studentsCollection = [students, students2]
// console.log(studentsCollection)

// const isRaining = false
// const power = "Less"
// if (isRaining == true) {
//   console.log("Vai, Ami Code Korbo Ajke")
// } else if (power == "Less") {
//   console.log("Vai Ami Ektu Pore Ber Hobo")
// } else {
//   console.log("Vai, Ami Ajke Ber Hobo Na")
// }

// const isRaining = false

// const rainSpeed = "High"

// if (isRaining == true && rainSpeed == "High") {
//   console.log("Vai , Ami Code Korbo")
// } else if (isRaining == true && rainSpeed == "Low") {
//   console.log("Vai , ami ektu pore ber hobo")
// } else {
//   console.log("Vai, Ami Ajke Ber Hobo Na")
// }


// 

const budget = 6000
if (budget > 5000) {
  console.log("Tore Dibo")
  const hotelCost = 4000
  const isRemaining = budget - hotelCost
  console.log(isRemaining)
  if (isRemaining > 2000) {
    console.log("bir kinbo")
  } else {
    console.log("Shopping Korbo")
  }
} else {
  console.log("Taka Nai , Ami Gum Dibo")
}