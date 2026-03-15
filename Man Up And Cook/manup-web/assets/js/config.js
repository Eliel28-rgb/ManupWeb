// CONFIGURACIÓN GLOBAL Y DATOS
const SITE_CONFIG = {
    // Foto del Chef (Apartado Sobre Nosotros)
    chefImage: 'assets/img/sections/manu-chef.jpg',

    // Datos del Especial
    specialData: {
        "name": "THE TRUFFLE BOMB",
        "desc": "Doble carne Angus, mayonesa de trufa real, queso suizo y cebolla crispy. Una explosión de sabor que redefine el street food.",
        "price": "RD$ 575",
        "img": "assets/img/products/special.webp"
    },

    // Todos los items del menú
    menuItems: [
        { id: 1, category: "burgers", name: "The Classic Man", price: "RD$ 450", desc: "Carne angus, queso cheddar, lechuga, tomate y salsa especial.", img: "assets/img/menu/burger1.webp" },
        { id: 2, category: "bombas", name: "Crispy Fusión", price: "RD$ 525", desc: "Pollo ultra-crujiente con glaseado de miel picante y coleslaw.", img: "assets/img/menu/bomba1.webp" },
        { id: 3, category: "sides", name: "Truffle Fries", price: "RD$ 300", desc: "Papas fritas con aceite de trufa y parmesano rallado.", img: "assets/img/menu/sides1.webp" },
        { id: 4, category: "burgers", name: "Fusión Burger", price: "RD$ 550", desc: "Mezcla de sabores dominicanos y técnica americana.", img: "assets/img/menu/burger2.webp", popular: true }
    ]
};