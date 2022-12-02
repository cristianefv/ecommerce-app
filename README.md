
<h1 align="center">Perfil del Vino - Ecommerce App</h1>
   <p align="left">
   <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
   </p>

<h2 align="center">Proyecto Final - React JS - Coderhouse</h2>
<p align="center"> Creado por Cristian Flores</p>

## Deploy: https://perfil-del-vino.vercel.app/

Esta aplicacion web fue creada con React JS, Material Ui y Firebase.

## Descripcion del proyecto

La app representa un ecommerce de vinos argentinos de autor.

La misma cuenta con una base de datos alojada en Firebase, de la cual se conecta mediante Firestore y renderiza toda la coleccion de documentos almacenados.
Todos estos documentos se muestran en el inicio de la app, teniendo la posibilidad de filtrarlos por categorias.

### Categorias
Las categorias se encuentran visiblemente alojadas en la navbar para una mejor experiencia del usuario que conoce de vinos y quiere buscar el estilo que mas le agrade.

### Productos

Los productos tienen acceso a su informacion detallada a traves de un boton "VER DETALLE", el cual redirige al usuario a otro componente para que pueda ver la descripcion del producto, su stock actual. Y si lo desea, puede agregarlo al carrito cuantas veces quiera, hasta agotar stock.

Una vez agregado el producto, la app le da la opcion al usuario de seguir comprando o dirigirse hacia el carrito para finalizar la compra.

### Carrito

El carrito de compras de la app, se renderiza en una tabla que detalla la imagen del producto, nombre, añada, cantidad agregada, precio unitario, importe por la cantidad agregada, la opcion de eliminar dicho producto y el monto total a abonar.

El usuario tiene la opcion de borrar un producto especifico o vaciar el carrito completo.

Si el carrito se vacia completamente, se renderiza un mensaje indicandole al usuario que no hay productos seleccionados y que puede elegir productos de la tienda haciendo click en un link "CLICK AQUI".

En caso contrario, se puede prodecer al pago.

### CartWidget

Al agregar productos al carrito, se renderizara un icono de carrito con las unidades agregadas para que pueda ser mas intuitivo para el usuario.

### Formulario de compra

Al dirigirse a pagar los productos seleccionados, la app redirecciona a un formulario para completar los datos del usuario y asi poder procesar el pedido.

El formulario esta validado, por lo que todos los campos tienen que estar cargados y de manera correcta, sin esta informacion no se podra continuar con el proceso y un mensaje de advertencia creado con <b><i>SweetAlert</i></b> advertira al comprador que faltan datos por completar.

### Resumen de compra

Junto al formulario se despliega un resumen de compra, detallando lo que el usuario eligio para chequear todo una vez mas mientras se completan los datos y poder confirmar el pedido tranquilamente.

### Comprobante de pedido

Una vez completados y confirmados los datos del comprador, se renderiza un comprobante del pedido con un mensaje que contiene un ID unico por la compra generada.
Dicho comprobante avisa al usuario que recibira un mail con los detalles para poder hacer el seguimiento de sus productos.

Finalmente un boton le ofrecera al usuario dirigirse al inicio de la app.

### Footer

En el footer de la app se encuentra un icono de instagram, el cual redirige en otra pestana al instagram de la app.

