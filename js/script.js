function toggleMeny() {

    document.querySelector('.meny_list').classList.toggle('navActive')
    document.querySelector('.burger').classList.toggle('toggle')

}

document.querySelector('.burger').addEventListener('click', toggleMeny)