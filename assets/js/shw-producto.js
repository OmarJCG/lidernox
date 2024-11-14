document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar los elementos necesarios
    const categoryItems = document.querySelectorAll(".tienda__cat");
    const cards = document.querySelectorAll(".tienda__card");
    const titleH3 = document.getElementById("tienda-h3");

    // Agregar el evento de clic a cada categoría
    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            tiendaLists.classList.remove('show-menu-tienda');
            document.body.style.overflow = 'auto';

            const category = item.id; // Obtener el id de la categoría seleccionada

            // Cambiar el texto del h3 al nombre de la categoría seleccionada
            titleH3.textContent = item.textContent;


            // Mostrar solo las tarjetas que coinciden con la categoría seleccionada
            cards.forEach(card => {
                if (card.id === category) {
                    card.style.display = "block"; // Mostrar tarjeta si pertenece a la categoría
                }
                else if(category == "tienda-all"){
                    console.log("hlhg")
                    card.style.display = "block";
                }
                
                else {
                    card.style.display = "none"; // Ocultar tarjeta si no pertenece a la categoría
                }
            });
        });
    });

    
});