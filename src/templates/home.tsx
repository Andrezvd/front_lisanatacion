import NavBar from "../components/navBar";
import Footer from "../components/footer";
import PruebasRecientes from "../components/pruebas_Recientes/pruebas_Recientes";
import UltimaNoticia from "../components/ultimaNoticia/ultimaNoticia";
import CarruselNadadores from "../components/carruselNadadores/carruselNadadores";


const Home = () => {
  return (
    <>
      <NavBar />
      <PruebasRecientes />

      <CarruselNadadores />
      <UltimaNoticia />
      <div className="lineaSeparadora"></div>
      <Footer />
    </>
  );
};

export default Home;

