const getToggle = document.querySelector('.menu-toggle input');
const getUl = document.querySelector('nav ul');
const getName = document.getElementById('name');
const getRole = document.getElementById('role');
const getBtnNew = document.getElementById('btnNew');
const getBtnWelcome = document.getElementById('btnWelcome');
const getTitle = document.querySelector('.title p');
const getSpan = document.querySelector('.span');
const getSpantodo = document.querySelector('.span-todo');
const getSpandatetime = document.querySelector('#datetime');
const getPrioritytext = document.getElementById('priority-select');
const getTaskinput = document.getElementById('taskInput');
const getTaskbtn = document.getElementById('taskBtn');
const getTasklist = document.getElementById('taskList');


getToggle.addEventListener('click',()=>{
    getUl.classList.toggle('slide');
});

getBtnNew.addEventListener('click',()=>{
    location.reload();
});

getBtnWelcome.addEventListener('click', () =>{
    const nameText = getName.value.trim();
    const roleText = getRole.value.trim();
    console.log(`Name: ${nameText} Role: ${roleText}`);

    if (nameText == '' || roleText == '') {
        alert('Please enter Name and Role.');
        return;
    }

    getTitle.innerHTML = `Hi, ${nameText} - ${roleText}`;
    getSpan.innerHTML = "Please Input Task and Priority";
    getName.setAttribute('style', 'display: none');
    getRole.setAttribute('style', 'display: none');
    const innerTasktext = document.createElement('input');
    innerTasktext.className = 'input';
    innerTasktext.type = 'text';
    innerTasktext.id = 'task';
    innerTasktext.placeholder = 'Task';
    getTaskinput.appendChild(innerTasktext);
    getPrioritytext.removeAttribute('style', 'display: none');
    getBtnWelcome.style.display = 'none';
    const innerTaskbtn = document.createElement('button');
    innerTaskbtn.innerHTML = "Let's Go";
    innerTaskbtn.className = 'btnConfirm';
    innerTaskbtn.id = 'btnTask';
    innerTaskbtn.type = 'button';
    getTaskbtn.appendChild(innerTaskbtn);
    getSpantodo.removeAttribute('style', 'display: none');
    getSpandatetime.removeAttribute('style', 'display: none');
    getName.value = '';
    getRole.value = '';

    const getTasktext = document.getElementById('task');
    const getBtnTask = document.getElementById('btnTask');
    
getBtnTask?.addEventListener('click',()=>{
    const taskText = getTasktext.value.trim();
    const selectText = getPrioritytext.value;
    console.log(`Task: ${taskText} Priority: ${selectText}`);
    
    if (taskText == '' || selectText == '') {
        alert('Please enter Task and choose Priority.');
        return;
    }
    
    let dt = new Date();
    getSpandatetime.innerHTML = dt.toLocaleString();

    const innerListitem = document.createElement('li');
    innerListitem.className = `input-list-${selectText}`;
    innerListitem.innerHTML = `
    <span id="spanLitext">${taskText}</span>
    <div class="actionList">
        <button class="btnConfirm-list" id="btnDone" type="button">Done</button>
        <button class="btnConfirm-list" id="btnRemove" type="button">Remove Task</button>
    </div>`;
    getTasklist.appendChild(innerListitem);

    const getLi = document.getElementById('spanLitext');
    innerListitem.querySelector('#btnDone').addEventListener('click', () => {
        if (innerListitem.style.textDecoration === 'line-through') {
            innerListitem.style.textDecoration = 'none';
            return
        } else {
            innerListitem.style.textDecoration = 'line-through';
            return
        }
        
    });

    innerListitem.querySelector('#btnRemove').addEventListener('click', () => {
        innerListitem.remove();
    });

    getTasktext.value = '';
    getPrioritytext.value = '';

    // const getinnerListitemRemove = document.getElementById('btnRemove');
    // const getinnerListitemDone = document.getElementById('btnDone');

    // getinnerListitemRemove.addEventListener('click',()=>{
    //     innerListitem.remove();
    // })

    });
});


