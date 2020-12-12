
import {useState} from 'react';

const Products = (props) => {

    const [btnText, setText] = useState("Ajouter au panier");

    return (
        <div className="product-body">
            <div className="product-details">
                <p className="pt-3">
                    <span className="product-name">{props.p.text + " ~ "}</span>
                    <span className="product-price">{props.p.price}€</span>
                </p>
                <div className="product_image">
                    <img className="rounded mx-auto d-block" src={props.p.image} alt="" />
                </div>
                <button className="shop_it m-3 btn btn-crazy"
                        onClick={(e)=>{
                            e.preventDefault();
                            setText("Ajouter encore");
                            const selectionCopie = [...props.selection]
                            selectionCopie.push(props.p)
                            props.setSelection(selectionCopie)
                        }}>
                    {btnText}
                </button>
            </div>
        </div>  
    )
}

export default Products;

