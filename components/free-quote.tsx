import React from "react";
import { LightBox } from "./light-box";

function FreeQuote() {
  return (
    <div className="mb-10 mt-10 p-6">
      <div className="relative overflow-hidden rounded-lg border border-r-blue-400 border-t-green-400 border-s-orange-400 border-b-purple-400 bg-background p-2 mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[75rem] md:grid-cols-1">
        <div className="flex  flex-col justify-between rounded-md p-6">
          <div className="  mt-1 text-center mx-auto d-block">
            <p className="text-4xl dmsans-bold font-semibold text-gradient" aria-label="Still have questions">
              Get a free quote
            </p>
            <LightBox className=" md:mt-5 mt-5 w-60 justify-center mx-auto" />
            <p className=" md:text-lg text-md  text-center mt-5  mb-5 text-muted-foreground dmsans">
            Contact us to get a free quote for your dream project. Our experts are here to
            bring your vision to life.
          </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default FreeQuote;
