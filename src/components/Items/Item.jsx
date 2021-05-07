import './Items.css';

const Item = (props) => {
    return(
        <div className="card">
          <img className="card-img-top w-100 d-block" />
          <div className="card-body">
            <h4 className="card-title">{props.itemData.itemName}</h4>
            <img className="pic" src={props.itemData.imageUrl} />
            <p className="card-text">{props.itemData.description}</p>
            <button className="btn btn-primary" type="button">
              Add to Cart
            </button>
            <p className="card-text">{props.itemData.price}</p>
          </div>
        </div>
    );
}

export default Item;