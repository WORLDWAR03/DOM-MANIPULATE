// console.log(window);

// // Single Element Selectors

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));


// // Multiple Element Selectors

// console.log(document.getElementsByClassName('item'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));

// console.dir(document)

// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);

// document.title = "TitleChanged";

// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[11].textContent = 'holy Moly'

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

/*textContent and innerText both are diffrent innerText property also listen to the style atribute*/

// var headTitle = document.getElementById('header');
// headTitle.innerHTML='<h2>Hell</h2>';
// console.log(headTitle);
// var header = document.querySelector('.top');
// header.style.borderBottom = 'solid 3px #000';


// GET ELEMENT BY CLASSNAME //
// var items = document.getElementsByClassName('item');
// console.log(items);
// items[1].textContent ='hey whats up';
// items[2].style.color = 'blue';
// items[2].style.backgroundColor = 'green';

// for(var i =0 ; i <= items.length ; i++){
//     items[i].style.backgroundColor = 'yellow'
// }

// GETELEMENTBYTAGNAME //

// var list = document.getElementsByTagName('li');
// for (let i = 0; i <= list.length; i++) {
//     list[i].style.backgroundColor = 'grey';
    
// }


// QUERYSELECTOR //

// var header = document.querySelector('.top');
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value ='hellow world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.item:nth-child(2)');
// secondItem.style.color = 'green';

// QUERYSELECTORALL //

// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');


// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'grey'
//     even[i].style.backgroundColor = 'yellow'
// }


// TRAVERSING THE DOM //

// var itemList = document.querySelector('.items');

//parentNodes

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);
 
// childNodes

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[0].style.backgroundColor = 'yellow';
  
// parentElement

// console.log(itemList.parentElement);
// itemList.parentElement
// .style.backgroundColor = 'light-grey';

//FirstChild 

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.backgroundColor= 'black'
// itemList.firstElementChild.style.color = 'white';

//lastChild

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'content changed';

// nextSibiling

// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling);

// previousSibling

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = "red"

//create a Element

// var newDiv = document.createElement('div')

// //add Class

// newDiv.className= 'puyyapla';

// //add id

// newDiv.id = 'hola';

// //add attribute

// newDiv.setAttribute('title', 'hola');

// //add style

// newDiv.setAttribute('style', 'color:blue')

// //createTextNode 
// var newDivTxt = document.createTextNode("njan indakkiya diva ahnitta")

// //append

// newDiv.appendChild(newDivTxt);

// // //insert to dom

// var container = document.querySelector('section .container');
// var form = document.querySelector('form #my-form');

// console.log(newDiv);
// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv, form);

//EVENTLITSNERS

// var button = document.getElementById('button');
// button.addEventListener('click', buttonClick)


//function buttonClick(e){
    // var input = document.getElementById('name');
    // input.style.color = 'red'
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.target.value);
    // console.log(e.target.id);
    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey);


//}

var button = document.getElementById('button');
// button.addEventListener('dblclick', typeOfEvent)
// button.addEventListener('click', typeOfEvent)
// button.addEventListener('mouseup', typeOfEvent)
// button.addEventListener('mousedown', typeOfEvent)
// button.addEventListener('mouseover', typeOfEvent)
// var output = document.querySelector('.data')
// var box = document.getElementById('box');
// var formInput = document.getElementById('name');
// var form = document.querySelector('form')
// box.addEventListener('mouseenter' ,typeOfEvent)
// box.addEventListener('mouseleave' ,typeOfEvent)

// box.addEventListener('mouseover' ,typeOfEvent)
// box.addEventListener('mouseout' ,typeOfEvent)

// box.addEventListener('mousemove' ,typeOfEvent)
// formInput.addEventListener('keyup' ,typeOfEvent)
// formInput.addEventListener('keydown' ,typeOfEvent)
// formInput.addEventListener('keypress' ,typeOfEvent)

// formInput.addEventListener('focus' ,typeOfEvent)
// formInput.addEventListener('blur' ,typeOfEvent)

// formInput.addEventListener('cut' ,typeOfEvent)
// formInput.addEventListener('paste' ,typeOfEvent)

// formInput.addEventListener('input' ,typeOfEvent)

// form.addEventListener('submit' ,typeOfEvent)


// function typeOfEvent(e){
//     e.preventDefault()
//      console.log('eventType:'+e.type);

//     //  output.innerHTML = '<h4>'+e.target.value+'</h4>'

//     //  document.body.style.display = 'none'

// //      output.innerHTML = '<h4>Mousex:'+e.offsetX +'</h4><h4> offsetY:'+ 
// // e.offsetY+'</h4>';
// // document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)'


// }
   


var form = document.querySelector('form');
var itemList = document.getElementById('items');
var errElem = document.querySelector('#err');

form.addEventListener('submit', addItem);
itemList.addEventListener('click' ,deleteItem)

function addItem(e){
    e.preventDefault()
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;

   const message = [];
   if(name === '' || name === null){
    message.push('Name is required')
   }
    if(email == '' || email === null){
    message.push('Email is required')
   }
   if(message.length > 0){
    e.preventDefault();
    errElem.innerHTML = message.join(', ');
   }
    

  if(message.length == 0){
    var newlist = document.createElement('li');
    newlist.className ='list-group-item';
 
    newlist.appendChild(document.createTextNode(name + email));
 
    console.log(newlist);
 
    // delete button element
    var deleteButton = document.createElement('button');
 
    deleteButton.className = "btn btn-dark btn-sm float-right delete m-1";
 
    deleteButton.appendChild(document.createTextNode('X'))
 
    newlist.appendChild(deleteButton)
 
    itemList.appendChild(newlist)
    
  }
   
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
         var li = e.target.parentElement;
         itemList.removeChild(li)
        }
    }

}
var text = document.getElementById('filter');
text.addEventListener('keyup', filterItem)

function filterItem(e){
    var text = e.target.value.toLowerCase();
     
    var items =itemList.getElementsByTagName('li');

    Array.from(items).forEach((item)=>{
        var listText = item.firstChild.textContent;
        if(listText.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
           item.style.display = 'none'
        }
    })
}

var g = 'eeeeeeeeerrrrrrrr'
var h = 'r'

let c = g.indexOf(h)

console.log(c);



