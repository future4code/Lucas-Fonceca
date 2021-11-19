import './App.css';

function App() {
    const tituloCabecalho = "Lab Tube";


    const itensMenuVertical = [
        "Início",
        "Em alta",
        "Inscrições",
        "Originais",
        "Histórico"
    ];

    let imgs = [
        "https://picsum.photos/400/400?a=1 ",
        "https://picsum.photos/400/400?a=2 ",
        "https://picsum.photos/400/400?a=3 ",
        "https://picsum.photos/400/400?a=4 ",
        "https://picsum.photos/400/400?a=5 ",
        "https://picsum.photos/400/400?a=6 ",
        "https://picsum.photos/400/400?a=7 ",
        "https://picsum.photos/400/400?a=8 "
    ]

    const tituloDoVideo = [
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo",
        "Título do vídeo"
    ]

    const textoFooter = "Oi! Eu moro no footer!"

    function reproduzVideo () {
        alert("O vídeo está sendo reproduzido")
    }


    
    return ( 
    <div className="tela-inteira">

        <header>
            <h1>
                {tituloCabecalho}
            </h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">{itensMenuVertical[0]}</li>
                    <li className="botoes-meunu-vertical">{itensMenuVertical[1]}</li>
                    <li className="botoes-meunu-vertical">{itensMenuVertical[2]}</li>
                    <hr></hr>
                    <li className="botoes-meunu-vertical">{itensMenuVertical[3]}</li>
                    <li className="botoes-meunu-vertical">{itensMenuVertical[4]}</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src={imgs[0]} alt="" />
                    <h4>{tituloDoVideo[0]}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src={imgs[1]} alt=""/>
                    <h4>{tituloDoVideo[1]}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src={imgs[2]} alt=""/>
                    <h4>{tituloDoVideo[2]}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src={imgs[3]} alt=""/>
                    <h4>{tituloDoVideo[3]}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src={imgs[4]} alt=""/>
                    <h4>{tituloDoVideo[4]}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src={imgs[5]} alt=""/>
                    <h4>{tituloDoVideo[5]}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src={imgs[6]} alt=""/>
                    <h4>{tituloDoVideo[6]}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src={imgs[7]} alt=""/>
                    <h4>{tituloDoVideo[7]}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>{textoFooter}</h4>
        </footer>
    </div>
    );
}

export default App;