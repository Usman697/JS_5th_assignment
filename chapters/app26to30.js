//Q=1
document.write(`<h1>Question=1</h1>`)
var num=+prompt('enter any positive integer with decimal points values')
document.write(`number=${num}<br>`)
document.write(`round off value=${Math.round(num)}<br>`)
document.write(`floor value=${Math.floor(num)}<br>`)
document.write(`ceil value=${Math.ceil(num)}<br>`)

//Q=2
document.write(`<h1>Question=2</h1>`)
var num=+prompt('enter any negative integer with decimal points values')
document.write(`number=${num}<br>`)
document.write(`round off value=${Math.round(num)}<br>`)
document.write(`floor value=${Math.floor(num)}<br>`)
document.write(`ceil value=${Math.ceil(num)}<br>`)

//Q=3
document.write(`<h1>Question=3</h1>`)
var absolutenum=+prompt('enter any number to get its absolute number')
document.write(`absolute number of "${absolutenum}" is ${Math.abs(absolutenum)}`)

//Q=4
document.write(`<h1>Question=4</h1>`)
var dice=Math.random()*6
document.write(`random dice value = ' ${Math.ceil(dice)}+<br>`) //1st method
document.write('random dice value = '+Number(Math.floor(dice)+1)) //2nd method

//Q=5
document.write(`<h1>Question=5</h1>`)
var coin=Math.random()*2
var coinvalue;
coinvalue=Math.ceil(coin) //1st method
coinvalue=Math.floor(coin)+1 //2nd method
console.log(coinvalue)
if(coinvalue===2){document.write(`its a Head`)}
else if(coinvalue===1){document.write(`its a Tails`)}

//Q=6
document.write(`<h1>Question=6</h1>`)
document.write(`random number between 1 and 100 is ${Math.round(Math.random()*100)}`)

//Q=7
document.write(`<h1>Question=7</h1>`)
var userweight=prompt('enter your weight in kilograms')
document.write( 'the weight of user is '+parseFloat(userweight)+' kilograms')

//Q=8
document.write(`<h1>Question=8</h1>`)
var guessnum=+prompt('guess number between 1 to 10')
var randomnum=Math.ceil(Math.random()*10)
console.log(randomnum)
if(randomnum===guessnum){document.write(`congratulations you guess the right number`)}
else{document.write(`sorry! try again`)}

