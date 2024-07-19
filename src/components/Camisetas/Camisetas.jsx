import { useEffect, useState } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Filter } from "../Filter";
import { ItemContainer } from "../ItemContainer";

export function Camisetas(){

    const [shirts, setShirts] = useState([]);

    useEffect(() => {
      const getShirts = async () => {
        const response = await fetch(
          'http://localhost:8888/api/V1/categories/1'
        );
        const data = await response.json();
        setShirts(data.items);
      };
      getShirts();
    }, []);

    // console.log(shirts, 'SHIRTS')

    const [colorSelected, setColorSelected] = useState('');

    const pathname = window.location.pathname;

    const filterByColor = (cor) => {
        return shirts.filter(item =>
            item.filter.some(filtro => filtro.color.toLowerCase() === cor.toLowerCase())
        );
    };

    const filteredShirts = filterByColor(colorSelected);

    return (
        <main>
            <Breadcrumb pageName="Camisetas" />
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
                            {pathname === "/camisetas" && (
                              <>
                                <div className="filter-buttons">
                                    <button onClick={() => setColorSelected('preto')} className="black_color"></button>
                                    <button onClick={() => setColorSelected('laranja')} className="orange_color"></button>
                                    <button onClick={() => setColorSelected('amarelo')} className="yellow_color"></button>
                                    <button onClick={() => setColorSelected('rosa')} className="pink_color"></button>
                                </div>
                                <button onClick={() => setColorSelected('')} className="all_colors">Todas as cores</button>
                              </>
                            )}
                        </div>
                        <div className="filter-types">
                            <h4>Tipos</h4>
                            <p className="no-filter">Filtro não disponível</p>
                        </div>
                    </aside>
                </div>
                <div className="item-page-container">
                  <h1>Camisetas</h1>
                  <ItemContainer shirts={shirts} filteredShirts={filteredShirts} />
                </div>
            </div>
        </main>
    )
}