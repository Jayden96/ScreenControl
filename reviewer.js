document.addEventListener('DOMContentLoaded', function() {
    const contentList = document.getElementById('content-list');

    // Example data - replace with actual data
    const contents = [
        { id: 1, uploadedDate: '2023-12-01', uploadedBy: 'User A', dueDate: '2023-12-05', status: 'Pending' },
        { id: 2, uploadedDate: '2023-12-02', uploadedBy: 'User B', dueDate: '2023-12-06', status: 'Pending' }
        // Add more contents as needed
    ];

    contents.forEach(content => {
        const contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        contentCard.innerHTML = `
            <p>Uploaded Date: ${content.uploadedDate}</p>
            <p>Uploaded By: ${content.uploadedBy}</p>
            <p>Due Date: ${content.dueDate}</p>
            <p>Status: ${content.status}</p>
            <button onclick="navigateToDecision(${content.id})">Show Log</button>
        `;
        contentList.appendChild(contentCard);
    });
});

function navigateToDecision(contentId) {
    // Store contentId in localStorage for simplicity
    localStorage.setItem('selectedContentId', contentId);
    window.location.href = 'decision.html';
}
