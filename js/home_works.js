const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regex = /^[a-zA-Z0-9.+_-]+@gmail\.com$/

gmailButton.onclick = () => {
    if(regex.test(gmailInput.value)){
        gmailResult.style.color = "green";
        gmailResult.innerHTML = "VALID GMAIL";
    } else{
        gmailResult.style.color = "red";
        gmailResult.innerHTML = "GMAIL IS NOT VALID"; 
    }
}


const childBlock = document.querySelector('.child_block');

let x = 0;
let y = 0;
let direction = "right";

function animate() {

    if (direction === 'right') x++;
    else if (direction === 'down') y++;
    else if (direction === 'left') x--;
    else if (direction === 'up') y--;

    if (direction === 'right' && x >= 449) {
        x = 449;
        direction = "down";
    }
    else if (direction === 'down' && y >= 449) {
        y = 449;
        direction = "left";
    }
    else if (direction === 'left' && x <= 0) {
        x = 0;
        direction = "up";
    }
    else if (direction === 'up' && y <= 0) {
        y = 0;
        direction = "right";
    }

    childBlock.style.left = x + "px";
    childBlock.style.top = y + "px";

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const secondsEl = document.querySelector('#seconds');

let second = 0;
let timer = null;

startBtn.addEventListener('click', () => {
    if (timer) return
    timer = setInterval(() => {
        second++;
        secondsEl.textContent = second;
    }, 1000);
});
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    second = 0;
    secondsEl.textContent = second;
})

const xhr = new XMLHttpRequest();

xhr.open("GET", "../data/bio.json");

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log("Ошибка загрузки:", xhr.status);
    return;
  }

  const data = JSON.parse(xhr.responseText);
  console.log(data);
};

xhr.onerror = function () {
  console.log("Сетевая ошибка");
};

xhr.send();

async function getArrayGraplingChampion() {
    try{
        const response = await fetch('../data/characters.json');

        if (!response.ok){
            throw new Error("Ошибка сервера");
        }

        const users = await response.json();

        const list = document.querySelector('.characters-list');

        users.forEach((element, index) => {
            const card = document.createElement('div');
            card.classList.add('character-card')
            card.innerHTML = `<div class="character-photo">
                              <img src="${element.photo}" alt="${element.name}"></img>
                              </div>
                              <h3>${element.name}</h3>
                              <h3>${element.age}</h3>`

            list.append(card);
        });

    } catch (error) {
        console.log(error);
    }
}
getArrayGraplingChampion();