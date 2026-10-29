[10/29/2026 1:01 PM] Moraka: /* General page styling*/
*{
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: artial, sans-serif;
    color: #222b45;
    line-height: 1.6;
}

/* header*/
.header {
    text-align:center;
    padding: 30px 15px;
    backround: #6254d9;
    color: white;
}

.heading P {
    margin-botton: 0;
}

/* Navigation button */
.navigation{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px 12px;
    backround: white;
}

.nav-btn {
    border: none;
    padding: 12px 18px;
    border-radius: 8px;
    backround: #e9e7ff;
    color: #493db0;
    font-size: 15px;
    cursor: pointer;

}

.nav-btn:hover,
.nav-btn.active{
    backround: #6254d9;
    color: white;

}
/* main content*/
.container {
    width: 90%;
    max-width: 800px;
    margin: 30px auto;
    min-height: 350px;
}

.section h2 {
    margin-bottom: 5px;


}

.description {
    color: #68708a;
    margin-top: 0;

    
}
/* Cards */
.card {
    backround:white;
    padding: 25px;
    margin-top: 20px;
    border-radius: 14px;
    box-shadow: 0 5px 20px rgba (40, 45, 90, 0, 08);

}
.question-count {
    color: #6254d9;
    font-weight: bold;
}

#study-question {
    font-size: 23px;
    margin: 20px 0;

}

.answer {
    padding: 15px;
    margin 15px 0;
    background: #e9f9ef;
    border-left: 4px solid #26a269;
    border-radius:  6px;
    white-space: pre-wrap;

}

.hidden {
    display: none !important;
}

/* buttons*/
.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;

}

.primary-btn,
.secondary-btn
.delete-btn {
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;

}

.primary-btn {
    background: #6254d9;
    color: white;

}

.primary-btn:hover {
    background: #493db0;

}

.secondary-btn {
    backround: #e9e7ff;
    color: #493db0;
}
.delete-btn {
    background: #ffe5e5;
    color: #b42318;
    margin-top: 12px;

}
button:focus-visible {
    outline: 3px solid #f0b429;
    outline-offset:3px;
}
[10/29/2026 3:55 PM] Moraka: function displayAllQuestions() {

  questionList.replaceChildren();

  if (questions.length === 0) {

    const message = document.createElement(“p”);

    message.textContent = “No questions yet. Add a new question!”;

    questionList.appendChild(message);

    return;

  }

  questions.forEach((item, index) => {

    const card = document.createElement(“article”);

    card.className = “question-item”;

    const heading = document.createElement(“h3”);

    heading.textContent = ${index + 1}. ${item.question};

    const answer = document.createElement(“p”);

    answer.textContent = Answer: ${item.answer};

    const deleteButton = document.createElement(“button”);

    deleteButton.className = “delete-btn”;

    deleteButton.textContent = “Delete Question”;

    deleteButton.type = “button”;

    deleteButton.addEventListener(“click”, () => {

      questions = questions.filter(

        question => question.id !== item.id

      );

      saveQuestions();

      currentIndex = 0;

      displayAllQuestions();

      displayStudyQuestion();

    });

    card.append(heading, answer, deleteButton);

    questionList.appendChild(card);

  });

}

// Add a new question

questionForm.addEventListener(“submit”, event => {

  event.preventDefault();

  const questionText = newQuestionInput.value.trim();

  const answerText = newAnswerInput.value.trim();

  if (!questionText || !answerText) {

    formMessage.textContent =

      “Please enter both a question and an answer.”;

    return;

  }

  const newItem = {

    id: Date.now(),

    question: questionText,

    answer: answerText

  };

  questions.push(newItem);

  const saved = saveQuestions();

  questionForm.reset();

  currentIndex = questions.length - 1;

  displayStudyQuestion();

  displayAllQuestions();

  formMessage.textContent = saved

    ? “Your question was added successfully!”

    : “Question added for this session, but it could not be saved in the browser.”;

});

// Start the app

displayStudyQuestion();

displayAllQuestions();
alert("Hello! Javascript is working!");