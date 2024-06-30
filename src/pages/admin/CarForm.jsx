import React, { useState, useEffect } from "react";
import axios from "axios";

const CarForm = ({ onCarAdded, editingCar, setEditingCar }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    features: "",
    mileage: "",
    year: "",
    color: "",
    description: "",
    manufacturer: "",
    images: [],
  });

  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    if (editingCar) {
      setFormData({
        ...editingCar,
        features: editingCar.features.join(", "),
        images: editingCar.images || [],
      });
      setUploadedImages(editingCar.images || []);
    }
  }, [editingCar]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages([...uploadedImages, ...files]);
  };

  const removeImage = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  const uploadImages = async (images) => {
    const imageUrls = [];
    for (const image of images) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const response = await axios.post("http://localhost:5000/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageUrls.push(response.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrls = await uploadImages(uploadedImages);

    const carData = {
      ...formData,
      price: parseFloat(formData.price),
      features: formData.features.split(",").map((feature) => feature.trim()),
      mileage: parseFloat(formData.mileage),
      year: parseInt(formData.year),
      images: [...formData.images, ...imageUrls],
    };

    try {
      if (editingCar) {
        await axios.put(`http://localhost:5000/api/cars/${editingCar._id}`, carData);
      } else {
        await axios.post("http://localhost:5000/api/cars", carData);
      }
      onCarAdded();
      resetForm();
    } catch (error) {
      console.error("Error saving car:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      type: "",
      price: "",
      features: "",
      mileage: "",
      year: "",
      color: "",
      description: "",
      manufacturer: "",
      images: [],
    });
    setUploadedImages([]);
    setEditingCar(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="flex gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="type"
          >
            Type
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Upload Images
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            onChange={handleImageChange}
            multiple
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="features"
          >
            Features (comma-separated)
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="features"
            type="text"
            name="features"
            value={formData.features}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mileage"
          >
            Mileage
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mileage"
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Color
          </label>
          <input
            className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="color"
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="manufacturer"
        >
          Manufacturer
        </label>
        <input
          className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="manufacturer"
          type="text"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />
      </div>

      {/* Uploaded Images Preview Section */}
      {uploadedImages.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Uploaded Images
          </label>
          <div className="flex flex-wrap gap-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  className="w-32 h-32 object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-2"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {editingCar ? "Update Car" : "Add Car"}
        </button>
        {editingCar && (
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
             onClick={resetForm}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default CarForm;
