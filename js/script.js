var number = Math.floor(10 * Math.random()) + 1;
console.log(number);

document.getElementById('check').onclick = function() {
    var usernum = document.getElementById('mynum').value; 
    usernum = parseInt(usernum);

    var out = document.getElementById('out');
    if (usernum == number) {
        out.innerHTML = 'Вы угадали';
    }
}