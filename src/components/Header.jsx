import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Header(){
    // const [itemsNav, setItemsNav] = useState([]);


    // console.log(itemsNav.items, 'ITEMS NAV')

    // const [navItem, setNavItem] = useState([]);

    // useEffect(() => {
    //     const fetchNavItem = async () => {
    //         const response = await fetch('http://localhost:8888/api/V1/categories/list');
    //         const itemsNav = await response.json();
    //         setNavItem(itemsNav)
    //     }

    //     fetchNavItem();
    // }, [])

    const [navItem, setNavItem] = useState([]);

    useEffect(() => {
      const getTodos = async () => {
        const response = await fetch(
          'http://localhost:8888/api/V1/categories/list'
        );
        const data = await response.json();
        setNavItem(data.items);
      };
      getTodos();
    }, []);

    console.log(navItem, 'ITEMS')
    
    return (
        <header>
            <div className="top-header">
                <div className="top-header-container">
                    <p>
                        <a href="/">Acesse sua conta</a> ou <a href="/">Cadastre-se</a>
                    </p>
                </div>
            </div>
            <div className="header">
                <div className="header-container">
                    <a href="/">
                        <img src="./webjump-logo.webp" alt="Webjump logo"/>
                    </a>
                    <div className="header-search">
                        <input type="text" />
                        <button>Buscar</button>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    {navItem ? (
                        navItem.map((item) => (
                        <li key={item.name}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                        ))
                    ) : (
                        ''
                    )}
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}