const boxes = document.querySelectorAll('.lovely-box')
const img = document.querySelector('img');

let draggedimg;
img.addEventListener("dragstart", dragStart);

boxes.forEach((element)=> {
  element.addEventListener("dragover", dragOver);
  element.addEventListener("drop", drop);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragleave", dragLeave);
})

function dragStart (e){
  draggedimg = e.target;
}

function dragOver (e){
  e.preventDefault();
}

function drop (e) {
  e.target.append(draggedimg)
  e.target.classList.remove('drag-over');
}

function dragEnter (e) {
  e.target.classList.add('drag-over');
}

function dragLeave (e) {
  e.target.classList.remove('drag-over');
}






// const icon = document.querySelector('i');
// icon.addEventListener('click', () => {
//   console.log(icon);
// })







// console.log(document.getElementById('basliq'));
// console.log(document.getElementsByClassName('son'));
// basliq.style.backgroundColor = 'red';
// basliq.style.color = 'white';
//  basliq.style.padding = '2px';
//  basliq.textContent = 'Salam2';
//  const test = basliq.textContent;
//  console.log(test); 

// const newList = document.createElement('p');
// newList.className = 'img';
// newList.innerText = 'image';
// document.querySelector('body').appendChild(newList);
// console.log(newList);

// const newTag = document.createElement('h2');
// newTag.className = 'change';
// newTag.innerText = 'hello';

// const oldTag = document.querySelector('h1');
// const tagParent = document.querySelector('body');
// tagParent.replaceChild(newTag,oldTag);
// console.log(tagParent);