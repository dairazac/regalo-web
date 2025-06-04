document.addEventListener('DOMContentLoaded', () => {
    const messageStepDiv = document.getElementById('message-step');
    const giftStepDiv = document.getElementById('gift-step');
    const mainMessage = document.getElementById('main-message');
    const actionButton = document.getElementById('action-button');
    const catImageContainer = document.getElementById('cat-image-container');

    let currentStep = 0;

    // Puedes poner los nombres reales de tus gatos aquí
    const nombreGata = "tu gata"; // Ejemplo: "Lila"
    const nombreGato = "tu gato"; // Ejemplo: "Coco"

    const steps = [
        { // 0
            message: "Haz clic aquí para ver tu regalo de aniversario...",
            buttonText: "¡Ver mi Regalo!"
        },
        { // 1
            message: "¿Estás segura de que queres ver este regalo tan especial y sorpresa?",
            buttonText: "¡Sí, estoy segura!"
        },
        { // 2
            message: "¿Pero estás muy, muy, muy segura? ¡Mira que es sorpresa!",
            buttonText: "¡Segurísima! ¡Mostrá!"
        },
        { // 3 - Anuncio Gatos
            message: "Antes del gran final y ya que estamos en confianza... ¡una pausa con los bebes!",
            buttonText: "¡A ver a los michis! 😻"
        },
        { // 4 - Mostrar Gatos
            showCats: true,
            message: `¡Nuestros bebes sacando la lengua!`,
            buttonText: "¡Qué lindos! ¡Ahora sí, la sorpresa!"
        },
        { // 5 - Confirmación Final (tu texto)
            message: "Ok, ok... ¡Preparate para la sorpresa de tu regalo de 3er aniversario!",
            buttonText: "¡LO QUIERO VER YA!"
        }
        // El siguiente paso implícito será mostrar el regalo final
    ];

    function updateStep() {
        const currentStepData = steps[currentStep];

        if (currentStep < steps.length) {
            mainMessage.innerHTML = currentStepData.message;
            actionButton.textContent = currentStepData.buttonText;

            if (currentStepData.showCats) {
                catImageContainer.style.display = 'flex'; // Usar flex para que apliquen los estilos de alineación
            } else {
                catImageContainer.style.display = 'none';
            }
            
            messageStepDiv.style.display = 'block';
            giftStepDiv.style.display = 'none';

        } else { 
            messageStepDiv.style.display = 'none';
            catImageContainer.style.display = 'none';
            giftStepDiv.style.display = 'block';
        }
    }

    actionButton.addEventListener('click', () => {
        currentStep++;
        updateStep();
    });

    updateStep(); // Inicializar el primer paso
});
