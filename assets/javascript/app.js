$(document).ready(function () {
    //declare global variables
    var numberOfQuestion = 20;
    var correctAnswer = 0;
    var inCorrectAnswer = 0;
    var unAnswer;
    var questionIndex = 0;
    var countDown = 60; //time countdown in second

    //make array of object variable for question
    var questions = [{
        question: "Who won the first season of Drag Race?",
        choices: ["Bebe Zahara Benet", "Nina Flowers", "Chad Michaels", "Carmen Carrera"],
        answer: "0",
    }, {
        question: "Name a contestant who competed in two seasons of Drag Race (Not including All Stars)?",
        choices: ["Trixie Mattel", "Shangela", "Milk", "Raven"],
        answer: "1",
    }, {
        question: "Which season did Snatch game first debut?",
        choices: ["Season 1", "Season 2", "Season 3", "Season 4"],
        answer: "1",
    }, {
        question: "Who wears a beard on the runway in season 6 ?",
        choices: ["Milk", "Bianca Del Rio", "Courtney Act", "Trinity K. Bonet"],
        answer: "0",
    }, {
        question: "How many challenges did Ongina win ?",
        choices: ["0", "1", "2", "too many"],
        answer: "2",
    }, {
        question: "Detox sashayed away after lip syncing against who?",
        choices: ["Alaska", "Roxxxy Andrews", "Jinx Monsoon", "Coco Montrese"],
        answer: "2",
    }, {
        question: "Which contestant returns in season 7 after previously sashaying away?",
        choices: ["Trixe Mattel", "Pearl", "Katya", "Ginger Minj"],
        answer: "0",
    }, {
        question: "Back ____?!",
        choices: ["Flaps", "Rolls", "Curls", "Waves"],
        answer: "1",
    }, {
        question: "What was the runway theme for Snatch game in seasons 8 and 9?",
        choices: ["Queens'Looks", "Good Morning Bitches!", "Night of Thousands Madonna", "Deadliest Snatch Glamour"],
        answer: "2",
    }, {
        question: "RuPaul is looking for Charisma, Uniqueness, Nerve and what else?",
        choices: ["Thoughtfulness", "Tenacity", "Tall", "Talent"],
        answer: "3",
    }, {
        question: "Alyssa Edwards and Tatiana both return in All Stars 2 after both winning a lipsync to which song? ?",
        choices: ["Pon de Replay", "Take a Bow", "Shut Up and Drive", "Umbrella"],
        answer: "2",
    }, {
        question: "What original song did Kim Chi perform for the grand finale of season 8?",
        choices: ["Slay, Yasss and Queen", "Masc, Gurl and Bitches", "Curvy, Delicious and Twinkie", "Fat, Fem and Asian"],
        answer: "3",
    }, {
        question: "BenDeLaCreme describes her character as what?",
        choices: ["Terminally Delightful", "Delightfully Sweet", "Oddly Delicious", "Pretentiously Over-the-top"],
        answer: "0",
    }, {
        question: "Sasha Velour's iconic rose petal lipsync was to which Whitney Houston song?",
        choices: ["I Will Always Love You", "So Emotional", "Heartbreak Hotel", "I'm Every Woman"],
        answer: "1",
    }, {
        question: "Who impersonated Tyra Banks in Snatch Game?",
        choices: ["Manila Luzon", "Raven", "Jujubee", "Raja"],
        answer: "3",
    }, {
        question: "Season 4 of Drag Race was full of legendary dramatic moments. One such moment was in the werkroom between rivals Phi Phi O’Hara and Sharon Needles, in which Needles calls O’Hara a ___ ___ ___ and O’Hara tells Needles to “go back to ___ ___” where she belongs.",
        choices: ["Two-Faced B*tch; The Cemetery", "Ashy Clown Queen; The Circus", "Tired Ass Showgirl; Party City", "Cheap Oompa Loompa; Pizza Hut"],
        answer: "2",
    }, {
        question: "Mimi Imfurst became famous, or should I say infamous, for lifting which fellow drag race contestant during their “Lip Sync For Your Life” performance, dubbing the quote “Drag is not a contact sport”?",
        choices: ["Laganja Estranja", "Mystique Summers Madison", "India Ferrah", "Kenya Michaels"],
        answer: "2",
    }, {
        question: "Who did Naomi Smalls lip sync against in the Madonna look challenge (or “Kimono-she-better-don’t” ) of season 8?",
        choices: ["Derrick Barry", "Jade Jolie", "The Princess", "Acid Betty"],
        answer: "3",
    }, {
        question: "Who is the only queen to ever have been disqualified from RuPaul’s Drag Race?",
        choices: ["Kelly Mantle", "Naysha Lopez", "Willam", "Naysha Lopez"],
        answer: "2",
    }, {
        question: "Who is the best drag queen among all Rupaul's Drag Race contestants?",
        choices: ["Alaska", "Bianca Del Rio", "Raja", "All of them"],
        answer: "3",
    }];

    //Make questions and choices appear on the DOM
    function loadQA() {
        // if not all questions were answers 
        if (questionIndex <= questions.length) {
            //display question
            $("#question").html(questions[questionIndex].question);
            // display choices
            $("#answer1").text(questions[questionIndex].choices[0]);
            $("#answer2").text(questions[questionIndex].choices[1]);
            $("#answer3").text(questions[questionIndex].choices[2]);
            $("#answer4").text(questions[questionIndex].choices[3]);
            console.log(questions[questionIndex]);
        }
        else {
            //stop timer here
            clearInterval(timer);
            $("#question, #choices, #timeRemaining").hide();
            //show score count
            scoreCount();
        }
    };
    //Hide all questions before let's play button is clicked
    $("#question, #choices").hide();

    //Activate game by clicking Let's Play button
    $("#play").click(function () {
        //hide the play button
        $("#play").hide("fast");
        //show question and answer
        $("#question, #choices").show("fast");
        loadQA();
        //set interval starting at the same value as countdown
        setInterval(function (timer) {
            countDown--;
            $("#timeRemaining").html(countDown);
            // if time remaining is zero, then hide all questions and choices
            if (countDown === -1) {
                clearInterval(timer);
                $("#question, #choices, #timeRemaining").hide();
            }

            else if (questionIndex === questions.length) {
                clearInterval(timer);
                $("#question, #choices, #timeRemaining").hide();
            }
            //show score count
            scoreCount();
        }, 1000);
    })

    //User chooses answer (using click funcion)
    $(".multipleChoice").click(function () {
        // grab the value from the answer and store in new variable
        var userChoice = $(this).attr("value");
        console.log(userChoice);
        console.log(questions[questionIndex].answer);
        // if the value from the anwer is the same the correct answer
        if (userChoice === questions[questionIndex].answer) {
            //increase correct answer by 1
            correctAnswer++;
            //alert correct answer
            alert("Yes! You are correct 🎉.");
            console.log("correct" + correctAnswer);
        }

        // else 
        else {
            // increase incorrect answer by 1
            inCorrectAnswer++;
            // alert incorrect answer
            alert("Oops! You are wrong 👎.");
            console.log("incorrect" + inCorrectAnswer);
        }

        // move to the next quesion
        questionIndex++;
        // run the loadQA function to start 
        loadQA();

    })

    //Counting score
    function scoreCount() {
        var totalAnswer = correctAnswer + inCorrectAnswer;
        console.log(totalAnswer);
        if (totalAnswer !== numberOfQuestion) {
            unAnswer = numberOfQuestion - totalAnswer;

        }
        else {
            unAnswer = 0;
        }

        $("#unanswer").html(unAnswer);
        $("#correct").html(correctAnswer);
        $("#incorrect").html(inCorrectAnswer);
    }

    // Function to restart the game (restart button)
    $("#restart").click (function restartGame() {
        location.reload();
    });
});