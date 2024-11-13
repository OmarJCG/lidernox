const tiendaLists = document.getElementById('tienda-lists'),
    tiendaCategoria = document.getElementById('tienda-categoria'),
    tiendaClose = document.getElementById('tienda-close')

if (tiendaCategoria) {
    tiendaCategoria.addEventListener('click', () => {
        tiendaLists.classList.add('show-menu-tienda')
        document.body.style.overflow = 'hidden';
    })
}

if (tiendaClose) {
    tiendaClose.addEventListener('click', () => {
        tiendaLists.classList.remove('show-menu-tienda')
        document.body.style.overflow = 'auto';
    })
}