
import $ from 'jquery';

const Contact = () => {

    const handleSend = e => {
        e.preventDefault();
        $('.submitted').val("");
        $('#contact-message')
            .addClass("alert alert-success")
            .text("Votre message a bien été envoyé à notre équipe. Nous vous répondrons dans les meilleurs délais.")
    }

    return (
        <div className="contact-content">
            <div id="contact-message" className="mb-3 text-center"></div>
            <h5 style={{"color": "#e76a9e"}}>NOUS CONTACTER</h5>
            <div className="contact-form mb-5">
                <p>N'hésitez pas à nous contacter pour toute question concernant nos produits ou une commande.</p>
                <form onSubmit={handleSend}>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control submitted" placeholder="Votre nom" required />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control submitted" placeholder="Votre prénom" required />
                        </div>
                    </div>
                    <br />
                    <select className="form-control form-control-select submitted" required>
                        <option value="0">Sélectionnez un objet</option>
                        <option value="1">Information Produit</option>
                        <option value="2">Information Collection</option>
                        <option value="3">Commande</option>
                        <option value="4">Autres</option>
                    </select>
                    <br />
                    <div className="input-group">
                        <input type="email" className="form-control submitted" placeholder="Votre adresse mail" required />
                    </div>
                    <br />
                    <div className="input-group">
                        <textarea className="form-control submitted" rows="5" cols="50" placeholder="Comment pouvons-nous aider ?" required></textarea>
                    </div>
                    <div className="input-group mt-3">
                        <input className="btn btn-crazy ml-auto" type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
            <div className="contact-details">
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.1416929924026!2d3.7057039154190674!3d43.93574114213253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3f65bfe775ded%3A0x1e3c0b4e56a85c4d!2sCrazy%20Art!5e0!3m2!1sfr!2sfr!4v1606390904327!5m2!1sfr!2sfr" width="700" height="500" frameBorder="0" allowFullScreen="" tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;