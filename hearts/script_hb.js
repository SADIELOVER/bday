// Heart animation on mouse move
document.addEventListener('mousemove', (e) => {
  const body = document.querySelector('body');
  const heart = document.createElement('span');
  heart.classList.add('heart-shadow'); // Add shadow

  // Set heart's position
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;

  // Set random size
  const size = Math.random() * 30 + 10; // Size between 10px and 40px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  // Set random fade animation duration
  heart.style.animationDuration = `${Math.random() * 0.2 + 0.9}s`; // Between 1.5s and 2.5s

  // Append heart to the body
  body.appendChild(heart);

  // Remove heart after animation finishes
  setTimeout(() => heart.remove(), 1300); // Slightly longer removal for smoother fade
});

// Overlay image click event
const overlayImg = document.getElementById('overlay-img');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');

overlayImg.addEventListener('click', () => {
  // Hide msg1
  msg1.style.display = 'none';

  // Show msg2
  msg2.style.display = 'block';
});

// Head link click event
const headLinks = document.getElementsByClassName('head-link');
const msg11 = document.querySelector('.msg1');
const msg21 = document.querySelector('.msg2');

Array.prototype.forEach.call(headLinks, (headLink) => {
  headLink.addEventListener('click', () => {
    // Hide msg1
    msg11.style.display = 'none';

    // Show msg2
    msg21.style.display = 'block';
  });
});

// Typewriter function
const overlayImg2 = document.getElementById('overlay-img');
const msg12 = document.querySelector('.msg1');
const msg22 = document.querySelector('.msg2');
const bdayTextElement = document.getElementById('bday-text');
const timerElement = document.getElementById('timer');
const timerHead = document.querySelector('.timer-head'); // Timer head element

// Define the birthday message and typing speed
const bdayText = `

    "Happy birthday to the most beautiful person!"
    "Wishing you a day filled with love and laughter."
    "May this year bring you unparalleled joy."

    "You taught me to cherish life's little moments."
    "May your day be as bright as your smile."
    "Wishing you a lifetime of happiness."

    "Sending all the love, positivity, and best wishes."
`;

let index = 0;
const speed = 100; // Typing speed in milliseconds

function typeWriter() {
    if (index < bdayText.length) {
        document.getElementById("bday-text").innerHTML += bdayText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        // After typewriter effect, show the timer head and timer after a 2-second delay
        setTimeout(showTimerHead, 2000);
    }
}

function showTimerHead() {
    timerHead.style.display = 'block'; // Show the timer heading

    // Call the function to start the countdown timer
    showTimer();
}

// Timer function
function showTimer() {
    // Set the target date (e.g., September 28, 2006)
    const targetDate = new Date("2006-09-28T00:00:00").getTime();

    // Update the timer every second
    const timer = setInterval(function() {
        const now = new Date().getTime();

        // Calculate the time difference between now and the target date
        const timeDifference = now - targetDate;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the result in the timer element
        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
}

// Add an event listener to the overlay image
overlayImg2.addEventListener('click', () => {
    // Hide msg1
    msg12.style.display = 'none';
    
    // Wait for 2 seconds, then show msg2
    setTimeout(() => {
        msg22.style.display = 'block';
        
        // Wait for another 2 seconds, then start the typewriter function
        setTimeout(() => {
            typeWriter();
        }, 2000);
    }, 2000);
});

// Get the audio element
const audio = document.getElementById('birthday-audio');

// Get the overlay image element
const overlayImg3 = document.getElementById('overlay-img');

// Add an event listener to play the audio when the overlay image is clicked
overlayImg.addEventListener('click', () => {
    audio.play();
});