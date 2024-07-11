## WK1 CODE CHALLENGE
This repository contains solutions to the Week 1 Toy Problems challenges using Javascript.

# Getting Started
Clone the Repository:
Clone this repository to your local machine.

# Challenges
This project addresses three challenges, each with a dedicated Javascript file:

## Student Grade Generator (grade-generator.js)
 -This function prompts the user to enter a student's marks (between 0 and 100).
-It validates the user input to ensure it's within the valid range.
-Based on the marks, it assigns the corresponding letter grade (A, B, C, D, or E) using a series of conditional statements.
Finally, it displays the student's grade.

## Speed Detector (speed-detector.js):
 -This program takes the car's speed as user input.
-It defines a speed limit of 70 km/h.
-The program calculates the speed exceeding the limit (if any).
-It uses a conditional statement to determine the number of demerit points based on the exceeding speed (5 demerit points per 5 km/h).
-Depending on the demerit points, the program displays a message indicating "Ok" for no points, the number of demerit points, or "License suspended" for exceeding 12 points.

## Net Salary Calculator (salary-calculator.js):
 -This program calculates the net salary of an individual based on their basic salary and benefits.
 -It calculates the gross salary by adding the basic salary and benefits.
 -The program requires defining separate functions to calculate deductions for payee (tax), NHIF, and NSSF based on the provided tax rates (further research on KRA, NHIF, and NSSF rates in Kenya is recommended).This solution includes functional calculations based on Kenyan tax brackets and deductions (as of July 2024). Refer to the code for details.
-Once you have implemented the deduction functions, the program subtracts the calculated deductions from the gross salary to determine the net salary.
 -Finally, it displays a detailed breakdown of gross salary, deductions, and net salary.

## File Structure
The code for each challenge resides in a separate Javascript file named according to the challenge (e.g., grade-generator.js).

## Running the Code
1.Navigate to the project directory in your terminal.
2.Use the node command followed by the filename (e.g., node grade-generator.js).
      -grade-generator: This program prompts the user for input during execution.
      -speed-detector: This program prompts the user for input during execution.
     -salary-calculator: This program takes basic salary and benefits as command-line arguments (e.g., node salary-calculator.js 50000 2000). Ensure you provide both values when running the program.

## Contact
 1.Name:Enock Langat
 2.Email:enock.langat@student.moringaschool.com
 3.Github username:tkashee 
