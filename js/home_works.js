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
x = 0;
y = 0;
direction = "right";
function animate () {
    if (direction === 'right') { x++ };
    if (direction === 'down') { y++ };
    if (direction === "left") { x-- };
    if (direction === "up") { y-- };

    if ( direction === 'right' &&  x >= 449 ){ direction = "down" }
    else if ( direction === 'down' &&  y >= 449 ){ direction = "left" }
    else if ( direction === 'left' && x <= 0){ direction = "up" }
    else if ( direction === 'up' && x <= 0 ){ direction = "right" };

    childBlock.style.left = x + "px";
    childBlock.style.top = y + "px"; 
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);