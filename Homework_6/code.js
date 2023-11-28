window.onload = function() {

    const myButton = document.querySelector('#btn');

    myButton.addEventListener('click', () => {
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let email = document.getElementById("email").value;

      console.log(`First Name: ${firstName}`);
      console.log(`Last Name:  ${lastName}`);
      console.log(`Email: ${email}`);
      console.error(`Critical security error do not print out passwords`);
    });
}