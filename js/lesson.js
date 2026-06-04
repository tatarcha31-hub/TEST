const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regex = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
    if (regex.test(phoneInput.value)){
        phoneResult.style.color = "green";
        phoneResult.innerHTML = "VALID PHONE"
    }
    else{
        phoneResult.style.color = "red";
        phoneResult.innerHTML = "PHONE IS NOT VALID"
    }
}


const tabsParent = document.querySelector('.tab_content_items');
const tabBtns = document.querySelectorAll('.tab_content_item');
const tabBlocks = document.querySelectorAll('.tab_content_block');

const selectTab = (index = 0) => {
tabBlocks.forEach((block, i) => block.classList.toggle('active', index == i));
tabBtns.forEach((btn, i) => btn.classList.toggle('active', index === i))
}
tabsParent.onclick = (event) => {
    const selected = event.target.closest('.tab_content_item')
    if(!selected) return;
    const selectedIndex = [...tabBtns].indexOf(selected);
    curuentIndex = selectedIndex
    selectTab(curuentIndex);
}


let curuentIndex = 0;
setInterval(() => {
    curuentIndex ++;
    if(curuentIndex >= tabBlocks.length){
        curuentIndex = 0;
    }
    selectTab(curuentIndex);
}, 3000);