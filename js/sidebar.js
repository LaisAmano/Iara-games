function sidebar() {
    const header = `
    <section class="vs-desktop d-none d-lg-block">
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
                            <a class="fs-5 text-uppercase" href="/">Home</a>
                        </li>
                        <li class="lista-header">
                            <img src="/img/icone-header.svg" alt="" class="icone-header">
                            <a class="fs-5 text-uppercase" href="./meus-jogos.html">Meus jogos</a>
                        </li>                      
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    </section>

    <section class="vs-mobile d-lg-none">
        
        <button class="btn btn-dark fixed-top m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
            <div class="navbar-toggler-icon"></div>
            <div class="navbar-toggler-icon"></div>
            <div class="navbar-toggler-icon"></div>
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
            
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="sidebarOffcanvasLabel">
                    <img class="logotipo-header" src="./img/logotipo-Iara-Games.png" alt="logotipo">
                    Iara Games
                </h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
            </div>

            <div class="offcanvas-body">
                <nav>
                    <ul class="lista-sidebar nav flex-column">
                        <li class="lista-header nav-item">
                            <img class="icone-header" src="./img/home-icon.svg" alt="icone da página inicial">
                            <a class="fs-6 text-uppercase" href="/">Home</a>
                        </li>
                        <li class="lista-header nav-item">
                            <img class="icone-header" src="./img/categorias-icon.svg" alt="icone das categorias">
                            <a class="fs-6 text-uppercase" href="#">Meus jogos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>`;

    document.body.insertAdjacentHTML("afterbegin", header);
}

sidebar();