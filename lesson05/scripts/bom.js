// const input = document.querySelector("#favchap")
// const button = document.querySelector('button');
// const list = document.querySelector("#list");

//  button.addEventListener('click', () => {
    
//     // check to make sure the input is not blank
//     if (input.value != '') {

//     // create a li element
//     const li = document.createElement('li');

//     // create delete button
//     const deleteButton = document.createElement('button');

//     // populate the li elements with the input value
//     li.textContent = input.value;

//     // populate the button textContent with a X
//     deleteButton.textContent = '❌';

//     // append the li element with the delete button
//     li.append(deleteButton);

//     // append the li element to the unordered list in the HTML
//     list.append(li);

//     // add event listener to the delete button that removes the li element when clicked
//     deleteButton.addEventListener('click', () => {
//         list.removeChild(li);
//         input.focus();

//     // send the focus to the input element
//     input.focus();  
//     });



//     // change the input value to nothing or the empty string to clean the UI
//     input.value = '';
//  });

const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list"); // Fixed querySelector typo

button.addEventListener('click', () => {
    
    // Check to make sure the input is not blank
    if (input.value != '') {

        // Create an li element
        const li = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');

        // Populate the li element with the input value
        li.textContent = input.value;

        // Populate the button textContent with an X
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        deleteButton.classList.add('delete');

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list in the HTML
        list.append(li);

        // Add event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field
        input.value = '';

        // Send focus back to the input element
        input.focus();
    }
    else {
        alert('Please enter a book and chapter.');
        input.focus();
    }
});
