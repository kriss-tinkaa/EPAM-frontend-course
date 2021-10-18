

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}

function dragstart(event){
    console.log('dragg start', event.target);
    event.target.classList.add('active');
    setTimeout(() => event.target.classList.add('hide'))
    
}

function dragend(event){
    console.log('dragg end');
    event.target.className = "item";
}

function dragover(event){
    event.preventDefault();
}

function dragenter(event){
    event.target.classList.add('hovered');
    console.log('dragenter')

}

function dragleave(event){
    event.target.classList.remove('hovered');

}

function drop(event){
    event.target.classList.remove('hovered');
    event.target.append(item);

}