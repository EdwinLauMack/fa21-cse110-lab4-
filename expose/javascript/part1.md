Question 1: 20 <br>
Question 2: 20 

Question 3: 20 <br>
Question 4: 

ReferenceError: result is not defined
    at sumValues (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_1.js:11:35)
    at Object.<anonymous> (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_1.js:14:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

Explanation: The code returns an error because the let variable was declared inside the if block scope. Thus, the result variable is undefined outside the if block scope. Thus, on the else statement the result variable doesn't exist/it is not defined

Question 5: 

/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_1.js:5
        result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
    at sumValues (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_1.js:5:16)
    at Object.<anonymous> (/Users/edwinlau/Desktop/UC San Diego/Fall 2021/CSE-110/Lab 4/fa21-cse110-lab4-/expose/javascript/Part_1.js:14:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47

Explanation: The code returns a TypeError: Assignment to constant variable because the result variable is a constant variable and thus you can't reassign the value of a const variable after is is assigned for the first time

Question 6: The code returns an error because the const variable has the same scope as the let variable. Since the const result variable is declared inside the if block scope. The result variable is undefined outside the if block scope. Thus, on the else statement the result variable doesn't exist/it is not defined


