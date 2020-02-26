# Assignment 4: Code Quiz

## Summary

* The following application is a code quiz which presents five pages of multiple questions to a user.

* The landing page contains: 

* * Instructions

* * A link to a "high-scores" page 

* * A button that will lead to the next page to staart the quiz

* Each of the subsequnt five pages has four questions which should all be completed within the time limit of 75 seconds; 

* * When a user clicks on the correct response, the text "correct" will appear below the buttons

* * When a user clicks on the incorrect response, the text "wrong" will appear below the buttons, and 10 seconds will be subtracted from the timer

* The final page takes the user's time and lists it as their score, and includes a form for them to submit their initials and inclue their score in the "high-scores" page

## Successes

* I was successfully able to use bootstrap (as well as columns and rows), combined with CSS, to style the page

* I was successfully able to use separate <div> containers in the html to act as the pages of the quiz

* * Through CSS, I was able to hide and render each <div> visible when the "next" button on each page was clicked

* I was successfully able to make the timer count down, deduct 10 seconds from each incorrect answer, and stop at the end of the quiz

* I was able to append the time to the user's listed score on the final page, and was able to have it append to the "high-scores" page

* On the "high-scores" page, I was also able to add buttons which removed scores or allowed a user to return to the landing page

## Bugs
* Although I was able to use the DOM form submit() method and prevent the page from refreshing if the "submit" button on the form was clicked, I was unable to make the form submit the user's initials and save them to the "high-scores"

* I was also unable to have the correct score append to the "high-scores" page; the initial time appends

* I was also unable to write a function that would determine that a user would receive a score of 0 if none of the responses were clicked

* I was unable to clean up the JavaScript and HTML code so as to avoid so much lengthy repetition
