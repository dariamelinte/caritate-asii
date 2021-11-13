//Get the elements
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

const ModalHeader = document.getElementsByClassName('modal-header')[0];
const ModalBody = document.getElementsByClassName('modal-body')[0];


//Making the click events
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);
for(let elem of elements) {
    elem.addEventListener('click',elementClick);
}

//Opens the modal
function openModal(id) {
    const department = departments?.find(department => department.id === String(id)) || {};

    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    ModalHeader.innerHTML = `<div class="bold-text modal-header-content">${department.name}</div>`;

    ModalBody.innerHTML = `
        <div class="modal-body-content">
            ${department.description}
        </div>
    `;
}

//Closes the modal
function closeModal() {
    modal.style.display = "none";
}

//Closes the modal if clicked outside of it
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}