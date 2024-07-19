import { useEffect, useState } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Filter } from "../Filter";
import { ItemContainer } from "../ItemContainer";

export function Calcas(){

    const [pants, setPants] = useState([]);

    useEffect(() => {
      const getPants = async () => {
        const response = await fetch(
          'http://localhost:8888/api/V1/categories/2'
        );
        const data = await response.json();
        setPants(data.items);
      };
      getPants();
    }, []);

    console.log(pants, 'PANTS')
    const pathname = window.location.pathname;

    const [genderSelected, setGenderSelected] = useState('');


    const filterByGender = (cor) => {
        return pants.filter(item =>
            item.filter.some(filtro => filtro.gender.toLowerCase() === cor.toLowerCase())
        );
    };

    const filteredPants = filterByGender(genderSelected);
    console.log(genderSelected, 'GENERO SELECIONADA')
    console.log(filteredPants, 'SHIRTS FILTERS')


    return (
        <main>
            <Breadcrumb pageName="Calças" />
            <div className="item-page">
                <div className="aside-page">
                  <aside className="filter">
                      <h3>Filtre por</h3>
                      <div className="filter-categories">
                          <h4>Categorias</h4>
                          <ul>
                              <li><a href="/camisetas">Camisetas</a></li>
                              <li><a href="/calcas">Calças</a></li>
                              <li><a href="/calcados">Calçados</a></li>
                          </ul>
                      </div>
                      <div className="filter-colors">
                          <h4>Cores</h4>
                          <p className="no-filter">Filtro não disponível</p>
                      </div>
                      <div className="filter-types">
                          <h4>Tipos</h4>
                          <p className="no-filter">Filtro não disponível</p>
                      </div>
                      <div className="filter-gender">
                          <h4>Gêneros</h4>
                          <div>
                            <button onClick={() => setGenderSelected('masculino')}>Masculino</button>
                            <button onClick={() => setGenderSelected('feminino')}>Feminino</button>
                            <button onClick={() => setGenderSelected('')} className="all_colors">Todas os gêneros</button>
                          </div>
                      </div>
                    </aside>
                </div>
                <div className="item-page-container">
                    <h1>Calças</h1>
                    <ItemContainer pants={pants} filteredPants={filteredPants}/>
                </div>
            </div>
        </main>
    )
}