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
        alert("⚠️ [Error de Sistema]\nPor favor, responde todas las preguntas para procesar tu resultado.");
        return;
    }

    // Pequeño efecto visual en el botón antes de mostrar resultado
    const btn = document.querySelector('.main-action');
    btn.innerText = "Procesando...";
    btn.style.pointerEvents = "none";

    // Simular un tiempo de carga muy breve estilo retro
    setTimeout(() => {
        // Ocultar formulario, mostrar resultado
        document.getElementById("test-form").style.display = "none";
        
        const resultPanel = document.getElementById("result-panel");
        resultPanel.style.display = "flex"; // Usar flex para mantener estructura de ventana
        
        // Mostrar código sin paréntesis
        document.getElementById("final-code").innerText = code;
        
        // Regresar al top de la página para ver el resultado en móviles
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Restaurar botón por si recargan
        btn.innerText = "Obtener Resultados";
        btn.style.pointerEvents = "auto";
    }, 600);
}

function copyCode() {
    const code = document.getElementById("final-code").innerText;
    
    // API de portapapeles
    navigator.clipboard.writeText(code).then(() => {
        alert("💾 ¡Código copiado al portapapeles!\n" + code);
    }).catch(err => {
        alert("❌ Error al copiar el código");
    });
}
