bienvenida()

function bienvenida(){
    alert("Bienvenido a mi aplicación web")
    alert("Somos la ONG INVESTIGA UTP")
    alert("Le invitamos a comprar nuestras merch par asi ayudarnos")
    alert("Estos son nuestro productos y sus precios")
}


let productos = [
    {id:1, nombre:"taza", precio:20 + " soles"},
    {id:2, nombre:"gorra", precio:15 + " soles"},
    {id:3, nombre:"polo", precio:50 + " soles"},
    {id:4, nombre:"polera", precio:80 + " soles"} ,
    {id:5, nombre:"lapicero", precio:10 + " soles"}
]

paraCadaUno(productos, alert)

function paraCadaUno(productos, funcion){
    for(const producto of productos){
        funcion(producto.nombre)
        funcion(producto.precio)
    }
}

