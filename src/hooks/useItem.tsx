import { useEffect, useReducer, useState } from "react";

export const useItem = (data, callback, validateOptions) => {
  const [errors, setErrors] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [item, setItem] = useReducer(
    (item, newDetails) => ({
      ...item,
      ...newDetails,
    }),
    {}
  );

  useEffect(() => {
    const objOptions = data?.options
      ?.map((option) => option?.optionCategoryName)
      .reduce((a, v) => ({ ...a, [v]: "" }), {});

    setItem({
      options: objOptions,
      prefix: data?.prefix,
      imageUrl: data?.mainImage,
      name: data?.name,
      ssomeePrice: data?.ssomeePrice,
      totalPrice: data?.ssomeePrice,
      shippingPrice: data?.shippingPrice,
      soldout: data?.soldOut,
    });
  }, [data]);

  //check to see if it should fire callback when error
  useEffect(() => {
    if (!errors.length && addToCart) {
      callback();
    }
  }, [errors, addToCart, callback]);

  const handleSelectChange = (e) => {
    const { options, selectedIndex } = e.target;
    const dataset = options[selectedIndex].dataset;
    const newOptions = { ...item.options };
    newOptions[e.target.name] = dataset.option;
    const newPrice = Number(item?.totalPrice) + Number(e.target.value);
    setItem({
      totalPrice: newPrice,
      options: newOptions,
    });
  };

  const handleAddToCart = () => {
    setErrors([...validateOptions(item.options)]);
    setAddToCart(true);
  };

  return { item, handleSelectChange, handleAddToCart, errors };
};
