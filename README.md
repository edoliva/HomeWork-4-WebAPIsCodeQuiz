# HomeWork-4-WebAPIsCodeQuiz
 
## HW 4 Description
This webpage was created so a user could take a timed quiz that removes time from the timer if the get a question wrong. Whatever their remaining time is at the end of the quiz will be their score. 

The can enter their initials and have their score logged.

They can see their score and initials, clear it from local storage if they desire, and also see the previsous users scores/initials. 
 
### The coding:
- This html and css and js were written to allow for a clean user experience. The general logis is as follows:
   - A user pressed the red "Generate Password" button to begin the process of generating a random password.
   - A user inputs a desired password length ranging from 8-128, then chooses from 4 character types detailed in the prompts.
   - The password is displayed in the dotted text box.
   - The password will be the desired number of characters, it will NOT include any undesired character types, and WILL include all desired character types. 
- Through this activity I learned how to properly organize an html, css, and js file to make it easy for the end user to understand. As well as GitHub best practices. JavaScript functions were a major focus point.
 
## Table of Contents
- [Installation](#installation)
- [Criteria Checks](#criteria)
- [Usage](#usage)
- [Looping](#looping)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
## Installation
Clone or download this repository on GitHub then open "HomeWork-3-JavaScript-PasswordGenerator/Develop/index.html" in a browser.  
## Criteria
- The user is initially prompted to enter a number from 8-128. If the user inputs a number less than 8, more than 128, or a non integer, an alert is triggered to let the user know, and asks if they would like to retry.
- If the user has selected a lowercase character, then a truthly value is assigned to a variable for lowercase characters. This is the case for the remaining 3 character types.
- If the user does not choose that character type then a falsy value is assigned.
- The last criteria check occurs further down into the code (line 55). This checks to see if the user wanted, for example, a number in the password, BUT no number occured. It does this check for all the character types.
   - If the user did not want a number, and no number occurs in the password, then GREAT! If they did want a number but for whatever reason there is none in the password, BAD - and a new password is created automatically.
 
## Usage
- An initial variable called characters is created and set = "". If the user wants lowercase then the character variable is now equal to the string of lowercase characters. Then...
- if the user wants uppercase included as well, the characters variable is combined with the uppercase characters. Then...
- if the user wants numbers included as well.... and so on until the variable characters is one string of all possible desired character types.
- The function createPassword() will randomly select n number of characters from this string, creating a password of POSSIBLY all desired character types, and only as long/short as the user selected.
- Why do we say POSSIBLE character types...
 
## Looping
- When a user selects the desired character types they are in effect adding all those characters to one long list of characters that could be in their password. The function createPassword() will randomly select characters from that list. So if the user does NOT want a number, then there is NO WAY a number will be in that list of possible characters, or show up in the password.
- But what if the user MUST have a number in the password, how do we account for that? The issue is that if a user selects an 8 character password, and also wants all 4 character types (that would be 26 lower, 26 upper, 10 numbers, and 28 special characters) there is a very good chance that none of the 10 numbers would show up in that password.
- From lines 56-94 we check to see if a user (wanted a specific character type) && (that specific character type never showed up in the password). If this is true, then we need to:
   - 1) Console log that mistake
   - 2) Delete the password that was placed into that text box
   - 3) Reset the var password = ""
   - 4) Create another password, given the same user criteria.
   - 5) Do this until the password includes ALL the character types the user wanted.
- Once we get a password that includes ALL the desired character types, then document this into the html webpage.
 
Screenshots:
-
![Webpage with no inputs](Assets/WebpageNoInputs.png)
Prompts:
-
![CharacterAmount](Assets/CharacterAmount.png)
![LowerCase](Assets/LowerCase.png)
![UpperCase](Assets/UpperCase.png)
![Numbers](Assets/Numbers.png)
![Special](Assets/Special.png)
![Output](Assets/Output.png)
User Input Error Prompts:
-
![UserInputError1](Assets/UserInputError1.png)
![UserInputError2](Assets/UserInputError2.png)
![UserInputError3](Assets/UserInputError3.png)
 
Console Logged Errors - NO NUMBER:
- Here we can see an example where the first password we created was missing a number.
- This is rare, but when it happens we console log the error, and create the password again. Usually the second time it should include the all desired characters. But if not... then loop again.
![ConsoleLog](Assets/ConsoleLog.png)
 
Console Logged Errors - NO UPPER:
- Here is another, even more rare occurrence when the user wanted ALL characters, but no uppercase character made it into the password. We looped another time and got the desired result.
![NoUpper](Assets/NoUpper.png)
 
## Credits
Shoutout to our instructor Anthony and TA Tom! As well as everyone at Trilogy Education for making the content and grading our assignments.
 
## License
© 2021 Edmond Oliva.
Confidential and Proprietary. All Rights Reserved.
---
