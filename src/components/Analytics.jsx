import React from "react";
import Laptop from "./laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"></img>
        <div className="flex flex-col justify-center p-2">
          <p className="text-green-500 font-bold">DATA ANALAYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-6 ">Manage Data Analaytics Centrally</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially
          </p>
          <button className='bg-black text-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 hover:bg-slate-500 py-3  md:mx-0 '>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
