document.addEventListener('DOMContentLoaded', function() {
    let rand, canvasPosition, canvasTop, canvasLeft;

    let arr = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png',
    'img/5.png', 'img/6.png', 'img/7.png',
    'img/8.png', 'img/9.png'];

    let arr_small =  ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png',
        'img/5.png', 'img/6.png', 'img/7.png',
        'img/8.png', 'img/9.png'];

    document.querySelector('.move_block').addEventListener('mousemove', function(e) {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 100) {
            rand = Math.floor(Math.random() * arr_small.length);
            element = arr_small[rand];
        } else {
            rand = Math.floor(Math.random() * arr.length);
            element = arr[rand];
        }

        canvasPosition = this.getBoundingClientRect();
        canvasTop = canvasPosition.top;
        canvasLeft = canvasPosition.left;

        let img = document.createElement('img');
        img.src = element;
        img.style.left = (e.clientX - canvasLeft) + 'px';
        img.style.top = (e.clientY - canvasTop) + 'px';
        img.style.position = 'absolute';
        img.style.width = '100px';  
        img.style.height = '100px'; 

        this.appendChild(img);

        setTimeout(function() {
            img.style.opacity = 0;
        }, 500);

        setTimeout(function() {
            img.remove();
        }, 10000);
    });
});
