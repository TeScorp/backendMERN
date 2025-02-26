import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="">
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row my-10 gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ex vel
            urna egestas aliquam. Praesent dolor velit, rhoncus et lorem vel,
            feugiat maximus dui.
          </p>
          <p className="">
            Nam arcu risus, dignissim eu arcu ut, condimentum tempus augue. Duis
            in imperdiet lacus. Donec vitae laoreet massa, tincidunt tristique
            nulla. Ut eleifend pharetra arcu vel suscipit. Fusce lacinia, ligula
            at aliquet venenatis, dolor neque iaculis diam, et gravida nulla
            massa pulvinar ipsum.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p className="">
            Mauris urna odio, sollicitudin vitae tincidunt sit amet, consequat
            at ligula. Aenean mauris turpis, maximus eget quam quis, gravida
            semper elit. Ut placerat tempor leo eu bibendum.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="">
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your area
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm-py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you to stay on top of
            your health
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
