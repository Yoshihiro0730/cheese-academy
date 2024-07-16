// jsを記述する際はここに記載していく
// course部分のコンポーネント化

class ButtonContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['button', 'kind'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const button = this.getAttribute('button');
        const kind = this.getAttribute('kind') || 'nomal';

        this.shadowRoot.innerHTML = `
            <style>
                .button-container {
                    margin:60px auto;
                    display:flex;
                    justify-content:center;
                }

                .button-container.contact {
                    margin:30px auto 140px auto;
                }

                .button {
                    width:300px;
                    height:60px;
                    font-size:18px;
                    color:white;
                    background-color:#ffd61a;
                    border:none;
                    cursor: pointer;
                }

                .button:hover {
                    opacity:0.8;
                }
                
            </style>
            <div class="button-container ${kind === 'contact' ? 'contact' : ''}">
                <button class="button">${button}</button>
            </div>
        `;
    }
}
customElements.define('button-container', ButtonContainer);