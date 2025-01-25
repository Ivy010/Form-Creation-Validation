function checkAnswer() {
    let correctAnswer = "4"; 
  
    let selectedRadio = document.querySelector('quiz:checked'); 
  
    let userAnswer = selectedRadio ? selectedRadio.value : null; 

    if (userAnswer !== null) { 
      if (userAnswer === correctAnswer) { 
        document.getElementById('feedback').textContent = "Correct! Well done."; 
      }
       else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!"; 
      }
  }

  let submitButton = document.getElementById('submit-answer'); 
  
  submitButton.addEventListener('click', checkAnswer);
}