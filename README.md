## Componente - Modal Reutilizable

Modal Reutilizable con HTML, CSS y JavaScript

### Propiedades


#### Propieades de configuración

| Propiedad      | Tipo     | Descripción                   | Valor por defecto |
|----------------|----------|-------------------------------|-------------------|
| onclose        | Function | Manejador de cerrar           | close()           |
| onopen         | Function | Manejador de abrir modal      | open()            |
| onsave         | Function | Manejador de guardar          | save()            |
| template       | String   | TÍtulo en el header del modal | vacio             |
| title          | String   | Contenido del modal           | vacio             |

***Nota: Si se agrega la configuración de los eventos onclose, onopen, onsave, unicamente agrega funcionalidad al llamar los eventos correspondientes. Por defecto cierran el Modal. ***


#### Propieades de instancia

| Propiedad   | Tipo             | Descripción                                     | Valor por defecto |
|-------------|------------------|-------------------------------------------------|-------------------|
| modal       | HTMLElement      | Elemento HTML                                   |                   |
| container   | HTMLElement      | Elemento HTML                                   |                   |
| content     | HTMLElement      | Elemento HTML                                   |                   |
| btnCancel   | HTMLElement      | Elemento HTML                                   |                   |
| btnClose    | HTMLElement      | Elemento HTML                                   |                   |
| btnSave     | HTMLElement      | Elemento HTML                                   |                   |
| opened      | Boolean Property | Propiedad que verifica si el modal esta abierto | false             |
| closed      | Boolean Property | Propiedad que verifica si el modal esta cerrado | true              |

### Métodos

| Nombre      | Retorno  | Descripción                                | 
|-------------|----------|--------------------------------------------|
| close       | void     | Cierra el modal                            |
| open        | void     | Abre el modal                              |
| find        | NodeList | Busca un elemento en el modal              |
| save        | void     | Manejador del botón guardar                |
| setProperty | void     | Asigna el valor a una propiedad del modal  |

### Forma de uso

``` javascript 
var modal = new Modal({
    title: "Modal Reutilizable",
    template: "<p>Contenido del modal<p>",
    onclose: (e) => console.log("close ..."),
    onopen: (e) => console.log("open ..."),
    onsave: (e) => console.log("save ...")
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
            ...
        },
        save: function () {
            ...
        },
    });

    modal.setProperty("template", table.outerHTML);
    
    modal.open();

    modal.find("#tblData").forEach(function (el) {
        el.style.width = "100%";
    });

    modal.content.innerHTML += "<br>Hecho con VanillaJS";

})();
```

### Live Demo

Ir al sitio de publicación. __[Demo](https://yrrodriguezb.github.io/modal-vanillajs/src/modal.html)__

