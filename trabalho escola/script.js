var database = [
    { username: "admin", password: "123456" },
    { username: "user", password: "123" }
];

// Função para verificar se um usuário existe no banco de dados
function verificarUsuario(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true; // Retorna true se o usuário existir no banco de dados
        }
    }
    return false; // Retorna false se o usuário não for encontrado
}

// Ouvinte de evento para o envio do formulário
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (verificarUsuario(username, password)) {
        alert("Login bem-sucedido!");
        // Redirecionar para a página de sucesso ou executar outras ações necessárias
        window.location.href = "pagina-de-sucesso.html"; // Altere "pagina-de-sucesso.html" para o URL da página desejada
    } else {
        alert("Nome de usuário ou senha inválidos!");
    }
});
