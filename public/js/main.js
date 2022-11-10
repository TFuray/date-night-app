let randomButton = document.querySelector('#randomDate')

function pickDate(dates){
    return dates[ Math.random() * dates.length + 1 ]
}

randomButton.addEventListener('click', pickDate)