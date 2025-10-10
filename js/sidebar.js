function sidebar() {
    const header = `
    <section class="vs-desktop">
    <div class="border-wrapper">
  <header>
    <a href="./index.html">
    <div class="logotipo">
      <img class="logotipo-header" src="./img/logotipo-Iara-Games.png" alt="logotipo da plataforma Iara Games">
      <h1 class="logotipo-header-titulo">Iara Games</h1>
    </div>
    </a>
    <nav>
      <ul class="lista-sidebar">
        <li class="lista-header">
          <img class="icone-header" src="./img/home-icon.svg" alt="icone da página inicial">
          <a href="/">Home</a>
        </li>
        <li class="lista-header">
          <img src="/img/icone-header.svg" alt="" class="icone-header">
          <a href="#">Biblioteca</a>
        </li>
        <li class="lista-header">
          <img class="icone-header" src="./img/categorias-icon.svg" alt="icone das categorias">
          <a href="#">Categorias</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
</section>




<section class="vs-mobile">
<button class="btn-hamburger" id="btnHamburger">
  <div class="linha"></div>
  <div class="linha"></div>
  <div class="linha"></div>
</button>
    <div class="border-wrapper" id="sidebar">
  <header>
    <a href="./index.html">
      <div class="logotipo">
        <img class="logotipo-header" src="./img/logotipo-Iara-Games.png" alt="logotipo da plataforma Iara Games">
        <h1 class="logotipo-header-titulo">Iara Games</h1>
      </div>
    </a>
    <nav>
      <ul class="lista-sidebar">
        <li class="lista-header">
          <img class="icone-header" src="./img/home-icon.svg" alt="icone da página inicial">
          <a href="/">Home</a>
        </li>
        <li class="lista-header">
          <img src="/img/icone-header.svg" alt="" class="icone-header">
          <a href="#">Biblioteca</a>
        </li>
        <li class="lista-header">
          <img class="icone-header" src="./img/categorias-icon.svg" alt="icone das categorias">
          <a href="#">Categorias</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
</section>`;

    document.body.insertAdjacentHTML("afterbegin", header);
}

sidebar();