import React from "react";
import { LightBox } from "./light-box";

function Questions() {
  return (
    <div className="mb-10 p-6">
      <div className="relative overflow-hidden rounded-lg border  border-r-blue-400 border-t-green-400 border-s-orange-400 border-b-purple-400 bg-background p-2 mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[75rem] md:grid-cols-1">
        <div className="flex  flex-col justify-between rounded-md p-6">
          <div className="  mt-1 text-center mx-auto d-block">
            <p className="text-5xl font-heading font-semibold text-gradient" aria-label="Still have questions">
              Any questions ?
            </p>
            <LightBox className=" md:mt-5 mt-5 w-80 mx-auto justify-center" />
            <p className=" md:text-lg my-font text-md max-w-[50rem] text-teal-400 text-center mt-5  mb-5  font-semibold">
            Unlock the door to your dream project today! Our experts are here to
            bring your vision to life. Reach out now and let&apos;s get started on
            your design journey.
          </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Questions;
