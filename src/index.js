import './style.css';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'htrehrthwhh';
    element.classList.add('hello');
    return element;
  }
  
  document.body.appendChild(component());