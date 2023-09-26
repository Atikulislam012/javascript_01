var marks = prompt("Enter Your Roll Number")

if (marks > 100 || marks < 0)
    alert("Invalid Marks");
else if (marks >= 80 && marks <= 100 )
    alert("Your grade is A+");
else if (marks >= 70 && marks <= 79 )
    alert("Your grade is A");
else if (marks >= 60 && marks <= 69 )
    alert("Your grade is A-");
else if (marks >= 50 && marks <= 59 )
    alert("Your grade is B");
else if (marks >= 40 && marks <= 49 )
    alert("Your grade is C");
else if (marks >= 33 && marks <= 39 )
    alert("Your grade is D");
else 
    alert("Your grade is A+");


