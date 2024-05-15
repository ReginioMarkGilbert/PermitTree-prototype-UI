document.getElementById('applyBtn').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
});

// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // You can add form submission logic here
//     alert('Form submitted');
// });

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Hide the previous page(s)
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';

    // Show the submission message box
    document.getElementById('submissionMessageBox').style.display = 'flex';
});