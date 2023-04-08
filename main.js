const btn = document.querySelector('button')
const div = document.querySelector('div')

const names = ['Jagienka', 'Dobrawa', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja']
const prefixs = ['Wydaje mi się', 'Mam wrażenie', 'Szczerze powiedziawsze, myślę', 'Uważam', 'Sądzę', 'A jednak może wynioskuje', 'Jestem pewien']

const nameGenerator = () => {
    const indexPrefix = Math.floor(Math.random() * prefixs.length)
    const index = Math.floor(Math.random() * names.length)
    div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[index]}`
}

btn.addEventListener('click', nameGenerator)