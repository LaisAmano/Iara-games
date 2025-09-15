const galerias = {
  dandara: [
    './img/jogos-imagens/dandara-1.png',
    './img/jogos-imagens/dandara-2.png',
    './img/jogos-imagens/dandara-3.png',
    './img/jogos-imagens/dandara-4.png',
    './img/jogos-imagens/dandara-5.png',
  ],
  impunes: [
    './img/jogos-imagens/impunes-1.png',
    './img/jogos-imagens/impunes-2.png',
    './img/jogos-imagens/impunes-3.png',
    './img/jogos-imagens/impunes-4.png',
    './img/jogos-imagens/impunes-5.png',
  ],
  umSeteUm: [
    './img/jogos-imagens/171-1.png',
    './img/jogos-imagens/171-2.png',
    './img/jogos-imagens/171-3.png',
    './img/jogos-imagens/171-4.png',
    './img/jogos-imagens/171-5.png',
  ],
  colinaLegacy: [
    './img/jogos-imagens/colina-legacy-1.png',
    './img/jogos-imagens/colina-legacy-2.png',
    './img/jogos-imagens/colina-legacy-3.png',
    './img/jogos-imagens/colina-legacy-4.png',
    './img/jogos-imagens/colina-legacy-5.png',
  ],
  damned: [
    './img/jogos-imagens/damned-1.png',
    './img/jogos-imagens/damned-2.png',
    './img/jogos-imagens/damned-3.png',
    './img/jogos-imagens/damned-4.png',
    './img/jogos-imagens/damned-5.png',
  ],
  pesadeloRegressao: [
    './img/jogos-imagens/pesadelo-regressao-1.png',
    './img/jogos-imagens/pesadelo-regressao-2.png',
    './img/jogos-imagens/pesadelo-regressao-3.png',
    './img/jogos-imagens/pesadelo-regressao-4.png',
    './img/jogos-imagens/pesadelo-regressao-5.png',
  ],
}

const galeriaContainer = document.getElementById('galeria-container')
const galeriaEl = document.getElementById('galeria')
const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')

const porPagina = 2
let paginaAtual = 0
let imagensAtuais = []

function renderGaleria() {
  galeriaEl.innerHTML = ''

  const inicio = paginaAtual * porPagina
  const fim = inicio + porPagina
  const imagensPagina = imagensAtuais.slice(inicio, fim)

  imagensPagina.forEach(src => {
    const img = document.createElement('img')
    img.src = src
    img.alt = 'Imagem da galeria'
    galeriaEl.appendChild(img)
  })

  btnPrev.disabled = paginaAtual === 0
  btnNext.disabled = fim >= imagensAtuais.length
}

btnPrev.addEventListener('click', () => {
  if (paginaAtual > 0) {
    paginaAtual--
    renderGaleria()
  }
})

btnNext.addEventListener('click', () => {
  if ((paginaAtual + 1) * porPagina < imagensAtuais.length) {
    paginaAtual++
    renderGaleria()
  }
})

const galeriaSelecionada = galeriaContainer?.dataset?.galeria
if (galeriaSelecionada && galerias[galeriaSelecionada]) {
  imagensAtuais = galerias[galeriaSelecionada]
  renderGaleria()
}
