"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  return (
    <main>
      <nav className="navigator">
        <ul className="settings-nav">
          <li className="settings-nav-item">user name</li>
          <li className="settings-nav-item ">
            <div>settings</div>
            <div>logout</div>
          </li>
        </ul>
      </nav>

      <div className="recipe-list-nav">{/*  */}</div>
      <div className="recipe-info">right bar contains info for recipe</div>
    </main>
  );
}
