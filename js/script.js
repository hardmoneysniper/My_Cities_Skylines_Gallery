let form = document.querySelector('.form_content');

function addRequiredFields() {
    document.getElementById('name').setAttribute('required', true);
    document.getElementById('nameRequired').style.display = 'inline';

    document.getElementById('email').setAttribute('required', true);
    document.getElementById('emailRequired').style.display = 'inline';

    // document.getElementById('message').setAttribute('required', true);
    // document.getElementById('messageRequired').style.display = 'inline';
}

form.addEventListener('submit', function(event) {
    addRequiredFields();

    if (!form.checkValidity()) {
        event.preventDefault();
        window.alert("Please fill out all the mendatory fields!")
    }
});
