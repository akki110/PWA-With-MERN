import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Product_Add = () => {
  
  const [data, setData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const navigate = useNavigate();

    const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const resposne = await axios.post(`${import.meta.env.VITE_API_URL}`, data);
      if(resposne.status === 200){
        alert("Product Added Successfully");
        setData({
          name: "",
          price: "",
          description: ""});
          navigate("/");
      }
      else{
        console.error("Failed to add product");
      }
    }
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-start">
      <div className="w-9/12 flex flex-col justify-center items-center py-4">
        <h2 className="text-center text-3xl uppercase">Product Add</h2>
        <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="w-full mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="ptoduct-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      // value={data.name}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="w-full mb-3">
                  <label
                    htmlFor="price"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Price
                  </label>
                  <div className="mt-2">
                    <input
                      id="product-price"
                      name="price"
                      type="text"
                      autoComplete="product-price"
                      // value={data.price}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="w-full mb-3">
                  <label
                    htmlFor="product-description"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Description
                  </label>
                  <div className="mt-2">
                    <input
                      id="product-description"
                      name="description"
                      type="product-description"
                      autoComplete="product-description"
                      // value={data.description}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <a href="/"
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
