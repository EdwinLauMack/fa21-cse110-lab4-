Question 1: It will print out how many discounted prices were given, in this case it is 3. If we were to send a bigger input length on the price parameter of the function when we call it, the number of how many discounted prices will change accordingly to the size of the input length of the price parameter

Question 2: It will print out the discounted price from the last element given in the price array, which in this case is 150

Question 3: It will print out the final price of the last element given in the price array, which in this case is 150

Question 4: The function returns an array of final prices after it has been discounted. Thus, in this case it will output [50, 100, 150]

Question 5: 

/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:11
    console.log(i);
                ^

ReferenceError: i is not defined
    at discountPrices (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:11:17)
    at Object.<anonymous> (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:18:13)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

It will return an error because the variable i was defined by the let keyword and from part1 we know that because it was defined with the let keyword, it only exists/is accessible within the code block which in this case is the for loop. Once the for loop ends, i is not accessible and not defined. Thus, when we call console.log(i) outside the for loop. The variable i is undefined causing an error

Question 6:

/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:12
    console.log(discountedPrice);
                ^

ReferenceError: discountedPrice is not defined
    at discountPrices (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:12:17)
    at Object.<anonymous> (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:18:13)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

The same thing happens here from last question. discountedPrice variable was defined with the let keyword. Thus it only exists within the scope of the for loop block. Once the for loop is over, discountedPrice becomes undefined/inaccessible. Thus, when we call console.log(discountedPrice) outside the for loop. The variable discountedPrice is undefined causing an error

Question 7:

finalPrice will print out the final price of the last element given in the price array which is 150. This is because let finalPrice was defined within the same block scope which is within the scope of the whole function.

Question 8: 

Similarly to question 4, this will return an array of the final prices after the discount which would be [ 50, 100, 150 ].

Question 9:

/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:10
    console.log(i);
                ^

ReferenceError: i is not defined
    at discountPrices (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:10:17)
    at Object.<anonymous> (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_2.js:17:13)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

it will return an errror because the variable i is defined with the let keyword. Thus, the variable i only exists within the scope of the for loop. Once the for loop is over, i will become undefined/inaccessible. Thus, when we call console.log(i), the variable i here is undefined.

Question 10:

it will return the length of the given price array passed in the parameter when the function is called. In this case it is 3. 

Question 11: 

The code returns an array containing the final prices with the discounts from the original price array. Although the discounted array is defined with a const keywords we are not reassigning the discounted array but we are only modifying and manipulating it. So the final output will still be [50, 100, 150].

Data Types 

Question 12:

a. student.name
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseLoad[0]

Question 13:

a. '32' - since integers map to their exact string representation
b. 1 - since numeric conversion happens in mathemtical functions and expressions automatically
c. 3 - since 3 is a number, it uses numeric conversion. Thus, null becomes 0 (null maps to 0)
d. '3null' - since '3' is a string it uses string conversion. Thus, null becomes 'null' and '3' + 'null' is '3null'
e. 4 - since 3 is a number, it uses numeric conversion. Thus, true becomes 1 and 3 + 1 = 4
f. 0 - since false is 0 and null also maps to 0 and this is a mathematical operation, the result becomes 0
g. '3undefined' - since '3' is a string it used string conversion. Thus undefined becomes 'undefined' and '3' + 'undefined' = '3undefined'
h. NaN - since substraction is a math operation it uses numeric conversion. Thus, undefined maps to NaN and 3 - Nan = Nan

Question 14:   

a. true - this converts the string '2' to a number and runs the boolean. Since 2 > 1 it returns true
b. false - The comparison is done with strings. Thus, '2' is greater than '12' because alphabetically 1 is less than 2
c. true - this converts the string '2' to a number so it can be compared with the other 2. Thus, 2 == 2 is true
d. false - this is because three = signs checks for equality without any type conversions
e. false - this is because the numeric value for true is 1. Thus, 1 == 2 is false, they are not equal
f. true - this is because Boolean(2) will map to true since we are just checking if it is 2. Thus, true == true

Question 15: 

The difference between == and === is that == compares two values and allows for type conversions if needed. However === compares equality without any type of conversions. Therefore that is why when we compare 2 === '2' it returns false because without any conversions it is checking if the number 2 is the same as the string 2. It strictly compares whether both are the same type and if they have the same value.

Question 16:

Check part2-question16.js

Question 17: 
The result of running modifyArray is an array with values [ 2, 4, 6]. First the function modifyArray takes in an array with values [ 1, 2, 3] as a parameter and the function doSomething. modifyArray creates a newArray which will be returned once this function ends. Furthermore it enters a for loop that goes from from the beginning of the array passed in the parameters to the end of that array. Inside that for loop we call our callback which is the function doSomething which takes current ith element in the array passed in the parameters and multiplies it by 2. That result is then pushed into our newArray we initialized within our modifyArray function. We do this throughout our whole for loop and we then return the newArray array which contains an array with the values from the original array passed in our parameters multiplied by 2

Question 18:

Check part2-question18.js 

Question 19:

1 4 3 2


