const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function() {
  // Code to execute when the button is clicked
    if (input.value.trim() != '') {
        // creates both the section for text and delete button
        const li = document.createElement('li');
        li.textContent = input.value;
        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    }
});
