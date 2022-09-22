let productos = []
let carrito = []

class Producto {
    constructor(id, nombre, precio, img, desc = '') {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.desc = desc
    }
    desplegarProductos() {
        const card = `
            <div class="card">
                <p>${this.nombre}</p>
                <div>
                    <img class='imgProducto' src=${this.img} alt="foto del producto"/>
                </div>
                <div>
                    <p>$${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id=${this.id} class='btnAgregar'>AGREGAR AL CARRITO</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento() {
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(productoEncontrado))
    }
}

let prod1 = new Producto('001', 'Coca Cola', 250, 'multimedia/Coca Cola.jpg')
let prod2 = new Producto('002', 'Fanta Naranja', 200, 'multimedia/Fanta Naranja.jpg')
let prod3 = new Producto('003', 'Soda Kin', 180, 'multimedia/Soda Kin.jpg')
let prod4 = new Producto('004', 'Sprite', 270, 'multimedia/Sprite.jpg')
let prod5 = new Producto('005', 'Schweppes', 320, 'multimedia/schweppes.jpg')
let prod6 = new Producto('006', 'Pepsi', 230, 'multimedia/Pepsi.jpg')
let prod7 = new Producto('007', 'Mirinda Naranja', 250, 'multimedia/Mirinda Naranja.jpg')
let prod8 = new Producto('008', 'Mirinda Manzana', 280, 'multimedia/Mirinda Manzana.jpg')
let prod9 = new Producto('009', '7up', 160, 'multimedia/7up.jpg')
let prod10 = new Producto('010', 'PowerAde', 220, 'multimedia/PowerAde.jpg')

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10)

productos.forEach(e => {
    e.desplegarProductos()
})
productos.forEach(e => {
    e.agregarEvento()
})

function agregarAlCarrito(producto) {

    let enCarrito = carrito.find(prod => prod.id == producto.id)

    if (!enCarrito) {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado,
            {
                ...enCarrito,
                cantidad: enCarrito.cantidad + 1
            }
        ]
    }

    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)