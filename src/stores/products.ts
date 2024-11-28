import { create } from "zustand";
import { persist } from "zustand/middleware";

import image1 from "../../public/assets/products/image1.jpg";
import image2 from "../../public/assets/products/image2.jpg";
import image3 from "../../public/assets/products/image3.jpg";
import image4 from "../../public/assets/products/image4.jpg";
import image5 from "../../public/assets/products/image5.jpg";
import image6 from "../../public/assets/products/image6.jpg";
import image7 from "../../public/assets/products/image7.jpg";
import image8 from "../../public/assets/products/image8.jpg";

type Product = {
  id: number;
  title: string;
  price: number;
  img: string;
};

type ShopState = {
  products: Product[];
  cart: Product[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      products: [
        {
          id: 1,
          title: "Dom Casmurro",
          price: 50,
          img: image1,
        },
        {
          id: 2,
          title: "The Power of Habit",
          price: 60,
          img: image2,
        },
        {
          id: 3,
          title: "O Menino Maluquinho",
          price: 70,
          img: image3,
        },
        {
          id: 4,
          title: "A Hora da Estrela",
          price: 30,
          img: image4,
        },
        {
          id: 5,
          title: "Cidade de Deus",
          price: 90,
          img: image5,
        },
        {
          id: 6,
          title: "Macunaíma",
          price: 45,
          img: image6,
        },
        {
          id: 7,
          title: "A Bolsa Amarela",
          price: 50,
          img: image7,
        },
        {
          id: 8,
          title: "A Arca de Noé",
          price: 85,
          img: image8,
        },
      ],
      cart: [],
      addToCart: (id: number) => {
        const { products, cart } = get();
        const product = products.find((item) => item.id === id);
        if (product && !cart.find((item) => item.id === id)) {
          set({ cart: [...cart, product] });
        }
      },
      removeFromCart: (id: number) => {
        const { cart } = get();
        set({ cart: cart.filter((item) => item.id !== id) });
      },
    }),
    {
      name: "shop-storage",
    }
  )
);
