console.log("welcome to editable div");

// Create a new Div Element and append it to our Original HTML

let divElement = document.createElement('div');
let note = localStorage.getItem('text');
let text;
if(note == null){

    text = document.createTextNode('Write here to edit');
}
else{
    text = document.createTextNode(note);
}

divElement.appendChild(text);

divElement.setAttribute('id', "element");
divElement.setAttribute('style', 'border: 2px solid brown; margin:3px; padding:5px; width:200px; height: 80px;')
// console.log(text)
// console.log(text.data)

let list = document.getElementById('list');
// console.log(list);
let first = document.getElementById('first');
// console.log(first);
list.insertBefore(divElement, first);

// Add function to edit new Div Element
divElement.addEventListener('click', function(){
    let textNum = document.getElementsByClassName('textarea').length;
    console.log(textNum);
    if(textNum == 0){
    let html = element.innerHTML;
    divElement.innerHTML = ` <textarea id="textarea" class="textarea" rows="5" cols="20" placeholder="Write here to Edit" >${html}</textarea> `
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        element.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });

});