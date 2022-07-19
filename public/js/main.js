const deleteBtn = document.querySelectorAll('.deleteBtn');
const updateTaskText = document.querySelectorAll('.task-lists .taskText');

// console.log(updateTaskText)
Array.from(deleteBtn).forEach(el => {
    el.addEventListener('click', deleteTask)
})

Array.from(updateTaskText).forEach(el => {
    el.addEventListener('click', updateTask)
})

async function deleteTask(){
    const task = this.parentNode.childNodes[1].innerText;
    
    try {
        const response = await fetch('/deleteTaskAPI', {
            method : 'delete',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({ 'selTask' : task })
        });
        
        const data = response.json();
        console.log(data);
        location.reload();
    } catch (error) {
        console.error(error);
    };
};  

async function updateTask(){
    const task = this.innerText;
    const completion = this.classList[1]
    if(completion == 'completed'){
        try {
            const response = await fetch('/unmarkAPI', {
                method : 'put',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({ 
                    'completedTask' : task
                })
            });
        
            const data = response.json();
            console.log(data);
            location.reload();
        } catch (error) {
            console.error(error);
        };
    }else{
        try {
            const response = await fetch('/completedAPI', {
                method : 'put',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({ 
                    'completedTask' : task
                })
            });
        
            const data = response.json();
            console.log(data);
            location.reload();
        } catch (error) {
            console.error(error);
        };
    }
    
};  