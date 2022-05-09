(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/keudalogo.png";
    } else {
      logo.src = "assets/images/keudalogo.png";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} `;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Mistä tykkäät eniten?",
      answers: {
        a: "Numeroista",
        b: "Mummoista",
        c: "Tietokoneista"
      },
      correctAnswer: "c"
    },
    {
      question: "Missä tykkäät työskennellä",
      answers: {
        a: "Toimistolla",
        b: "Ulkona",
        c: "Nörttiluolassa"
      },
      correctAnswer: "c"
    },
    {
      question: "Mikä on tärkeintä sinulle?",
      answers: {
        a: "Kaverit",
        b: "Koulu",
        c: "Raha",
        d: "Pelaaminen"
      },
      correctAnswer: "d"
    }
  ];






  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
// Questions will be asked
const Questions = [{
  id: 0,
  q: "What is capital of India?",
  a: [{ text: "gandhinagar", isCorrect: false },
      { text: "Surat", isCorrect: false },
      { text: "Delhi", isCorrect: true },
      { text: "mumbai", isCorrect: false }
  ]

},
{
  id: 1,
  q: "What is the capital of Thailand?",
  a: [{ text: "Lampang", isCorrect: false, isSelected: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true }
  ]

},
{
  id: 2,
  q: "What is the capital of Gujarat",
  a: [{ text: "surat", isCorrect: false },
      { text: "vadodara", isCorrect: false },
      { text: "gandhinagar", isCorrect: true },
      { text: "rajkot", isCorrect: false }
  ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "lightgoldenrodyellow";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightgoldenrodyellow";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightskyblue";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightgoldenrodyellow";
  op4.style.backgroundColor = "lightskyblue";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "lightskyblue";
  op2.style.backgroundColor = "lightskyblue";
  op3.style.backgroundColor = "lightskyblue";
  op4.style.backgroundColor = "lightgoldenrodyellow";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
  } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
  }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
  id++;
  iterate(id);
  console.log(id);
}

})




function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}


function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
  new Question("Mikä eläin olet?", ["Kala", "Lehmä","Koira", "Mammutti"], "Mammutti"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
  new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
  new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "What is the standard distance between the target and archer in Olympics?",
    o : [
      "50 meters",
      "70 meters",
      "100 meters",
      "120 meters"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Which is the highest number on a standard roulette wheel?",
    o : [
      "22",
      "24",
      "32",
      "36"
    ],
    a : 3
  },
  {
    q : "How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
    o : [
      "400 pounds",
      "550 pounds",
      "700 pounds",
      "750 pounds"
    ],
    a : 2
  },
  {
    q : "Which is the seventh planet from the sun?",
    o : [
      "Uranus",
      "Earth",
      "Pluto",
      "Mars"
    ],
    a : 0
  },
  {
    q : "Which is the largest ocean on Earth?",
    o : [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    a : 3
  }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);


</div>
</div>
<div class="site grid-container container hfeed grid-parent" id="page">
<div class="site-content" id="content">

<div class="content-area grid-parent mobile-grid-100 grid-75 tablet-grid-75" id="primary">
<main class="site-main" id="main">

<article id="post-2471" class="post-2471 post type-post status-publish format-standard has-post-thumbnail category-persoonallisuus category-persoonallisuustestit category-testit category-tyoelama tag-ammatinvalinta tag-ammatti tag-tyoelama tag-ura infinite-scroll-item no-featured-image-padding" itemtype="https://schema.org/CreativeWork" itemscope>
<div class="inside-article">
<div class="featured-image  page-header-image-single ">
<img width="1200" height="800" src="https://www.evermind.fi/wp-content/uploads/2019/12/ammatinvalintatesti.jpg" class="attachment-full size-full" alt="Ammatinvalintatestin kuvituskuvassa nainen kirjastossa" loading="lazy" itemprop="image" srcset="https://www.evermind.fi/wp-content/uploads/2019/12/ammatinvalintatesti.jpg 1200w, https://www.evermind.fi/wp-content/uploads/2019/12/ammatinvalintatesti-300x200.jpg 300w, https://www.evermind.fi/wp-content/uploads/2019/12/ammatinvalintatesti-1024x683.jpg 1024w, https://www.evermind.fi/wp-content/uploads/2019/12/ammatinvalintatesti-768x512.jpg 768w" sizes="(max-width: 1200px) 100vw, 1200px" />
</div>			<header class="entry-header" aria-label="Sisältö">
<p id="breadcrumbs"><span><span><a href="https://www.evermind.fi/">Etusivu</a> » <span><a href="https://www.evermind.fi/tyoelama/">Työ</a> » <span class="breadcrumb_last" aria-current="page">Mikä minusta tulee seuraavaksi? Tee ammatinvalintatesti</span></span></span></span></p>		<div class="entry-meta">
  </div>
  </header>

<div class="entry-content" itemprop="text">

<p class="has-drop-cap has-medium-font-size">Millaisesta työstä sytyt? Millaisten asioiden tekeminen tuntuu sinusta mielekkäältä? Millaiset työskentelyolosuhteet sopivat sinulle parhaiten? Ammatinvalintatesti auttaa omien taipumusten selvittämisessä.</p>



<p>Tämän ammatinvalintatestin ulottuvuudet eivät ole toisiaan pois sulkevia tyyppejä tai kategorioita vaan jokainen meistä voi löytää itseensä sopivia ominaisuuksia – eri painotuksilla – niistä kaikista. Testin pisteet kertovat toisaalta, mitkä ulottuvuudet ovat kohdallasi voimakkaimpia ja toisaalta, miltä ulottuvuuksilta löydät omia piirteitäsi ja vahvuuksiasi vähiten.</p><div class='code-block code-block-1' style='margin: 8px auto; text-align: center; display: block; clear: both;'>
<!-- NM - Evermind.fi 300x600 placement -->
<script data-adfscript="adx.adform.net/adx/?mid=918021"></script>
<script src="//s1.adform.net/banners/scripts/adx.js" async defer></script></div>




<p>Testin tulos ei ole millään muotoa tieteellinen arvio sinusta eikä lopullinen totuus. Käytä siis tuloksia itsetutkiskeluun ja hylkää surutta luonnehdinnat, jotka eivät mielestäsi sovi sinuun. Toivon joka tapauksessa, että tämä ammatinvalintatesti auttaa sinua urapohdinnoissasi ja tielläsi kohti itsesi näköistä työelämää.</p>


<div class='qsm-quiz-container qmn_quiz_container mlw_qmn_quiz  quiz_theme_default  '>
  <form name="quizForm3" id="quizForm3" action="/ammatinvalintatesti/?msclkid=50e3b69acf5e11ec8ddd5d3e85f92bce" method="POST" class="qsm-quiz-form qmn_quiz_form mlw_quiz_form" novalidate enctype="multipart/form-data">
<input type="hidden" name="qsm_hidden_questions" id="qsm_hidden_questions" value="">
<div id="mlw_error_message" class="qsm-error-message qmn_error_message_section"></div>
<span id="mlw_top_of_quiz"></span>
      <section class="qsm-page ">
        <div class="quiz_section quiz_begin">
    <div class='qsm-before-message mlw_qmn_message_before'>
<h1> Ammatinvalintatesti</h1>
    </div>
          </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-69 " data-qid="69">
    <div class='mlw_qmn_new_question'>Minusta on mukava touhuta porukalla. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question69-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question69" id="question69_1" value="Täysin samaa mieltä" />
  <label for="question69_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question69-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question69" id="question69_2" value="Jonkin verran samaa mieltä" />
  <label for="question69_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question69-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question69" id="question69_3" value="En samaa enkä eri mieltä" />
  <label for="question69_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question69-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question69" id="question69_4" value="Jonkin verran eri mieltä" />
  <label for="question69_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question69-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question69" id="question69_5" value="Täysin eri mieltä" />
  <label for="question69_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question69" id="question69_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-81 " data-qid="81">
    <div class='mlw_qmn_new_question'>Harrastusleirin ohjaajana olisi varmasti hauskaa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question81-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question81" id="question81_1" value="Täysin samaa mieltä" />
  <label for="question81_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question81-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question81" id="question81_2" value="Jonkin verran samaa mieltä" />
  <label for="question81_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question81-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question81" id="question81_3" value="En samaa enkä eri mieltä" />
  <label for="question81_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question81-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question81" id="question81_4" value="Jonkin verran eri mieltä" />
  <label for="question81_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question81-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question81" id="question81_5" value="Täysin eri mieltä" />
  <label for="question81_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question81" id="question81_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-75 " data-qid="75">
    <div class='mlw_qmn_new_question'>Parasta olisi, jos saisin itse päättää, mihin vuorokauden aikaan teen työni. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question75-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question75" id="question75_1" value="Täysin samaa mieltä" />
  <label for="question75_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question75-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question75" id="question75_2" value="Jonkin verran samaa mieltä" />
  <label for="question75_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question75-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question75" id="question75_3" value="En samaa enkä eri mieltä" />
  <label for="question75_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question75-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question75" id="question75_4" value="Jonkin verran eri mieltä" />
  <label for="question75_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question75-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question75" id="question75_5" value="Täysin eri mieltä" />
  <label for="question75_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question75" id="question75_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-86 " data-qid="86">
    <div class='mlw_qmn_new_question'>Näen helposti, miten tehtäväkokonaisuudet saadaan hoidetuksi tehokkaimmalla tavalla. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question86-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question86" id="question86_1" value="Täysin samaa mieltä" />
  <label for="question86_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question86-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question86" id="question86_2" value="Jonkin verran samaa mieltä" />
  <label for="question86_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question86-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question86" id="question86_3" value="En samaa enkä eri mieltä" />
  <label for="question86_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question86-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question86" id="question86_4" value="Jonkin verran eri mieltä" />
  <label for="question86_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question86-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question86" id="question86_5" value="Täysin eri mieltä" />
  <label for="question86_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question86" id="question86_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-58 " data-qid="58">
    <div class='mlw_qmn_new_question'>Mikroskooppi ja teleskooppi olivat hartaimmat lahjatoiveeni lapsena – ja ovat sitä edelleen. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question58-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question58" id="question58_1" value="Täysin samaa mieltä" />
  <label for="question58_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question58-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question58" id="question58_2" value="Jonkin verran samaa mieltä" />
  <label for="question58_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question58-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question58" id="question58_3" value="En samaa enkä eri mieltä" />
  <label for="question58_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question58-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question58" id="question58_4" value="Jonkin verran eri mieltä" />
  <label for="question58_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question58-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question58" id="question58_5" value="Täysin eri mieltä" />
  <label for="question58_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question58" id="question58_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-62 " data-qid="62">
    <div class='mlw_qmn_new_question'>Teen mielelläni töitä käsilläni. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question62-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question62" id="question62_1" value="Täysin samaa mieltä" />
  <label for="question62_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question62-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question62" id="question62_2" value="Jonkin verran samaa mieltä" />
  <label for="question62_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question62-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question62" id="question62_3" value="En samaa enkä eri mieltä" />
  <label for="question62_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question62-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question62" id="question62_4" value="Jonkin verran eri mieltä" />
  <label for="question62_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question62-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question62" id="question62_5" value="Täysin eri mieltä" />
  <label for="question62_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question62" id="question62_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-70 " data-qid="70">
    <div class='mlw_qmn_new_question'>Koen muiden läsnäolon häiritsevänä töitä tehdessäni. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question70-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question70" id="question70_1" value="Täysin samaa mieltä" />
  <label for="question70_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question70-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question70" id="question70_2" value="Jonkin verran samaa mieltä" />
  <label for="question70_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question70-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question70" id="question70_3" value="En samaa enkä eri mieltä" />
  <label for="question70_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question70-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question70" id="question70_4" value="Jonkin verran eri mieltä" />
  <label for="question70_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question70-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question70" id="question70_5" value="Täysin eri mieltä" />
  <label for="question70_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question70" id="question70_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-73 " data-qid="73">
    <div class='mlw_qmn_new_question'>Mieluiten teen työtäni koskevat päätökset itse. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question73-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question73" id="question73_1" value="Täysin samaa mieltä" />
  <label for="question73_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question73-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question73" id="question73_2" value="Jonkin verran samaa mieltä" />
  <label for="question73_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question73-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question73" id="question73_3" value="En samaa enkä eri mieltä" />
  <label for="question73_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question73-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question73" id="question73_4" value="Jonkin verran eri mieltä" />
  <label for="question73_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question73-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question73" id="question73_5" value="Täysin eri mieltä" />
  <label for="question73_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question73" id="question73_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-77 " data-qid="77">
    <div class='mlw_qmn_new_question'>Kaikkein mieluiten teen säännöllistä päivätyötä. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question77-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question77" id="question77_1" value="Täysin samaa mieltä" />
  <label for="question77_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question77-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question77" id="question77_2" value="Jonkin verran samaa mieltä" />
  <label for="question77_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question77-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question77" id="question77_3" value="En samaa enkä eri mieltä" />
  <label for="question77_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question77-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question77" id="question77_4" value="Jonkin verran eri mieltä" />
  <label for="question77_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question77-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question77" id="question77_5" value="Täysin eri mieltä" />
  <label for="question77_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question77" id="question77_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-71 " data-qid="71">
    <div class='mlw_qmn_new_question'>Viihdyn parhaiten vilkkaassa avokonttorissa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question71-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question71" id="question71_1" value="Täysin samaa mieltä" />
  <label for="question71_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question71-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question71" id="question71_2" value="Jonkin verran samaa mieltä" />
  <label for="question71_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question71-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question71" id="question71_3" value="En samaa enkä eri mieltä" />
  <label for="question71_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question71-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question71" id="question71_4" value="Jonkin verran eri mieltä" />
  <label for="question71_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question71-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question71" id="question71_5" value="Täysin eri mieltä" />
  <label for="question71_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question71" id="question71_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-60 " data-qid="60">
    <div class='mlw_qmn_new_question'>Minusta on kiehtovaa tarkkailla säätä. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question60-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question60" id="question60_1" value="Täysin samaa mieltä" />
  <label for="question60_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question60-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question60" id="question60_2" value="Jonkin verran samaa mieltä" />
  <label for="question60_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question60-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question60" id="question60_3" value="En samaa enkä eri mieltä" />
  <label for="question60_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question60-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question60" id="question60_4" value="Jonkin verran eri mieltä" />
  <label for="question60_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question60-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question60" id="question60_5" value="Täysin eri mieltä" />
  <label for="question60_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question60" id="question60_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-64 " data-qid="64">
    <div class='mlw_qmn_new_question'>Minusta on hauskaa pohtia abstrakteja käsitteitä ja konsepteja. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question64-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question64" id="question64_1" value="Täysin samaa mieltä" />
  <label for="question64_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question64-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question64" id="question64_2" value="Jonkin verran samaa mieltä" />
  <label for="question64_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question64-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question64" id="question64_3" value="En samaa enkä eri mieltä" />
  <label for="question64_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question64-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question64" id="question64_4" value="Jonkin verran eri mieltä" />
  <label for="question64_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question64-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question64" id="question64_5" value="Täysin eri mieltä" />
  <label for="question64_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question64" id="question64_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-66 " data-qid="66">
    <div class='mlw_qmn_new_question'>Toteutan mielelläni toisten tekemiä suunnitelmia. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question66-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question66" id="question66_1" value="Täysin samaa mieltä" />
  <label for="question66_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question66-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question66" id="question66_2" value="Jonkin verran samaa mieltä" />
  <label for="question66_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question66-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question66" id="question66_3" value="En samaa enkä eri mieltä" />
  <label for="question66_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question66-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question66" id="question66_4" value="Jonkin verran eri mieltä" />
  <label for="question66_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question66-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question66" id="question66_5" value="Täysin eri mieltä" />
  <label for="question66_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question66" id="question66_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-84 " data-qid="84">
    <div class='mlw_qmn_new_question'>Haluaisin auttaa vanhuksia heidän päivittäisissä askareissaan. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question84-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question84" id="question84_1" value="Täysin samaa mieltä" />
  <label for="question84_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question84-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question84" id="question84_2" value="Jonkin verran samaa mieltä" />
  <label for="question84_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question84-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question84" id="question84_3" value="En samaa enkä eri mieltä" />
  <label for="question84_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question84-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question84" id="question84_4" value="Jonkin verran eri mieltä" />
  <label for="question84_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question84-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question84" id="question84_5" value="Täysin eri mieltä" />
  <label for="question84_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question84" id="question84_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-67 " data-qid="67">
    <div class='mlw_qmn_new_question'>Tyhjä paperi on minulle kauhistus. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question67-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question67" id="question67_1" value="Täysin samaa mieltä" />
  <label for="question67_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question67-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question67" id="question67_2" value="Jonkin verran samaa mieltä" />
  <label for="question67_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question67-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question67" id="question67_3" value="En samaa enkä eri mieltä" />
  <label for="question67_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question67-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question67" id="question67_4" value="Jonkin verran eri mieltä" />
  <label for="question67_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question67-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question67" id="question67_5" value="Täysin eri mieltä" />
  <label for="question67_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question67" id="question67_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-72 " data-qid="72">
    <div class='mlw_qmn_new_question'>Olen tehokkaimmillani silloin, kun saan tehdä töitä yksin. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question72-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question72" id="question72_1" value="Täysin samaa mieltä" />
  <label for="question72_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question72-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question72" id="question72_2" value="Jonkin verran samaa mieltä" />
  <label for="question72_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question72-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question72" id="question72_3" value="En samaa enkä eri mieltä" />
  <label for="question72_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question72-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question72" id="question72_4" value="Jonkin verran eri mieltä" />
  <label for="question72_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question72-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question72" id="question72_5" value="Täysin eri mieltä" />
  <label for="question72_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question72" id="question72_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-74 " data-qid="74">
    <div class='mlw_qmn_new_question'>Minulle sopii hyvin, että joku toinen priorisoi työtehtäväni. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question74-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question74" id="question74_1" value="Täysin samaa mieltä" />
  <label for="question74_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question74-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question74" id="question74_2" value="Jonkin verran samaa mieltä" />
  <label for="question74_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question74-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question74" id="question74_3" value="En samaa enkä eri mieltä" />
  <label for="question74_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question74-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question74" id="question74_4" value="Jonkin verran eri mieltä" />
  <label for="question74_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question74-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question74" id="question74_5" value="Täysin eri mieltä" />
  <label for="question74_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question74" id="question74_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-83 " data-qid="83">
    <div class='mlw_qmn_new_question'>Uskon, että viihtyisin töissä päiväkodissa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question83-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question83" id="question83_1" value="Täysin samaa mieltä" />
  <label for="question83_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question83-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question83" id="question83_2" value="Jonkin verran samaa mieltä" />
  <label for="question83_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question83-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question83" id="question83_3" value="En samaa enkä eri mieltä" />
  <label for="question83_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question83-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question83" id="question83_4" value="Jonkin verran eri mieltä" />
  <label for="question83_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question83-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question83" id="question83_5" value="Täysin eri mieltä" />
  <label for="question83_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question83" id="question83_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-78 " data-qid="78">
    <div class='mlw_qmn_new_question'>Minusta on parasta, että jokaisella työntekijällä on oma, selkeästi rajattu roolinsa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question78-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question78" id="question78_1" value="Täysin samaa mieltä" />
  <label for="question78_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question78-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question78" id="question78_2" value="Jonkin verran samaa mieltä" />
  <label for="question78_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question78-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question78" id="question78_3" value="En samaa enkä eri mieltä" />
  <label for="question78_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question78-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question78" id="question78_4" value="Jonkin verran eri mieltä" />
  <label for="question78_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question78-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question78" id="question78_5" value="Täysin eri mieltä" />
  <label for="question78_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question78" id="question78_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-87 " data-qid="87">
    <div class='mlw_qmn_new_question'>Verotarkastajana olisi varmasti hauskaa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question87-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question87" id="question87_1" value="Täysin samaa mieltä" />
  <label for="question87_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question87-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question87" id="question87_2" value="Jonkin verran samaa mieltä" />
  <label for="question87_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question87-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question87" id="question87_3" value="En samaa enkä eri mieltä" />
  <label for="question87_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question87-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question87" id="question87_4" value="Jonkin verran eri mieltä" />
  <label for="question87_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question87-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question87" id="question87_5" value="Täysin eri mieltä" />
  <label for="question87_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question87" id="question87_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-76 " data-qid="76">
    <div class='mlw_qmn_new_question'>Haaveilen työstä, jota voisin tehdä mistä päin maailmaa tahansa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question76-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question76" id="question76_1" value="Täysin samaa mieltä" />
  <label for="question76_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question76-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question76" id="question76_2" value="Jonkin verran samaa mieltä" />
  <label for="question76_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question76-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question76" id="question76_3" value="En samaa enkä eri mieltä" />
  <label for="question76_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question76-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question76" id="question76_4" value="Jonkin verran eri mieltä" />
  <label for="question76_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question76-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question76" id="question76_5" value="Täysin eri mieltä" />
  <label for="question76_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question76" id="question76_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-80 " data-qid="80">
    <div class='mlw_qmn_new_question'>Tutut rutiinit sopivat minulle. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question80-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question80" id="question80_1" value="Täysin samaa mieltä" />
  <label for="question80_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question80-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question80" id="question80_2" value="Jonkin verran samaa mieltä" />
  <label for="question80_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question80-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question80" id="question80_3" value="En samaa enkä eri mieltä" />
  <label for="question80_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question80-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question80" id="question80_4" value="Jonkin verran eri mieltä" />
  <label for="question80_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question80-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question80" id="question80_5" value="Täysin eri mieltä" />
  <label for="question80_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question80" id="question80_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-82 " data-qid="82">
    <div class='mlw_qmn_new_question'>Minulla on voimakas halu auttaa muita ihmisiä. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question82-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question82" id="question82_1" value="Täysin samaa mieltä" />
  <label for="question82_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question82-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question82" id="question82_2" value="Jonkin verran samaa mieltä" />
  <label for="question82_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question82-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question82" id="question82_3" value="En samaa enkä eri mieltä" />
  <label for="question82_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question82-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question82" id="question82_4" value="Jonkin verran eri mieltä" />
  <label for="question82_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question82-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question82" id="question82_5" value="Täysin eri mieltä" />
  <label for="question82_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question82" id="question82_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-68 " data-qid="68">
    <div class='mlw_qmn_new_question'>Ilman mielikuvitusta elämä olisi todella tylsää. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question68-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question68" id="question68_1" value="Täysin samaa mieltä" />
  <label for="question68_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question68-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question68" id="question68_2" value="Jonkin verran samaa mieltä" />
  <label for="question68_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question68-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question68" id="question68_3" value="En samaa enkä eri mieltä" />
  <label for="question68_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question68-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question68" id="question68_4" value="Jonkin verran eri mieltä" />
  <label for="question68_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question68-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question68" id="question68_5" value="Täysin eri mieltä" />
  <label for="question68_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question68" id="question68_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-63 " data-qid="63">
    <div class='mlw_qmn_new_question'>Seinän maalaaminen ja pölyjen pyyhkiminen on kivaa, koska niissä näkee oman työn jäljen heti. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question63-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question63" id="question63_1" value="Täysin samaa mieltä" />
  <label for="question63_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question63-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question63" id="question63_2" value="Jonkin verran samaa mieltä" />
  <label for="question63_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question63-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question63" id="question63_3" value="En samaa enkä eri mieltä" />
  <label for="question63_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question63-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question63" id="question63_4" value="Jonkin verran eri mieltä" />
  <label for="question63_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question63-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question63" id="question63_5" value="Täysin eri mieltä" />
  <label for="question63_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question63" id="question63_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-85 " data-qid="85">
    <div class='mlw_qmn_new_question'>Minä olen niitä ihmisiä, joilla pysyy kaikki langat käsissä ja pallot ilmassa. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question85-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question85" id="question85_1" value="Täysin samaa mieltä" />
  <label for="question85_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question85-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question85" id="question85_2" value="Jonkin verran samaa mieltä" />
  <label for="question85_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question85-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question85" id="question85_3" value="En samaa enkä eri mieltä" />
  <label for="question85_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question85-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question85" id="question85_4" value="Jonkin verran eri mieltä" />
  <label for="question85_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question85-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question85" id="question85_5" value="Täysin eri mieltä" />
  <label for="question85_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question85" id="question85_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-57 " data-qid="57">
    <div class='mlw_qmn_new_question'>Kun kiinnostun jostain asiasta, saatan uppoutua tutkimaan sitä tuntikausiksi. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question57-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question57" id="question57_1" value="Täysin samaa mieltä" />
  <label for="question57_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question57-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question57" id="question57_2" value="Jonkin verran samaa mieltä" />
  <label for="question57_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question57-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question57" id="question57_3" value="En samaa enkä eri mieltä" />
  <label for="question57_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question57-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question57" id="question57_4" value="Jonkin verran eri mieltä" />
  <label for="question57_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question57-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question57" id="question57_5" value="Täysin eri mieltä" />
  <label for="question57_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question57" id="question57_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-88 " data-qid="88">
    <div class='mlw_qmn_new_question'>Kaappini ja laatikkoni ovat aina moitteettomassa järjestyksessä. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question88-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question88" id="question88_1" value="Täysin samaa mieltä" />
  <label for="question88_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question88-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question88" id="question88_2" value="Jonkin verran samaa mieltä" />
  <label for="question88_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question88-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question88" id="question88_3" value="En samaa enkä eri mieltä" />
  <label for="question88_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question88-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question88" id="question88_4" value="Jonkin verran eri mieltä" />
  <label for="question88_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question88-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question88" id="question88_5" value="Täysin eri mieltä" />
  <label for="question88_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question88" id="question88_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-65 " data-qid="65">
    <div class='mlw_qmn_new_question'>Pidän siitä, että saan luoda uutta tyhjästä. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question65-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question65" id="question65_1" value="Täysin samaa mieltä" />
  <label for="question65_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question65-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question65" id="question65_2" value="Jonkin verran samaa mieltä" />
  <label for="question65_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question65-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question65" id="question65_3" value="En samaa enkä eri mieltä" />
  <label for="question65_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question65-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question65" id="question65_4" value="Jonkin verran eri mieltä" />
  <label for="question65_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question65-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question65" id="question65_5" value="Täysin eri mieltä" />
  <label for="question65_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question65" id="question65_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-61 " data-qid="61">
    <div class='mlw_qmn_new_question'>Pidän siitä, että tekemästäni työstä jää konkreettinen jälki. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question61-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question61" id="question61_1" value="Täysin samaa mieltä" />
  <label for="question61_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question61-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question61" id="question61_2" value="Jonkin verran samaa mieltä" />
  <label for="question61_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question61-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question61" id="question61_3" value="En samaa enkä eri mieltä" />
  <label for="question61_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question61-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question61" id="question61_4" value="Jonkin verran eri mieltä" />
  <label for="question61_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question61-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question61" id="question61_5" value="Täysin eri mieltä" />
  <label for="question61_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question61" id="question61_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-59 " data-qid="59">
    <div class='mlw_qmn_new_question'>Pidän arvoitusten ratkaisemisesta. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question59-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question59" id="question59_1" value="Täysin samaa mieltä" />
  <label for="question59_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question59-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question59" id="question59_2" value="Jonkin verran samaa mieltä" />
  <label for="question59_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question59-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question59" id="question59_3" value="En samaa enkä eri mieltä" />
  <label for="question59_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question59-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question59" id="question59_4" value="Jonkin verran eri mieltä" />
  <label for="question59_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question59-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question59" id="question59_5" value="Täysin eri mieltä" />
  <label for="question59_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question59" id="question59_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-79 " data-qid="79">
    <div class='mlw_qmn_new_question'>Opiskelisin mieluiten alaa, josta valmistutaan selkeästi tiettyyn ammattiin (lääkäri, poliisi, optikko tms.). </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question79-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question79" id="question79_1" value="Täysin samaa mieltä" />
  <label for="question79_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question79-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question79" id="question79_2" value="Jonkin verran samaa mieltä" />
  <label for="question79_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question79-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question79" id="question79_3" value="En samaa enkä eri mieltä" />
  <label for="question79_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question79-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question79" id="question79_4" value="Jonkin verran eri mieltä" />
  <label for="question79_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question79-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question79" id="question79_5" value="Täysin eri mieltä" />
  <label for="question79_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question79" id="question79_none" checked="checked" value="" />
</div>
    </div>
          <div class="quiz_section qsm-question-wrapper question-section-id-559 " data-qid="559">
    <div class='mlw_qmn_new_question'>Minusta on mukava touhuta porukalla. </div>
<div class='mlw_qmn_question  qsm_remove_bold' >
</div>
<div class='qmn_radio_answers mlwRequiredRadio'>
        <div class="qmn_mc_answer_wrap " id="question559-Täysin-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question559" id="question559_1" value="Täysin samaa mieltä" />
  <label for="question559_1">
  Täysin samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question559-Jonkin-verran-samaa-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question559" id="question559_2" value="Jonkin verran samaa mieltä" />
  <label for="question559_2">
  Jonkin verran samaa mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question559-En-samaa-enkä-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question559" id="question559_3" value="En samaa enkä eri mieltä" />
  <label for="question559_3">
  En samaa enkä eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question559-Jonkin-verran-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question559" id="question559_4" value="Jonkin verran eri mieltä" />
  <label for="question559_4">
  Jonkin verran eri mieltä					</label>
           </div>
              <div class="qmn_mc_answer_wrap " id="question559-Täysin-eri-mieltä ">
              <input type='radio' class='qmn_quiz_radio' name="question559" id="question559_5" value="Täysin eri mieltä" />
  <label for="question559_5">
  Täysin eri mieltä					</label>
           </div>
        <input type="radio" style="display: none;" name="question559" id="question559_none" checked="checked" value="" />
</div>
    </div>
      </section>
  <input type="hidden" name="qmn_question_list" value="69Q81Q75Q86Q58Q62Q70Q73Q77Q71Q60Q64Q66Q84Q67Q72Q74Q83Q78Q87Q76Q80Q82Q68Q63Q85Q57Q88Q65Q61Q59Q79Q559Q" />
    <div id="mlw_error_message_bottom" class="qsm-error-message qmn_error_message_section"></div>
  <input type="hidden" name="total_questions" id="total_questions" value="33" />
  <input type="hidden" name="timer" id="timer" value="0" />
  <input type="hidden" name="timer_ms" id="timer_ms" value="0"/>
  <input type="hidden" class="qmn_quiz_id" name="qmn_quiz_id" id="qmn_quiz_id" value="3" />
  <input type='hidden' name='complete_quiz' value='confirmation' />
            </form>
</div>
<div style="display: none;" class="qsm-popup qsm-popup-slide" id="modal-3" aria-hidden="false"><div class="qsm-popup__overlay" tabindex="-1" data-micromodal-close=""><div class="qsm-popup__container qmn_quiz_container" role="dialog" aria-modal="true"><div class="qsm-popup__content"><img src="https://www.evermind.fi/wp-content/plugins/quiz-master-next/assets/clock.png" alt="clock.png"/><p class="qsm-time-up-text">Time is Up!</p></div><footer class="qsm-popup__footer"><button class="qsm-popup-secondary-button qmn_btn" data-micromodal-close="" aria-label="Close this dialog window">Cancel</button><button data-quiz_id="3" class="submit-the-form qmn_btn">Submit Quiz</button></footer></div></div></div><div style="display: none;" class="qsm-popup qsm-popup-slide" id="modal-4" aria-hidden="false"><div class="qsm-popup__overlay" tabindex="-1" data-micromodal-close=""><div class="qsm-popup__container qmn_quiz_container" role="dialog" aria-modal="true"><div class="qsm-popup__content"><img src="https://www.evermind.fi/wp-content/plugins/quiz-master-next/assets/clock.png" alt="clock.png"/><p class="qsm-time-up-text"> Time's up</p></div><footer class="qsm-popup__footer"><button class="qsm-popup-secondary-button qmn_btn" data-micromodal-close="" aria-label="Close this dialog window" onclick="location.reload();">Cancel</button></footer></div></div></div>

