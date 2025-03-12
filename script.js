class DVDLogo {
    constructor(container, src, bounceSound, cornerSound) {
        this.container = container;
        this.img = document.createElement('img');
        this.img.src = src;
        this.img.className = 'dvd-logo';
        this.container.appendChild(this.img);
        this.bounceSound = bounceSound;
        this.cornerSound = cornerSound;

        this.x = Math.random() * (window.innerWidth - this.img.clientWidth);
        this.y = Math.random() * (window.innerHeight - this.img.clientHeight);
        this.dx = 2;
        this.dy = 2;

        this.updatePosition();
    }

    updatePosition() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x <= 0 || this.x >= window.innerWidth - this.img.clientWidth) {
            this.dx = -this.dx;
            this.bounceSound.play();
            if (this.x <= 0 || this.x >= window.innerWidth - this.img.clientWidth) {
                this.cornerAction();
            }
        }

        if (this.y <= 0 || this.y >= window.innerHeight - this.img.clientHeight) {
            this.dy = -this.dy;
            this.bounceSound.play();
            if (this.y <= 0 || this.y >= window.innerHeight - this.img.clientHeight) {
                this.cornerAction();
            }
        }

        this.img.style.left = `${this.x}px`;
        this.img.style.top = `${this.y}px`;
        requestAnimationFrame(this.updatePosition.bind(this));
    }

    cornerAction() {
        this.cornerSound.play();
        new DVDLogo(this.container, this.img.src, this.bounceSound, this.cornerSound);
    }
}

const container = document.getElementById('dvd-container');
const bounceSound = document.getElementById('bounce-sound');
const cornerSound = document.getElementById('corner-sound');

new DVDLogo(container, 'dvd_logo.png', bounceSound, cornerSound);
