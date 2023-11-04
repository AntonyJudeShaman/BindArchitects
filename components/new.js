import React from "react";
import "@/styles/card.css";
import Link from "next/link";

function Card() {
  return (
    <>
    <div className="">
      <ul id="cards">
        <Link href="/projects/visoreopticals" className="card  w-full" id="card1">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                Visore Optical
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Retail</span>
              </div>

              <div className="flex  ">
                <span className="font-heading ml-10  text-2xl mb-3">2023</span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/projects/remycinemas" className="card" id="card2">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Remy Cinemas</h2>
            </div>
            <div className="flex grid md:grid-cols-3 max-w-[80rem] grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  FACADE Design
                </span>
              </div>
              <div className="flex ">
                <span className="font-heading  ml-10 text-2xl mb-3">
                  Entertainment
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading ml-10  text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/grandentrance" className="card" id="card3">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                Grand Entrance
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 max-w-[80rem] grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Conceptual</span>
              </div>
              <div className="flex ">
                <span className="font-heading  ml-10 text-2xl mb-3">
                  Buddha Courtyard
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading ml-10  text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
       
        <Link href="/projects/delphiderma" className="card" id="card4">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                Delphi Derma Clinic
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Healthcare</span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2023</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/ykck" className="card" id="card5">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">YKCK</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">F&B</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2023</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/ccbm" className="card" id="card6">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">CCBM</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Commercial</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Architectural Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
       
        <Link href="/projects/duplexresidence" className="card" id="card7">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                Duplex Residence
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Residential</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Project Management
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/bindoffice" className="card" id="card8">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Bind Office</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Office</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2021</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/iyerdelights" className="card" id="card9">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Iyer Delights</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">F&B</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2018</span>
              </div>
            </div>
          </div>
        </Link>

      </ul>
    </div>
    <div className="container mt-10 mb-10">
      
    <ul id="cards2">
    <Link href="/projects/sportszone" className="card" id="card10">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Sports Zone</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
             
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Retail</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Interior Design</span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2017</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/mokshabar" className="card" id="card11">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Moksha Bar</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">F&B</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/chettinaduhome" className="card" id="card12">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                Chettinadu Home
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">F&B</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Residential</span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022 </span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/arrahmancafe" className="card" id="card13">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
                AR Rahman Cafe
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">F&B</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Interior Design</span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2021 </span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/casagrandbudget" className="card" id="card14">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">
              Casa Grand - Budget Interior
              </h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Interior Design</span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/projects/casagrandluxury" className="card" id="card15">
          <div className="card-body  max-w-[80rem] border border-zinc-950 justify-center ml-20 flex-col flex ">
            <div className="flex flex-col justify-center ml-20 max-w-[80rem]">
              <h2 className=" font-heading md:text-3xl ml-20">Casa Grande- Luxury Interior</h2>
            </div>
            <div className="flex grid md:grid-cols-3 grid-cols-2 text-right mt-20 leading-normal sm:leading-8">
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">Commercial</span>
              </div>
              <div className="flex ">
                <span className="font-heading  text-2xl mb-3">
                  Interior Design
                </span>
              </div>
              <div className="flex  ">
                <span className="font-heading   text-2xl mb-3">2022</span>
              </div>
            </div>
          </div>
        </Link>
        </ul>
    </div>
    </>
  );
}

export default Card;
