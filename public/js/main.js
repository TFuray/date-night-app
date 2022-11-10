let randomButton = document.querySelector('#randomDate')
let listItem = document.querySelectorAll('li').length
// function pickDate(dates){
//     return dates[ Math.random() * dates.length + 1 ]
// }

function unhideIdea () {
  let num = Math.random() * listItem
  num = Math.floor(num)
  document.getElementById(`idea${num}`).classList.toggle('hidden')
}

randomButton.addEventListener('click', unhideIdea)
