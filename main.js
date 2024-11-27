window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0);
})

const produtos = [
    {
        imagem: "https://down-br.img.susercontent.com/file/4b43aeb536e68ae44ecc9b4948ebde3a.webp",
        titulo: "Jarro",
        preco: "R$ 99,99"
    },
    {
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7rdvt-lyciwk9m78cm5d.webp",
        titulo: "R36s",
        preco: "R$ 149,90"
    },
    {
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxy-ly6m2urhkkcbcb.webp",
        titulo: "Air Fryer",
        preco: "R$ 129,75"
    },
    {
        imagem: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxm-m1fpvof0xx6s3b.webp",
        titulo: "Pijama de pato",
        preco: "R$ 89,50"
    }
];

function gerarCards() {
    const container = document.getElementById('cards-container');

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}">
            <h2>${produto.titulo}</h2>
            <p>${produto.preco}</p>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', gerarCards);