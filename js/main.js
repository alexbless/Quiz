var questions = [ 
  {
    question: "In California you can't legally buy a mousetrap without having a what?",
    answer: "hunting license"
  },
  {
    question: "Washington police officers get a half hour class in how to what?",
    answer: "to sit down"
  },
  {
    question: "The average American does what 22 times a day?",
    answer: "laugh"
  },
  {
    question: "A law in Illinois prohibits men from doing what in public?",
    answer: "An erection"
  },
  {
    question: "In Texas it's illegal to swear in front of a what?",
    answer: "A corpse"
  },
  {
    question: "Coprastastaphobia is the fear of what?",
    answer: "Constipation"
  },
  {
    question: "On Sunday in Florida it is illegal for a single woman to do what?",
    answer: "skydive"
  },
  {
    question: "What's the difference between a crayfish and a crawfish?",
    answer: "nothing"
  },
  {
    question: "The Wall Street Crash took place in what year?",
    answer: 1929
  },
  {
    question: "Sonny the Cuckoo Bird was cuckoo for what breakfast cereal?",
    answer: "Cocoa Puffs"
  }

]

for(i = 0; i < questions.length; i++) {
  q = questions[i].question
  document.getElementById('question' + [i]).textContent = q
}

function testResults() {
  var correct = 0;
  var incorrect = 0;
  for(i = 0; i < questions.length; i++) { 
    var answer = questions[i].answer
    var guess = document.getElementById('answer' + [i]).value
    var questionSpot = document.getElementById('question' + [i])
    if(answer == guess) {
      questionSpot.className = 'correct'
      correct++
    } else {
      questionSpot.className = 'incorrect'
      incorrect++
    }
  }
  document.getElementById('correct').textContent = correct
  document.getElementById('incorrect').textContent = incorrect
}








