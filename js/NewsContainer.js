// jsを記述する際はここに記載していく
// course部分のコンポーネント化

class NewsContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['src', 'alt', 'date', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');
        const date = this.getAttribute('date')
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .news-description-container {
                    max-width:300px;
                    margin-left:15px;
                    margin-right:15px;
                    cursor: pointer;
                }

                .news-description-container:hover {
                    opacity:0.8
                }

                .image {
                    object-fit:cover;
                    width:100%;
                    height:auto;
                }

                .date{
                    margin-top:30px;
                    margin-bottom:24px;
                    font-size:18px;
                }
                
                .description {
                    font-size:14px;
                    line-height:2;
                }
                
            </style>
            <div class="news-description-container">
                <img src="${src}" alt="${alt}" class="image">
                <div class="news-wrapper">
                    <div class="date">${date}</div>
                    <div class="description">${description}</div>
                </div>
            </div>
        `;
    }
}
customElements.define('news-container', NewsContainer);