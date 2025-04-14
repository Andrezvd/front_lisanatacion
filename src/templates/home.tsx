import NavBar from "../components/navBar";
import Footer from "../components/footer";
import VerUsuarios from "../components/gestion_deportistas/verUsuarios";
import CrearUsuario from "../components/gestion_deportistas/crearUsuario";

function Home() {
  return (
    <>
      <NavBar/>
      <div className="espacioGrande"></div>
      <CrearUsuario/>
      <VerUsuarios/>
      <Footer/>
    </>
  );
}

export default Home;
