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
            li.className = "todo";
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
        const toDoClass = document.getElementsByClassName('todo');
        for (const element of toDoClass) {
        element.style.visibility = 'visible';
        }
        const doingClass = document.getElementsByClassName('doing');
        for (const element of doingClass) {
        element.style.visibility = 'hidden';
        }
        const doneClass = document.getElementsByClassName('done');
        for (const element of doneClass) {
        element.style.visibility = 'hidden';
        }
}
    else if (statut.value == 'doing') {
        const doingClass = document.getElementsByClassName('doing');
        for (const element of doingClass) {
        element.style.visibility = 'visible';
        }
        const toDoClass = document.getElementsByClassName('todo');
        for (const element of toDoClass) {
        element.style.visibility = 'hidden';
        }
        const doneClass = document.getElementsByClassName('done');
        for (const element of doneClass) {
        element.style.visibility = 'hidden';
        }
    }
    else if (statut.value == 'done') {
        const doneClass = document.getElementsByClassName('done');
        for (const element of doneClass) {
        element.style.visibility = 'visible';
        }
        const toDoClass = document.getElementsByClassName('todo');
        for (const element of toDoClass) {
        element.style.visibility = 'hidden';
        }
        const doingClass = document.getElementsByClassName('doing');
        for (const element of doingClass) {
        element.style.visibility = 'hidden';
        }
    }
    }
);










