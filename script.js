const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')


function calculate(value) {
    let answer;
    let answerStr;

    //Clear the screen
    if (value == 'AC') {
        screen.innerText = '0';  
    }

    //Solved the problem based on text on screen
    else if (value == '=') {
        answer = eval(screen.innerText);
        answerStr = answer.toString(); //converts answer to string to evalute length for sig figs
        if (answerStr.length >= 7){
            screen.innerText = answer.toPrecision(4); //answers with sig fig if answer is greater
        }
        else {
            screen.innerText = answer; //else just answers
        }
    }
    //appends values to the screen
    else {
        //remove initial 0 
        if (screen.innerText === '0') { 
            screen.innerText = value;
        }
        //appends values 
        else {   
        screen.innerText += value;
        }
    }
}

//adds event listener to all the buttons
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        //takes input from button press
        let input = event.target.innerText;
        calculate(input);
        console.log(input);
    });
});

