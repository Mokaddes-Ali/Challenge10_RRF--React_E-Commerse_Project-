import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, comparePrice, rating, image } = product;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[300px] hover:scale-105 transition-transform duration-300">
      <div className="w-full h-[444px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={
            product.image
              ? product.image
              : "https://via.placeholder.com/292x444?text=292x444+Image"
          }
          alt="https://via.placeholder.com/292x444?text=292x444+Image"
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="mt-3 font-semibold text-lg text-gray-800">{title}</h2>
      <div className="flex items-center gap-1 my-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
          >
            <path
              d="M9.65059 0.255005L12.2698 5.89491L18.4431 6.6431L13.8886 10.8769L15.0846 16.9793L9.65059 13.956L4.21655 16.9793L5.41263 10.8769L0.858134 6.6431L7.03139 5.89491L9.65059 0.255005Z"
              fill={i < rating ? "#FFC633" : "#E0E0E0"}
            />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}/5</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-lg font-bold text-black">${price}</p>
          <p className="text-sm line-through text-gray-400">${comparePrice}</p>
        </div>
        <span className="text-sm text-red-600 font-semibold">
          -{Math.round(((comparePrice - price) / comparePrice) * 100)}%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
