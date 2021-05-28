function toggleMeny() {

    document.querySelector('.meny_list').classList.toggle('navActive')
    document.querySelector('.burger').classList.toggle('toggle')
    document.querySelector('body').classList.toggle('scroll')
}

document.querySelector('.burger').addEventListener('click', toggleMeny)

// Lägg till i produkt sidan en funktion som tillåter en att välja hur många man vill köpa bredvid "lägg i varukorg"

//     background-position: ; ändrar positionen av bilden. Center verkar bra
