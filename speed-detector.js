function calculateDemeritPoints(speed) {
    // Speed limit
    const speedLimit = 70;
  
    // Demerit point per unit above speed limit
    const demeritPerUnit = 5;
  
    // Input validation (check for number)
    if (typeof speed !== 'number' || speed < 0) {
      return 'Invalid input. Please enter a valid speed.';
    }
  
    // Calculate the difference between speed and speed limit
    const speedDifference = speed - speedLimit;
  
    // Check for speed within limit
    if (speedDifference <= 0) {
      return 'Ok';
    }
  
    // Calculate demerit points based on speed difference
    const demeritPoints = Math.ceil(speedDifference / demeritPerUnit);
  
    // Check for license suspension
    if (demeritPoints > 12) {
      return 'License suspended';
    }
  
    // Return the number of demerit points
    return `Points: ${demeritPoints}`;
  }
  
  // Get references to HTML elements
  const speedInput = document.getElementById('speed');
  const checkSpeedButton = document.getElementById('check-speed-button');
  const resultElement = document.getElementById('result');
  
  // Add event listener to the check speed button
  checkSpeedButton.addEventListener('click', () => {
    // Get the speed value from the input
    const speed = parseFloat(speedInput.value);
  
    // Call the calculateDemeritPoints function
    const result = calculateDemeritPoints(speed);
  
    // Display the result in the HTML element
    resultElement.textContent = result;
  });
  