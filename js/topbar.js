function topbar() {
    const header = `
    <section class="vs-desktop">
    <div class="header-secundario">
            <form class="barra-de-busca" action="#" method="get">
                <img class="icone-lupa" src="./img/icone-lupa.svg" alt="imagem de lupa na barra de pesquisa">
                <input type="text" class="espaco-pesquisar" placeholder="Buscar jogo ou palavra chave" name="query">
            </form>

            <a href="./login.html" class="user-link">
            <span class="user-nome" style="padding:0.5%">Login/\Cadastro</span>
            <img class="user-icon" src="./img/user-icon.png" alt="foto de perfil do usuario">
            </a>
        </div>
    </section>

    <section class="vs-mobile">
        <div class="header-secundario">
            <form class="barra-de-busca" action="#" method="get">
                <img class="icone-lupa" src="./img/icone-lupa.svg" alt="imagem de lupa na barra de pesquisa">
                <input type="text" class="espaco-pesquisar" placeholder="Buscar jogo ou palavra chave" name="query">
            </form>

            <a class="user-link" href="./login.html">
            <img class="user-icon" src="./img/user-icon.png" alt="foto de perfil do usuario">
            </a>
        </div>
    </section>`;

    document.querySelector(".corpo-da-pagina")
        .insertAdjacentHTML("afterbegin", header);

}
topbar();
