// <!-- From Uiverse.io by SachinKumar666 --> 
import "./ProductCard.css";

export default function ProductCard() {
    const productTitle = "Premium Design";
    const productDescription = "Hover to reveal stunning effects";
    const productPrice = 49.99;

    return (
        <div className="card">
        <div className="card__shine"></div>
        <div className="card__glow"></div>
        <div className="card__content">
            <div className="card__badge">NEW</div>
            <div style={{"--bg-color": "#a78bfa"}} className="card__image"></div>
            <div className="card__text">
            <p className="card__title">{productTitle}</p>
            <p className="card__description">{productDescription}</p>
            </div>
            <div className="card__footer">
            <div className="card__price">${productPrice}</div>
            <div className="card__button">
                <svg height="16" width="16" viewBox="0 0 24 24">
                <path
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M4 12H20M12 4V20"
                    fill="currentColor"
                ></path>
                </svg>
            </div>
            </div>
        </div>
        </div>
    );

}

