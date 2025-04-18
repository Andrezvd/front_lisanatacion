import NavBar from "../components/navBar";
import Footer from "../components/footer";
import PruebasRecientes from "../components/pruebas_Recientes/pruebas_Recientes";

const Home = () => {
  return (
    <>
      <NavBar />
      <PruebasRecientes />
      <div className="lineaSeparadora"></div>
      <div className="espacioGrande"></div>
      <Footer />
    </>
  );
};

export default Home;

