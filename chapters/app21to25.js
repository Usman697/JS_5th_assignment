//Q=1 and 6
document.write(`<h1>Question=1 & 6</h1>`)
var firstName=prompt('enter your 1st name')
var lastName=prompt('enter your last name')
var fullName=document.write(firstName+lastName+ '<br>') //1st method
fullName=firstName.concat(lastName) //2nd method
document.write(fullName)

//Q=2
document.write(`<h1>Question=2</h1>`)
var mobilebrand=prompt('enter your favourite mobile phone brand')
var lengthOfString = mobilebrand.length
document.write(`my favourite phone is = ${mobilebrand}<br>`)
document.write(`length of string is = ${lengthOfString}<br>`)

//Q=3
document.write(`<h1>Question=3</h1>`)
var text='pakistani'
document.write(text+'<br>')
var index=text.indexOf('n')
document.write('index of n is '+index)

//Q=4
document.write(`<h1>Question=4</h1>`)
var text1='hello world'
document.write(text1+'<br>')
var lastindex=text1.lastIndexOf('l')
document.write('index of n is '+lastindex)

//Q=5
document.write(`<h1>Question=5</h1>`)
var text2='pakistani'
document.write(text2+'<br>')
var char=text2.charAt(3)
document.write('character at index 3 is : '+char)

//Q=7
document.write(`<h1>Question=7</h1>`)
var city='hyderabad'
document.write(city+'<br>')
var afterReplace=city.replace('hyder','islam')
document.write('after replacement ' +afterReplace+'<br>')

//Q=8
document.write(`<h1>Question=8</h1>`)
var massage = 'Ali and Sami are best friends. They play cricket and football together.'
var updtmassage=massage.replaceAll('and','&')
document.write(updtmassage)

//Q=9
document.write(`<h1>Question=9</h1>`)
var numbr='472'
document.write(`value = ${numbr}<br>`)
document.write(`type = ${typeof(numbr)}<br>`)
var numtostring=parseInt(numbr)
document.write(`value = ${numtostring}<br>`)
document.write(`type = ${typeof(numtostring)}<br>`)

//Q=10
document.write(`<h1>Question=10</h1>`)
var input=prompt('please enter any input to show it upper case').toUpperCase()
document.write(input)

//Q=11
document.write(`<h1>Question=11</h1>`)
var userinput=prompt('enter any input to convert title case')
var firstletter = userinput.slice(0,1).toUpperCase()
var otherinput= userinput.slice(1)
document.write(`user input = ${userinput}<br>`)
document.write(`title case = ${firstletter+otherinput}<br>`)

//Q=12
document.write(`<h1>Question=12</h1>`)
var num=35.36
document.write(`value = ${num}<br>`)
document.write(`type = ${typeof(num)}<br>`)
var numtostring=num.toString()
document.write(`value = ${num}<br>`)
document.write(`type = ${typeof(numtostring)}<br>`)
var array=numtostring.split('.')
var result= array.join("")
document.write(`result = ${result}`)

//Q=13
document.write(`<h1>Question=13</h1>`)
var specialchars=['!','@','#','$','%','^','&','*','<','>','(',')','{','}','[',']']
var username=prompt('please enter your name')
var flag=true
for(var i=0;i<=username.length-1;i++){for(var j=0; j<=specialchars.length-1;j++){
    if(username[i]===specialchars[j]){alert('please enter valid user name');flag=false}}}
if(flag===true){document.write(`user name is ${username}`)}

//Q=14
document.write(`<h1>Question=14</h1>`)
var bakeryitems = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var demand=prompt('welcome to ABC bakery what do you want to order sie/ma,am')
var found=false
for(i=0;i<bakeryitems.length;i++){if(demand===bakeryitems[i]){found=true;break}}
if(found===true){document.write(`${demand} is available at index ${i} in our bakery`)}
else{document.write(`we are sorry ${demand} is not available at ABC bakery`)}

//Q=16
document.write(`<h1>Question=16</h1>`)
var university = 'University of Karachi'
var array=university.split("")
console.log(array)
for(var i=0;i<array.length;i++){
    document.write(`${array[i]}<br>`)}

//Q=17
document.write(`<h1>Question=17</h1>`)
var input=prompt('please enter any string')
var lastchar=input.charAt(input.length-1)
document.write(`last character of your input is: ${lastchar}`)

//Q=18
document.write(`<h1>Question=18</h1>`)
var text='The quick brown fox jumps over the lazy dog'
var count=0
for(var i=0;i<text.length;i++){
    if(text.slice(i,(i+3)).toLowerCase()==='the'){count=count+1}
}
document.write(`there are ${count} occurance of word "the"`)