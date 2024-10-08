const questions = [
    {
        question: "Você prefere...",
        options: [
            { text: "Estudar em grupo", house: "Corvinal" },
            { text: "Enfrentar desafios", house: "Grifinória" },
            { text: "Ajudar amigos", house: "Lufa Lufa" },
            { text: "Conseguir o que quero", house: "Sonserina" }
        ]
    },
    {
        question: "Quando está em um problema, você...",
        options: [
            { text: "Pensa antes de agir", house: "Corvinal" },
            { text: "Enfrenta de cabeça erguida", house: "Grifinória" },
            { text: "Tenta encontrar uma solução que beneficie a todos", house: "Lufa Lufa" },
            { text: "Usa o que tem para ganhar vantagem", house: "Sonserina" }
        ]
    },
    {
        question: "Qual é seu maior sonho?",
        options: [
            { text: "Aprender tudo que posso", house: "Corvinal" },
            { text: "Ser um herói", house: "Grifinória" },
            { text: "Criar laços e amizades", house: "Lufa Lufa" },
            { text: "Ser o melhor em tudo", house: "Sonserina" }
        ]
    },
    {
        question: "Como você lida com desafios?",
        options: [
            { text: "Estudo e me preparo", house: "Corvinal" },
            { text: "Enfrento sem medo", house: "Grifinória" },
            { text: "Busco apoio de amigos", house: "Lufa Lufa" },
            { text: "Faço o que for necessário", house: "Sonserina" }
        ]
    },
    {
        question: "Qual é a sua maior qualidade?",
        options: [
            { text: "Inteligência", house: "Corvinal" },
            { text: "Coragem", house: "Grifinória" },
            { text: "Empatia", house: "Lufa Lufa" },
            { text: "Ambição", house: "Sonserina" }
        ]
    },
    {
        question: "Você se considera...",
        options: [
            { text: "Reflexivo", house: "Corvinal" },
            { text: "Destemido", house: "Grifinória" },
            { text: "Generoso", house: "Lufa Lufa" },
            { text: "Calculista", house: "Sonserina" }
        ]
    },
    {
        question: "Quando vê alguém em dificuldade, você...",
        options: [
            { text: "Ofereço ajuda com conselhos", house: "Corvinal" },
            { text: "Vou imediatamente ajudar", house: "Grifinória" },
            { text: "Tento confortá-lo", house: "Lufa Lufa" },
            { text: "Avalio se posso tirar vantagem", house: "Sonserina" }
        ]
    },
    {
        question: "Qual animal você se identifica mais?",
        options: [
            { text: "Coruja", house: "Corvinal" },
            { text: "Leão", house: "Grifinória" },
            { text: "Texugo", house: "Lufa Lufa" },
            { text: "Serpente", house: "Sonserina" }
        ]
    },
    {
        question: "Você prefere passar o tempo...",
        options: [
            { text: "Lendo um bom livro", house: "Corvinal" },
            { text: "Em aventuras emocionantes", house: "Grifinória" },
            { text: "Com amigos em um piquenique", house: "Lufa Lufa" },
            { text: "Fazendo planos estratégicos", house: "Sonserina" }
        ]
    },
    {
        question: "Como você reage a críticas?",
        options: [
            { text: "Refletindo sobre elas", house: "Corvinal" },
            { text: "Defendendo minhas opiniões", house: "Grifinória" },
            { text: "Agradecendo e tentando melhorar", house: "Lufa Lufa" },
            { text: "Usando para me fortalecer", house: "Sonserina" }
        ]
    },
    {
        question: "Qual a sua abordagem para resolver conflitos?",
        options: [
            { text: "Debater até encontrar a verdade", house: "Corvinal" },
            { text: "Enfrentar diretamente", house: "Grifinória" },
            { text: "Buscar um meio-termo", house: "Lufa Lufa" },
            { text: "Usar persuasão para conseguir o que quero", house: "Sonserina" }
        ]
    },
    {
        question: "O que você valoriza mais?",
        options: [
            { text: "Conhecimento", house: "Corvinal" },
            { text: "Bravura", house: "Grifinória" },
            { text: "Lealdade", house: "Lufa Lufa" },
            { text: "Sucesso", house: "Sonserina" }
        ]
    }
];

const quizForm = document.getElementById('quizForm');
const questionsDiv = document.getElementById('questions');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('resultText');
const houseImage = document.getElementById('houseImage');

let houseScores = {
    Corvinal: 0,
    Grifinória: 0,
    LufaLufa: 0,
    Sonserina: 0
};

function loadQuestions() {
    questions.forEach((q, index) => {
        const questionHTML = `
            <div>
                <p>${q.question}</p>
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${option.house}" required>
                        ${option.text}
                    </label><br>
                `).join('')}
            </div>
        `;
        questionsDiv.innerHTML += questionHTML;
    });
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(quizForm);

    for (let [key, value] of formData.entries()) {
        houseScores[value] += 1;
    }

    const resultHouse = Object.keys(houseScores).reduce((a, b) => houseScores[a] > houseScores[b] ? a : b);
    displayResult(resultHouse);
});

function displayResult(house) {
    const name = document.getElementById('name').value;
    resultText.innerHTML = `${name}, você pertence à casa ${house}!`;
    houseImage.src = getHouseImage(house);
    houseImage.alt = house;
    resultDiv.classList.remove('hidden');
    quizForm.classList.add('hidden');
    houseImage.classList.remove('hidden');
}

function getHouseImage(house) {
    switch (house) {
        case "Corvinal":
            return "https://static.wikia.nocookie.net/harrypotter/images/0/07/Ravenclaw_%28S%C3%ADmbolo_Corvinal%29.png/revision/latest?cb=20170324224938&path-prefix=pt-br"; // Substitua pelo URL da imagem da Corvinal
        case "Grifinória":
            return "https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest?cb=20201020015812&path-prefix=pt-br"; // Substitua pelo URL da imagem da Grifinória
        case "Lufa Lufa":
            return "https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20200612012838&path-prefix=pt-br"; // Substitua pelo URL da imagem da Lufa Lufa
        case "Sonserina":
            return "https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest?cb=20200605032916&path-prefix=pt-br"; // Substitua pelo URL da imagem da Sonserina
        default:
            return "";
    }
}

loadQuestions();
