function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1/')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data));
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}

function displayUser(data){
    console.log(data);
}