"use client";
import Image from "next/image";
import { useState } from "react";
import { render } from "react-dom";

export default function Home() {
  const [title, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setMaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    console.log(maintask);

    console.log(title);
    console.log(desc);
  };
  const deleteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setMaintask(copytask);
  };
  let renderTask = <h2>No task available</h2>;
  if (maintask.length > 0)
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className=" flex items-center justify-between ">
          <div className="flex items-center justify-between mb-4 w-1/2">
            <h1 className="text-red-600 font-bold text-2xl">{t.title}</h1>
            <h4 className="font-semibold text-green-900">{t.desc}</h4>
          </div>
          <button 
            onClick={() => {
              deleteHandler(i);
            }}
            className="text-xl bg-red-600 px-4 py-2 rounded text-white font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  return (
    <>
      <h1 className="bg-black text-white text-5xl  text-center p-5 font-semibold ">
        Arif's Todolist
      </h1>
      <form onSubmit={submitHandler} className="flex justify-between">
        <input
          type="text"
          className="text-xl p-2 border-4 border-green-500 px-2 py-2 m-8 w-1/4"
          placeholder="Enter task Heading here"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            settask(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-xl p-2 border-4 px-2 py-2 m-8 w-1/3 border-red-500"
          placeholder="Enter task that you want to perform"
          value={desc}
          onChange={(e) => {
            // console.log(e.target.value);
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white text-2xl font-bold p-3 rounded m-8">
          Add Task
        </button>
        <li></li>
      </form>
      <hr />
      <div className="p-8 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
//This is changed