import React from "react";
import { LightBox } from "./light-box";

function Questions() {
  return (
    <div className="mb-10 p-6">
      <div className="relative overflow-hidden hover:bg-slate-950 rounded-lg border  border-zinc-400 text-muted-foreground p-2 mx-auto grid justify-center  gap-4 sm:grid-cols-1 md:max-w-[75rem] md:grid-cols-1">
        <div className="flex  flex-col justify-between rounded-md p-6">
          <div className="  mt-1 text-center mx-auto d-block">
            <p
              className="md:text-5xl text-4xl text-zinc-50 dmsans"
              aria-label="Still have questions"
            >
              Any questions ?
            </p>
            <LightBox className=" md:mt-5 mt-5 md:w-80 w-60 mx-auto justify-center" />
            <p className=" md:text-lg dmsans text-md max-w-[50rem] text-muted-foreground text-center mt-5  mb-5  font-semibold">
              Unlock the door to your dream project today! Our experts are here
              to bring your vision to life. Reach out now and let&apos;s get
              started on your design journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
