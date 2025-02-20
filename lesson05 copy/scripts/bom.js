const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list"); 

let chaptersArray = getChapterList() || [];
// array declaration initializes the chaptersArray variable with the list of chapters returned by the GetChapter:ist() function OR an empty array if the function call returns null or undefined

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList (item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    // using item instead of input since that is our displayList parameter
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); 
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        // this function is needed to remove teh chapter from the array and localStorage
        list.removeChild(li);
        deleteChapter(li.textContent); 
        input.focus();
    });
}

function setChapterList () {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList () {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    // slice off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    // return everything except the chapter being removed
    setChapterList();
}

// OG code for the button click function!
// button.addEventListener('click', () => {
    
//     // Check to make sure the input is not blank
//     if (input.value != '') {

//         // Create an li element
//         const li = document.createElement('li');

//         // Create delete button
//         const deleteButton = document.createElement('button');

//         // Populate the li element with the input value
//         li.textContent = input.value;

//         // Populate the button textContent with an X
//         deleteButton.textContent = '❌';
//         deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
//         deleteButton.classList.add('delete');

//         // Append the delete button to the li element
//         li.append(deleteButton);

//         // Append the li element to the unordered list in the HTML
//         list.append(li);

//         // Add event listener to the delete button that removes the li element when clicked
//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li);
//             input.focus();
//         });

//         // Clear the input field
//         input.value = '';

//         // Send focus back to the input element
//         input.focus();
//     }
//     else {
//         alert('Please enter a book and chapter.');
//         input.focus();
//     }
// });




