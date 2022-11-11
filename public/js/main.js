let randomButton = document.querySelector('#randomDate')
let showAllBtn = document.querySelector('#showAll')
let listItem = document.querySelectorAll('li').length
// function pickDate(dates){
//     return dates[ Math.random() * dates.length + 1 ]
// }

function unhideIdea () {
  for(let i=0; i<listItem; i++){
    document.getElementById(`idea${i}`).classList.add('hidden')
  }
  let num = Math.random() * listItem
  num = Math.floor(num)
  document.getElementById(`idea${num}`).classList.toggle('hidden')
}

function showAll(){
  for(let i=0; i<listItem; i++){
    document.getElementById(`idea${i}`).classList.toggle('hidden')
  }
}
showAllBtn.addEventListener('click', showAll)
randomButton.addEventListener('click', unhideIdea)
