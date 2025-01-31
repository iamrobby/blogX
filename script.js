function Click(event){
    event.preventDefault();
    const text = document.getElementById('max').value;
    const div = document.createElement('div');
    div.innerHTML = text;

    // Get the current date and time
    const currentDate = new Date();
    const dateDiv = document.createElement('div');
    dateDiv.innerText = currentDate.toString();

    // Append the date to the post div
    div.appendChild(dateDiv);

    // Append the post div to the body
    document.body.append(div);
}

// Add event listener to the button
document.getElementById('myButton').addEventListener('click', Click);