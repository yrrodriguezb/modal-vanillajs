## Componente - Modal Reutilizable

Modal Reutilizable con HTML, CSS y JavaScript

### Propiedades


#### Propieades de configuración

| Propiedad   | Tipo         | Descripción                   | Valor por defecto |
|-------------|--------------|-------------------------------|-------------------|
| title       | String       | Titulo en el header del modal | vacio             |
| template    | String       | Contenido del modal           | vacio             |
| close       | Function     | Manejador de cerrar           | close()           |
| save        | Function     | Manejador de gaurdar          | save()            |


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

``` javascript 
(function(){

    var table = document.createElement("table");
    table.id = "tblData";
    table.className = "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp";

    var tbody = document.createElement("tbody");
    var tr, td;

    for (let i = 0; i < 5; i++) {
        tr = document.createElement("tr");

        for (let j = 0; j < 5; j++) {
            td = document.createElement("td");
            td.innerText = "Posición [" + i + "][" +  j +"]";
            tr.appendChild(td); 
        }
        
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    var modal = new Modal({
        title: "Modal",
        template: "",
        close: function () {
            ....
        },
        save: function () {
            ....
        },
    });

    modal.setProperty("template", table.outerHTML);
    modal.open();

    modal.find("#tblData").forEach(function (el) {
        el.style.width = "100%";
    });

})();
```

### Live Demo

Ir al sitio de publicación. __[Demo](https://yrrodriguezb.github.io/modal-vanillajs/src/modal.html)__

