const url = ('https://672c8d021600dda5a9f8e610.mockapi.io/qweasdzxc')
const input = document.getElementById('input')
const title = document.querySelector('h1')
const submit = document.getElementById('submit')
const text = document.querySelector('.main__text')
const load = document.getElementById('loader')


const Open = async (id) => {
    await fetch(url)
        .then(response => response.json())
        .then(response => DataRes = response[id])
    localStorage.setItem('data', JSON.stringify(DataRes))
    window.location.href = 'search_attr.html'

}


const search = async () => {
    let response = await fetch(url)
        .then(response => response.json())
    response.forEach(element => {
        if (input.value.toLowerCase() === element['title'].toLowerCase()) {
            localStorage.setItem('data', JSON.stringify(element))
            window.location.href = 'search_attr.html'
        }
    })
}


const render = async () => {
    const cards = document.getElementById('cards')
    let response = await fetch(url)
        .then(response => response.json())
        load.style.display = 'none'
    cards.innerHTML = ''
    response.forEach(element => {
        if (element['id'] < pags) {
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
                `
        }
    })
}


const filtration = async (item) => {
    load.style.display = 'block'
    let response = await fetch(url)
        .then(response => response.json())
        load.style.display = 'none'
    cards.innerHTML = ''
    response.forEach(element => {
        if (element['title'].includes(item)) {
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
                `
        } else if (element['city'].includes(item)) {
            cards.innerHTML += `
            <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                <div class="main__subtitle" id="subtitle${element['id']}">
                    <p>${element['title']}</p>
                </div>
                <div class="main__img main__img${element['id']}">
                    <img src="${element['img3']}" alt="" id="img${element['id']}">
                </div>
            </div>
            `
        }
    })
}



let pags = 16                                       
const next  = async(id) => {
    load.style.display = 'block'  
    let response = await fetch(url)
        .then(response => response.json())
        load.style.display = 'none'
    cards.innerHTML = ''
    response.forEach(element => {
        if(element['id'] >= pags && element['id'] < pags + 16) {
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
               `
        }
    });
}


const prev = async() => {  
    load.style.display = 'block'
    let response = await fetch(url)
        .then(response => response.json())
        load.style.display = 'none'
    cards.innerHTML = ''
    response.forEach(element => {
        if (element['id'] < pags) {
            cards.innerHTML += `
                <div class="main__card" id="${element['id']}" onclick="Open(this.id)">
                    <div class="main__subtitle" id="subtitle${element['id']}">
                        <p>${element['title']}</p>
                    </div>
                    <div class="main__img main__img${element['id']}">
                        <img src="${element['img3']}" alt="" id="img${element['id']}">
                    </div>
                </div>
                `
        }
    });
}
render()
