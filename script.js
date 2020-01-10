function random_name() {
    let random = Math.random()
    target.innerText = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${animals[Math.floor(Math.random() * animals.length)]}`
}
