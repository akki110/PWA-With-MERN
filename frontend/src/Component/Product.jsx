import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [data, setData] = useState({});
    const productId = useParams();

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/${productId.id}`);
        if(response.status === 200){
          setData(response.data.data);
        }
        else {
          console.error("Failed to fetch product");
        }
      }
      catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    useEffect(() => {
      fetchProduct();
    },[]);

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-start">
      <div className="w-9/12 flex flex-col justify-center items-center py-4">
        <h2 className="text-center text-3xl uppercase">Product View</h2>
        <form className="w-full max-w-2xl mt-2">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="w-full mb-3 flex space-x-4">
              <p className="block text-md font-medium text-gray-900">
                Product Name:
              </p>
              <p className="block text-md font-medium text-gray-900">
                {data.name}
              </p>
            </div>

            <div className="w-full mb-3 flex space-x-4">
              <p className="block text-md font-medium text-gray-900">
                Product Price:
              </p>
              <p className="block text-md font-medium text-gray-900">₹{data.price}</p>
            </div>

            <div className="w-full mb-3 flex space-x-4">
              <p className="block text-md font-medium text-gray-900">
                Product Description:
              </p>
              <p className="block text-md font-medium text-gray-900">
                {data.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <a href="/" className="block text-md font-medium text-gray-900">
              Back to list
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
