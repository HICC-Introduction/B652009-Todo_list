//Selectors
const todoInput=document.querySelector('.todo-input'); //변수 todoInput은 Input form을 가리킨다.
const addButton=document.querySelector('.add-btn'); //변수 addButton은 Input form 내부의 add버튼을 가리킨다.
const todoList=document.querySelector('.todo-list'); //변수 todoList는 addButton click 이후에 생성될 todo-list의 부모인 <ul>tag를 가리킨다.

//EventListners
addButton.addEventListener('click',addTodo);

//Functions
function addTodo(event){
    event.preventDefault(); //prevent refresh
    console.log('hello');
    
    //create todo <div> with class"todo" under <ul> todo-list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create Checkmark button
    const doneBtn = document.createElement('input');
    doneBtn.classList.add('done_chk');
    doneBtn.type ="button"
    doneBtn.value="Check"
    todoDiv.appendChild(doneBtn);
    //create <li> with class "todo-item" under <div> todo
    const newTodo = document.createElement('li');
    newTodo.innerText='input text';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //li가 div에 붙어있게 하기
    //create <filter>
    const categoryLabel = document.createElement('span');  //html에서 category-select option으로 받은 값 가져와야 함
    categoryLabel.classList.add('category-item');
    categoryLabel.innerText ="selected Category";
    todoDiv.appendChild(categoryLabel);

    //append to list
    todoList.appendChild(todoDiv);
}