[VOLVER AL INDICE](../../README.md)

# Proyecto Web

# Directorio de proyecto

```
ProyectoDir
    - img
    - css
        styles.js
    - js
        main.js
    index.html
```

# Maqueta html base del proyecto


```html
<!DOCTYPE html>
<html lang="es">
    <head>

        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link type="text/css" href="css/styles.css" rel="stylesheet">
        <script src="js/main.js"></script>

    </head>
    <body>
        <section id="global">
            <!--CABECERA-->
            <header>
                <div id="logo">
                    <h1>Proyecto JS</h1>
                </div class="clearfix">
                <div>

                </div>
                <navbar>
                    <ul id="menu">
                        <li><a href="#">INICIO</a></li>
                        <li><a href="#">RELOJ</a></li>
                        <li><a href="#">SOBRE MI</a></li>
                        <li><a href="#">CONTACTO</a></li>
                    </ul>
                </navbar>
            </header>

            <!-- SLIDER -->
            <div id="slider"></div>

            <!-- CONTENIDO -->
            <section id="content">
                <div id="posts">
                    <article class="post">
                        <h2>Titulo del articulo</h2>
                        <span>fecha de publicacion</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum, molestiae dignissimos mollitia officiis reiciendis voluptatibus autem necessitatibus alias officia nostrum pariatur aliquid id molestias dolorem ad voluptate? Optio, debitis!
                        </p>
                    </article>
                </div>
                <sidebar id="sidebar">

                </sidebar>
            </section>

            <footer>
                curso full stack javascript
            </footer>
        </section>
    </body>
</html>
```
