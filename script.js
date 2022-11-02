// Const announcement

const body = document.querySelector('body');
const tasksUl = document.querySelector('ul');
const inputEvent = document.querySelector('.input-event');
const inputDescription = document.querySelector('.input-description');
const inputDate = document.querySelector('.input-date');
const button = document.querySelector('button');
const statut = document.querySelector('select');
let date = new Date();

// Put the task in a new list

const createEvent = () => {
    const li = document.createElement('li');
    li.innerHTML = `Event : ${inputEvent.value} Descritption :  ${inputDescription.value} Date : ${inputDate.value} in : ${Math.round((inputDate.valueAsNumber - date.getTime()) / (1000 * 60 * 60 *24)) + 1} days `;
    tasksUl.appendChild(li);
    let clone = statut.cloneNode(true);
    tasksUl.appendChild(clone);
    clone.addEventListener('change', (event) => {
        if (clone.value == 'to do') {
            li.className = "to-do";
        }
        else if (clone.value == 'doing') {
            li.className = 'doing';
        }
        else if (clone.value == 'done') {
            li.className = 'done';
        }
        }
    );
};

button.addEventListener('click', createEvent);

// Only show by status


statut.addEventListener('change', (event) => {
    if (statut.value == 'to do') {
        document.getElementsByClassName('to-do').style.visibility = 'visible';
        document.getElementsByClassName('doing').style.visibility = 'hidden';
        document.getElementsByClassName('done').style.visibility = 'hidden';
    }
    else if (statut.value == 'doing') {
        document.getElementsByClassName('to-do').style.visibility = 'hidden';
        document.getElementsByClassName('doing').style.visibility = 'visible';
        document.getElementsByClassName('done').style.visibility = 'hidden';
    }
    else if (statut.value == 'done') {
        document.getElementsByClassName('to-do').style.visibility = 'hidden';
        document.getElementsByClassName('doing').style.visibility = 'hidden';
        document.getElementsByClassName('done').style.visibility = 'visible';
    }
    }
);








