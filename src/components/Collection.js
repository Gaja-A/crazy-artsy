
import CollectionList from '../json/CollectionList'
import { Link } from 'react-router-dom';  /* ROUTER */

const Collection = () => {
    return (
        <div className="collection-content">
            <div className="d-flex">
                <div className="ml-auto">
                    <div className="arrow-right animate-right-to-left">Voir plus &nbsp;</div>
                </div>
            </div>
            <div className="collection-card d-flex">
                {CollectionList.map(i => 
                    <div className="card text-center" key={i.imgId}>
                        <div className="card-body">
                            <h5 className="pt-3 card-title">{i.type}</h5> 
                            <img src={i.imgSrc} alt={i.imgAlt} className="rounded mx-auto d-block collection_image"/>
                            <div className="fade-box">
                                <p className="card-text">{i.description}</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <div className="mt-3 text-center">
                <Link to={'/arts'} className="btn btn-crazy px-4 py-3">DÉCOUVRIR NOS ARTS MODERNES</Link>
            </div>
        </div>
    );
}
    
export default Collection;