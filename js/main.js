// jsを記述する際はここに記載していく
// course部分のコンポーネント化

class CourseContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['src', 'alt', 'title', 'description', 'layout'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');
        const title = this.getAttribute('title')
        const description = this.getAttribute('description');
        const layout = this.getAttribute('layout') || 'normal';

        this.shadowRoot.innerHTML = `
            <style>
                .image-description-container {
                    display: flex;
                    flex-direction: row;
                    width:100%;
                    background-color: #fafafa;
                }

                .image-description-container.reverse {
                    flex-direction: row-reverse;
                }

                .image {
                    width:50%;
                    height:auto;
                }

                .text-wrapper {
                    display:flex;
                    flex-direction: column;
                    margin-left:50px;
                    margin-top:auto;
                    margin-bottom: auto;
                    width:480px;
                    align-items:flex-start;
                }

                .text-wrapper.reverse {
                    margin-right:50px;
                    align-items:flex-end;
                    width:auto;
                }

                .title {
                    font-size:24px;
                    padding-bottom:40px;
                }

                .title.reverse {
                    text-align: left;
                    margin-left:0;
                    align-self: flex-start;
                }

                .description {
                    text-align:left;
                    line-height:2;
                }

                .description.reverse {
                    texe-align:right;
                    margin-right:0;
                }

                
            </style>
            <div class="image-description-container ${layout === 'reverse' ? 'reverse' : ''}">
                <img src="${src}" alt="${alt}" class="image">
                <div class="text-wrapper ${layout === 'reverse' ? 'reverse' : ''}">
                    <div class="title ${layout === 'reverse' ? 'reverse' : ''}">${title}</div>
                    <div class="description ${layout === 'reverse' ? 'reverse' : ''}">${description}</div>
                </div>
            </div>
        `;
    }
}
customElements.define('course-container', CourseContainer);