function topbar() {
    const header = `
    <div class="header-secundario">
            <form class="barra-de-busca" action="#" method="get">
                <img class="icone-lupa" src="./img/icone-lupa.svg" alt="imagem de lupa na barra de pesquisa">
                <input type="text" class="espaco-pesquisar" placeholder="Buscar jogo ou palavra chave" name="query">
                <button type="submit" class="botao-pesquisar">Buscar</button>
            </form>

            <img class="user-icon" src="./img/user-icon.png" alt="foto de perfil do usuario">
        </div>`;

    document.querySelector(".corpo-da-pagina")
        .insertAdjacentHTML("afterbegin", header);
}
topbar();