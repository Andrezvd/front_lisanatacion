import comultrasan from "../../assets/images/financieraComultrasanLogo.jpg"
import inderSantander from "../../assets/images/inderSantander.jpg"
import vanguardiaLiberal from "../../assets/images/vanguardiaLiberal.jpg"
import macPollo from "../../assets/images/macPolloLogo.jpg"


import "../../styles/patrocinadoresOficiales.css"


const PatrocinadoresOficiales = () => {
    return (
        <section className="patrocinadores-oficiales">
            <h1>Patrocinadores Oficiales</h1>
            <div className="patrocinadores-oficiales__logos">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={macPollo} alt="Mac Pollo" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={comultrasan} alt="Comultrasan" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={inderSantander} alt="Inder Santander" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={vanguardiaLiberal} alt="Vanguardia Liberal" />
                </a>
            </div>
        </section>
    );
};

export default PatrocinadoresOficiales;
