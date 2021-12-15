import * as React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import products from "./data/products";

function Products() {
  const [chartItems, setChartItems, setShow] = useOutletContext();
  const addChartItem = (event, productId) => {
    event.preventDefault();
    const _chartItems = [...chartItems];
    const product = products.find(
      (product) => product.id === Number(productId)
    );
    _chartItems.push({
      id: product.id,
      name: product.name,
      href: "#",
      price: product.price,
      imageSrc: product.imageSrc,
      imageAlt: "Front of men's Basic Tee in sienna.",
    });
    setShow(true);
    setChartItems(_chartItems);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} className="group" to={`${product.id}`}>
              {" "}
              <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
                <div className="absolute bottom-0 min-w-full flex justify-center">
                  <button
                    key={product.id}
                    onClick={(event) => addChartItem(event, product.id)}
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to chart
                    <ShoppingBagIcon
                      className="ml-3 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
