const numButtons = document.querySelectorAll('.num-btn');

const output = document.getElementById('output');
const status = document.getElementById('status');

const expectedSequence = '280124';
let inputSequence = '';
const maxLength = 6;

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim(); 
        
        if (inputSequence.length < maxLength) {
            inputSequence += value;
            output.textContent = inputSequence;
        }
    });
});

document.getElementById('#').addEventListener('click', () => {
    if (inputSequence === expectedSequence) {
        status.textContent = 'ถูกต้องเก่งมากเลย ต้องเป็นแฟนเค้าแน่แน่~~';
        status.style.color = 'lightgreen';

        setTimeout(() => {
            window.location.href = '/page-2'
        },2000)
    } else {
        status.textContent = 'ผิดจร้าา ตัวปลอมแน่แน่!!';
        status.style.color = 'red';

        setTimeout(() => {
            window.location.href = 'https://www.google.com';
        }, 1000);
    } 
});

document.getElementById('*').addEventListener('click', () => {
    inputSequence = '';
    output.textContent = 'Your Pass Code'; 
    status.textContent = 'True or False';
    status.style.color = ''
});