"use client";

import "@aws-amplify/ui-react/styles.css";
import "@/app/globals.css";
import React, { useState } from "react";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import "@cloudscape-design/global-styles/index.css"; // Import Cloudscape global styles

export default function Navigator() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const navItems = [
      { label: "Household", href: "/household" },
      { label: "Ingredients", href: "/ingredients" },
      { label: "Stock", href: "/stock" },
      { label: "Recipes", href: "/recipes" },
      { label: "Menus", href: "/menus" },
      { label: "Shopping List", href: "/shopping-list" },
      { label: "Supermarkets", href: "/supermarkets" },
      { label: "Discounts", href: "/discounts" },
    ];
  
    const router = useRouter();
  
    async function handleSignOut() {
      await signOut();
      router.push("/login");
    }

  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <a href="/">MyApp</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {/* Burger icon */}
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
          <span className="burger-icon"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <button type="button" onClick={handleSignOut}>
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
