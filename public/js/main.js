
const deleteBtn = document.querySelectorAll('.deleteBtn');
const completedTask = document.querySelectorAll('.uncompleted');
const unCompletedTask = document.querySelectorAll('.completed');



Array.from(deleteBtn).forEach(el =>{
    el.addEventListener('click', deleteItem);
})
Array.from(completedTask).forEach(el =>{
    el.addEventListener('click', completedTasks);
})
Array.from(unCompletedTask).forEach(el =>{
    el.addEventListener('click', unCompletedTasks);
})
async function deleteItem(){
    const taskId = this.parentNode.parentElement.dataset.id
    try {
        const response = await fetch('/workLists/deleteTask', {
            method: 'delete',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'taskId' : taskId
            })
        });
        const data = await response.json()
        console.log(data);
        location.reload();

    } catch (e) {
        console.error(e)
    };
};

async function completedTasks(){
    const taskId = this.parentNode.parentElement.dataset.id

    try {
        const response = await fetch('/workLists/completedTask', {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'taskId' : taskId
            })
        });
        const data = await response.json()
        console.log(data);
        location.reload();

    } catch (e) {
        console.error(e)
    };
};

async function unCompletedTasks(){
    const taskId = this.parentNode.parentElement.dataset.id

    try {
        const response = await fetch('/workLists/unCompletedTask', {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'taskId' : taskId
            })
        });
        const data = await response.json()
        console.log(data);
        location.reload();

    } catch (e) {
        console.error(e)
    };
};