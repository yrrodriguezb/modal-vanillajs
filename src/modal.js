var Modal = (function () {

    var self = null;
    var state = false;

    function Modal(options) {
        this.closed = true;
        this.opened = false;
        self = this;
        this.init(options);
    }

    var __close = function (event) {  
        if (__isFunction(self.config.onclose))
            self.config.onclose(event);

        self.closed = state = false;   
        __toogleStateModal(); 
    }

    var __open = function (event) {
        if (__isFunction(self.config.onopen))
            self.config.onopen(event);

        self.opened = state = true;  
        __toogleStateModal();
    }

    var __save = function (event) {
        if (__isFunction(self.config.onsave))
            self.config.onsave(event);

        self.closed = state = false;   
        __toogleStateModal();
    }

    var __toogleStateModal = function () {
        self.container.style.display = self.modal.style.display = state ? "block" : "none";
        self.closed = !state;
        self.opened = state
    }

    var __setProperty = function (prop, value) {
        if (this.config[prop]){
            this.config[prop] = value;
            this.render();
        }
    }

    var __getElements = function () {
        self.modal = self.get("modal");
        self.container = self.get("modal-container")
        self.title = self.get("modal-header-title");
        self.content = self.get("modal-content");
        self.btnClose = self.get("btn-modal-close");
        self.btnCancel = self.get("btn-modal-cancel");
        self.btnSave = self.get("btn-modal-save");
    }

    var __refsEvents = function () {
        self.btnCancel.onclick = __close;
        self.btnClose.onclick = __close;
        self.btnSave.onclick = __save;
        self.modal.onclick = __close; 
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

    var __isFunction = function (fn) {
        return fn && {}.toString.call(fn) === '[object Function]';
    }

    Modal.prototype.init = function (options) {
        this.config = options || {}; 
        this.get = document.getElementById.bind(document);
        __getElements();
        this.render();
    };

    Modal.prototype.render = function () {
        this.title.innerHTML = this.config.title || "";
        this.content.innerHTML = this.config.template || "";

        __refsEvents();
    };

    Modal.prototype.open = __open;

    Modal.prototype.close = __close;

    Modal.prototype.save = __save;

    Modal.prototype.setProperty = __setProperty;

    Modal.prototype.find = __find;

    return Modal;
}());



