import React from "react";
import ProductCard from "../../Common/ProductCard";
import products from "../../Data/products";

const NewArrivals = () => {
  return (
    <>
      <div className="w-[1440px] relative top-[680px] h-[651px]">
        <div className="custom-container">
          {/* Section Heading */}
          <div className="flex-center">
            <h2 className="uppercase py-10 heading-section">new arrivals</h2>
          </div>

          {/* Product Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
