import './ProductActions.scss';

const ProductActions = ({ productActions }) => {
  return (
    <div className="product-actions">
      {Object.keys(productActions).map((productKey) => (
        <div key={productKey}>
          <label>{productKey}</label>
          <select>
            {productActions[productKey].map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div>
        <button disabled>
          Add To Cart - send ID, color code and storage code
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
