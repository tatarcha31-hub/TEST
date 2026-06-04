const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#btn-get');
const closeBtn = document.querySelector('.modal_close');

const showModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
modal.addEventListener('click', (event) => {
    if(event.target == modal){
        closeModal();
    }
})
openBtn.onclick = showModal;
closeBtn.onclick = closeModal;

function showModalByScrol () {
       if(
        window.scrollY + window.innerHeight >= 
        document.documentElement.scrollHeight
    ){
        modal.style.display = 'block'
        window.removeEventListener('scroll', showModalByScrol);
    } 
}
window.addEventListener('scroll', showModalByScrol);

setTimeout(() => {
    showModal()    
}, 10000);