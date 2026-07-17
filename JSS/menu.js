document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const coldProducts = document.querySelectorAll('.product-card.cold');
            const hotProducts = document.querySelectorAll('.product-card.hot');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Cambiar clase activa en los botones
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const selectedFilter = btn.getAttribute('data-filter');

                    if (selectedFilter === 'cold') {
                        // Mostrar las 8 bebidas frías, ocultar calientes
                        coldProducts.forEach(prod => prod.style.display = 'flex');
                        hotProducts.forEach(prod => prod.style.display = 'none');
                    } else if (selectedFilter === 'hot') {
                        // Mostrar las 4 bebidas calientes, ocultar frías
                        coldProducts.forEach(prod => prod.style.display = 'none');
                        hotProducts.forEach(prod => prod.style.display = 'flex');
                    }
                });
            });
        });