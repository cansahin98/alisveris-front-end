import { useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";



const products = [
  {
    id: 1,
    name: "Sırt Çantası (Laptop,notebook,okul, Spor ) Unisex",
    href: "detail",
    price: "49,99TL",
    imageSrc:
      require("./item5.jpg"),
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Unisex Premium Bel Çantası Apba012700 APBA0127",
    href: "detail",
    price: "48,88TL",
    imageSrc:
      require("./item6.jpg"),
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Michel Erkek Güneş Gözlüğü",
    href: "#",
    price: "40,50TL",
    imageSrc:
      require("./item7.jpg"),
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Kadın Gri Cüzdan",
    href: "#",
    price: "49,99TL",
    imageSrc:
      require("./item8.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Lacivert Erkek Geniş Kalıplı Oversize Fit Eşofman Altı",
    href: "#",
    price: "89,99TL",
    imageSrc:
      require("./item1.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Siyah Erkek Regular Fit Degaje Yaka Uzun Kollu Basic Sweatshirt",
    href: "#",
    price: "99,99TL",
    imageSrc:
      require("./item2.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Antrasit Erkek Regular Fit Lastik Paça Basic Eşofman Altı",
    href: "#",
    price: "109,99TL",
    imageSrc:
      require("./item3.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Siyah Erkek Oversize Fit Sweatshirt",
    href: "#",
    price: "139,99TL",
    imageSrc:
      require("./item4.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Erkek Siyah Cüzdan",
    href: "#",
    price: "49,99TL",
    imageSrc:
      require("./item9.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Unisex Siyah Güneş Gözlüğü",
    href: "#",
    price: "29,99TL",
    imageSrc:
      require("./item10.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Aqua Di Polo 2'li Erkek Güneş Gözlüğü Set",
    href: "#",
    price: "39,99TL",
    imageSrc:
      require("./item11.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    name: "Daisy 3 Lü Kanepe",
    href: "#",
    price: "2390TL",
    imageSrc:
      require("./item12.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 13,
    name: "Zigon Sehpa Ve Orta Sehpa Kr Set Gold Efes",
    href: "#",
    price: "289,99TL",
    imageSrc:
      require("./item13.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 14,
    name: "Sehpa Geniş Çantalı Kitaplık Çiçeklik Metal Atlantik Çam",
    href: "#",
    price: "159,90TL",
    imageSrc:
      require("./item14.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 15,
    name: "Lavinia Puf Kalorifer Önü Palet Minderi Ikili Takım Antrasit",
    href: "#",
    price: "225TL",
    imageSrc:
      require("./item15.jpg"),
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

];


const product = 
{
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Detail = props => {
  const { id } = Home.props.product;
  console.log(id);
  return (
    <div className="bg-white">
      <div className="pt-6 pb-16 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <ol role="list" className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-4 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-300"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>    

                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="mt-4 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-gray-900">
                  Fabric &amp; Care
                </h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Detail;
