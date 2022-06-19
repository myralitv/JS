//  1. Create a variable “item_1”
//  2. Assign the variable item_1 the number 5.
//  3. Output item_1 to the console.
//  4. Create variable “item_2”
//  5. Assign the variable item_2 the number 3.
//  6. Output item_2 to the console.
//  7. Create variable “item_3”
//  8. Assign the item_3 variable the addition of item_1 and item_2.
//  9. Output item_3 to the console.
//  10. Create variable “item_4”
//  11. Assign the string “Yolochka” to the variable item_4
//  12. Output item_4 to the console.
//  13. Display the addition of item_3 and item_4 to the console.
//  14. Print the multiplication of item_3 and item_4 to the console.
//  15. Create variable “item_5”
//  16. Assign item_5 to item_3
//  17. Create variable item_6.
//  18. Create variable item_6_type
//  19. Set variable item_6 to 15
//  20. Assign item_6_type variable the type of item_6 variable
//  21. Print the item_6 data type to the console as —— “item_6 == ” item_6, “item_6_type == ” item_6_type ——
//  22. Create variable item_7 and convert item_6 to String in it.
//  23. Create variable item_7_type
//  24. Assign item_7_type variable the type of item_7 variable
//  25. Print the item_7 data type to the console as —— “item_7 == ” item_7, “item_7_type == ” item_7_type ——
//  26. Create a variable "age_1" and assign the value 10 to it
//  27. Create variable “age_2” and assign value 18 to it
//  28. Create variable “age_3” and assign value 60 to it
//  29. Create an if in which you will check the value of the variable age_1
//  30. If age_1 < age_2, print to console “You don’t have access cause your age is” + age_1 + “It’s less then”
//  31. If age_1 >= age_2 and age_1 < age_3, output “Welcome!”
//  32. If age_1 > age_3, output “Keep calm and look Culture channel” to the console.
//  33. Otherwise print "Technical work".


// ex. 1, 2, 3
let item_1 = 5
console.log(item_1)

// ex. 4, 5, 6
let item_2 = 3
console.log(item_2)

// ex. 7, 8, 9
let item_3 = item_1 + item_2
console.log(item_3)

// ex. 10, 11, 12
let item_4 = "Yolochka"
console.log(item_4)

// ex. 13
console.log(item_3 + item_4)
// ex. 14
console.log(item_3 * item_4);
// ex. 15, 16
let item_5 = item_3
console.log(item_5)

//ex. 17, 18, 19, 20
let item_6 = 15
// typeof item_6 === Number
let item_6_type = typeof(item_6)
typeof item_6_type === typeof item_6

// ex. 21
console.log("item_6==", item_6, "item_6_type==", item_6_type)
console.log("item_6==", typeof(item_6), "item_6_type==", item_6_type)
// console.log("item_6==", item_6, typeof(item_6))
// console.log("item_6_type==", item_6_type, typeof(item_6_type))

// ex. 22, 23, 24, 25
let item_7 = typeof("item_6")
let item_7_type = typeof(item_7)
console.log("item_7==", item_7, "item_7_type==", item_7_type)

// ex. 26, 27, 28
let age_1 = 61
let age_2 = 18
let age_3 = 60

// ex. 29, 30, 31, 32, 33
if (age_1 < age_2) {
    console.log("You don't have access cause your age is ", age_1, "It's less then") 
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!")
} else if (age_1 > age_3) {
    console.log("Keep kalm and look Culture channel")
} else {
    console.log("Technical work")
}