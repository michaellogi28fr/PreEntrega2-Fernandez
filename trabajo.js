bienvenida()

function bienvenida(){
    alert("Bienvenido a mi aplicación web")
    alert("Somos la ONG INVESTIGA UTP")
    alert("Le invitamos a comprar nuestras merch par asi ayudarnos")
    alert("Estos son nuestro productos y sus precios")
}

let productos = [
    {id:1, nombre:"taza", precio:20 + " soles" ,stock:3 , categoria:"cocina"},
    {id:2, nombre:"gorra", precio:15 + " soles" ,stock:5, categoria:"ropa"},
    {id:3, nombre:"polo", precio:50 + " soles" ,stock:8, categoria:"ropa"},
    {id:4, nombre:"polera", precio:80 + " soles" ,stock:1, categoria:"ropa"} ,
    {id:5, nombre:"lapicero", precio:10 + " soles" ,stock:4, categoria:"utiles"}
]





let salida = ""
productos.forEach((producto)=>{
    salida = salida + "N° "+producto.id + " " + producto.nombre + " : Su precio es S/." + producto.precio + "\n" 
})
alert(salida)

function buscar(){
    let produc = prompt("Consulta aquí cual de los productos desea:(Escriba el nombre del producto)")

    let productoBuscado = productos.find((productos => productos.nombre === produc)) 
    if(productoBuscado){
        alert("Su precio es: "  + productoBuscado.precio)
    }
}
buscar()

function filtrarCategoria(){
    let categoria = prompt("Escriba la categoria( Hay categoria ropa,cocina y utiles)")
    let productosFiltrados = productos.filter(productos => productos.categoria === categoria )

    for(const productos of productosFiltrados){
        alert(productos.nombre)
    }
    
}

function adquision(){
    alert("¿Desea adquirirlo?")
    let decision = prompt("Ponga si o no")
    
    if(decision === "si"){
        alert("Gracias por su compra")
    }
    else{
        alert("Vuelva pronto, muchas gracias pero antes si se anima puede filtrar por categorias los productos :)")
        filtrarCategoria()
    }
}

adquision()





