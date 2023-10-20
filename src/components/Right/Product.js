import React, { useState } from "react";
import logo from './assets/91450-0005_1575435814.jpg';
import logo1 from './assets/91650-0001_1576256181.jpg';
import logo2 from './assets/titoni-878-srg-657-nam-1-600x600.jpg';
import Cart from "./Cart";
import Filter from "../Left/Filter";

function Product() {
  const [products] = useState([
    {
      image: logo,
      name: "Titoni watch 40 mm 83919 S-612",
      price: "$123.00",
      size: "X"
    },
    {
      image: logo1,
      name: "Titoni watch 40 mm 83919 S-612",
      price: "$123.00",
      size: "XXL"
    },
    {
      image: logo2,
      name: "Yet Another Product",
      price: "$299.00",
      size: "M"
    },
    {
      image: logo,
      name: "Titoni watch 40 mm 83919 S-612",
      price: "$123.00",
      size: "S"
    },
    {
      image: logo1,
      name: "Another Product Name",
      price: "$199.00",
      size: "XXL"
    },
    {
      image: logo2,
      name: "Yet Another Product",
      price: "$299.00",
      size: "L"
    },
    {
      image: logo,
      name: "Titoni watch 40 mm 83919 S-612",
      price: "$123.00",
      size: "XL"
    },
    {
      image: logo1,
      name: "Another Product Name",
      price: "$199.00",
      size: "L"
    },
    {
      image: logo2,
      name: "Yet Another Product",
      price: "$299.00",
      size: "ML"
    },
    {
      image: logo,
      name: "Titoni watch 40 mm 83919 S-612",
      price: "$123.00",
      size: "L"
    },
    {
      image: logo1,
      name: "Another Product Name",
      price: "$199.00",
      size: "XL"
    },
    {
      image: logo2,
      name: "Yet Another Product",
      price: "$299.00",
      size: "L"
    },
    // ...Thêm sản phẩm khác
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const yourRemoveItemFunction = (itemId) => {
    // Xác định sản phẩm cần xóa dựa trên `itemId` và cập nhật trạng thái giỏ hàng
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };
  

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const handleSizeFilter = (size) => {
    let filtered;
  
    if (size) {
      // Nếu size được truyền, thì lọc sản phẩm theo size
      filtered = products.filter((product) => product.size === size);
    } else {
      // Nếu size không được truyền (null hoặc undefined), hiển thị tất cả sản phẩm
      filtered = products;
    }
  
    setFilteredProducts(filtered);
  };

  return (
    <div className="Right-Container">
      <div className="product">
        <p className="Size1">Existing Products: {products.length} Products</p>
        <Filter onSizeFilter={handleSizeFilter} />
        <div className="container pt-5">
          <div className="row pb-3">
            {filteredProducts.map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="product-thumbnail img-fluid w-100"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="product-name text-truncate mb-3">
                      {product.name}
                    </h6>
                    <div className="d-flex justify-content-center">
                      <h6 className="product-price">
                        {product.price} | Size: {product.size}
                      </h6>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <a href="" className="btn btn-sm text-dark p-0">
                      <i className="fas fa-eye text-primary mr-1"></i>View Detail
                    </a>
                    <button
                      type="button"
                      className="btn btn-sm btn-add-cart text-dark p-0"
                      onClick={() => handleAddToCart(product)}
                    >
                      <i className="fas fa-shopping-cart text-primary mr-1"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCart && <Cart cartItems={cart} onCloseCart={() => setShowCart(false)} onRemoveItem={yourRemoveItemFunction} />}
    </div>
    
  );
}

export default Product;
