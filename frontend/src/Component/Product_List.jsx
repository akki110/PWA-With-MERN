import React, { useEffect, useState } from "react";
import axios from "axios";

export const Product_List = () => {
  const [data, setData] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}`, data);
      if (response.status === 200) {
        setData(response.data.data);
        console.log("Product List:", response.data.data);
      } else {
        console.error("Failed to fetch product list");
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if(!confirmDelete) return;
    try{
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      if(response.status === 200){
        alert("Product Deleted Successfully");
        fetchList();
      }
      else{
        console.error("Failed to delete product");
      }
    }
    catch(error){
      console.error("Error deleting product:", error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-slate-200 flex justify-center items-start p-2 sm:p-4">
  <div className="w-full sm:w-9/12 flex flex-col justify-center items-center py-4">
    <h2 className="text-center text-2xl sm:text-3xl uppercase font-semibold mb-4">Product List</h2>

    <div className="w-full overflow-x-auto bg-white shadow-md rounded-md">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-violet-500 text-white text-sm sm:text-base">
            <th className="p-2 whitespace-nowrap">ID</th>
            <th className="p-2 whitespace-nowrap">Name</th>
            <th className="p-2 whitespace-nowrap">Price</th>
            <th className="p-2 whitespace-nowrap hidden sm:table-cell">Description</th>
            <th className="p-2 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No Products Available
              </td>
            </tr>
          ) : (
            data.map((product, i) => (
              <tr key={i} className="border-t border-gray-200 text-sm sm:text-base">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </td>
                <td className="p-2 hidden sm:table-cell">{product.description}</td>
                <td className="p-2 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`/single/${product._id}`}
                    className="btn bg-indigo-600 hover:bg-indigo-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    View
                  </a>
                  <a
                    href={`/update/${product._id}`}
                    className="btn bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>

    <a
      href="/add"
      className="mt-4 bg-sky-500 rounded text-white hover:bg-sky-400 px-4 py-2 text-sm sm:text-base"
    >
      Add Product
    </a>
  </div>
</div>

    </>
  );
};
