function sidebar() {
    const header = `
    <div class="border-wrapper">
  <header>
    <div class="logotipo">
      <img class="logotipo-header" src="./img/logotipo-Iara-Games.png" alt="logotipo da plataforma Iara Games">
      <h1 class="logotipo-header-titulo">Iara Games</h1>
    </div>
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
</div>`;

    document.body.insertAdjacentHTML("afterbegin", header);
}

sidebar();