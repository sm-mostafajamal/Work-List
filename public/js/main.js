
const deleteBtn = document.querySelectorAll('.deleteBtn');

Array.from(deleteBtn).forEach(el =>{
    el.addEventListener('click', deleteItem);
})

async function deleteItem(){
    const task = this.parentNode.parentElement.dataset.id
    try {
        const response = await fetch('/workLists/deleteTask', {
            method: 'delete',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'taskId' : task
            })
        });
        const data = await response.json()
        console.log(data);
        location.reload();

    } catch (e) {
        console.error(e)
    };
};