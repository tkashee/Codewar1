function calculateGrade(marks) {
  // Validate input (check for number and range)
  if (typeof marks !== 'number' || marks < 0 || marks > 100) {
    return 'Invalid input. Please enter a number between 0 and 100 for marks.';
  }

  if (marks >= 80) {
    return 'A';
  } else if (marks >= 60) {
    return 'B';
  } else if (marks >= 50) {
    return 'C';
  } else if (marks >= 40) {
    return 'D';
  } else {
    return 'E';
  }
}

const marksInput = document.getElementById('marks-input');
const gradeOutput = document.getElementById('grade-output');

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const marks = parseInt(marksInput.value);
  const grade = calculateGrade(marks);
  gradeOutput.textContent = grade;
});

