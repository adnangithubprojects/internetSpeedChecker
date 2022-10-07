import React, { useState, useEffect } from "react";
import logo from "../asset/images/bbt.png";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import "./style.css";

export default function Home() {
  const [Speed, setSpeed] = useState({});
  const [Process, setProcess] = useState(true);
  const reload = () => {
    setProcess(true);
    axios
      .get("http://localhost:7000/speedtest")
      .then((res) => {
        setSpeed(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProcess(false);
      });
  };
  useEffect(() => {
    reload();
  }, []);
  return (
    <div className=" h-screen   flex flex-col justify-between items-center   ">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="upload"
            className="absolute  top-2 left-2 md:top-3   md:left-5 w-28 h-[110px]"
          />
        </Link>
        <h1 className="text-3xl sm:text-4xl leading-7 pt-8 text-[#2c479a] capitalize font-bold ">
          Beta Internet Tester
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-3xl">Your Internet Speed is</p>
        <div className="flex justify-center items-center ">
          {!Process ? (
            <div>
              <p className="text-7xl  w-auto ">{Speed.download}</p>
              <p className="text-4xl font-bold pt-8">Mbps</p>
            </div>
          ) : (
            <div class="container">
              <div class="loading">
                <span></span>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={reload}
          className="flex text-sm font-bold p-3 my-1 border-2 border-[#2c479a]  hover:bg-[#2c479a] transition-all duration-300 hover:text-white rounded-lg  "
        >
          <svg class=" animate-spin ..." viewBox="0 0 24 24"></svg>
          Reload
        </button>

        <div className=" h-[215px] flex gap-10 items-center ">
          <p className="flex flex-col items-start gap-2 capitalize text-xl">
            download:
            <span className="text-4xl">
              {!Process ? (
                <div>
                  {Speed.download} <span className="text-xl"> Mbps</span>
                </div>
              ) : (
                <div class="container">
                  <div class="loading">
                    <span></span>
                  </div>
                </div>
              )}
            </span>
          </p>
          <p className="flex flex-col items-start gap-2 capitalize text-xl">
            ping:
            <span className="text-4xl">
              {!Process ? (
                <div>
                  {Speed.ping} <span className="text-xl"> ms</span>
                </div>
              ) : (
                <div class="container">
                  <div class="loading">
                    <span></span>
                  </div>
                </div>
              )}
            </span>
          </p>
          <p className="flex flex-col items-start gap-2 capitalize text-xl">
            upload:
            <span className="text-4xl">
              {!Process ? (
                <div>
                  {Speed.upload} <span className="text-xl"> Mbps</span>
                </div>
              ) : (
                <div class="container">
                  <div class="loading">
                    <span></span>
                  </div>
                </div>
              )}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
