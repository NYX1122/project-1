var hikeLengthEl = document.getElementById('hikeLength')
var hikeDifficultyEl = document.getElementById('hikeDifficulty')
var hikeSubmitEl = document.getElementById('hikeSubmit')

function myFuntion() {
   fetch("http://api.amp.active.com/camping/campgrounds?pstate=utah&api_key=tu627n99ahbtf6uyggdudbt9")
       .then(function(response) {
           return response.json();
       })
       .then(function(response) {
           console.log(data)
       })
}
myFuntion()

function lengthInput() {
   hikeLengthEl.classList.toggle("show");
}

hikeLengthEl.addEventListener('click', lengthInput)


