function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function print_random() {
    target.innerText = `${random(adjective)} ${random(animal)}`
}
