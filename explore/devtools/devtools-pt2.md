**Question 1:**

The bug is that the value of the input num1 and num2 is being recognized as a string. Therefore, when running calculateSum it will run string + string. In this case it will just append num1 and num2 together since the data type of these 2 variables are considered as strings. Thus, our answer would be '1' + '2' = '12' instead of 1 + 2 = 3

**Question 2:**

In order to solve this bug all we really need to do is before doing the sum calculation let result = num1 + num2 we can parse num1 and num2 as integers. Using the parseInt(num1) and parseInt(num2) functions we will be able to convert num1 and num2 into integers ultimately leading us to the answer we want
