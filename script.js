document.getElementById('applyBtn').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'flex';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Hide the previous pages 
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';

    // Show the submission message box
    document.getElementById('message-container').style.display = 'flex';
});

document.getElementById('viewStatusBtn').addEventListener('click', function() {
    // Hide the message container
    document.getElementById('message-container').style.display = 'none';

    // Show the status page
    document.getElementById('statusPage').style.display = 'block';
});

document.getElementById('fileUpload').addEventListener('change', function() {
    const fileInput = document.getElementById('fileUpload');
    const fileNamesDiv = document.getElementById('fileNames');
    const files = fileInput.files;
    fileNamesDiv.innerHTML = ''; // Clear previous file names
    for (let i = 0; i < files.length; i++) {
        const fileName = document.createElement('div');
        fileName.classList.add('file-name'); // Add the class here
        fileName.textContent = files[i].name;
        fileNamesDiv.appendChild(fileName);
    }
});
