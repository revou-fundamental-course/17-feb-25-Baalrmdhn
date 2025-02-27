document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let interest = document.getElementById("interest").value;

    if (name && email && interest !== "Select option") {
        document.getElementById("responseMessage").innerText = "Thank you! We will contact you soon.";
        this.reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields correctly.";
    }
});
