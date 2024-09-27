// Function to smoothly switch sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        setTimeout(() => section.classList.remove('active'), 200);
    });
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        section.classList.add('active');
        section.style.opacity = '1';
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('crimeChart').getContext('2d');
    
    const crimeChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Theft', 'Assault', 'Fraud', 'Vandalism'],
            datasets: [{
                label: 'Crime Rate',
                data: [30, 20, 25, 25],
                backgroundColor: [
                    '#3a435e',
                    '#455561',
                    '#5c6672',
                    '#6c6f7f'
                ],
                borderWidth: 1,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#ffffff'
                    }
                }
            }
        }
    });

    const chatForm = document.getElementById('chatForm');
    const chatWindow = document.getElementById('chat-window');
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.textContent = message;
            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
            chatInput.value = '';
        }
    });
});
