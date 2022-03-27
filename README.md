<<<<<<< HEAD
# BARRILLITO
## Proyecto final - Curso REACT JS de Coderhouse


BARILITO es ecommerce destinado a la venta de bebidas, con un manejo simple y eficaz.

## Caracteristicas de uso

La aplicacion nos permite ver en su pagina principalalgunos de los productos,  haciendo click sobre cualquera de ellos nos llevara a los detalles de dicho producto.
En la parte superior tenemos el navbar en el cual se encuentran los botones con las diferentes caracteristicas.
Al elegir el producto que deseamos podemos elegir la cantidad de unidades, la cual esta limitada por la cantidad de stock disponible. Una vez seleccionada la cantidad aparecera un boton para agregar dicho producto al carrito de compras, y la imagen del carrito aparecera en el navbar con la cantidad de unidades alamcenadas.
Una vez que estemos en el carrito veremos los productos seleccionados, la cantidad de cada uno, el subtotal y el total de la compra. Cada producto cuenta con un boton para removerlo del carrito(no se podra volver a seleccionar un producto si ya esta en el carrito, para eso hay que removerlo).
Como ultimo paso para finalizar la compra se debe completar un formulario con los datos personales del comprador, y una vez confirmada la compra aparecera en la pantalla un mensaje que la compra fue exitosa con un id.



## Informacion tecnica

Barrilito usa las siguientes tecnologias para su desarrollo:

- Visual studio code
- HTML
- CSS
- JavaScript
- react js
- node js
- Github
- Git Bash


## Instalacion

BARRILITO utiliza el entorno de ejecucion de javascript Node js, el cual instalamos desde la consola.

Para poder instalar librerias y demas utiliza la herramienta NPM.

## Proceso de configuracion
En la consola Git Bash se ejecuta el comando npm-install-react-app para la instalacion de aplicacion de React js, luego creamos la aplicacion con el comando create-react-app.
Para poder visualizar en el navegador nuestra app utilizamos el comando npm start.
Continuando con el proceso de configuracion se empiezan a crear los componentes como el navbar, carrito de compras, etc.
Imlementamos el uso de hooks:
_UseState: para guardar estados.
_UseEffect: para utilizar en el ciclo de vida de algunos de nuestros componentes.
Para la organizacion de la app instalamos react-router-dom el cual mediante los LInk nos da la navegabilidad en nuestra app, y NavLink para que al detectar la ruta del Link cambie al estilo que programemos para que se active.
Se utiliza un Context para que en toda nuestra app este disponible los recurson necesarios.
Utilizamos el servicio de Firebase para la seguridad, almacenamiento y consulta de nuestros datos(informacion de productos, ordenes de compras, etc). En la coleccion 'categories' se encuetra cada categoria y en el campo 'description' su valor, luego en la coleccion 'products' se encuentran los productos exhibidos con los campos correspondientes a sus caracteristicas. Lo mismo para las ordenes en la coleccion 'orders' con la informacion detallada del comprador y el/los articulos comprados.
Y como ultimo encriptamos nuestras credenciales en un archivo para mayor seguridad de nuestra app.

## Desarrollador
El proyecto fue realizado entre los meses de enero y marzo de 2022 por el desarrollador front end Matias Perona.

email de contacto: matiasperona81@gmail.com

## Muestra del proyecto
Aca les dejo un pequeño recorrido por la aplicacion mostrando la ruta para generar una compra.

link to= 'gif_prueba_barrilito.gif'

