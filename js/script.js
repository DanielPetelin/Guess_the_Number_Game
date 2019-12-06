//смысл игры отгадать число, которое задумал робот.
//задуманное число от 1 до 10.
//робот будет давать вам подсказки в течении игры.

var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);

function fl() {
    var num, out;

    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = 'Вы угадали';
    } else if (num > prNum) {
        out.innerHTML = 'Число больше чем загаданное';
    } else {
        out.innerHTML = 'Вы ввели число меньше задуманного'
    }
}