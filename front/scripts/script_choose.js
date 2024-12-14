document.addEventListener('DOMContentLoaded', function() {
    const managerButton = document.getElementById('manager');
    const talentButton = document.getElementById('talent');
    const selectButton = document.getElementById('selectButton');

    function updateSelectButtonState() {
        if (managerButton.classList.contains('active') || talentButton.classList.contains('active')) {
            selectButton.disabled = false; 
        } else {
            selectButton.disabled = true; 
        }
    }

    managerButton.addEventListener('click', function() {
        managerButton.classList.toggle('active');
        talentButton.classList.remove('active');
        updateSelectButtonState();
    });

    talentButton.addEventListener('click', function() {
        talentButton.classList.toggle('active');
        managerButton.classList.remove('active');
        updateSelectButtonState();
    });
});
