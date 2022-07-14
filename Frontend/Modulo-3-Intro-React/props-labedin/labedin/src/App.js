import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFPPWysvkxRrw/profile-displayphoto-shrink_800_800/0/1634608595306?e=1642032000&v=beta&t=GyFk1a9hCjRlzvwfrXioF798pVjOxBCMezWl_fuH4hU" 
          nome="Lucas Txai" 
          descricao="Sou professor de História e Sociologia, e resido em Minas Gerais. Atualmente, por acreditar que é importante usar a tecnologia como aliada da educação, estou em transição de carreira, e estudando na Labenu para me tornar um Dev."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          titulo="Email:"  
          texto=" txaifonceca@gmail.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem="https://static.vecteezy.com/ti/vetor-gratis/t2/552728-icone-de-de-localizacao-geografica-gr%C3%A1tis-vetor.jpg"
          titulo="Endereço:"  
          texto=" Rua das Ostras, 85"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso de programação Full-Stack" 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1446142392583835654/lVpyAeVZ_400x400.jpg" 
          nome="Secretaria de Estado de Educação de Minas Gerais" 
          descricao="Professor de História e Sociologia" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://i2.wp.com/davidmeessen.com/wp-content/uploads/2020/09/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png?ssl=1" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
