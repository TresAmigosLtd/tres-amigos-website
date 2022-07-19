import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container className="h-screen flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white animate-cursor">
              We are your <span className="text-gradient-all">engineering</span> team
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Three software engineers ready to build, scale and run high-performing engineering teams, to make businesses succeed.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="#services">
                  <a
                    className="px-8 py-4 text-lg font-medium text-center dark:text-gray-800 dark:bg-white text-white bg-gray-800 rounded-md ">
                    Services
                  </a>
              </Link>
              <Link href="#aboutus">
                  <a
                    className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <span> About us</span>
                  </a>
              </Link>
            </div>
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
