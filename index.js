const element_main = document.getElementById('main');
element_main.remove();


const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "David is the champion";