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

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');
const errorText = document.querySelector('#error');
const cnyInput = document.querySelector('#cny');
const rubInput = document.querySelector('#rub');
const kgzInput = document.querySelector('#kgz');

const getRates = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '../data/converter.json');
    request.send();

    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            const data = JSON.parse(request.response);
            const usdRate = data.usd;
            const eurRate = data.euro;
            const rubRate = data.rub;
            const cnyRate = data.cny;
            const kgzRate = data.kgz;

            somInput.oninput = () => {
                if (somInput.value === '') {
                    usdInput.value = '';
                    eurInput.value = '';
                    cnyInput.value = '';
                    rubInput.value = '';
                    kgzInput.value = '';
                    return;
                }

                usdInput.value = (somInput.value / usdRate).toFixed(2);
                eurInput.value = (somInput.value / eurRate).toFixed(2);
                cnyInput.value = (somInput.value / cnyRate).toFixed(2);
                rubInput.value = (somInput.value / rubRate).toFixed(2);
                kgzInput.value = (somInput.value / kgzRate).toFixed(2);
            };

            usdInput.oninput = () => {
                if (usdInput.value === '') {
                    somInput.value = '';
                    eurInput.value = '';
                    cnyInput.value = '';
                    rubInput.value = '';
                    kgzInput.value = '';
                    return;
                }

                const som = usdInput.value * usdRate;
                somInput.value = som.toFixed(2);
                eurInput.value = (som / eurRate).toFixed(2);
                rubInput.value = (som / rubRate).toFixed(2);
                cnyInput.value = (som / cnyRate).toFixed(2);
                kgzInput.value = (som / kgzRate).toFixed(2);
            };

            eurInput.oninput = () => {
                if (eurInput.value === '') {
                    somInput.value = '';
                    usdInput.value = '';
                    cnyInput.value = '';
                    rubInput.value = '';
                    kgzInput.value = '';
                    return;
                }

                const som = eurInput.value * eurRate;
                somInput.value = som.toFixed(2);
                usdInput.value = (som / usdRate).toFixed(2);
                rubInput.value = (som / rubRate).toFixed(2);
                cnyInput.value = (som / cnyRate).toFixed(2);
                kgzInput.value = (som / kgzRate).toFixed(2);
            };

            rubInput.oninput = () => {
                if (rubInput.value === ''){
                    somInput.value = '';
                    usdInput.value = '';
                    eurInput.value = '';
                    rubInput.value = '';
                    cnyInput.value = '';
                    kgzInput.value = '';
                    return;
                }

                const som = rubInput.value * rubRate;
                somInput.value = som.toFixed(2);
                usdInput.value = (som / usdRate).toFixed(2);
                eurInput.value = (som / eurRate).toFixed(2);
                cnyInput.value = (som / cnyRate).toFixed(2);
                kgzInput.value = (som / kgzRate).toFixed(2);
            };
            
            cnyInput.oninput = () => {
                if (cnyInput.value === ''){
                    somInput.value = '';
                    usdInput.value = '';
                    eurInput.value = '';
                    rubInput.value = '';
                    kgzInput.value = '';
                    cnyInput.value = '';
                    return;
                }

                const som = cnyInput.value * cnyRate;
                somInput.value = som.toFixed(2);
                usdInput.value = (som / usdRate).toFixed(2);
                eurInput.value = (som / eurRate).toFixed(2);
                rubInput.value = (som / rubRate).toFixed(2);
                kgzInput.value = (som / kgzRate).toFixed(2);
            };

            kgzInput.oninput = () => {
                if(kgzInput.value === ''){
                    somInput.value = '';
                    usdInput.value = '';
                    eurInput.value = '';
                    cnyInput.value = '';
                    rubInput.value = '';
                    kgzInput.value = '';
                    return; 
                }

                const som = kgzInput.value * kgzRate;
                somInput.value = som.toFixed(2);
                usdInput.value = ( som / usdRate).toFixed(2);
                eurInput.value = (som / eurRate).toFixed(2);
                cnyInput.value = (som / cnyRate).toFixed(2);
                rubInput.value = (som / rubRate).toFixed(2);
            };

        } else {
            errorText.style.color = "red";
            errorText.textContent = "Произошла ошибка на сервере";
        }
    };

    request.onerror = () => {
        errorText.style.color = "red";
        errorText.textContent = "Ошибка соединения";
    };
};

getRates();

