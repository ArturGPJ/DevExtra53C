// Adicionando o título do site
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Loja de Produtos';
document.body.appendChild(titulo);

// Adicionando um produto à venda
const produto = document.createElement('div');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto Exemplo';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição do produto exemplo, com todas as suas características e benefícios.';

const precoProduto = document.createElement('span');
precoProduto.textContent = 'R$ 99,99';

// Adicionando elementos ao contêiner do produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

document.body.appendChild(produto);

// Método complexo
const produto2 = document.createElement('div');

produto2.innerHTML = `
    <h2>Produto Exemplo 2</h2>
    <p>Descrição do segundo produto exemplo, com suas características únicas.</p>
    <span>R$ 149,99</span>
`;

document.body.appendChild(produto2);
