class CounterButton extends HTMLElement {
	// static get observedAttributes() {}

	constructor() {
		super();
		//aqui se crea la sombra
		this.attachShadow({ mode: 'open' });
		this.count = 0;
	}

	// attributeChangedCallback(propName, oldValue, newValue) {}

	//Se conecta en el DOM - etiqueta vacia
	connectedCallback() {
		//invoca al render hace que se ve en el dom mas abajo
		this.render();
	}
//Nuevo metodo para hacer un cambio - funcion
	incrementCount() {
		this.count++;
		//Importante volver a renderizar el componente
		this.render();
	}

	render() {
		//forma de como se añade al html por medio de la sombra o referencia
		this.shadowRoot.innerHTML = `
      <button>Counter: ${this.count}</button>
    `;
//seleccionar elemenentos de html (el boton) - evento y funcion tipo flecha que 
		this.shadowRoot.querySelector('button').addEventListener('click', () => this.incrementCount());
	}
}

customElements.define('counter-button', CounterButton);
export default CounterButton;
