let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) { // 39 is the key code for the right arrow key
        moveSlide(1);
    } else if (event.keyCode === 37) { // 37 is the key code for the left arrow key
        moveSlide(-1);
    }
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.style.transform = 'translateX(' + (-currentSlideIndex * 100) + '%)';
    }
}

function moveSlide(direction) {
    if (direction === 1 && currentSlideIndex < totalSlides - 1) {
        currentSlideIndex++;
    } else if (direction === -1 && currentSlideIndex > 0) {
        currentSlideIndex--;
    }
    updateSlidePosition();
}

function checkAnswer(questionNumber) {
    var selectedOption = document.querySelector('input[name="question' + questionNumber + '"]:checked');
    var resultText = "";

    if (selectedOption) {
        var correctAnswer, correctExplanation;

        if (questionNumber === 1) {
            correctAnswer = "B";
            correctExplanation = "The unique design and form factor of each laptop.";
        } else if (questionNumber === 2) {
            correctAnswer = "C";
            correctExplanation = "Lithium ion or Lithium-ion polymer.";
        } else if (questionNumber === 3) {
            correctAnswer = "D";
            correctExplanation = "Increased speed for reading and writing data"; 
        } else if (questionNumber === 4) {
            correctAnswer = "B"; 
            correctExplanation = "The Function (Fn) key is used to enable secondary functionalities of other keys, such as adjusting volume, brightness, or activating special features."; 
        } else if (questionNumber === 5) {
            correctAnswer = "C"; 
            correctExplanation = "Small Outline Dual In-line Memory Modules (SO-DIMMs) are the standard type of memory module used in laptops due to their smaller size compared to DIMMs used in desktops."; 
        } else if (questionNumber === 6) {
            correctAnswer = "B"; 
            correctExplanation = "Newer laptops typically use either SATA connections for 2.5-inch drives or the more compact M.2 interface for SSDs, providing faster data transfer rates and smaller form factors."; 
        } else if (questionNumber === 7) {
            correctAnswer = "B"; 
            correctExplanation = "Modern laptops often incorporate biometrics like fingerprint scanners or facial recognition for secure and convenient user authentication."; 
        } else if (questionNumber === 8) {
            correctAnswer = "B"; 
            correctExplanation = "NFC in laptops is primarily used for wireless data transfer and contactless authentication, leveraging the convenience of near-field communication technology."; 
        } else if (questionNumber === 9) {
            correctAnswer = "B"; 
            correctExplanation = "Non-modular batteries are typically embedded within the laptop case, making them less accessible and harder to replace compared to modular batteries."; 
        } else if (questionNumber === 10) {
            correctAnswer = "B"; 
            correctExplanation = "Laptop keyboards are usually connected to the motherboard via a ribbon cable, which is a flat, flexible cable used for internal connections in compact devices."; 
        } else if (questionNumber === 11) {
            correctAnswer = "B"; 
            correctExplanation = "Smaller laptops often omit the numeric keypad due to space constraints, requiring a more compact keyboard layout."; 
        } else if (questionNumber === 12) {
            correctAnswer = "C"; 
            correctExplanation = "Memory is soldered directly to the motherboard in many modern, slim laptops to save space and allow for thinner designs, though this limits upgradability."; 
        } else if (questionNumber === 13) {
            correctAnswer = "C"; 
            correctExplanation = "M.2 SSDs use a smaller, more compact interface compared to traditional SATA-connected SSDs, allowing for a more streamlined design and saving space."; 
        } else if (questionNumber === 14) {
            correctAnswer = "A"; 
            correctExplanation = "Cloning the hard drive to an SSD is a common method to upgrade a laptop's storage, as it transfers the entire operating system, applications, and data seamlessly."; 
        } else if (questionNumber === 15) {
            correctAnswer = "B"; 
            correctExplanation = "Mini PCI or Mini PCI Express slots in laptops are used for adding wireless functionalities such as Wi-Fi (802.11) and Bluetooth connectivity."; 
        } else if (questionNumber === 16) {
            correctAnswer = "A"; 
            correctExplanation = "NFC allows for quick, contactless authentication with compatible devices like phones or watches, enhancing convenience and efficiency, especially in professional environments."; 
        } else if (questionNumber === 17) {
            correctAnswer = "C"; 
            correctExplanation = "Over time, a laptop's battery capacity diminishes, evident in its reduced ability to hold a charge for as long as it initially did."; 
        } else if (questionNumber === 18) {
            correctAnswer = "B"; 
            correctExplanation = "The keyboard is the most frequently used input component of a laptop, being the primary means of data entry and interaction with the operating system."; 
        } else if (questionNumber === 19) {
            correctAnswer = "B"; 
            correctExplanation = "When performing maintenance on laptop keycaps, the primary concern is avoiding damage to the fragile plastic mechanisms underneath that are essential for key function."; 
        } else if (questionNumber === 20) {
            correctAnswer = "C"; 
            correctExplanation = "Single Inline Memory Modules (SIMMs) are not typically used in laptops; they are an older memory technology mostly seen in vintage computers."; 
        } else if (questionNumber === 21) {
            correctAnswer = "C"; 
            correctExplanation = "Soldered memory on a laptop's motherboard indicates that the RAM is not upgradeable, as it cannot be easily removed or replaced."; 
        } else if (questionNumber === 22) {
            correctAnswer = "B"; 
            correctExplanation = "M.2 SSDs are notably smaller than traditional SATA SSDs and do not require additional cables for connection, making them suitable for compact laptop designs."; 
        } else if (questionNumber === 23) {
            correctAnswer = "C"; 
            correctExplanation = "Replacing a laptop's storage drive is typically done to increase storage capacity or to upgrade to faster storage technology like SSDs for improved performance."; 
        } else if (questionNumber === 24) {
            correctAnswer = "B"; 
            correctExplanation = "Having internal storage drives without an access cover makes it more challenging to replace or upgrade the drive, as it often requires disassembling the laptop."; 
        } else if (questionNumber === 25) {
            correctAnswer = "B"; 
            correctExplanation = "Migrating an operating system from a hard drive to an SSD is commonly done by creating an image of the hard drive and transferring it to the SSD, ensuring a seamless transition."; 
        } else if (questionNumber === 26) {
            correctAnswer = "B"; 
            correctExplanation = "Older laptops might use Mini PCI or Mini PCI Express interfaces for upgrading wireless connectivity, allowing for the addition of Wi-Fi or Bluetooth cards."; 
        } else if (questionNumber === 27) {
            correctAnswer = "C"; 
            correctExplanation = "Biometrics like fingerprints and facial recognition offer enhanced security as they are unique to each individual and difficult to replicate."; 
        } else if (questionNumber === 28) {
            correctAnswer = "B"; 
            correctExplanation = "NFC technology in laptops enables touchless authentication, allowing users to authenticate their identity without physical contact, enhancing convenience and hygiene."; 
        } else if (questionNumber === 29) {
            correctAnswer = "B"; 
            correctExplanation = "Modular batteries are advantageous for travelers who may need to quickly swap out depleted batteries for charged ones without the need for a power source."; 
        } else if (questionNumber === 30) {
            correctAnswer = "B"; 
            correctExplanation = "Batteries embedded inside the laptop case are not designed for easy replacement, often requiring disassembly of the laptop for access."; 
        } else if (questionNumber === 31) {
            correctAnswer = "B"; 
            correctExplanation = "In smaller laptops, space constraints often lead to the omission or alteration of the numeric keypad to fit the more compact design."; 
        } else if (questionNumber === 32) {
            correctAnswer = "B"; 
            correctExplanation = "When replacing keycaps on a laptop, care is needed to avoid damaging the delicate mechanisms underneath, which are crucial for key function and feel."; 
        } else if (questionNumber === 33) {
            correctAnswer = "C"; 
            correctExplanation = "Non-upgradable, soldered memory is more common in thinner, compact laptops where space is at a premium, and components need to be as integrated as possible."; 
        } else if (questionNumber === 34) {
            correctAnswer = "B"; 
            correctExplanation = "The major advantage of SSDs over traditional hard drives is their much higher data transfer speeds, which greatly enhance overall system performance."; 
        } else if (questionNumber === 35) {
            correctAnswer = "B"; 
            correctExplanation = "The main function of an M.2 interface in a laptop is to offer a compact, efficient connection for SSDs, supporting faster data transfer rates in a smaller form factor."; 
        } else if (questionNumber === 36) {
            correctAnswer = "B"; 
            correctExplanation = "Internal storage drives in laptops without external access are more challenging to replace or upgrade, often requiring disassembly of the laptop."; 
        } else if (questionNumber === 37) {
            correctAnswer = "B"; 
            correctExplanation = "Cloning the existing hard drive onto an SSD is a common method for upgrading a laptop's storage, as it ensures a direct transfer of the operating system and data."; 
        } else if (questionNumber === 38) {
            correctAnswer = "B"; 
            correctExplanation = "Older laptops may use Mini PCI or Mini PCI Express cards to add or upgrade wireless functionalities like Wi-Fi and Bluetooth."; 
        } else if (questionNumber === 39) {
            correctAnswer = "A"; 
            correctExplanation = "Biometric authentication methods like fingerprint and facial recognition are secure because they are unique to each user and difficult to replicate or forge."; 
        } else if (questionNumber === 40) {
            correctAnswer = "B"; 
            correctExplanation = "NFC enhances laptop security and convenience by enabling touchless authentication, allowing users to authenticate their identity without physical contact."; 
        }
        if (selectedOption.value === correctAnswer) {
            resultText = "Correct! " + correctExplanation;
        } else {
            resultText = "Incorrect. The correct answer is " + correctAnswer + ") " + correctExplanation;
        }
    } else {
        resultText = "Please select an option.";
    }
}

function finishQuiz() {
    var allAnswered = true;
    var score = 0;
    var correctAnswers = ["B", "C", "D", "B", "C", "B", "B", "B", "B", "B", "B", "C", "C", "A", "B", "A", "C", "B", "B", "C", "C", "B", "C", "B", "B", "B", "C", "B", "B", "B", "B", "B", "C", "B", "B", "B", "B", "B", "A", "B",];

    for (let i = 1; i <= totalSlides; i++) {
        var selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
        
        if (!selectedOption) {
            allAnswered = false;
            break;
        } else {
            if (selectedOption.value === correctAnswers[i - 1]) {
                score++;
            }
        }
    }

    if (allAnswered) {
        alert("Your score is " + score + " out of " + totalSlides);
    } else {
        alert("Please answer all questions before finishing the quiz.");
    }

    document.getElementById("result" + questionNumber).textContent = resultText;
}


window.onload = updateSlidePosition;
