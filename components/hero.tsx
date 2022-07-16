import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              We are your engineering team.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Three software engineers ready to build, scale and run high-performing engineering teams, to make businesses succeed.
            </p>

            {/*<div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">*/}
            {/*  <a*/}
            {/*    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener"*/}
            {/*    className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">*/}
            {/*    Services*/}
            {/*  </a>*/}
            {/*  <a*/}
            {/*    href="https://github.com/web3templates/nextly-template/"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener"*/}
            {/*    className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">*/}
            {/*    <span> About us</span>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
