//parentElement
//var itemList = document.querySelector('#items');
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor="#bababa";

//firstchild
//console.log(itemList.firstchild);

//firstelementchild
//console.log(itemList.firstElementChild)

//lastchild
//console.log(itemList.lastchild);

//lastelementchild
//console.log(itemList.lastElementChild);

var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id="hello1";
var newtxt = document.createTextNode('HEllo word');
newDiv.appendChild(newtxt);
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);


const list = document.getElementById('items');
const newItem = document.createElement('li');
newItem.textContent = 'HEllo word';

list.insertBefore(newItem, list.firstChild);
