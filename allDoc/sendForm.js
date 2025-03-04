
//--------------------------FORMS send massage (emailJS)----------------------//
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартну поведінку форми

    // Відправка заявки тобі
    emailjs.sendForm('service_7q71vy3', 'template_j1hxkvh', this)
        .then(function(response) {
            console.log('Заявка надіслана тобі!', response);
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Сталася помилка при відправці тобі: ' + JSON.stringify(error));
        });

    // Відправка підтвердження користувачу

    emailjs.sendForm("service_7q71vy3","template_nvyhw2c", this)
        .then(function() {
            console.log('Підтвердження надіслано користувачу!', response);
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Сталася помилка при відправці підтвердження: ' + JSON.stringify(error));
        });
});

/*-------------------------------------------------*/
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігає відправці форми

    const phoneInput = document.getElementById("phone").value;
    const regex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/; // Регулярка для номера

    const errorMessage = document.getElementById("error-message");
    const submitBtn = document.getElementById("numSubmit"); // Це твій input type="submit"

    if (regex.test(phoneInput)) {
        errorMessage.textContent = ""; // Очищає повідомлення про помилку
        submitBtn.value = " Successfully ✓"; // Змінює текст кнопки
        submitBtn.style.backgroundColor = "yellow"; // Змінює колір кнопки


        setTimeout(function () {
            submitBtn.value = "Send"; // Відновлюємо початковий текст кнопки
            submitBtn.style.backgroundColor = ""; // Відновлюємо початковий колір кнопки
            document.getElementById("phone").value = ""; // Очищаємо поле вводу
            errorMessage.textContent = ""; // Очищаємо повідомлення про помилку
        }, 1000);

    } else {
        errorMessage.textContent = "Будь ласка, введіть дійсний номер телефону."; // Повідомлення про помилку
        submitBtn.value = "Відправити"; // Повертає текст кнопки при помилці
        submitBtn.style.backgroundColor = ""; // Повертає початковий колір кнопки
    }
});






//-----------------------ANIMATION 1 Page--------------------//
const staticText = "Hello,my name is Yuliia -"
const words = ["i'm front-end developer", " i'm HTML developer", "i'm markup developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseTime = 1000;

function typeEffect() {
    const typingElement = document.querySelector(".text");
    const currentWord = words[wordIndex];

    if (!isDeleting){
         charIndex++;
    }else {
        charIndex--;
    }

    typingElement.textContent = staticText + currentWord.slice(0, charIndex);
    let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if(charIndex === currentWord.length +1){
        isDeleting= true;
        nextSpeed = pauseTime;

    }
    else if (charIndex === 0 && isDeleting){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,nextSpeed );
}

typeEffect();

//------------------------

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            // Забираємо клас із затримкою, щоб уникнути "миготіння"
            setTimeout(() => {
                entry.target.classList.remove("visible");
            }, 300);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".box").forEach(box => {
    observer.observe(box);
});










