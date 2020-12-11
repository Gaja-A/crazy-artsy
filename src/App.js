
import './App.css';  /* STYLES */

import { FaPaintBrush, FaSun, FaShoppingCart, FaTrash, FaSearch } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';  /* ROUTER */

import { useState } from 'react';  /* USE STATE */

import Modal from "react-bootstrap/Modal";  /* BOOTSTRAP MODAL */
import $ from 'jquery';  /* JQUERY */

/* IMPORT COMPONENTS */
import Home from "./components/Home";
import Collection from "./components/Collection";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";

import ProductList from "./json/ProductList"  /* JSON */


/* MAIN CONTENT */
const App = () => {

  // DARK MODE
  const mode = () => {
      $("a, .navbar, .cart_items, .product-details, body, .card, .collection-text, .newsletter, .copyright-info, footer").toggleClass("dark-mode");
      $(".products-content").toggleClass("dark-mode-light");
  }

  // CART ITEMS
  const [selection, setSelection] = useState([]);

  // REMOVE CART ITEM
  const handleRemoveItem = (e) => {
    const text = e.target.getAttribute("name")
    setSelection(selection.filter(item => item.text !== text));
  };

  // CART TOTAL USING REDUCE
  const currencyOptions = {
    minimumFractionDigits: 2,
    // maximumFractionDigits: 2,   --> pas besoin
  }
  const getTotal = (selection) => {
    const cart_total = selection.reduce((total, { price = 0 }) => total + price, 0); 
    return cart_total.toLocaleString(undefined, currencyOptions)
  }

  // CART TOTAL USING useEffect & useState
    /*
      const [cart_total, setCartTotal] = useState(0);
      useEffect(() => {
        total();
      }, [selection]);

      const total = () => {
        let totalVal = 0;
        for (let i = 0; i < selection.length; i++) {
          totalVal += selection[i].price;
        }
        setCartTotal(totalVal);
      }; 
    */ 

  // SEARCH & FILTER
  const [searchText, setSearchText] = useState(""); // Search
  const [filter, setFilter] = useState(new Set()); // Filter

  const handleInputChange = (value) => {
    setSearchText(value);
    console.log(searchText)
  };

  const filterCheck = (value) => {
    $("#checkboxes").toggle();
    setSearchText("");
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.delete(value);
        return newSetFilter;
      });
    } else {
       setFilter(prevFilter => {
        const newSetFilter = new Set(prevFilter);
        newSetFilter.add(value);
        return newSetFilter;
      });
    }
  }

  let filteredItems = 
    ProductList.filter(item => {
      if (filter.size > 0 && !filter.has(item.category))
        return false;

      // if (searchText.length > 0 && !`${item.text}${item.category}`.toLowerCase().includes(searchText)) // Do search using name and category
      if (searchText.length > 0 && !`${item.text}`.toLowerCase().includes(searchText)) // Do search using only name
        return false;
      
      return true;
    }).map((p) =>  <Products p={p} key={p.id} selection={selection} setSelection={setSelection} /> );
  

  // COMPONENTS
  const home =  <Home />
  const collection =  <Collection />

  const Carousel = () => { 
    return (
      <div className="carousel"></div>
    )
  }
  
  const products = 
      <div className="products-content mt-5">
        <section>
        <div>
          <section className="d-flex filters mx-4 my-2">
              <form>
                <div class="checkbox-select">

                  <div class="selectBox" onClick={() => $("#checkboxes").toggle()}>
                    <select>
                      <option>Filtrer par catégorie</option>
                    </select>
                    <div class="overSelect"></div>
                  </div>

                  <div id="checkboxes">

                    {/* <label for="all">
                      <input type="checkbox" id="all" className="cat-check-all" 
                            onClick={() => showAll("Oil") || showAll("Gouache") || showAll("Acrylic") ||
                                           showAll("Watercolor") || showAll("Encaustic") || showAll("Pastel")} /> 
                        All
                    </label> */}

                    <label for="oil">
                      <input type="checkbox" className="cat-check" id="oil" selected={filter.has("Oil")} onClick={() => filterCheck("Oil")} /> Oil
                    </label>

                    <label for="gouache">
                      <input type="checkbox" className="cat-check" id="gouache" selected={filter.has("Gouache")} onClick={() => filterCheck("Gouache")} /> Gouache
                    </label>
                    
                    <label for="acrylic">
                      <input type="checkbox" className="cat-check" id="acrylic" selected={filter.has("Acrylic")} onClick={() => filterCheck("Acrylic")} /> Acrylic
                    </label>
                    
                    <label for="watercolor">
                      <input type="checkbox" className="cat-check" id="watercolor" selected={filter.has("Watercolor")} onClick={() => filterCheck("Watercolor")} /> Water Color
                    </label>
                    
                    <label for="encaustic">
                      <input type="checkbox" className="cat-check" id="encaustic" selected={filter.has("Encaustic")}  onClick={() => filterCheck("Encaustic")} /> Encaustic
                    </label>
                    
                    <label for="pastel">
                      <input type="checkbox" className="cat-check" id="pastel" selected={filter.has("Pastel")} onClick={() => filterCheck("Pastel")} /> Pastel
                    </label>
                  
                  </div>

                </div>
              </form>

              
              <div className="search-box">
                  <input 
                    className="search-input" 
                    type="text" 
                    value={searchText} 
                    onChange={(e) => handleInputChange(e.target.value)} 
                    placeholder="Rechercher..." 
                  />

                  <button className="search-button">
                      <FaSearch style={{"width": "25px", "height": "30px"}} />
                  </button>
              </div>
          </section>
          
          { 
            filteredItems.length > 0
          ?
            <div className="product-grid">
              {filteredItems}
            </div>
          : 
            <div className="notfound-message w-75 alert alert-danger">Oups 🙁, aucun produit trouvé. Veuillez réessayer.</div>
          }
      </div>
            {/* 
              searchResult.length > 0 
              ?
                <div className="product-grid">
                  {searchResult.map(p=>
                    <Products p={p} key={p.id} selection={selection} setSelection={setSelection} />     
                  )}
                </div>
              :
                <div className="mx-auto mt-4 w-50 text-center alert alert-danger">Oups 🙁, aucun produit trouvé. Veuillez réessayer.</div>
            } */}
        </section>
      </div>

  const checkout =  <Checkout />
  const contact =  <Contact />
  const footer = <Footer />

    // POPUP CART DETAILS
    const [isShow, setShow] = useState(false);

    const isActive = () => {
      setShow(true)
    }
    const isHide = () => {
      setShow(false)
    }
    const isHideZero = () => {
      setShow(false)
      selection.length = 0 
    }
  
    const listItems = selection.map((i) =>
                        <div  className="cart_block" key={i.id}>
                          <img className="cart_text" src={i.image} alt={i.image} />
                          <span className="cart_text">{i.text}</span>
                          <span className="cart_text">{i.price}€</span>
                          <button className="btn btn-crazy cart_text" name={i.text} onClick={handleRemoveItem}>
                            <FaTrash />
                          </button>
                        </div>
                      );
                    
                      
  // JSX ELEMENTS
  return (
    <div className="container-fluid">

      {/* MODAL CONTENT */}
      <Modal show={isShow} onHide={isHide}>
        <Modal.Header className="text-center">
          <Modal.Title>Mon panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            selection.length > 0 
            ? 
              <div>
                  {listItems}
                  <hr />
                  <div className="cart_total">Total : <span>{getTotal(selection)}</span><span>€</span></div>
              </div>
            : <span>Votre panier est vide.</span>
          }
        </Modal.Body>
        <Modal.Footer>
          {
            selection.length > 0 
            ? 
              <span>
                <Link className="btn-continue btn mr-2" to={"/arts"} onClick={isHide}>Continuer mes achats</Link>
                <Link className="btn btn-crazy" to={"/checkout"} onClick={isHideZero}>Commander</Link>
              </span>
            : <Link className="btn btn-crazy" to={"/arts"} onClick={isHide}>Ajouter au panier</Link>
          }  
        </Modal.Footer>
      </Modal>

      {/* MENU */}
      <Router>
        <div>
          <nav className="navbar navbar-expand-md fixed-top col-12 navbar-dark">
            <div className="d-flex">
              <Link to={"/"} className="navbar-brand logo">
                <FaPaintBrush /> CRAZY ARTSY
              </Link>
              <button className="btn nav-link" id="mode" onClick={mode}>
                <FaSun style={{"width": "26px", "height": "30px"}} />  
              </button>
            </div>
            <button className="navbar-toggler" style={{"outline": "none"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li><Link to={'/home'} className="nav-link"> Accueil </Link></li>
                <li><Link to={'/collections'} className="nav-link">Collections</Link></li>
                <li><Link to={'/arts'} className="nav-link">Œuvres</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contactez-nous</Link></li>
                <li onClick={isActive}>
                  <span className="nav-link shopping-cart">
                    <FaShoppingCart style={{"width": "25px", "height": "30px"}} />
                    <div className="cart_items border border-light">
                      <span><strong>{selection.length}</strong></span>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              {Carousel}
            </Route>
            <Route exact path="/home">
              {home}{footer}
            </Route>
            <Route path="/collections">
              {collection}{footer}
            </Route>
            <Route path="/arts">
              {products}{footer}
            </Route>
            <Route path="/checkout">
              {checkout}{footer}
            </Route>
            <Route path="/contact">
              {contact}{footer}                
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;