
const form = document.getElementById('personalForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const country = document.getElementById('country').value;
  const city = document.getElementById('city').value;

  const personalInfo = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    country: country,
    city: city
  };

  localStorage.setItem('personalInfo', JSON.stringify(personalInfo));

  form.reset();

  alert('Personal information saved!');
});
