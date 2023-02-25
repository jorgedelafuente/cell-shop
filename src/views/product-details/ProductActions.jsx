import { useState } from 'react';
import './ProductActions.scss';

const ProductActions = ({
  cartOptions: { colors, storages, id },
  addToCartMutation,
}) => {
  const handleCart = (productId) => {
    addToCartMutation.mutate({
      id: productId,
      colorCode: colorOption,
      storageCode: storageOption,
    });
  };

  const [colorOption, setColorOption] = useState(
    colors.length === 1 ? colors[0].code : false
  );
  const [storageOption, setStorageOption] = useState(
    storages.length === 1 ? storages[0].code : false
  );

  const handleColorChange = (event) => {
    setColorOption(event.target.value);
  };
  const handleStoragChange = (event) => {
    setStorageOption(event.target.value);
  };

  return (
    <div className="product-actions">
      <Select
        label="Colors"
        options={colors}
        value={colorOption}
        onChange={handleColorChange}
      />
      <Select
        label="Storages"
        options={storages}
        value={storageOption}
        onChange={handleStoragChange}
      />
      <div>
        <button
          disabled={!storageOption || !colorOption}
          onClick={() => handleCart(id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductActions;

const Select = ({ label, value, options, onChange }) => {
  return (
    <div key={label}>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          <option value={null} hidden disabled={options.length === 1}>
            Choose
          </option>
          {options.map((option) => (
            <option
              key={option.code}
              value={options.length > 1 ? option.code : options[0].code}
            >
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
