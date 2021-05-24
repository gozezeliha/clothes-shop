import { useState,createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Context = createContext();

const ProductsProvider = (props) => {

    const [products,setProducts] = useState([
          {
            id: uuidv4(),
            title: "Cat Tee Black T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["S", "XS"],
            price: 10.9
          },
      
          {
            id: uuidv4(),
            title: "Dark Thug Blue-Navy T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["M"],
            price: 29.45
          },
      
          {
            id: uuidv4(),
            title: "Sphynx Tie Dye Wine T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L", "XL"],
            price: 9.0
          },
          {
            id: uuidv4(),
            title: "Short Sleeve T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["XS", "X", "L", "ML", "XL"],
            price: 75.0
          },
      
          {
            id: uuidv4(),
            sku: 8552515751438644,
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L", "XL", "XXL"],
            price: 10.9
          },
      
          {
            id: uuidv4(),
            title: "Sphynx Tie Dye Grey T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L", "XL", "XXL"],
            price: 10.9
          },
      
          {
            id: uuidv4(),
            title: "Danger Knife Grey",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L"],
            price: 14.9
          },
      
          {
            id: uuidv4(),
            sku: 876661122392077,
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L"],
            price: 14.9
          },
      
          {
            id: uuidv4(),
            sku: 9197907543445677,
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["XL"],
            price: 25.9
          },
      
          {
            id: uuidv4(),
            title: "Tso 3D Short Sleeve T-Shirt A",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["X", "L", "XL"],
            price: 10.9
          },
      
          {
            id: uuidv4(),
            sku: 6090484789343891,
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["XL", "XXL"],
            price: 49.9
          },
      
          {
            id: uuidv4(),
            title: "Crazy Monkey Black T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["S"],
            price: 22.5
          },
      
          {
            id: uuidv4(),
            sku: 5619496040738316,
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["XL"],
            price: 18.7
          },
      
          {
            id: uuidv4(),
            title: "Crazy Monkey Grey",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["L", "XL"],
            price: 134.9
          },
      
          {
            id: uuidv4(),
            title: "On The Streets Black T-Shirt",
            image: "../assets/img/10547961582846888_2.jpg",
            availableSizes: ["L", "XL"],
            price: 49.0
          }
    ])

    const [filters] = useState(["XS","S","M","ML","L","XL","XXL"])

    return(
        <Context.Provider value={{products,filters}}>
            {props.children}
        </Context.Provider>
    )
}

export default ProductsProvider;
