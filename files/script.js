// Function to animate text with kinetic typography
function animateKineticTypography(element, strings) {
  let index = 0;
  let currentString = '';
  
  // Function to update text with animation
  function updateText() {
      element.innerHTML = currentString;
  }

  // Animate text based on user interactions or external events
  // For example, you could use mouse movements, clicks, or even data from APIs
  function animate() {
      // Example: React to mouse movement
      element.addEventListener('mousemove', function(event) {
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          const fontSize = Math.abs((mouseX - window.innerWidth / 2) / 20) + 10; // Adjust font size based on mouse position
          currentString = `<span style="font-size: ${fontSize}px;">${strings[index]}</span>`;
          updateText();
      });

      // Example: Loop through strings with fading effect
      setInterval(() => {
          element.style.transition = 'opacity 1s ease-in-out'; // Add fade effect
          element.style.opacity = 0; // Fade out
          setTimeout(() => {
              currentString = strings[index];
              index = (index + 1) % strings.length;
              updateText();
              element.style.transition = 'opacity 1s ease-in-out'; // Reset transition
              element.style.opacity = 1; // Fade in
          }, 1000); // Change 1000 to adjust the speed of string changes
      }, 4000); // Change 4000 to adjust the overall speed
  }

  animate(); // Start animation
}
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute('href'); // Get the href attribute value
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scrolling effect
                });
            }
        });
    });
});

// Usage example
const textElement = document.querySelector(".text");
const strings = ["Explore", "Create", "Inspire", "Imagine", "Dream"]; // Add more creative strings
animateKineticTypography(textElement, strings);

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
document.addEventListener("DOMContentLoaded", function() {
    function isPhoneView() {
        return window.innerWidth <= 768; // Assuming screen width <= 768 pixels represents a phone view
    }
    var vantaInstance = null;
  var setVanta = () => {
    if (!isPhoneView()) {
      if (window.VANTA  && !vantaInstance) {
         vantaInstance= window.VANTA.WAVES({
              el: ".pj",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 46.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
    }
    else{
        if (vantaInstance) {
            vantaInstance.destroy(); // Destroy Vanta instance if it exists
            vantaInstance = null; // Reset Vanta instance variable
        }
    }
  };

  setVanta();
});
document.addEventListener("DOMContentLoaded", function() {
    function isPhoneView() {
        return window.innerWidth <= 768; // Assuming screen width <= 768 pixels represents a phone view
    }
  var setVanta = () => {
    if (!isPhoneView()) {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".about",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 46.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
    }
  };

  setVanta();
});

document.addEventListener("DOMContentLoaded", function() {
    function isPhoneView() {
        return window.innerWidth <= 768; // Assuming screen width <= 768 pixels represents a phone view
    }
  var setVanta = () => {
    if (!isPhoneView()) {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".home",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 46.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
    }
  };

  setVanta();
});

document.addEventListener("DOMContentLoaded", function() {
    function isPhoneView() {
        return window.innerWidth <=768; // Assuming screen width <= 768 pixels represents a phone view
    }
  var setVanta = () => {
    if (!isPhoneView()) {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".pp",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 46.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
    }
  };

  setVanta();
});
document.addEventListener("DOMContentLoaded", function() {
    function isPhoneView() {
        return window.innerWidth <= 768; // Assuming screen width <= 768 pixels represents a phone view
    }
  var setVanta = () => {
    if (!isPhoneView()) {
      if (window.VANTA) {
          window.VANTA.WAVES({
              el: ".background",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x0,
              shininess: 46.00,
              waveHeight: 40.00,
              waveSpeed: 0.50
          });
      }
    }
  };

  setVanta();
});

  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Phone: " + phone + "\n";
    body += "Subject: " + subject + "\n\n";
    body += "Message: " + message;

    window.location.href = "mailto:jaindevansh16@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }