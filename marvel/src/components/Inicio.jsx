import UncontrolledExample from "./Carousel";
import { Header, Footer, Noticias } from './index';

export const Inicio = () => {
  return (
    <>
      <Header />
      <div className="main">
        <UncontrolledExample />
        <h3 class="titulo">NOTICIAS</h3>
        <Noticias />
        <h3 class="titulo">TITULO</h3><br />
        <p class="parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur quis corporis blanditiis corrupti doloremque adipisci cum vitae impedit veritatis deleniti, enim vel esse. Quibusdam provident aut totam repellat saepe?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam consequuntur quis corporis blanditiis corrupti doloremque adipisci cum vitae impedit veritatis deleniti, enim vel esse. Quibusdam provident aut totam repellat saepe?
        </p><br />
      </div>
      <Footer />
    </>
  );
}

