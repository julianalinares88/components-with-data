class MessageButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//
		this.isSelected = false;
	}

	//Se conecta en el DOM
	connectedCallback() {
		this.render();
	}

	changeMessage() {
		//! lo contrario a lo que ya hay - intercambia valores si es t cambia a f y al reves
		//Aqui se cambia el estado del boton 
		this.isSelected = !this.isSelected;
		this.render();
	}

	render() {
		// if (this.isSelected === true) {
		// 	message = 'Agregado';
		// } else {
		// 	message = 'Agregar a favoritos';
		// }

		this.shadowRoot.innerHTML = 
		// el ? y los : se usan como el ejemplo del if else que esta arriba
		//Entonces si isSelected es true entonces es Agregado si no es Agregar a favoritos
		//Se llama condicional ternario
		`<button>${this.isSelected ? 'Agregado' : 'Agregar a favoritos'}</button>
    `;

		this.shadowRoot.querySelector('button').addEventListener('click', () => this.changeMessage());
	}
}

customElements.define('message-button', MessageButton);
export default MessageButton;
