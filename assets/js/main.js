// 1. FUNCIÓN PARA RENDERIZAR EL MENÚ
function displayMenuItems(items) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    container.innerHTML = items.map(item => `
        <article class="menu-item">
            ${item.popular ? '<span class="badge-popular">TOP VENTAS</span>' : ''}
            
            <div class="menu-item-img" style="background-image: url('${item.img}')"></div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p>${item.desc}</p>
                <button onclick="pedirProducto('${item.name}')" class="btn-add-cart">Pedir por WhatsApp</button>
            </div>
        </article>
    `).join('');
}

// 2. FUNCIÓN PARA EL PEDIDO DINÁMICO (WhatsApp)
function pedirProducto(nombre) {
    const tel = "18290000000"; // Cambia por el número real
    const msj = encodeURIComponent(`¡Hola Man Up! 🔥 Quiero pedir: *${nombre}*. ¿Cuál es el tiempo de entrega?`);
    window.open(`https://wa.me/${tel}?text=${msj}`, '_blank');
}

// 3. LÓGICA PRINCIPAL (Al cargar el DOM)
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Cargar Imagen del Chef
    const aboutImg = document.querySelector('.about-img');
    if (aboutImg) aboutImg.src = SITE_CONFIG.chefImage;

    // B. Cargar Especial
    const spec = SITE_CONFIG.specialData;
    document.getElementById('special-name').innerText = spec.name;
    document.getElementById('special-desc').innerText = spec.desc;
    document.getElementById('special-price').innerText = spec.price;

    const specialImg = document.getElementById('special-img');
    if (specialImg && spec.img) {
        specialImg.src = spec.img;
    }

    // C. Cargar Menú y Filtros
    displayMenuItems(SITE_CONFIG.menuItems);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.dataset.filter;
            if (category === 'all') {
                displayMenuItems(SITE_CONFIG.menuItems);
            } else {
                const filtered = SITE_CONFIG.menuItems.filter(item => item.category === category);
                displayMenuItems(filtered);
            }
        });
    });

 // D. Navbar Scroll
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('backToTop'); // Lo buscamos una sola vez aquí

    window.addEventListener('scroll', () => {
        // Lógica del Navbar
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Lógica del Botón Volver Arriba (SOLO UNA VEZ)
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // E. Eventos de Click
    // Scroll Suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Click para Volver Arriba
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // F. SCROLL REVEAL (INTERSECTION OBSERVER)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}); // Fin del DOMContentLoaded

function enviarCatering(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    const nombre = document.querySelector('input[placeholder="Tu nombre"]').value;
    const personas = document.querySelector('input[placeholder="20+"]').value;
    const fecha = document.querySelector('input[type="date"]').value;
    const idea = document.querySelector('textarea').value;
    
    const tel = "18290000000";
    const msj = encodeURIComponent(
        `*SOLICITUD DE CATERING* 🔥\n\n` +
        `👤 *Cliente:* ${nombre}\n` +
        `👥 *Personas:* ${personas}\n` +
        `📅 *Fecha:* ${fecha}\n` +
        `💡 *Idea:* ${idea}`
    );
    
    window.open(`https://wa.me/${tel}?text=${msj}`, '_blank');
}

// Y en el DOMContentLoaded, vincula el formulario:
const cateringForm = document.querySelector('#catering form');
if (cateringForm) {
    cateringForm.addEventListener('submit', enviarCatering);
}