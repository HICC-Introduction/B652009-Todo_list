//Selectors
const todoInput=document.querySelector('.todo-input'); //변수 todoInput은 Input form을 가리킨다.
const addButton=document.querySelector('.add-btn'); //변수 addButton은 Input form 내부의 add버튼을 가리킨다.
const todoList=document.querySelector('.todo-list'); //변수 todoList는 addButton click 이후에 생성될 todo-list의 부모인 <ul>tag를 가리킨다.
const delMode=document.getElementById('del-btn'); //변수 delMode는 delete button을 가리킨다.
const editMode=document.getElementById('edit-btn');
const getCategory=document.getElementById('category-select');
//EventListners
addButton.addEventListener('click',addTodo);
editMode.addEventListener('click',toggleEdit);

delMode.addEventListener('click',toggleDel);


// Change button text when user clicks button.




//Functions
function addTodo(event){
    event.preventDefault(); //prevent refresh
    //create todo <div> with class"todo" under <ul> todo-list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create Checkmark button
    
    const doneBtn = document.createElement('input');
    doneBtn.classList.add('done-chk');
    doneBtn.type ="checkbox";
    doneBtn.value="Check";
 
    //create <li> with class "todo-item" under <div> todo
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    
    //create <filter> 조건문
    const categoryLabel = document.createElement('span');  //html에서 category-select option으로 받은 값 가져와야 함
    categoryLabel.classList.add('category-item');
    categoryLabel.innerText = getCategory.value;
        if(getCategory.value === 'none')
        {
            alert('Please choose category.');
            return;
        }
        if(getCategory.value === 'Programming')
        {
            categoryLabel.classList.add('code-todo');
        }
        if(getCategory.value === 'Design')
        {
            categoryLabel.classList.add('design-todo')
        }
        if(getCategory.value === 'Daily')
        {
           categoryLabel.classList.add('daily-todo')
        }

    const prioritySel = document.getElementById("priority-select");
        if(prioritySel.value === '1')
        {
            alert('Please choose task priority.');
            return;
        }
        /* Tab ! prioritySel.value = this.value
        switch(this.value)
        case 1:
            alert
            return;
        case 2: 
            tab에 맞게 append 차일드 하고, 이외의 탭은 hidden state
            */

    //append todo checkbox and input to list
    const contents = document.createElement('div');
    contents.classList.add('chk-contents')
    contents.appendChild(doneBtn);
    contents.appendChild(newTodo); //li가 div에 붙어있게 하기
    todoDiv.appendChild(contents);

    //append Labels to list
    const labels = document.createElement('div');
    labels.classList.add('labels');
    todoDiv.appendChild(labels);
    labels.appendChild(categoryLabel);
    todoList.appendChild(todoDiv);
    //Clear input area
    todoInput.value ="";
}

// Edit mode and Delete mode. input.donechk {appearance:none;}으로 만들거나 removeChild(doneBtn)를 사용해 checkbox를 리스트에서 지워준다. 대신 그 자리에 edit acitvation icon을 넣어준다. 

function toggleEdit(){
    editMode.classList.toggle('done');
    editMode.value = "done";
    editMode.addEventListener('click',()=>{  // edit mode를 껐다 키는 법을 잘 모르겠다.
        editMode.removeAttribute("done");
        editMode.value="edit";
    })
}

function toggleDel(){
    delMode.classList.toggle('done');
    delMode.textContent="Done";
}
