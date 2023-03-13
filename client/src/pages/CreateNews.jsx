import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import axios from "axios";
import { useState } from "react";

const CreateNews = () => {
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState();
  const [image, setImage] = useState();
  const [tag, setTag] = useState('news');
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let currentDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  console.log(currentDate);
  const publish = async () => {
    const result = await axios.post("http://localhost:8000/news", {
      publisher: localStorage.getItem("name"),
      title: title,
      paragraph: paragraph,
      imgUrl: image,
      tag: tag,
      date: currentDate,
      userId: localStorage.getItem("userId"),
    });
  
    if (result.status == 201) {
      navigate("/");
      alert("Blog published successfully");
    } else {
      alert("Blog failed validation error");
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer"
            width="70px"
            heigth="70px"
            src={logo}
            alt="logo"
          />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Description
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Paragraph
            </label>
            <textarea
              onChange={(e) => setParagraph(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 h-64"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Image
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image (url)"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Tag
            </label>
            <select name="tags" onChange={(e) => setTag(e.target.value)}>
              <option  value="news">
                News
              </option>
              <option
                
                value="entertainment"
              >
                Entertainment
              </option>
              <option  value="sports">
                Sports
              </option>
              <option
                
                value="lifeStyle"
              >
                Lifestyle
              </option>
              <option  value="video">
                Video
              </option>
            </select>
          </div>
          <div className="mt-6">
            <button
              type="Submit"
              onClick={publish}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-600"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNews;
