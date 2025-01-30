// const div=document.createElement('div');
// div.innerHTML='Hello World';
function Click(event){
    event.preventDefault();
    const text=document.getElementById('max').value;
    const div=document.createElement('div');
    div.innerHTML=text;
    document.body.append(div);
    
}

document.getElementById('myButton').addEventListener('click', Click);