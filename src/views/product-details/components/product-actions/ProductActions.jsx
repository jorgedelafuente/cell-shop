import { useState } from 'react';
import Select from './Select';
import './ProductActions.scss';

const ProductActions = ({
  cartOptions: { colors, storages, id },
  addToCartMutation,
}) => {
  const handleCart = (productId) => {
    addToCartMutation.mutate({
      id: productId,
      colorCode: Number(colorOption),
      storageCode: Number(storageOption),
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
          {!storageOption || !colorOption ? (
            <span className="warning-text">
              *Please Select Storage and Color
            </span>
          ) : (
            'Add To Cart'
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
