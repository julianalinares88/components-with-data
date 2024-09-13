import * as components from './components/indexPadre.js';
import { dataCards } from './data/charactersData.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
//Se recorre la data y se obtiene cada objeto de manera individual en element
		dataCards.forEach((element) => {
			this.shadowRoot.innerHTML += 
//Por cada elemento se crea una card en el shadowRoot
//Obtener solo los datos que necesito en la card
//Se demora mas pq el html se actualiza en cada vuelta y hasta que no termine no se pintan los elementos
			`
		  <character-card
		    name="${element.name}"
		    gender="${element.gender}"
		    image="${element.image}">
		  </character-card>
			<message-button></message-button>
			`;
		});
	}
}

customElements.define('app-container', AppContainer);
