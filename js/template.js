class MyHeaderTemplate extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <div class="fake-image">Hej jag är header</div>
            </header>
            `
    }
}
customElements.define('header-Template', MyHeaderTemplate)