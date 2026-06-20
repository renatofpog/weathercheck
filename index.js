const CHAVE_API = "e8ff04c31497899860e6e893f6943940";

const form = document.getElementById("checkclima");
const inputCidade = document.getElementById("cidade");

const cardResultado = document.getElementById("resultado-clima");
const txtCidade = document.getElementById("nome-cidade");
const txtTemp = document.getElementById("temperatura");
const txtDesc = document.getElementById("descricao");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const cidadeDigitada = inputCidade.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeDigitada}&units=metric&appid=${CHAVE_API}&lang=pt_br`;
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error("Cidade não encontrada");
    }
    const dados = await resposta.json();
    console.log(dados);

    txtCidade.textContent = dados.name;
    txtTemp.textContent = `${Math.round(dados.main.temp)}°C`;
    txtDesc.textContent = dados.weather[0].description;

    cardResultado.style.display = "flex";
  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
    alert("Não foi possível encontrar essa cidade. Tente novamente!");
  }
});
