
    const todoList=[{
       name:  'make dinner',
      dueDate: '2023-12-24'
    },{
      name:'wash dishes',
      dueDate:'2023-12-24'
    }];

    renderTodoList();

    function renderTodoList(){

    let todoListHTML='';

    for(let i=0; i< todoList.length; i++){
        const todoObeject=todoList[i];

        //const name=todoObeject.name;
        //const dueDate=todoObeject.dueDate;

        const{ name, dueDate}=todoObeject

        const html=`
        <div>${name}  </div> 
        <div> ${dueDate} </div>

        <button onclick=" todoList.splice( ${i}, 1); renderTodoList()" class="delete-button"> Delete </button>

        `;
        
        todoListHTML+=html;
    }


    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
    }   


    function addTodo(){
    const inputElement= document.querySelector('.js-name-input')
    const name= inputElement.value

    const dateInputElement=document.querySelector('.js-due-date-input');

        const dueDate=dateInputElement.value


    todoList.push({
        //name : name,
        //dueDate: dueDate  
        name,
        dueDate
    });

    

    inputElement.value='';

    renderTodoList();

    }
    