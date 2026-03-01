const allQuestions = [

    {
    question: "Which scheduling algorithm may cause starvation?",
    options: ["FCFS", "Round Robin", "Priority Scheduling", "FIFO"],
    answer: 2
    },

    {
    question: "Which scheduling algorithm gives minimum average waiting time?",
    options: ["FCFS", "SJF", "Round Robin", "Priority"],
    answer: 1
    },

    {
    question: "Thrashing occurs due to?",
    options: ["High CPU usage", "Excessive paging", "Deadlock", "Low RAM"],
    answer: 1
    },

    {
    question: "Which is not a process state?",
    options: ["Ready", "Running", "Waiting", "Compiled"],
    answer: 3
    },

    {
    question: "Banker's Algorithm is used for?",
    options: ["Scheduling", "Deadlock Avoidance", "Paging", "Swapping"],
    answer: 1
    },

    {
    question: "Which memory allocation suffers external fragmentation?",
    options: ["Paging", "Segmentation", "Virtual Memory", "Cache"],
    answer: 1
    },

    {
    question: "Which technique eliminates external fragmentation?",
    options: ["Segmentation", "Paging", "Swapping", "Compaction"],
    answer: 1
    },

    {
    question: "Round Robin scheduling is mainly used in?",
    options: ["Batch system", "Real-time system", "Time sharing system", "Multiprogramming"],
    answer: 2
    },

    {
    question: "A deadlock occurs when?",
    options: ["CPU is idle", "Processes compete for resources", "Infinite loop", "Memory leak"],
    answer: 1
    },

    {
    question: "Which is not a necessary condition for deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "Preemption", "Circular Wait"],
    answer: 2
    },

    {
    question: "Context switch occurs when?",
    options: ["Process terminates", "CPU switches process", "Interrupt occurs", "Memory full"],
    answer: 1
    },

    {
    question: "Which memory is fastest?",
    options: ["RAM", "Cache", "Hard Disk", "Virtual Memory"],
    answer: 1
    },

    {
    question: "Which is not a CPU scheduling criteria?",
    options: ["Turnaround Time", "Waiting Time", "Throughput", "Fragmentation"],
    answer: 3
    },

    {
    question: "Swapping is used to?",
    options: ["Reduce CPU usage", "Move process to disk", "Prevent deadlock", "Increase RAM"],
    answer: 1
    },

    {
    question: "Page fault occurs when?",
    options: ["Page found", "Page not in memory", "Memory full", "Disk error"],
    answer: 1
    },

    {
    question: "Which is not a page replacement algorithm?",
    options: ["FIFO", "LRU", "SJF", "Optimal"],
    answer: 2
    },

    {
    question: "LRU stands for?",
    options: ["Last Recently Used", "Least Recently Used", "Low Resource Unit", "Logical RAM Unit"],
    answer: 1
    },

    {
    question: "Virtual memory is?",
    options: ["RAM", "Cache", "Disk as RAM", "Register"],
    answer: 2
    },

    {
    question: "Multiprogramming increases?",
    options: ["CPU idle time", "CPU utilization", "Deadlock", "Waiting time"],
    answer: 1
    },

    {
    question: "Semaphore is used for?",
    options: ["Memory mgmt", "Process synchronization", "File system", "Deadlock"],
    answer: 1
    },

    {
    question: "Which is not a type of semaphore?",
    options: ["Binary", "Counting", "Mutex", "Integer"],
    answer: 3
    },

    {
    question: "Critical section problem deals with?",
    options: ["Memory", "Process synchronization", "CPU scheduling", "Deadlock"],
    answer: 1
    },

    {
    question: "Which scheduling is preemptive?",
    options: ["FCFS", "SJF", "Round Robin", "FIFO"],
    answer: 2
    },

    {
    question: "Kernel is?",
    options: ["Application", "OS core", "File", "Memory"],
    answer: 1
    },

    {
    question: "System call is used for?",
    options: ["Hardware access", "User access", "Communication with OS", "RAM mgmt"],
    answer: 2
    },

    {
    question: "Fork() is used for?",
    options: ["Delete process", "Create process", "Memory", "Scheduling"],
    answer: 1
    },

    {
    question: "Which is not a file attribute?",
    options: ["Name", "Type", "Size", "Compiler"],
    answer: 3
    },

    {
    question: "Spooling is?",
    options: ["Multiprogramming", "Buffering", "Scheduling", "Memory mgmt"],
    answer: 1
    },

    {
    question: "Belady’s anomaly occurs in?",
    options: ["LRU", "FIFO", "Optimal", "SJF"],
    answer: 1
    },

    {
    question: "Paging uses?",
    options: ["Logical memory", "Physical memory", "Fixed size blocks", "Segments"],
    answer: 2
    },

    {
    question: "Fragmentation occurs in?",
    options: ["Memory mgmt", "CPU", "Disk", "Registers"],
    answer: 0
    },

    {
    question: "Dispatcher is responsible for?",
    options: ["Memory", "CPU allocation", "File", "Disk"],
    answer: 1
    },

    {
    question: "Interprocess communication is?",
    options: ["CPU scheduling", "Process interaction", "Memory", "File"],
    answer: 1
    },

    {
    question: "Which is not IPC method?",
    options: ["Pipe", "Message queue", "Semaphore", "Thread"],
    answer: 3
    },

    {
    question: "Thread is?",
    options: ["Lightweight process", "Heavy process", "File", "Disk"],
    answer: 0
    },

    {
    question: "Multithreading improves?",
    options: ["CPU usage", "Throughput", "Responsiveness", "All"],
    answer: 3
    },

    {
    question: "Which is real-time OS?",
    options: ["Windows", "Linux", "VxWorks", "DOS"],
    answer: 2
    },

    {
    question: "Demand paging is?",
    options: ["Lazy loading", "Immediate loading", "Disk access", "CPU scheduling"],
    answer: 0
    },

    {
    question: "Which algorithm suffers convoy effect?",
    options: ["FCFS", "SJF", "RR", "Priority"],
    answer: 0
    },

    {
    question: "Which scheduling is non-preemptive?",
    options: ["RR", "SJF", "Priority(pre)", "Multilevel"],
    answer: 1
    },

    {
    question: "Deadlock prevention uses?",
    options: ["Circular wait", "Hold wait", "Mutual exclusion removal", "Preemption"],
    answer: 2
    },

    {
    question: "Working set is related to?",
    options: ["CPU", "Memory", "Disk", "File"],
    answer: 1
    },

    {
    question: "Internal fragmentation occurs in?",
    options: ["Paging", "Segmentation", "Swapping", "FIFO"],
    answer: 0
    },

    {
    question: "Mutex stands for?",
    options: ["Mutual Exclusion", "Multi Execution", "Multiple Exit", "Memory Unit"],
    answer: 0
    },

    {
    question: "Race condition occurs in?",
    options: ["CPU", "Memory", "Concurrent processes", "Disk"],
    answer: 2
    },

    {
    question: "Which is secondary memory?",
    options: ["RAM", "Cache", "Hard disk", "Register"],
    answer: 2
    },

    {
    question: "Interrupt is?",
    options: ["Signal", "Memory", "Process", "File"],
    answer: 0
    },

    {
    question: "Booting means?",
    options: ["Shutdown", "Restart", "Loading OS", "CPU start"],
    answer: 2
    },

    {
    question: "File system manages?",
    options: ["Processes", "Memory", "Files", "CPU"],
    answer: 2
    },

    {
    question: "Time sharing system provides?",
    options: ["Single user", "Multiple users", "No CPU", "No memory"],
    answer: 1
    }

];


let questions = [];
let currentQuestionIndex = 0;
let currentPlayer = 1;
let scores = [0, 0];
let selectedAnswer = null;

function getRandomQuestions() {
    return allQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
}

function startGame() {
    questions = getRandomQuestions();
    currentQuestionIndex = 0;
    currentPlayer = 1;
    scores = [0, 0];

    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    selectedAnswer = null;

    const q = questions[currentQuestionIndex];

    document.getElementById("player-turn").innerText =
        `Player ${currentPlayer}'s Turn`;

    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;

        btn.onclick = () => selectAnswer(index, btn);

        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(index, button) {
    selectedAnswer = index;

    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.classList.remove("correct", "wrong"));

    if (index === questions[currentQuestionIndex].answer) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
    }
}

function nextQuestion() {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        scores[currentPlayer - 1]++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        if (currentPlayer === 1) {
            currentPlayer = 2;
            currentQuestionIndex = 0;
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        loadQuestion();
    }
}

function showResults() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    let resultText = `Player 1 Score: ${scores[0]} | Player 2 Score: ${scores[1]}\n`;

    if (scores[0] > scores[1]) {
        resultText += "🏆 Player 1 Wins!";
    } else if (scores[1] > scores[0]) {
        resultText += "🏆 Player 2 Wins!";
    } else {
        resultText += "🤝 It's a Tie!";
    }

    document.getElementById("result").innerText = resultText;
}

function restartGame() {
    document.getElementById("result-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
}