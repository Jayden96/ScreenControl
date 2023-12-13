function uploadContent() {
    const statusLabel = document.getElementById('status-label');
    const submitButton = document.getElementById('submit-btn');
    const uploadBox = document.getElementById('upload-box');

    uploadBox.innerHTML = '<p>Content Uploaded</p>'; // Mock content upload
    statusLabel.textContent = 'Status: Under Review';
    submitButton.style.display = 'block';

    setTimeout(() => {
        statusLabel.textContent = 'Status: Approved';
        submitButton.textContent = 'Publish';
        submitButton.onclick = function() {
            // Add logic for publishing content
            alert('Content Published');
        };
    }, 30000); // 30 seconds delay
}
