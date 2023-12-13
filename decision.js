document.addEventListener('DOMContentLoaded', function() {
    const selectedContentDetails = document.getElementById('selected-content-details');
    const contentId = localStorage.getItem('selectedContentId');

    // Fetch the selected content details based on contentId
    // For mockup, using static data
    const selectedContent = { /* Populate with actual data based on contentId */ };

    selectedContentDetails.innerHTML = `
        <p>Content ID: ${contentId}</p>
        <!-- Populate other details -->
    `;
});

function submitDecision(decision) {
    const remarks = document.getElementById('remarks').value;
    console.log(`Decision: ${decision}, Remarks: ${remarks}`);
    // Implement the logic to handle the decision
}
