import { useEffect, useState } from "react";
import { Breadcrumb } from "../breadcrumb";
// import { Filter } from "../Filter";
import { ItemContainer } from "../ItemContainer";

export function Sapatos(){

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
      const getShoes = async () => {
        const response = await fetch(
          'http://localhost:8888/api/V1/categories/3'
        );
        const data = await response.json();
        console.log(data.items.filter, 'CONSOLE')
        setShoes(data.items);
      };
      getShoes();
    }, []);

    console.log(shoes, 'SHOES')

    const [colorSelected, setColorSelected] = useState('');

    const pathname = window.location.pathname;

    const filterByColor = (cor) => {
        return shoes.filter(item =>
            item.filter.some(filtro => filtro.color.toLowerCase() === cor.toLowerCase())
        );
    };

    const filteredShoes = filterByColor(colorSelected);

    // const orderedProducts = shoes.sort((a, b) =>
    //   a.name.localeCompare(b.name)
    // );

    // console.log(orderedProducts, 'ORDENADOS')


    return (
        <main>
            <Breadcrumb pageName="Calçados" />
            <div className="item-page">
                <div className="aside-page">
                    {/* <Filter item={shoes} pathname={pathname} /> */}
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
                          {pathname === "/calcados" && (
                            <>
                              <div className="filter-buttons">
                                  <button onClick={() => setColorSelected('preto')} className="black_color"></button>
                                  <button onClick={() => setColorSelected('laranja')} className="orange_color"></button>
                                  <button onClick={() => setColorSelected('amarelo')} className="yellow_color"></button>
                                  <button onClick={() => setColorSelected('cinza')} className="gray_color"></button>
                                  <button onClick={() => setColorSelected('rosa')} className="pink_color"></button>
                                  <button onClick={() => setColorSelected('azul')} className="blue_color"></button>
                                  <button onClick={() => setColorSelected('bege')} className="beige_color"></button>
                              </div>
                              <button onClick={() => setColorSelected('')} className="all_colors">Todas as cores</button>
                            </>
                          )}
                      </div>
                      <div className="filter-types">
                          <h4>Tipos</h4>
                          <ul>
                              <li><a href="/">Corrida</a></li>
                              <li><a href="/">Caminhada</a></li>
                              <li><a href="/">Casual</a></li> 
                              <li><a href="/">Social</a></li> 
                          </ul>
                      </div>
                  </aside>
                </div>
                <div className="item-page-container">
                  <h1>Calçados</h1>
                  <ItemContainer item={shoes} filteredShoes={filteredShoes} />
                </div>
            </div>
        </main>
    )
}