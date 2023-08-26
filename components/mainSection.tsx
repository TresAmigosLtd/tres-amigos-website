import React from "react";
import Container from "./container";

export default function MainSection(props) {
  return (
    <Container
      className={`${props.sticky ? 'sticky top-12 md:top-2 z-20 dark:bg-trueGray-900/60 backdrop-blur-lg pb-4 mb-8' : ''} scroll-mt-12 flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
      id={props.id}
    >

      {props.pretitle && (
        <div className="text-xs md:text-sm font-bold tracking-wider text-gray-300 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">
          {props.title}
        </h2>
      )}

      {props.subtitle && (
        <section className="max-w-2xl py-4 text-sm md:text-lg lg:text-xl leading-normal text-gray-500  dark:text-gray-300">
          {props.subtitle}
        </section>
      )}

      {props.children}
    </Container>
  );
}
