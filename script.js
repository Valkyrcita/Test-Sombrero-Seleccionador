function calculateResult() {
    let code = "";
    let allAnswered = true;
    
    // Recorrer las 10 preguntas
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            code += selected.value;
        } else {
            allAnswered = false;
        }
    }

    // Validar que se respondan todas
    if (!allAnswered) {
        alert("Por favor, responde todas las preguntas para ver tu resultado.");
        return;
    }

    // Ocultar formulario, mostrar resultado
    document.getElementById("test-form").style.display = "none";
    document.getElementById("result-panel").style.display = "block";
    
    // Mostrar código sin paréntesis
    document.getElementById("final-code").innerText = code;
    
    // Regresar al top de la página para ver el resultado en móviles
    window.scrollTo(0, 0);
}

function copyCode() {
    const code = document.getElementById("final-code").innerText;
    
    // API de portapapeles
    navigator.clipboard.writeText(code).then(() => {
        alert("Código copiado: " + code);
    }).catch(err => {
        alert("Error al copiar el código");
    });
}
