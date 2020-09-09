Bonus points - Answers
---
Question: Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.
Answer: In this expression, string are being added, however, after ('b' + 'a' +), there is +'a' (positive a string), which is supposed to be a positive number but it is not, and it was declared as string 'a'. Since it is not a number but string, the result will NaN(not a number). The simpler expression would be this ('b' + 'a' + 'NaN' + 'a').toLowerCase(). And the end result will be (banana) as the result string turned to lowercase using the toLowerCase() function.

Note
---
Exercise 1 and 2 files are located in the exercise 1 and exercise 2 folder. Please check.