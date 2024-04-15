function saludar() {
    let userName = 'Johan';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName();
}

const saludo = saludar();
console.log(saludo);
console.log(saludo());
