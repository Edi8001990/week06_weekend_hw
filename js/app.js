document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('.my_form');
    newItemForm.addEventListener('submit', handleNewItemForSubmit);


    const removeAllInputsButton = document.querySelector('.remove-button');
    removeAllInputsButton.addEventListener('click', selectAllInputsToRemove);
});

const handleNewItemForSubmit = function(event) {
    event.preventDefault();

    const readingListItem = createReadingListItem(event.target);
    const readingList = document.querySelector('.new-input');
    readingList.appendChild(readingListItem);

    event.target.reset();
}


const createReadingListItem = function(form) {

      const readingListItem = document.createElement('p');
      readingListItem.classList.add('#paragraph');

      const name = document.createElement('p');
      name.textContent = form.name.value;
      readingListItem.appendChild(name);

      const lastName = document.createElement('p');
      lastName.textContent = form.last_name.value;
      readingListItem.appendChild(lastName);

      const gender = document.createElement('p');
      gender.textContent = form.gender.value;
      readingListItem.appendChild(gender);



      // const educationStatusEducated = document.createElement('p')
      // educationStatusEducated.textContent = form.educated.value;
      // readingListItem.appendChild(educationStatusEducated);
      //
      // const educationStatusNonEducated = document.createElement('p')
      // educationStatusNonEducated.textContent = form.non_educated.value;
      // readingListItem.appendChild(educationStatusNonEducated);

      return readingListItem;
}


const selectAllInputsToRemove = function(event){
  const readingList = document.querySelector('.new-input');
  readingList.innerHTML = '';
}
