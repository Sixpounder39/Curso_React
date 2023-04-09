import './App.css';
import './style/Testimonio.css'
import data from './components/feed.json'
import Testimonio from './components/Testimonio';


// obtener los datos del json de la clave testimonios
const testimonios = data.testimonios;
/*
for (let i = 0; i < testimonios.length; i++) {
  console.log(testimonios[i].nombre);
}
*/

function App() {
  return (
    <div className="App">
      <div>
        <h1>Testimonios del mal</h1>
        {/*
        <Testimonio 
          nombre="Emma"
          pais="Marruecos"
          imagen="1"
          cargo="CEO"
          empresa="Abstergintan"
          testimonio="Me encanta el mal, es lo mejor que me ha pasado en la vida."
        />
        <Testimonio 
          nombre="Lee Mai"
          pais="China"
          imagen="2"
          cargo="Developer"
          empresa="Mordecat"
          testimonio="Más vale pájaro <b>en mano</b> que cien volando."
        />
        <Testimonio 
          nombre="Crimson Flutter"
          pais="Sudamérica"
          imagen="3"
          cargo="Dueño de la empresa"
          empresa="Pussyboot"
          testimonio="Un hombre se puede enamorar de un <strong>pájaro</strong> y un caballo de un hombre."
        />
*/}
        
        {
        // Itera sobre cada testimonio y crea un componente Testimonio
        testimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}

    

        
        


      </div>
    </div>
  );
}

export default App;
