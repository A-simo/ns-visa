let chatModal = document.getElementById('chat_modal');
let visaModal = document.getElementById('visa_modal');
let requestModal = document.getElementById('request_modal');
let modalCloseIcon = document.querySelectorAll('.modal_close_icon');
let modalClose = document.querySelectorAll('.modal_close_button');
const body = document.body;

function openModal(e, type) {
    document.getElementById(`${type}`).style.display = 'flex';
    body.classList.add('disable_scroll');
}

function closeModal() {
    body.classList.remove('disable_scroll');
    chatModal.style.display = 'none';
    visaModal.style.display = 'none';
    requestModal.style.display = 'none'
}

for (i in modalCloseIcon) {
    modalCloseIcon[i].onclick = closeModal;
}

for (i in modalClose) {
    modalClose[i].onclick = closeModal;
}
// chatCloseIcon.onclick = closeModal;

window.onclick = (event) => {
    if (event.target === chatModal || event.target === visaModal || event.target === requestModal ) {
        closeModal()
    }
}

function openTab(e, continent) {
    let i, tabContent, tabBtn;
    tabContent = document.getElementsByClassName('tab_content');
    for (i=0; i <tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabBtn = document.getElementsByClassName('tabs_btn');
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(' active_tab', '')
    }

    document.getElementById(continent).style.display = "flex";
    e.currentTarget.className += " active_tab"
}