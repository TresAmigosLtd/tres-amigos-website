import React from "react";
import Container from "../container";

export default function Footer() {
  return (
    <div className="relative h-screen">
      <Container>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by Tres Amigos
        </div>
      </Container>
    </div>
  );
}



