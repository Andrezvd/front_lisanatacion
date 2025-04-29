import NavBar from "../components/navBar";
import Footer from "../components/footer";
import PruebasRecientes from "../components/pruebas_Recientes/pruebas_Recientes";
import UltimaNoticia from "../components/ultimaNoticia/ultimaNoticia";

const Home = () => {
  return (
    <>
      <NavBar />
      <PruebasRecientes />
      <div className="lineaSeparadora"></div>
      <UltimaNoticia />
      <div className="lineaSeparadora"></div>
      <Footer />
    </>
  );
};

export default Home;

