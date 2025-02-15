"use client";
import { usePathname } from "next/navigation";
import NavBar from "app/Components/navbar";
import Nav from "app/Components/nav";

export default function CondicionalNavBar({ children }) {
  const pathname = usePathname(); // Obtener la ruta actual

  return (
    <div className="min-h-full">
      {/* Renderizar NavBar solo si NO estamos en la página de inicio */}
      {pathname !== "/" && <NavBar />}
      <Nav />
      {children}
    </div>
  );
}
