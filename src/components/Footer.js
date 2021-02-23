import {useState} from 'react';
import $ from 'jquery';


const Footer = () => {
    let anneeEnCours = (new Date()).getFullYear();

    const [email, setEmail] = useState("");

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setEmail("");

        if($("#email") && $("#email").val() === "") {
            $("#error-message")
                .addClass(" alert alert-danger")
                .removeClass("alert-success")
                .text("Adresse e-mail invalide.");
        } 
        else {
            $("#error-message")
                .addClass(" alert alert-success")
                .removeClass("alert-danger")
                .text("Votre inscription a bien été prise en compte.");
        } 
        console.log(email);
    }
    
    return (
        <footer className="footer mt-auto text-center">
            <div className="newsletter">
                <p>Recevez nos nouveautés en exclusivité !</p>  
                
                <div id="error-message" className="w-50 m-auto"></div>

                {/* <div id="error-message" className={`w-50 m-auto ${email ==" " ? " alert alert-danger" : " alert alert-success"}`}></div> */}

                <form className="form-inline mt-3" onSubmit={handleSubmit}>
                    <div className="input-group m-auto">
                        <input type="email" id="email" className="form-control" placeholder="Votre adresse e-mail" value={email} onChange={handleEmailChange} />
                        <input type="submit" value="S'inscrire" className="btn btn-crazy" />
                    </div>
                </form>
            </div>
            <div className="copyright-info">
                <span> © Copyright - {anneeEnCours} - Crazy Artsy. Tous droits réservés. </span>
            </div>
        </footer>  
    );
}

export default Footer;