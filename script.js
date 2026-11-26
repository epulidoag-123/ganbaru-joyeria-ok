// PRODUCTOS (12 joyas con esmeraldas) - PRECIOS EN COP
const productos = [
    { id: 1, nombre: "Anillo Esmeralda Real", categoria: "Anillos", precio: 1250000, imagen: "images/Anillo_Esmeralda_Real.jpg", descripcion: "Este impresionante anillo presenta una esmeralda colombiana de talla esmeralda de 1.2 quilates, engastada en oro 18k de alta calidad. La piedra exhibe un color verde intenso característico de las mejores esmeraldas de Boyacá. Perfecto para ocasiones especiales o como anillo de compromiso. Incluye certificado de autenticidad y estuche de regalo.", video: "videos/anillo-esmeralda.mp4" },
    { id: 2, nombre: "Collar Místico", categoria: "Collares", precio: 1690000, imagen: "images/Collar_Mistico.jpg", descripcion: "Elegante collar con esmeralda colombiana en baño de oro de 18k. Cadena ajustable de 45cm a 50cm. La piedra tiene un color verde medio con inclusiones naturales que garantizan su autenticidad. Diseño versátil que combina con cualquier estilo, desde casual hasta formal.", video: null },
    { id: 3, nombre: "Pendientes Gota Esmeralda", categoria: "Pendientes", precio: 980000, imagen: "images/Pendiente_Gota_Esmeralda.jpg", descripcion: "Pendientes colgantes con esmeralda natural talla pera. Oro blanco 18k. Largo 2.5cm. Las esmeraldas tienen un color verde brillante y están engarzadas en montura segura. Perfectos para realzar cualquier look de día o noche. Cierre de presión.", video: "videos/pendientes-esmeralda.mp4" },
    { id: 4, nombre: "Pulsera Fuerza Vital", categoria: "Pulseras", precio: 2750000, imagen: "images/Pulzera_fuerza_vital.png", descripcion: "Pulsera con pequeños fragmentos de esmeralda engastados en plata 925 bañada en oro. Largo 18cm con cadena de seguridad. Cada fragmento de esmeralda es único, haciendo de esta pulsera una pieza irrepetible. Ideal para uso diario o como regalo significativo.", video: null },
    { id: 5, nombre: "Anillo Zarco", categoria: "Anillos", precio: 1890000, imagen: "images/Anillo_Zarco.jpg", descripcion: "Anillo de compromiso con esmeralda central de 0.8 quilates rodeada de diamantes sintéticos. Oro amarillo 18k. La esmeralda tiene un color verde azulado único. Disponible en tallas de la 4 a la 9. Incluye certificado de autenticidad y garantía de 6 meses.", video: "videos/anillo-zarco.mp4" },
    { id: 6, nombre: "Collar Leyenda", categoria: "Collares", precio: 2100000, imagen: "images/Collar_Leyenda.jpg", descripcion: "Collar de esmeraldas engarzadas en oro blanco 18k. Cadena de 50cm con cierre de langosta. Tres esmeraldas colombianas de talla ovalada con un peso total de 2.5 quilates. Pieza de alta joyería para ocasiones especiales.", video: null },
    { id: 7, nombre: "Pendientes Clásicos", categoria: "Pendientes", precio: 820000, imagen: "images/Pendientes_Clasicos.jpg", descripcion: "Pendientes tipo botón con esmeralda talla cabujón. Oro amarillo 18k. Diámetro 1cm. Diseño clásico y atemporal que nunca pasa de moda. Perfectos para uso diario o para acompañar un look elegante.", video: null },
    { id: 8, nombre: "Pulsera Sendero Mistíco", categoria: "Pulseras", precio: 1840000, imagen: "images/Pulsera_ Sendero_Mistico.jpg", descripcion: "Es una pulsera de cuentas que alterna de manera regular esferas de oro pulido y brillante con cuentas de tono negro mate con una textura acanalada o estriada,El gran protagonista es un dije en forma de cruz de estilo ornamentado, con un patrón que recuerda a los resplandores o rayos solares", video: "videos/pulsera-dual.mp4" },
    { id: 9, nombre: "Anillo Aurora", categoria: "Anillos", precio: 2150000, imagen: "images/Anillo_Aurora.jpg", descripcion: "Anillo exclusivo con esmeralda talla pera de 1.8 quilates. Oro blanco 18k con detalles en oro rosa. La esmeralda tiene un color verde intenso con excelente brillo. Diseño contemporáneo ideal para quien busca una pieza única y sofisticada.", video: null },
    { id: 10, nombre: "Collar Étnico", categoria: "Collares", precio: 2700000, imagen: "images/Collar_Etnico.jpg", descripcion: "Collar bohemio con esmeraldas facetadas y mostacillas artesanales. Largo 55cm. Diseño inspirado en las culturas indígenas colombianas. Cada pieza es única y hecha a mano. Perfecto para un look casual y artístico.", video: null },
    { id: 11, nombre: "Pendientes Minimalistas", categoria: "Pendientes", precio: 540000, imagen: "images/Pendientes_Minimalistas.jpg", descripcion: "Pendientes pequeños de oro blanco 18k con pequeña esmeralda de 0.2 quilates. Diseño minimalista y elegante. Perfectos para el día a día o para combinar con otras joyas. Cierre de presión.", video: null },
    { id: 12, nombre: "Pulsera Delicada", categoria: "Pulseras", precio: 980000, imagen: "images/Pulsera_Delicada.jpg", descripcion: "Cadena delicada con dije de esmeralda en oro amarillo 18k. Largo 17cm. El dije tiene forma de gota y contiene una pequeña esmeralda natural. Ideal como regalo para alguien especial o para lucir sola o combinada.", video: null },
       { id: 13, nombre: "Manilla Esencia ", categoria: "Pulseras", precio: 560000, imagen: "images/Manilla_Esencia.jpg", descripcion: "Se trata de una manilla o pulsera de estilo macramé o tejido a mano, elaborada con hilos entrelazados en color blanco y negro.Alterna pequeñas esferas de tono negro mate.En el centro destaca un dije con una pequeña esmeralda natural de talla rectangular. Posee un sistema de ajuste mediante cordón negro corredizo con un nudo ajustable, lo que le da un carácter informal, cómodo y muy versátil.", video: null },
     { id: 14, nombre: "Pulsera Dual", categoria: "Pulseras", precio: 960000, imagen: "images/Pulsera_Dual.jpg", descripcion: "Pulsera de plata 925 con esmeralda y topacio azul. Largo 19cm. Combina el verde de la esmeralda colombiana con el azul del topacio. Diseño moderno y versátil. Cierre de seguridad.", video: null }
];

// Inicialización de almacenamiento
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
let analytics = JSON.parse(localStorage.getItem("analytics")) || { vistas: [], busquedas: [], addCart: [], compras: [], sesiones: [] };

// Funciones de tracking
function trackEvent(tipo, valor) {
    analytics[tipo].push({ fecha: new Date().toISOString(), valor });
    localStorage.setItem("analytics", JSON.stringify(analytics));
}

function trackVista(productoId) { trackEvent("vistas", productoId); }

// Utilidades UI
function showToast(msg) {
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.style.display = "block";
    setTimeout(() => t.style.display = "none", 2500);
}

function updateCartUI() {
    let count = carrito.reduce((s, it) => s + it.cantidad, 0);
    document.getElementById("cartCount").innerText = count;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function addToCart(id, cant = 1) {
    let prod = productos.find(p => p.id == id);
    if (prod) {
        let exist = carrito.find(i => i.id == id);
        if (exist) exist.cantidad += cant;
        else carrito.push({ id, nombre: prod.nombre, precio: prod.precio, cantidad: cant });
        updateCartUI();
        trackEvent("addCart", id);
        showToast("Añadido al carrito");
    }
}

function toggleFavorito(id) {
    if (favoritos.includes(id)) favoritos = favoritos.filter(f => f != id);
    else favoritos.push(id);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    showToast(favoritos.includes(id) ? "Agregado a favoritos" : "Eliminado de favoritos");
    renderCurrentPage();
}

// Motor de recomendaciones
function getRecommendations(limit = 4) {
    let vistasIds = analytics.vistas.map(v => v.valor).filter(v => v);
    let comprasIds = pedidos.flatMap(p => p.items.map(i => i.id));
    let scores = {};
    productos.forEach(p => { scores[p.id] = 0; });
    vistasIds.forEach(id => { if (scores[id] !== undefined) scores[id] += 1; });
    comprasIds.forEach(id => { if (scores[id] !== undefined) scores[id] += 3; });
    let sorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let recomendados = sorted.slice(0, limit).map(id => productos.find(p => p.id == parseInt(id))).filter(p => p);
    while (recomendados.length < limit && productos.length) {
        recomendados.push(productos[Math.floor(Math.random() * productos.length)]);
    }
    return recomendados.slice(0, limit);
}

// Renderizado de productos en grid
function renderProductosGrid(containerId, productList, allowFav = true) {
    let container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = productList.map(p => `
        <div class="product-card" data-id="${p.id}">
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
            <div class="product-info">
                <h3>${p.nombre}</h3>
                <p>$${p.precio.toLocaleString()}</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="btn-add add-cart-btn" data-id="${p.id}"><i aria-hidden="true" class="fas fa-cart-plus"></i> Carrito</button>
                    <button class="btn-add cotizar-btn" data-id="${p.id}" data-nombre="${p.nombre}" style="background: #d4af37; color: #1a1a2e;"><i aria-hidden="true" class="fas fa-file-invoice-dollar"></i> Cotizar</button>
                </div>
                ${allowFav ? `<button class="btn-add fav-btn" data-id="${p.id}" aria-label="Agregar o quitar de favoritos"><i aria-hidden="true" class="fas fa-heart${favoritos.includes(p.id) ? '' : 'o'}"></i></button>` : ''}
            </div>
        </div>
    `).join('');

    document.querySelectorAll(`#${containerId} .add-cart-btn`).forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.id)); });
    });
    
    // Evento para COTIZAR producto
    document.querySelectorAll(`#${containerId} .cotizar-btn`).forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.stopPropagation(); 
            let nombreProducto = btn.dataset.nombre;
            localStorage.setItem("productoCotizar", nombreProducto);
            setPage("contact");
            renderCurrentPage();
            let textarea = document.querySelector("#contact-form textarea");
            if (textarea) {
                textarea.value = `Hola, estoy interesado en recibir una cotización para el producto: ${nombreProducto}. Por favor, envíenme más información. Gracias.`;
            }
            showToast(`📩 Solicitud de cotización para ${nombreProducto}`);
        });
    });
    
    if (allowFav) {
        document.querySelectorAll(`#${containerId} .fav-btn`).forEach(btn => {
            btn.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorito(parseInt(btn.dataset.id)); });
        });
    }
    document.querySelectorAll(`#${containerId} .product-card`).forEach(card => {
        card.addEventListener('click', () => {
            let pid = parseInt(card.dataset.id);
            trackVista(pid);
            showProductDetail(pid);
        });
    });
}

// FUNCIÓN DE DETALLE - CON TEXTO AZUL Y VIDEO LOCAL
function showProductDetail(id) {
    currentProductId = id;
    let prod = productos.find(p => p.id == id);
    let detailDiv = document.getElementById("detail-container");
    detailDiv.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; flex-wrap: wrap; gap: 2rem;">
                <div style="flex: 1; min-width: 250px;">
                    <img src="${prod.imagen}" alt="${prod.nombre}" style="width: 100%; border-radius: 20px;">
                </div>
                <div style="flex: 1; min-width: 250px; color: #1e3c72;">
                    <h2 style="color: var(--gold); margin-bottom: 1rem;">${prod.nombre}</h2>
                    <p style="line-height: 1.6; margin-bottom: 1rem; color: #1e3c72;"><strong style="color: #1e3c72;">📖 Descripción:</strong> ${prod.descripcion}</p>
                    
                    ${prod.video ? `
                    <div style="margin: 1.5rem 0;">
                        <h4 style="color: var(--gold); margin-bottom: 0.8rem;"><i aria-hidden="true" class="fas fa-play-circle"></i> Video del Producto</h4>
                        <video controls style="width: 100%; border-radius: 15px; max-height: 300px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                            <source src="${prod.video}" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    ` : ''}
                    
                    <p style="margin-bottom: 0.8rem; color: #1e3c72;"><strong style="color: #1e3c72;">💰 Precio:</strong> $${prod.precio.toLocaleString()} COP</p>
                    <p style="margin-bottom: 0.8rem; color: #1e3c72;"><strong style="color: #1e3c72;">🏷️ Categoría:</strong> ${prod.categoria}</p>
                    <p style="margin-bottom: 0.8rem; color: #1e3c72;"><strong style="color: #1e3c72;">✨ Material:</strong> Oro 18k / Plata 925 con baño de oro</p>
                    <p style="margin-bottom: 0.8rem; color: #1e3c72;"><strong style="color: #1e3c72;">📍 Origen:</strong> Colombia - Boyacá</p>
                    <p style="margin-bottom: 0.8rem; color: #1e3c72;"><strong style="color: #1e3c72;">📜 Certificación:</strong> Incluye certificado de autenticidad</p>
                    <p style="margin-bottom: 1rem; color: #1e3c72;"><strong style="color: #1e3c72;">🧼 Cuidados:</strong> Evitar contacto con perfumes y productos químicos. Limpiar con paño suave.</p>
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap;">
                        <button class="btn-gold add-cart-detail" style="cursor: pointer;">🛒 Agregar al Carrito</button>
                        <button class="btn-gold fav-detail" style="cursor: pointer;"><i aria-hidden="true" class="fas fa-heart${favoritos.includes(id) ? '' : '-o'}"></i> Favorito</button>
                        <button class="btn-gold cotizar-detail" style="cursor: pointer; background: #2c5e2e;"><i aria-hidden="true" class="fas fa-file-invoice-dollar"></i> Solicitar Cotización</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector(".add-cart-detail")?.addEventListener("click", () => addToCart(id));
    document.querySelector(".fav-detail")?.addEventListener("click", () => toggleFavorito(id));
    document.querySelector(".cotizar-detail")?.addEventListener("click", () => {
        localStorage.setItem("productoCotizar", prod.nombre);
        setPage("contact");
        renderCurrentPage();
        let textarea = document.querySelector("#contact-form textarea");
        if (textarea) {
            textarea.value = `Hola, estoy interesado en recibir una cotización para el producto: ${prod.nombre}. Por favor, envíenme más información. Gracias.`;
        }
        showToast(`📩 Solicitud de cotización para ${prod.nombre}`);
    });
    let relacionados = productos.filter(p => p.categoria === prod.categoria && p.id !== id).slice(0, 4);
    renderProductosGrid("related-products", relacionados, true);
    setPage("product-detail");
}

// FUNCIÓN RENDER CATALOG - CORREGIDA (búsqueda con plurales)
function renderCatalog() {
    let cat = document.getElementById("catFilter").value;
    let min = parseFloat(document.getElementById("priceMin").value) || 0;
    let max = parseFloat(document.getElementById("priceMax").value) || 9999999;
    let search = document.getElementById("searchInput").value.toLowerCase().trim();
    
    // Función para convertir plural a singular
    function singular(palabra) {
        if (palabra.endsWith("es")) {
            return palabra.slice(0, -2);
        } else if (palabra.endsWith("s") && !palabra.endsWith("as") && !palabra.endsWith("es")) {
            return palabra.slice(0, -1);
        }
        return palabra;
    }
    
    let searchSingular = singular(search);
    
    let filtered = productos.filter(p => {
        let coincideCategoria = (cat === "all" || p.categoria === cat);
        let coincidePrecio = p.precio >= min && p.precio <= max;
        let coincideBusqueda = true;
        if (search !== "") {
            let nombreLower = p.nombre.toLowerCase();
            coincideBusqueda = nombreLower.includes(search) || nombreLower.includes(searchSingular);
        }
        return coincideCategoria && coincidePrecio && coincideBusqueda;
    });
    
    if (search) trackEvent("busquedas", search);
    renderProductosGrid("catalog-grid", filtered, true);
}

function renderCart() {
    let container = document.getElementById("cart-items");
    if (carrito.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#666; padding:2rem;'>🛒 Tu carrito está vacío</p>";
        document.getElementById("cart-total").innerHTML = "";
        return;
    }
    
    let total = 0;
    let html = carrito.map((item, idx) => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.nombre}</div>
                    <div class="cart-item-price">$${item.precio.toLocaleString()} c/u</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" data-idx="${idx}" data-delta="-1">-</button>
                    <span class="quantity-value">${item.cantidad}</span>
                    <button class="quantity-btn" data-idx="${idx}" data-delta="1">+</button>
                </div>
                <div class="cart-item-subtotal">$${subtotal.toLocaleString()}</div>
                <button class="cart-item-remove" data-idx="${idx}">🗑️ Eliminar</button>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
    document.getElementById("cart-total").innerHTML = `<h3>💰 TOTAL: $${total.toLocaleString()} COP</h3>`;
    
    // Eventos para los botones de cantidad
    document.querySelectorAll(".quantity-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            let idx = parseInt(btn.dataset.idx);
            let delta = parseInt(btn.dataset.delta);
            if (carrito[idx]) {
                carrito[idx].cantidad += delta;
                if (carrito[idx].cantidad <= 0) {
                    carrito.splice(idx, 1);
                }
                updateCartUI();
                renderCart();
            }
        });
    });
    
    // Eventos para eliminar
    document.querySelectorAll(".cart-item-remove").forEach(btn => {
        btn.addEventListener("click", () => {
            let idx = parseInt(btn.dataset.idx);
            carrito.splice(idx, 1);
            updateCartUI();
            renderCart();
            showToast("Producto eliminado");
        });
    });
}
function finalizarCheckout(e) {
    e.preventDefault();
    let nombre = document.getElementById("checkout-name").value;
    let email = document.getElementById("checkout-email").value;
    let direccion = document.getElementById("checkout-address").value;
    if (carrito.length === 0) { showToast("Carrito vacío"); return; }
    if (!nombre || !email || !direccion) { showToast("Completa todos los campos"); return; }
    let newOrder = {
        id: Date.now(),
        fecha: new Date().toISOString(),
        total: carrito.reduce((s, i) => s + i.precio * i.cantidad, 0),
        items: [...carrito],
        nombre,
        email,
        direccion
    };
    pedidos.unshift(newOrder);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    trackEvent("compras", newOrder.total);
    carrito = [];
    updateCartUI();
    showToast(`✅ Pedido realizado con éxito, ${nombre}`);
    setPage("account");
    renderCurrentPage();
}

function renderAccount() {
    let misPedidos = pedidos.map(p => `<div>Pedido #${p.id} - ${new Date(p.fecha).toLocaleDateString()} - Total $${p.total.toLocaleString()}</div>`).join('');
    document.getElementById("my-orders").innerHTML = misPedidos || "Sin pedidos";
    let favProds = productos.filter(p => favoritos.includes(p.id));
    renderProductosGrid("favorites-list", favProds, true);
}

// Panel Administrativo con gráficos
let salesChart, ordersChart, categoryChart;

function updateAdminPanel(periodDays = 30) {
    let ahora = new Date();
    let limite = new Date();
    limite.setDate(ahora.getDate() - periodDays);
    
    let ventasFiltradas = analytics.compras.filter(c => new Date(c.fecha) >= limite);
    let ingresos = ventasFiltradas.reduce((sum, c) => sum + parseFloat(c.valor), 0);
    let pedidosFiltrados = pedidos.filter(p => new Date(p.fecha) >= limite);
    let vistasTotales = analytics.vistas.filter(v => new Date(v.fecha) >= limite).length;
    
    document.getElementById("stats-cards").innerHTML = `
        <div class="stat-card"><h4>💰 Ingresos</h4><p>$${ingresos.toLocaleString()}</p></div>
        <div class="stat-card"><h4>📦 Pedidos</h4><p>${pedidosFiltrados.length}</p></div>
        <div class="stat-card"><h4>📊 Conversión</h4><p>${pedidosFiltrados.length > 0 ? ((pedidosFiltrados.length / (vistasTotales || 1)) * 100).toFixed(1) : 0}%</p></div>
        <div class="stat-card"><h4>👁️ Vistas</h4><p>${vistasTotales}</p></div>
    `;
    
    // Ventas diarias - GRÁFICO AZUL
    let dailySales = Array(periodDays).fill(0);
    ventasFiltradas.forEach(v => {
        let diff = Math.floor((ahora - new Date(v.fecha)) / (1000 * 3600 * 24));
        if (diff < periodDays) dailySales[diff] += parseFloat(v.valor);
    });
    if (salesChart) salesChart.destroy();
    salesChart = new Chart(document.getElementById("salesChart"), {
        type: 'line',
        data: {
            labels: Array.from({ length: periodDays }, (_, i) => `Día ${periodDays - i}`).reverse(),
            datasets: [{ 
                label: 'Ventas Diarias $', 
                data: dailySales.reverse(), 
                borderColor: '#1e3c72',
                backgroundColor: 'rgba(30, 60, 114, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: { color: '#1e3c72', font: { weight: 'bold' } }
                }
            },
            scales: {
                y: { ticks: { color: '#1e3c72' }, title: { display: true, text: 'COP', color: '#1e3c72' } },
                x: { ticks: { color: '#1e3c72' } }
            }
        }
    });
    
    // Pedidos por día - GRÁFICO AZUL
    let dailyOrders = Array(periodDays).fill(0);
    pedidosFiltrados.forEach(p => {
        let diff = Math.floor((ahora - new Date(p.fecha)) / (1000 * 3600 * 24));
        if (diff < periodDays) dailyOrders[diff]++;
    });
    if (ordersChart) ordersChart.destroy();
    ordersChart = new Chart(document.getElementById("ordersChart"), {
        type: 'bar',
        data: {
            labels: Array.from({ length: periodDays }, (_, i) => `Día ${periodDays - i}`).reverse(),
            datasets: [{ 
                label: 'Pedidos', 
                data: dailyOrders.reverse(), 
                backgroundColor: '#1e3c72',
                borderRadius: 8
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: { color: '#1e3c72', font: { weight: 'bold' } }
                }
            },
            scales: {
                y: { ticks: { color: '#1e3c72' }, title: { display: true, text: 'Cantidad', color: '#1e3c72' } },
                x: { ticks: { color: '#1e3c72' } }
            }
        }
    });
    
    // Ventas por categoría - GRÁFICO AZUL/DORADO
    let catSales = { Anillos: 0, Collares: 0, Pendientes: 0, Pulseras: 0 };
    pedidosFiltrados.forEach(p => {
        p.items.forEach(it => {
            let prod = productos.find(pr => pr.id == it.id);
            if (prod) catSales[prod.categoria] += it.precio * it.cantidad;
        });
    });
    if (categoryChart) categoryChart.destroy();
    categoryChart = new Chart(document.getElementById("categoryChart"), {
        type: 'pie',
        data: {
            labels: Object.keys(catSales),
            datasets: [{ 
                data: Object.values(catSales), 
                backgroundColor: ['#1e3c72', '#2c5e2e', '#d4af37', '#0a4d6e'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: { color: '#1e3c72', font: { weight: 'bold' } }
                }
            }
        }
    });
    
    // Productos más vistos
    let viewCounts = {};
    analytics.vistas.filter(v => new Date(v.fecha) >= limite).forEach(v => { viewCounts[v.valor] = (viewCounts[v.valor] || 0) + 1; });
    let topView = Object.entries(viewCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    document.getElementById("topViewed").innerHTML = topView.map(([id, c]) => `<div>🔍 ${productos.find(p => p.id == parseInt(id))?.nombre}: ${c} vistas</div>`).join('');
    
    // Más agregados al carrito
    let cartCounts = {};
    analytics.addCart.filter(a => new Date(a.fecha) >= limite).forEach(a => { cartCounts[a.valor] = (cartCounts[a.valor] || 0) + 1; });
    let topCart = Object.entries(cartCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    document.getElementById("topCart").innerHTML = topCart.map(([id, c]) => `<div>🛒 ${productos.find(p => p.id == parseInt(id))?.nombre}: ${c} veces</div>`).join('');
    
    // Búsquedas populares
    let searchTerms = {};
    analytics.busquedas.filter(b => new Date(b.fecha) >= limite).forEach(b => { searchTerms[b.valor] = (searchTerms[b.valor] || 0) + 1; });
    let topSearches = Object.entries(searchTerms).sort((a, b) => b[1] - a[1]).slice(0, 5);
    document.getElementById("topSearches").innerHTML = topSearches.map(([term, c]) => `<div>🔎 "${term}": ${c} búsquedas</div>`).join('');
    
    // Pedidos recientes
    document.getElementById("recentOrders").innerHTML = pedidosFiltrados.slice(0, 5).map(p => `<div>#${p.id} - ${p.nombre} - $${p.total.toLocaleString()}</div>`).join('');
}

// Función para manejar cotización de servicios
function setupServiciosCotizacion() {
    document.querySelectorAll(".cotizar-servicio-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            let servicio = btn.dataset.servicio;
            localStorage.setItem("servicioCotizar", servicio);
            setPage("contact");
            renderCurrentPage();
            let textarea = document.querySelector("#contact-form textarea");
            if (textarea) {
                textarea.value = `Hola, estoy interesado en recibir una cotización para el servicio de: ${servicio}. Por favor, envíenme más información sobre precios, tiempos y proceso. Gracias.`;
            }
            showToast(`📩 Solicitud de cotización para ${servicio}`);
        });
    });
}

// Contacto - MEJORADO PARA COTIZACIONES
function handleContact(e) {
    e.preventDefault();
    let nombre = e.target.querySelector('input[placeholder="Nombre"]')?.value;
    let email = e.target.querySelector('input[placeholder="Email"]')?.value;
    
    let productoCotizar = localStorage.getItem("productoCotizar");
    let servicioCotizar = localStorage.getItem("servicioCotizar");
    
    let tipoCotizacion = "";
    if (productoCotizar) {
        tipoCotizacion = `PRODUCTO: ${productoCotizar}`;
        localStorage.removeItem("productoCotizar");
    } else if (servicioCotizar) {
        tipoCotizacion = `SERVICIO: ${servicioCotizar}`;
        localStorage.removeItem("servicioCotizar");
    }
    
    if (tipoCotizacion) {
        showToast(`📧 Cotización solicitada, ${nombre}. Te responderemos pronto a ${email} sobre: ${tipoCotizacion}`);
    } else {
        showToast(`📧 Mensaje enviado, ${nombre}. Te responderemos pronto a ${email}`);
    }
    
    e.target.reset();
}

// Navegación
let currentPage = "home";
let currentProductId = null;

function setPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    currentPage = pageId;
    window.scrollTo(0, 0);
}

function renderCurrentPage() {
    if (currentPage === "home") {
        renderProductosGrid("featured-products", productos.slice(0, 4), true);
        let recom = getRecommendations();
        renderProductosGrid("recomendaciones-home", recom.length ? recom : productos.slice(2, 6), true);
    }
    if (currentPage === "catalog") renderCatalog();
    if (currentPage === "cart") renderCart();
    if (currentPage === "account") renderAccount();
    if (currentPage === "admin") updateAdminPanel(parseInt(document.getElementById("periodFilter").value));
    if (currentPage === "product-detail" && currentProductId) showProductDetail(currentProductId);
    if (currentPage === "contact") {
        setTimeout(setupServiciosCotizacion, 100);
    }
}

// Control de acceso al Panel Administrativo (validación en el navegador: solo demostración)
const ADMIN_USER = "admin";
const ADMIN_PASS = "Ganbaru2026*";

function isAdminAuth() { return sessionStorage.getItem("adminAuth") === "1"; }

function openAdminLogin() {
    document.getElementById("admin-modal").hidden = false;
    document.getElementById("admin-user").focus();
}

function closeAdminLogin() {
    document.getElementById("admin-modal").hidden = true;
    document.getElementById("admin-login-form").reset();
}

document.getElementById("admin-login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    let u = document.getElementById("admin-user").value.trim();
    let p = document.getElementById("admin-pass").value;
    if (u === ADMIN_USER && p === ADMIN_PASS) {
        sessionStorage.setItem("adminAuth", "1");
        closeAdminLogin();
        setPage("admin");
        renderCurrentPage();
    } else {
        showToast("Credenciales incorrectas");
    }
});
document.getElementById("admin-cancel")?.addEventListener("click", closeAdminLogin);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !document.getElementById("admin-modal").hidden) closeAdminLogin();
});

// Eventos
document.querySelectorAll("[data-page]").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        let pg = el.dataset.page;
        if (pg === "admin") {
            if (!isAdminAuth()) { openAdminLogin(); return; }
            setPage("admin");
        }
        else if (pg === "catalog") setPage("catalog");
        else if (pg === "home") setPage("home");
        else if (pg === "about") setPage("about");
        else if (pg === "contact") setPage("contact");
        else if (pg === "account") setPage("account");
        else if (pg === "cart") setPage("cart");
        else if (pg === "terminos") setPage("terminos");
        else if (pg === "privacidad") setPage("privacidad");
        renderCurrentPage();
    });
});

document.getElementById("checkout-btn")?.addEventListener("click", () => {
    if (carrito.length) setPage("checkout");
    else showToast("Carrito vacío");
});

document.getElementById("checkout-form")?.addEventListener("submit", finalizarCheckout);
document.getElementById("contact-form")?.addEventListener("submit", handleContact);
document.getElementById("catFilter")?.addEventListener("change", renderCatalog);
document.getElementById("priceMin")?.addEventListener("input", renderCatalog);
document.getElementById("priceMax")?.addEventListener("input", renderCatalog);
document.getElementById("searchInput")?.addEventListener("input", renderCatalog);
document.getElementById("periodFilter")?.addEventListener("change", () => updateAdminPanel(parseInt(document.getElementById("periodFilter").value)));
document.getElementById("logout-sim")?.addEventListener("click", () => { sessionStorage.removeItem("adminAuth"); showToast("Demo: sesión reiniciada (datos conservados)"); });
document.querySelector(".cart-icon")?.addEventListener("click", () => { setPage("cart"); renderCurrentPage(); });

// Inicialización
updateCartUI();
setPage("home");
renderCurrentPage();
setupServiciosCotizacion();