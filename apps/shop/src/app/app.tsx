import ReactDOM from 'react-dom';
import NxWelcome from './nx-welcome';
export function App() {
  return <NxWelcome title={'React Shop'} />;
}

// Fonction pour définir le Web Component
export function defineReactWebComponent() {
  class ReactWebComponent extends HTMLElement {
    connectedCallback() {
      ReactDOM.render(<App />, this);
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this);
    }
  }

  // Enregistrer le Web Component
  if (!customElements.get('shop-react')) {
    customElements.define('shop-react', ReactWebComponent);
  }
}

// Appel pour enregistrer le composant
defineReactWebComponent();
export default App;
