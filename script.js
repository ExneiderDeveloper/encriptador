document.getElementById('encrypt-btn').addEventListener('click', () => {
    let text = document.getElementById('text-input').value;
    if (!isValidInput(text)) {
        document.getElementById('validation-message').style.display = 'block';
        return;
    }
    document.getElementById('validation-message').style.display = 'none';
    document.getElementById('text-output').value = encryptText(text);
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    let text = document.getElementById('text-input').value;
    if (!isValidInput(text)) {
        document.getElementById('validation-message').style.display = 'block';
        return;
    }
    document.getElementById('validation-message').style.display = 'none';
    document.getElementById('text-output').value = decryptText(text);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    let output = document.getElementById('text-output');
    output.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encryptText(text) {
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    return decryptedText;
}
