var Modal = (function () {

    var self = null;

    function Modal(options) {
        self = this;
        this.init(options);
    }

    var __close = function() {  
        self.modal.style.display = "none";
        self.container.style.display = "none";
    }

    var __open = function() {  
        self.modal.style.display = "block";
        self.container.style.display = "block";
    }

    var __setProperty = function (prop, value) {
        this.config[prop] = value;
        this.render();
    }

    var __find = function (selector) {
        if (!window.document.querySelectorAll) {
            function querySelectorAllPolyfill(r, c, i, j, a) {
                var d=document, 
                    s=d.createStyleSheet();
                a = d.all;
                c = [];
                r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                for (i = r.length; i--;) {
                    s.addRule(r[i], 'k:v');
                    for (j = a.length; j--;) {
                        a[j].currentStyle.k && c.push(a[j]);
                    }
                    s.removeRule(0);
                }
                return c;
            };

            return querySelectorAllPolyfill(".modal-container " + selector)
        }

        return document.querySelectorAll(".modal-container " + selector);
    }

    Modal.prototype.init = function (options) {
        this.config = options || {};
        this.get = document.getElementById.bind(document);
        this.getElements();
        this.render();
    };

    Modal.prototype.getElements = function () {
        this.modal = this.get("modal");
        this.container = this.get("modal-container")
        this.title = this.get("modal-header-title");
        this.content = this.get("modal-content");
        this.btnClose = this.get("btn-modal-close");
        this.btnCancel = this.get("btn-modal-cancel");
        this.btnSave = this.get("btn-modal-save");
    }

    Modal.prototype.refsEvents = function () {
        this.btnCancel.onclick = this.config.onclose || this.close;
        this.btnClose.onclick = this.config.onclose || this.close
        this.btnSave.onclick = this.config.onsave || this.save;
        this.modal.onclick = __close; 
    }

    Modal.prototype.render = function () {
        this.title.innerHTML = this.config.title || "";
        this.content.innerHTML = this.config.template || "";

        this.refsEvents();
    };

    Modal.prototype.open = __open;

    Modal.prototype.close = __close;

    Modal.prototype.save = __close;

    Modal.prototype.setProperty = __setProperty;

    Modal.prototype.find = __find;

    return Modal;
}());



