import { useState } from "react";

export function Filter({item, pathname}){
    // const [colorSelected, setColorSelected] = useState('');

    // const pathname = window.location.pathname;

    // const filtrarItensPorCor = (cor) => {
    //     return item.filter(item =>
    //         item.filter.some(filtro => filtro.color.toLowerCase() === cor.toLowerCase())
    //     );
    // };

    // // Produtos filtrados com base na cor selecionada
    // const produtosFiltrados = filtrarItensPorCor(colorSelected);

    // console.log(produtosFiltrados, 'FILTRADOS')

    return (
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
                    <div className="filter-buttons">
                        <button onClick={() => setColorSelected('preto')} className="black_color"></button>
                        <button className="orange_color"></button>
                        <button className="yellow_color"></button>
                        <button className="gray_color"></button>
                        <button className="blue_color"></button>
                        <button className="beige_color"></button>
                    </div>
                )}
                <div>
                    <button className="filter_color_1"></button>
                    <button className="filter_color_2"></button>
                    <button className="filter_color_3"></button>
                </div>
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
    )
}