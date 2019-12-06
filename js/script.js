var number = Math.floor(10 * Math.random()) + 1;
console.log(number);

var usernum = document.getElementById('mynum'); 
usernum = parseInt(usernum);
var out = document.getElementById('out');

    if (usernum == number) {
        out.innerHTML = 'Вы угадали';
    }