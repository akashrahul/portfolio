// QUIZ DATA - 20 QUESTIONS PER CATEGORY (ADD YOUR QUESTIONS HERE)
const quizData = {
    general: [
        { question: "Capital of France?", answers: [{text: "Berlin", correct: false}, {text: "Madrid", correct: false}, {text: "Paris", correct: true}, {text: "Rome", correct: false}] },
        { question: "Largest planet?", answers: [{text: "Earth", correct: false}, {text: "Mars", correct: false}, {text: "Jupiter", correct: true}, {text: "Saturn", correct: false}] },
        { question: "'Land of Rising Sun'?", answers: [{text: "China", correct: false}, {text: "Japan", correct: true}, {text: "Korea", correct: false}, {text: "India", correct: false}] },
        { question: "Longest river?", answers: [{text: "Amazon", correct: true}, {text: "Nile", correct: false}, {text: "Yangtze", correct: false}, {text: "Mississippi", correct: false}] },
        // ADD 16 MORE GENERAL QUESTIONS HERE ↓
         { question: "What is the capital of France?", answers: [{text: "Berlin", correct: false}, {text: "Paris", correct: true}, {text: "Madrid", correct: false}, {text: "Rome", correct: false}] },
         { question: "How many continents are there on Earth?", answers: [{text: "5", correct: false}, {text: "6", correct: false}, {text: "7", correct: true}, {text: "8", correct: false}] },
         { question: "What is the largest ocean on Earth?", answers: [{text: "Atlantic Ocean", correct: false}, {text: "Indian Ocean", correct: false}, {text: "Arctic Ocean", correct: false}, {text: "Pacific Ocean", correct: true}] },
         { question: "Which planet is known as the Red Planet?", answers: [{text: "Venus", correct: false}, {text: "Mars", correct: true}, {text: "Jupiter", correct: false}, {text: "Saturn", correct: false}] },
         { question: "What is the chemical symbol for water?", answers: [{text: "O2", correct: false}, {text: "CO2", correct: false}, {text: "H2O", correct: true}, {text: "HO", correct: false}] },
         { question: "Who painted the Mona Lisa?", answers: [{text: "Michelangelo", correct: false}, {text: "Vincent van Gogh", correct: false}, {text: "Pablo Picasso", correct: false}, {text: "Leonardo da Vinci", correct: true}] },
         { question: "How many sides does a hexagon have?", answers: [{text: "5", correct: false}, {text: "6", correct: true}, {text: "7", correct: false}, {text: "8", correct: false}] },
         { question: "What is the longest river in the world?", answers: [{text: "Amazon", correct: false}, {text: "Yangtze", correct: false}, {text: "Nile", correct: true}, {text: "Mississippi", correct: false}] },
         { question: "Which country is the largest by land area?", answers: [{text: "China", correct: false}, {text: "USA", correct: false}, {text: "Canada", correct: false}, {text: "Russia", correct: true}] },
         { question: "What gas do plants absorb from the atmosphere?", answers: [{text: "Oxygen", correct: false}, {text: "Nitrogen", correct: false}, {text: "Carbon Dioxide", correct: true}, {text: "Hydrogen", correct: false}] },
         { question: "How many bones are in the adult human body?", answers: [{text: "196", correct: false}, {text: "206", correct: true}, {text: "216", correct: false}, {text: "226", correct: false}] },
         { question: "What is the smallest country in the world?", answers: [{text: "Monaco", correct: false}, {text: "San Marino", correct: false}, {text: "Vatican City", correct: true}, {text: "Liechtenstein", correct: false}] },
         { question: "Which element has the atomic number 1?", answers: [{text: "Helium", correct: false}, {text: "Oxygen", correct: false}, {text: "Hydrogen", correct: true}, {text: "Carbon", correct: false}] },
         { question: "What is the hardest natural substance on Earth?", answers: [{text: "Gold", correct: false}, {text: "Iron", correct: false}, {text: "Quartz", correct: false}, {text: "Diamond", correct: true}] },
         { question: "In which year did World War II end?", answers: [{text: "1943", correct: false}, {text: "1944", correct: false}, {text: "1945", correct: true}, {text: "1946", correct: false}] },
         { question: "What is the speed of light (approx) in km/s?", answers: [{text: "150,000 km/s", correct: false}, {text: "200,000 km/s", correct: false}, {text: "300,000 km/s", correct: true}, {text: "400,000 km/s", correct: false}] },
        // ... repeat pattern
    ],
    
    sports: [
        { question: "Football World Cup 2022 winner?", answers: [{text: "France", correct: false}, {text: "Argentina", correct: true}, {text: "Brazil", correct: false}, {text: "Germany", correct: false}] },
        { question: "Most NBA championships?", answers: [{text: "Lakers", correct: true}, {text: "Celtics", correct: false}, {text: "Bulls", correct: false}, {text: "Spurs", correct: false}] },
        // ADD 18 MORE SPORTS QUESTIONS HERE ↓
        { question: "How many players are on a basketball team on the court at one time?", answers: [{text: "4", correct: false}, {text: "5", correct: true}, {text: "6", correct: false}, {text: "7", correct: false}] },
        { question: "Which country has won the most FIFA World Cup titles?", answers: [{text: "Germany", correct: false}, {text: "Argentina", correct: false}, {text: "Brazil", correct: true}, {text: "Italy", correct: false}] },
        { question: "How many rings are on the Olympic flag?", answers: [{text: "4", correct: false}, {text: "5", correct: true}, {text: "6", correct: false}, {text: "7", correct: false}] },
        { question: "In tennis, what is the term for a score of 40-40?", answers: [{text: "Tie", correct: false}, {text: "Break", correct: false}, {text: "Deuce", correct: true}, {text: "Match point", correct: false}] },
        { question: "How many players are on a cricket team?", answers: [{text: "9", correct: false}, {text: "10", correct: false}, {text: "11", correct: true}, {text: "12", correct: false}] },
        { question: "Which sport is played at Wimbledon?", answers: [{text: "Badminton", correct: false}, {text: "Squash", correct: false}, {text: "Tennis", correct: true}, {text: "Table Tennis", correct: false}] },
        { question: "How long is a standard marathon in kilometers?", answers: [{text: "40 km", correct: false}, {text: "42.195 km", correct: true}, {text: "44 km", correct: false}, {text: "45 km", correct: false}] },
        { question: "Which country hosted the 2020 Summer Olympics?", answers: [{text: "China", correct: false}, {text: "USA", correct: false}, {text: "Japan", correct: true}, {text: "France", correct: false}] },
        { question: "In football (soccer), how many minutes are in a standard match?", answers: [{text: "80 minutes", correct: false}, {text: "90 minutes", correct: true}, {text: "100 minutes", correct: false}, {text: "120 minutes", correct: false}] },
        { question: "Which sport uses a shuttlecock?", answers: [{text: "Squash", correct: false}, {text: "Badminton", correct: true}, {text: "Tennis", correct: false}, {text: "Pickleball", correct: false}] },
        { question: "Who holds the record for most Olympic gold medals?", answers: [{text: "Usain Bolt", correct: false}, {text: "Carl Lewis", correct: false}, {text: "Michael Phelps", correct: true}, {text: "Mark Spitz", correct: false}] },
        { question: "How many points is a touchdown worth in American football?", answers: [{text: "3", correct: false}, {text: "5", correct: false}, {text: "6", correct: true}, {text: "7", correct: false}] },
        { question: "In which sport would you perform a 'slam dunk'?", answers: [{text: "Volleyball", correct: false}, {text: "Basketball", correct: true}, {text: "Handball", correct: false}, {text: "Water Polo", correct: false}] },
        { question: "What is the national sport of Japan?", answers: [{text: "Judo", correct: false}, {text: "Karate", correct: false}, {text: "Sumo", correct: true}, {text: "Kendo", correct: false}] },
        { question: "How many holes are in a standard round of golf?", answers: [{text: "9", correct: false}, {text: "12", correct: false}, {text: "18", correct: true}, {text: "24", correct: false}] },
        { question: "Which team has won the most NBA championships?", answers: [{text: "Los Angeles Lakers", correct: false}, {text: "Chicago Bulls", correct: false}, {text: "Boston Celtics", correct: true}, {text: "Golden State Warriors", correct: false}] },
        { question: "In boxing, how long is a standard round?", answers: [{text: "2 minutes", correct: false}, {text: "3 minutes", correct: true}, {text: "4 minutes", correct: false}, {text: "5 minutes", correct: false}] },
        { question: "Which country invented the sport of basketball?", answers: [{text: "USA", correct: true}, {text: "Canada", correct: false}, {text: "UK", correct: false}, {text: "Australia", correct: false}] },
    ],
    
    entertainment: [
        { question: "First James Bond actor?", answers: [{text: "Connery", correct: true}, {text: "Moore", correct: false}, {text: "Craig", correct: false}, {text: "Brosnan", correct: false}] },
        { question: "Most Oscars won?", answers: [{text: "Titanic", correct: false}, {text: "Ben-Hur", correct: true}, {text: "Lord of Rings", correct: false}, {text: "Schindler's List", correct: false}] },
        // ADD 18 MORE ENTERTAINMENT QUESTIONS ↓
        { question: "Which movie features the character Jack Sparrow?", answers: [{text: "The Mummy", correct: false}, {text: "Pirates of the Caribbean", correct: true}, {text: "Gladiator", correct: false}, {text: "Troy", correct: false}] },
        { question: "Who sang the hit song 'Shape of You'?", answers: [{text: "Justin Bieber", correct: false}, {text: "Bruno Mars", correct: false}, {text: "Ed Sheeran", correct: true}, {text: "Charlie Puth", correct: false}] },
        { question: "Which TV show features the fictional kingdom of Westeros?", answers: [{text: "The Witcher", correct: false}, {text: "Vikings", correct: false}, {text: "Game of Thrones", correct: true}, {text: "Merlin", correct: false}] },
        { question: "What is the highest-grossing movie of all time (adjusted for inflation)?", answers: [{text: "Titanic", correct: false}, {text: "Avengers: Endgame", correct: false}, {text: "Gone with the Wind", correct: true}, {text: "Avatar", correct: false}] },
        { question: "Which band released the album 'Abbey Road'?", answers: [{text: "The Rolling Stones", correct: false}, {text: "The Beatles", correct: true}, {text: "Led Zeppelin", correct: false}, {text: "Pink Floyd", correct: false}] },
        { question: "Who played Iron Man in the Marvel Cinematic Universe?", answers: [{text: "Chris Evans", correct: false}, {text: "Mark Ruffalo", correct: false}, {text: "Robert Downey Jr.", correct: true}, {text: "Chris Hemsworth", correct: false}] },
        { question: "Which animated movie features a character named Simba?", answers: [{text: "Jungle Book", correct: false}, {text: "Tarzan", correct: false}, {text: "The Lion King", correct: true}, {text: "Bambi", correct: false}] },
        { question: "What streaming platform produced the show 'Stranger Things'?", answers: [{text: "HBO", correct: false}, {text: "Amazon Prime", correct: false}, {text: "Disney+", correct: false}, {text: "Netflix", correct: true}] },
        { question: "Which singer is known as the 'Queen of Pop'?", answers: [{text: "Beyoncé", correct: false}, {text: "Madonna", correct: true}, {text: "Lady Gaga", correct: false}, {text: "Rihanna", correct: false}] },
        { question: "What movie features the quote 'I'll be back'?", answers: [{text: "RoboCop", correct: false}, {text: "Die Hard", correct: false}, {text: "The Terminator", correct: true}, {text: "Predator", correct: false}] },
        { question: "Which Harry Potter actor played the role of Dumbledore in most films?", answers: [{text: "Richard Harris", correct: false}, {text: "Ian McKellen", correct: false}, {text: "Michael Gambon", correct: true}, {text: "Anthony Hopkins", correct: false}] },
        { question: "What is the name of Batman's butler?", answers: [{text: "James", correct: false}, {text: "Alfred", correct: true}, {text: "Edwin", correct: false}, {text: "Harold", correct: false}] },
        { question: "Which artist released the album 'Thriller'?", answers: [{text: "Prince", correct: false}, {text: "Stevie Wonder", correct: false}, {text: "Michael Jackson", correct: true}, {text: "Whitney Houston", correct: false}] },
        { question: "In which country was the movie 'Parasite' produced?", answers: [{text: "Japan", correct: false}, {text: "China", correct: false}, {text: "South Korea", correct: true}, {text: "Thailand", correct: false}] },
        { question: "Who voiced Woody in the Toy Story movies?", answers: [{text: "Jim Carrey", correct: false}, {text: "Tom Hanks", correct: true}, {text: "Robin Williams", correct: false}, {text: "Bill Murray", correct: false}] },
        { question: "Which TV show is set in the fictional city of Pawnee, Indiana?", answers: [{text: "The Office", correct: false}, {text: "Brooklyn Nine-Nine", correct: false}, {text: "Parks and Recreation", correct: true}, {text: "Scrubs", correct: false}] },
        { question: "What year was the first iPhone announced by Steve Jobs?", answers: [{text: "2005", correct: false}, {text: "2006", correct: false}, {text: "2007", correct: true}, {text: "2008", correct: false}] },
        { question: "Which movie won the first-ever Academy Award for Best Picture?", answers: [{text: "It Happened One Night", correct: false}, {text: "Wings", correct: true}, {text: "All Quiet on the Western Front", correct: false}, {text: "Grand Hotel", correct: false}] },
    ],
    
    programming: [
        { question: "What does HTML stand for?", answers: [{text: "Hyper Text Markup Language", correct: true}, {text: "Hot Mail", correct: false}, {text: "Hyper Text Multiple Language", correct: false}, {text: "High Tech Markup", correct: false}] },
        { question: "JS event listener?", answers: [{text: "addEventListener()", correct: true}, {text: "onClick()", correct: false}, {text: "listenEvent()", correct: false}, {text: "eventOn()", correct: false}] },
        { question: "CSS selector for ID?", answers: [{text: ".", correct: false}, {text: "#", correct: true}, {text: ">", correct: false}, {text: "*", correct: false}] },
        // ADD 17 MORE PROGRAMMING QUESTIONS ↓
        { question: "What does HTML stand for?", answers: [{text: "Hyper Text Markup Language", correct: true}, {text: "High Tech Modern Language", correct: false}, {text: "Hyper Transfer Markup Language", correct: false}, {text: "Home Tool Markup Language", correct: false}] },
        { question: "Which symbol is used for single-line comments in JavaScript?", answers: [{text: "/* */", correct: false}, {text: "#", correct: false}, {text: "//", correct: true}, {text: "--", correct: false}] },
        { question: "What does CSS stand for?", answers: [{text: "Creative Style Sheets", correct: false}, {text: "Cascading Style Sheets", correct: true}, {text: "Computer Style Sheets", correct: false}, {text: "Colorful Style Sheets", correct: false}] },
        { question: "Which data structure follows LIFO (Last In First Out)?", answers: [{text: "Queue", correct: false}, {text: "Array", correct: false}, {text: "Stack", correct: true}, {text: "Linked List", correct: false}] },
        { question: "What keyword is used to declare a variable in JavaScript?", answers: [{text: "var", correct: false}, {text: "let", correct: false}, {text: "const", correct: false}, {text: "All of the above", correct: true}] },
        { question: "What does SQL stand for?", answers: [{text: "Structured Query Language", correct: true}, {text: "Simple Query Language", correct: false}, {text: "Sequential Query Logic", correct: false}, {text: "Standard Query Language", correct: false}] },
        { question: "Which programming language is known as the 'language of the web'?", answers: [{text: "Python", correct: false}, {text: "Java", correct: false}, {text: "JavaScript", correct: true}, {text: "C++", correct: false}] },
        { question: "What is the output of: console.log(typeof null) in JavaScript?", answers: [{text: "null", correct: false}, {text: "undefined", correct: false}, {text: "object", correct: true}, {text: "string", correct: false}] },
        { question: "Which of these is NOT a JavaScript framework?", answers: [{text: "React", correct: false}, {text: "Vue", correct: false}, {text: "Django", correct: true}, {text: "Angular", correct: false}] },
        { question: "What does API stand for?", answers: [{text: "Application Programming Interface", correct: true}, {text: "Automated Program Interaction", correct: false}, {text: "Applied Programming Index", correct: false}, {text: "Application Process Integration", correct: false}] },
        { question: "Which sorting algorithm has the best average time complexity?", answers: [{text: "Bubble Sort", correct: false}, {text: "Merge Sort", correct: false}, {text: "Quick Sort", correct: true}, {text: "Selection Sort", correct: false}] },
        { question: "What is a 'null' value in programming?", answers: [{text: "A value of zero", correct: false}, {text: "An undefined variable", correct: false}, {text: "An intentional absence of value", correct: true}, {text: "An empty string", correct: false}] },
        { question: "What does OOP stand for?", answers: [{text: "Object Oriented Programming", correct: true}, {text: "Ordered Operation Process", correct: false}, {text: "Open Output Protocol", correct: false}, {text: "Object Output Processing", correct: false}] },
        { question: "Which HTTP method is used to send data to a server?", answers: [{text: "GET", correct: false}, {text: "POST", correct: true}, {text: "DELETE", correct: false}, {text: "FETCH", correct: false}] },
        { question: "What is Git used for?", answers: [{text: "Database management", correct: false}, {text: "Version control", correct: true}, {text: "Web hosting", correct: false}, {text: "Code compilation", correct: false}] },
        { question: "Which symbol is used to access object properties in JavaScript?", answers: [{text: "->", correct: false}, {text: "::", correct: false}, {text: ".", correct: true}, {text: "#", correct: false}] },
        { question: "What does 'DOM' stand for in web development?", answers: [{text: "Document Object Model", correct: true}, {text: "Data Output Method", correct: false}, {text: "Dynamic Object Management", correct: false}, {text: "Document Oriented Markup", correct: false}] },
    ]
};

// GAME STATE
let currentCategory = null;
let selectedQuestions = null;
let selectedTime = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
let answered = false;

// ELEMENTS
const setupScreen = document.getElementById('setup-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('start-btn');
const quizHeader = document.getElementById('quiz-header');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const timerEl = document.getElementById('timer');
const progressEl = document.getElementById('progress');
const currentScoreEl = document.getElementById('current-score');
const totalQEl = document.getElementById('total-questions');
const questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const finalScoreEl = document.getElementById('final-score');
const percentageEl = document.getElementById('percentage');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');
const quizTitle = document.getElementById('quiz-title');
const quizSubtitle = document.getElementById('quiz-subtitle');
const statQuestions = document.getElementById('stat-questions');
const statTime = document.getElementById('stat-time');
const warningEl = document.getElementById('selection-warning');

// CATEGORY SELECTION
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
    });
});

// QUESTION COUNT SELECTION
document.querySelectorAll('.setting-btn[data-questions]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.setting-btn[data-questions]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedQuestions = parseInt(btn.dataset.questions);
    });
});

// TIME SELECTION
document.querySelectorAll('.setting-btn[data-time]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.setting-btn[data-time]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = parseInt(btn.dataset.time);
    });
});

// START QUIZ
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // Validation check
    if (!currentCategory || !selectedQuestions || !selectedTime) {
        warningEl.classList.remove('hidden');
        setTimeout(() => warningEl.classList.add('hidden'), 3000);
        return;
    }

    warningEl.classList.add('hidden');

    // Generate random questions for selected category
    currentQuestions = shuffleArray(quizData[currentCategory]).slice(0, selectedQuestions);
    
    // Show welcome screen
    setupScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    
    const categoryNames = {
        general: 'General Knowledge',
        sports: 'Sports',
        entertainment: 'Entertainment',
        programming: 'Programming'
    };
    quizTitle.textContent = `${categoryNames[currentCategory]} Quiz`;
    quizSubtitle.textContent = `Challenge yourself with ${selectedQuestions} questions!`;
    statQuestions.innerHTML = `<i class="fas fa-question"></i> ${selectedQuestions} Questions`;
    statTime.innerHTML = `<i class="fas fa-clock"></i> ${selectedTime}s each`;
    
    setTimeout(() => { beginQuiz(); }, 2000);
}

function beginQuiz() {
    welcomeScreen.classList.add('hidden');
    quizHeader.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = selectedTime;
    totalQEl.textContent = selectedQuestions;
    
    nextBtn.classList.add('hidden');
    showQuestion(currentQuestions[0]);
}

function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startTimer() {
    timeLeft = selectedTime;
    timerEl.textContent = timeLeft;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

function updateProgress() {
    const progress = ((currentQuestionIndex / selectedQuestions) * 100);
    progressEl.style.width = progress + '%';
    currentScoreEl.textContent = score;
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    answerButtonsEl.innerHTML = '';
    answered = false;
    nextBtn.classList.add('hidden');
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.index = index;
        button.addEventListener('click', () => selectAnswer(index));
        answerButtonsEl.appendChild(button);
    });
    startTimer();
    updateProgress();
}

function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    clearInterval(timerInterval);
    
    const correctIndex = currentQuestions[currentQuestionIndex].answers.findIndex(a => a.correct);
    const selectedBtn = answerButtonsEl.children[selectedIndex];
    const correctBtn = answerButtonsEl.children[correctIndex];
    
    if (currentQuestions[currentQuestionIndex].answers[selectedIndex].correct) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        correctBtn.classList.add('correct');
    }
    
    nextBtn.classList.remove('hidden');
    updateProgress();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions) {
        showQuestion(currentQuestions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    const percentage = Math.round((score / selectedQuestions) * 100);
    finalScoreEl.innerText = `${score} / ${selectedQuestions}`;
    percentageEl.textContent = percentage + '%';
    
    if (percentage >= 80) messageEl.innerText = '🎉 Genius Level! Perfect for Fiverr gigs!';
    else if (percentage >= 60) messageEl.innerText = `👍 Great job in ${currentCategory}!`;
    else messageEl.innerText = '📚 Good start—practice makes perfect!';
}

function restartQuiz() {
    resultContainer.classList.add('hidden');
    quizHeader.classList.add('hidden');        // ← add this
    questionContainer.classList.add('hidden'); // ← and this just in case
    setupScreen.classList.remove('hidden');
    document.querySelectorAll('.cat-btn, .setting-btn').forEach(btn => btn.classList.remove('active'));
    currentCategory = null;
    selectedQuestions = null;
    selectedTime = null;
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);


