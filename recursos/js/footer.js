document.addEventListener('DOMContentLoaded', () => {

    let query = `
    <footer class="text-center text-white bg-mytho-1">
        <div class="container pt-4">
            <section class="mb-4">
            <a
                class="btn btn-link btn-floating btn-lg note-info m-1"
                href="https://twitter.com/MythocraftN"
                role="button"
                data-mdb-ripple-color="success"
                target="_blank"
                ><i class="fab fa-twitter"></i
            ></a>
            <a
                class="btn btn-link btn-floating btn-lg note-info m-1"
                href="https://www.instagram.com/mythocraft.network/"
                role="button"
                data-mdb-ripple-color="success"
                target="_blank"
                ><i class="fab fa-instagram"></i
            ></a>
            <a
                class="btn btn-link btn-floating btn-lg note-info m-1"
                href="https://www.youtube.com/channel/UC1TUYkR1i9LVLIQ5qokgkpQ"
                role="button"
                data-mdb-ripple-color="success"
                target="_blank"
                ><i class="fab fa-youtube"></i>
            </a>
            </section>
        </div>
        <div class="text-center p-3">
            &copy; 2020 - 2022 Copyright: 
            <b><a class="text-dark" href="https://mythocraft.gitbook.io/mythocraft/" target="_blank">Mythocraft Network</a></b> 
            Todos los derechos reservados
        </div>
    </footer>
    `
    let div = document.createElement('div')
    div.className = 'container pt-4 px-4 w-100 h-100'
    div.innerHTML = query
    let main_div = document.querySelector('div.main-container')
    main_div.insertAdjacentElement('beforeend', div)
})