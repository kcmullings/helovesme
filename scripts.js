
var greetings=['love me','love you not']
var final = ['no love','ha you love me']
var container= document.querySelector('.greeting') 
var countGreetings =  1
var images = document.querySelectorAll('.content img')
var countImages = 0
var timing = 500
var button = document.querySelector('button')
var buttonText = button.textContent


function changeGreeting(){
	container.textContent = greetings[countGreetings ]
	if(countGreetings  < greetings.length-1) {
		countGreetings  ++
	} else{
		countGreetings = 0
	}
}

function changeImage() {
	document.querySelector('#show').id = ''
	if(countImages < images.length - 2) {
		countImages++
		changeGreeting()
		images[countImages].id = 'show'
		setTimeout(changeImage, timing)
	} else{
		countImages++
		images[countImages].id = 'show'
		var randomFinal = Math.floor(Math.random() * final.length)
		container.textContent = final[randomFinal]
		button.textContent = 'Reset'
	}
}

button.addEventListener('click', function() {
	if (button.textContent == 'Reset') {
		countGreetings =  1
		countImages = 0
		document.querySelector('#show').id = ''
		images[countImages].id = 'show'
		setTimeout(changeImage, timing)
		button.textContent = buttonText
	} else {
		changeImage()
	}
})