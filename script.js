document.getElementById('calculate').addEventListener('click', function() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (!birthdate) {
        alert('Please enter a valid birthdate');
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    // Adjust age if birthdate hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
});