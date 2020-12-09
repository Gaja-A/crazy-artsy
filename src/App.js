
// https://codesandbox.io/s/kitchen-sink-example-forked-yed5p?file=/src/index.js:429-704  -- CART PROVIDER

import './App.css';  /* STYLES */

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';  /* ROUTER */

import {useState, useEffect} from 'react';  /* USE STATE */

import Modal from "react-bootstrap/Modal";  /* BOOTSTRAP MODAL */

import $ from 'jquery';  /* JQUERY */

import { FaPaintBrush, FaSun, FaSearch, FaShoppingCart, FaTrash } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import ProductList from "./json/ProductList"  /* JSON */

/* IMPORT COMPONENTS */
import Home from "./components/Home";
import Collection from "./components/Collection";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


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

  // CART TOTAL USING REDUCE
  const currencyOptions = {
    minimumFractionDigits: 2,
    // maximumFractionDigits: 2,   --> pas besoin
  }
  const getTotal = (selection) => {
    const cart_total = selection.reduce((total, { price = 0 }) => total + price, 0); 
    return cart_total.toLocaleString(undefined, currencyOptions)
  }



  // SEARCH BAR
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const results = ProductList.filter(p => p.text.toLowerCase().includes(search)); /* Do search using product names */
    setSearchResult(results);
  }, [search]);


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
        <section className="d-flex">
          <div className="search-box ml-auto">
            <input className="search-input" type="text" value={search} onChange={handleChange} name="" placeholder="Rechercher..." />
            <button className="search-button">
              <FaSearch style={{"width": "25px", "height": "30px"}} />
            </button>
          </div>
        </section>

        <section>
            { /* Display items using Search */
              searchResult.length > 0 
              ?
                <div className="product-grid">
                  {searchResult.map(p=>
                    <Products p={p} key={p.id} selection={selection} setSelection={setSelection} />     
                  )}
                </div>
              :
                <div className="mx-auto mt-4 w-50 text-center alert alert-danger">Oups 🙁, aucun produit trouvé. Veuillez réessayer.</div>
            }
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
                          <img className="cart_text" src={i.image} />
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
                <a className="btn-continue btn mr-2" onClick={isHide}>Continuer mes achats</a>
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
              <a className="nav-link" href="#" id="mode" onClick={mode}>
                <FaSun style={{"width": "26px", "height": "30px"}} />  
              </a>
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
