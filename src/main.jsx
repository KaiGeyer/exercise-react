import {createRoot} from "react-dom/client";

import "./style.css";

import Header from "./components/Header";
import Search from "./components/Search";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";   
import InfoBox from "./components/InfoBox";

const root = createRoot(document.querySelector("#root"));


//Haupt Komponente für das UI
function App() {
    return (
        // Platzhalter für ein Root Element
        // Fragment: gruppiert mehrere JSX Elemente, ohne selbst ein HTML Element im DOM zu erzeugen 

        <>
        <Header />

        <main>
            <div className="container">
                <Search />

                <InfoBox title="Hinweis">
                    <p> Hinweis über alle Produkte </p>                    
                    
                </InfoBox>


                <ProductList />

                <InfoBox title="Achtung  230 V Produkte !">
                    <p> Haushalt 230 V ... </p>


                </InfoBox>


            </div>
        </main>
        <Footer />
        </>
    );
}

root.render( <App /> );

