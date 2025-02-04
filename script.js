const leftEyeball = document.getElementById("left-eyeball");
const rightEyeball = document.getElementById("right-eyeball");
let password = document.getElementById("password")
let leftHandHide = document.querySelector(".left-handhide"); // Or use getElementById if it has an ID
let rightHandHide = document.querySelector(".right-handhide"); // Or use getElementById if it has an ID
let submit = document.getElementById("submit");
let mouth = document.getElementById("mouth")
let email = document.getElementById("email")
let lefthand = document.getElementById("left-hand")
let righthand = document.getElementById("right-hand")

document.addEventListener("mousemove", (e) => {
  const eyes = [leftEyeball, rightEyeball];

  eyes.forEach((eye) => {
    const eyeContainer = eye.parentElement.getBoundingClientRect();
    const eyeCenterX = eyeContainer.left + eyeContainer.width / 2;
    const eyeCenterY = eyeContainer.top + eyeContainer.height / 2;

    // Get angle and distance between mouse and center of the eye
    const dx = e.pageX - eyeCenterX;
    const dy = e.pageY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    // Limit movement to within the circular boundary of the eye
    const maxMovement = (eyeContainer.width / 2) - (eye.offsetWidth / 2); // Stay within the eye radius
    const distance = Math.min(maxMovement, Math.sqrt(dx * dx + dy * dy));

    // Calculate new position of the eyeball
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});




password.addEventListener("click", function() {
    leftHandHide.classList.add("left-hand-hide-active"); // Add a class when password is clicked
    rightHandHide.classList.add("right-hand-hide-active"); // Add a class when password is clicked
    lefthand.classList.remove("left-hand")
    righthand.classList.remove("right-hand")
});

if (submit) {
  submit.addEventListener("click", function () {
    leftHandHide?.classList.remove("left-hand-hide-active"); 
    rightHandHide?.classList.remove("right-hand-hide-active");
    mouth.classList.add("mouth-smile")
    mouth.classList.remove("mouth")
    lefthand.classList.add("left-hand")
    righthand.classList.add("right-hand")
  });
}
if (email) {
  email.addEventListener("click", function () {
    leftHandHide?.classList.remove("left-hand-hide-active"); 
    rightHandHide?.classList.remove("right-hand-hide-active");
    mouth.classList.remove("mouth-smile")
    mouth.classList.add("mouth")
    lefthand.classList.add("left-hand")
    righthand.classList.add("right-hand")
  });
}
