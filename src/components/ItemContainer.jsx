import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import { ProductItem } from "./ProductItem";

export function ItemContainer({item, shirts, pants, filteredShoes, filteredShirts, filteredPants}){
    const [gridLayout, setGridLayout] = useState(true);
    const [listLayout, setListLayout] = useState(false);
    const [orderToShow, setOrderToShow] = useState('');

    const pathname = window.location.pathname;

    function gridLayoutActive(){
        setGridLayout(true);
        setListLayout(false);
    }
    function listLayoutActive(){
        setListLayout(true);
        setGridLayout(false);
    }

    console.log('shirts', shirts)
    console.log('FILTERED shirts', filteredShirts)

    return (
        <>
            <div className="item-container">
                <div className="view-options">
                    <div className="view-list-style">
                        <button onClick={gridLayoutActive} className={`${gridLayout ? 'layoutSeleted' : 'layoutUnselected'}`}>
                            <LayoutGrid />
                        </button>
                        <button onClick={listLayoutActive} className={`${listLayout ? 'layoutSeleted' : 'layoutUnselected'}`}>
                            <List />
                        </button>
                    </div>
                    <div className="view-order">
                        <label htmlFor="order">Ordernar por</label>

                        <select onChange={(e) => setOrderToShow(e.target.value)} value={orderToShow} name="order" id="order">
                            <option value="alfabetica">Alfabética</option>
                            <option value="preco">Preço</option>
                        </select>
                    </div>
                </div>
                
                <div className="product-container">
                    {pathname === "/calcados" && (
                        <>
                            { filteredShoes.length > 0 ? (
                                filteredShoes.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                }) 
                            ) : (
                                item.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                })                        
                            )}
                        </>
                    )}
                    {pathname === "/camisetas" && (
                        <>
                            { filteredShirts.length > 0 ? (
                                filteredShirts.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                }) 
                            ) : (
                                shirts.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                })                        
                            )}
                        </>
                    )}
                    {pathname === "/calcas" && (
                        <>
                            { filteredPants.length > 0 ? (
                                filteredPants.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                }) 
                            ) : (
                                pants.map((item) => {
                                    return (
                                        <ProductItem key={item.id} name={item.name} img={item.image} price={item.price}/> 
                                    )
                                })                        
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}