## Componente - Modal Reutilizable

Modal Reutilizable con HTML, CSS y JavaScript

### Propiedades


#### Propieades de configuración

| Propiedad   | Tipo         | Descripción                   | Valor por defecto |
|-------------|--------------|-------------------------------|-------------------|
| title       | string       | Titulo en el header del modal | vacio             |
| template    | string       | Contenido del modal           | vacio             |


#### Propieades de instancia

| Propiedad   | Tipo         | Descripción                   | Valor por defecto |
|-------------|--------------|-------------------------------|-------------------|
| modal       | HTMLElement  | Elemento HTML                 |                   |
| container   | HTMLElement  | Elemento HTML                 |                   |
| content     | HTMLElement  | Elemento HTML                 |                   |
| btnCancel   | HTMLElement  | Elemento HTML                 |                   |
| btnClose    | HTMLElement  | Elemento HTML                 |                   |
| btnSave     | HTMLElement  | Elemento HTML                 |                   |

### Métodos

| Nombre      | Retorno      | Descripción                                | 
|-------------|--------------|--------------------------------------------|
| close       | void         | Cierra el modal                            |
| open        | void         | Abre el modal                              |
| find        | NodeList     | Busca un elemnto en el modal               |
| save        | void         | Manejador del boton guardar                |
| setProperty | void         | Asigna el valor a una propiedad del modal  |

### Forma de uso

``` javascript 
var modal = new Modal({
    title: "Modal Reutilizable",
    template: "<p>Contenido del modal<p>"
});

modal.open();

modal.find("div").forEach(el => {
    console.log(el);
});

modal.close();
```

### Live Demo

Ir al sitio de publicación. __[Demo](https://yrrodriguezb.github.io/modal-vanilla-js/)__

