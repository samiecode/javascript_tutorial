var firstName = "Hello"; // String
var countryCode = 234;
var age = 20.34 // number


console.log(firstName)
console.log(age)


var input = document.getElementById('input')
var button = document.getElementById('button')

button.addEventListener('click', () => {
    alert('Welcome ' + input.value);
})