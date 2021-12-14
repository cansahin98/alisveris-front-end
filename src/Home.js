import * as React from "react";
import { Link } from "react-router-dom";

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

function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} className="group" to={{
              pathname: product.href,
              state: product
            }}>
              {" "}
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
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

export default Home;
