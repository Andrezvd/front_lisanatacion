import NavBar from "../components/navBar";
import Footer from "../components/footer";
import PruebasRecientes from "../components/pruebas_Recientes/pruebas_Recientes";
import UltimaNoticia from "../components/ultimaNoticia/ultimaNoticia";
import CarruselNadadores from "../components/carruselNadadores/carruselNadadores";
import PatrocinadoresOficiales from "../components/patrocinadoresOficiales/patrocinadoresOficiales"
import Momentos from "../components/mejoresMomentos/mejoresMomentos"


const Home = () => {
  return (
    <>
      <NavBar />
      <PruebasRecientes />

      <CarruselNadadores />
      <UltimaNoticia />
      <Momentos />
      <PatrocinadoresOficiales />
      <Footer />
    </>
  );
};

export default Home;

