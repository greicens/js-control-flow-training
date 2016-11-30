console.log("security_questions.js loaded");

var securityQuestions = [{question: "what was your first pet's name?", expectedAnswer: "rex"},
                         {question: "what is your mother's maiden name?", expectedAnswer: "smith"},
                         {question: "where were you born", expectedAnswer: "Brazil"}
                        ];

function askQuestion(){
  for (var i = 0; i < securityQuestions.length; i++) {
    var userAnswer = window.prompt(securityQuestions[i].question);
    if(userAnswer !== securityQuestions[i].expectedAnswer){
      window.alert("that is not the correct answer");
      break; //is this a correct use for the key word break?
             //what to do if I want to ask the same question again?
    }
  }
}

askQuestion();
