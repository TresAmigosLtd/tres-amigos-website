import React from "react";
import Container from "../container";

export default function Footer() {
  return (
    <div className="relative min-h-screen pt-4">
      <Container>

        <div className="my-8 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by Tres Amigos
        </div>
      </Container>
    </div>
  );
}



