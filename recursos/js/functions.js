function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function aniAlert(tag, mensaje) {
    let div = document.createElement('div');
    div.className = "alert alert-success alert-dismissible fade show element-animated short fade-in"
    div.role = "alert";
    div.innerHTML = `
        <i class="fa fa-exclamation-circle me-2"></i>${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `
    tag.insertAdjacentElement("beforebegin", div)
    setTimeout(() => {
        p_node = div.parentNode
        p_node.removeChild(div)
    }, 5000)
}

function armarCarruselItem(pic, numPic, i){
    let div = document.createElement("div")
    div.className = (i == 1) ? "carousel-item active" : "carousel-item"
    div.innerHTML = `
        <img
            src="../recursos/img/${pic}-${numPic}.png"
            class="d-block w-100 pic-height"
            alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
            <div class="row">
                <h5 class="mytho-paragraph">${pic}</h5>
            </div>
        </div>
    `
    return div;
}

function cargarCarruselPics() {
    let numLobPics = 3
    let numArcPics = 2
    let indicators = 0
    let numPic = 1

    let div = document.querySelector("div.carousel-inner")
    let ol = document.querySelector("ol.carousel-indicators")

    for (let i = 1; i <= numLobPics + numArcPics; i++) {
        let query;
        query = `
        <li
        data-mdb-target="#mythoPics"
        data-mdb-slide-to="${indicators++}"
        class="
        `
        query += (i == 1)? `active" aria-current="true"></li>` : `"></li>`
        ol.innerHTML += query

        if (i <= numLobPics)
            div.appendChild(armarCarruselItem("Lobby", numPic++, i))
        else{
            numPic = (i == numLobPics + 1) ? 1 : numPic++
            div.appendChild(armarCarruselItem("Arcadia", numPic, i))
        }
    }
}


let cargarPagina = async () => {
    await sleep(2000)
    document.getElementById('spinner').classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
    cargarPagina()
    cargarCarruselPics()
})