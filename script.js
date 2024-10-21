
const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const colors = ['#e71324', '#e61294', '#161a17c4', '#0056b3', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
