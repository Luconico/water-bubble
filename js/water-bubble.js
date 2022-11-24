const wrapper = document.getElementById('water-bubble-wrapper');

const moveWaterBubble = (x) => {
    const bubble = document.createElement('div');

    bubble.classList.add('water-bubble');
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => {
        wrapper.removeChild(bubble);
    }, 2000);
}

window.onmousemove = (e) => {
    moveWaterBubble(e.clientX);
}