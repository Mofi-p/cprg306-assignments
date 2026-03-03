"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    setMeals([]);
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <p className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-5">
        ✦ Meal ideas
      </p>

      {!ingredient ? (
        <>
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">Meal ideas</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Select any item in the list and find meals you can make with it.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-zinc-100 mb-1">
            Made with{" "}
            <span className="text-amber-400">{ingredient}</span>
          </h2>

          {meals.length === 0 ? (
            <p className="text-sm text-zinc-600 mt-3">No meal ideas available for this ingredient.</p>
          ) : (
            <ul className="mt-4 flex flex-col divide-y divide-zinc-800">
              {meals.map((meal) => (
                <li key={meal.idMeal} className="flex items-center gap-4 py-3">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-14 h-14 rounded-xl object-cover border border-zinc-800 shrink-0"
                  />
                  <span className="text-sm text-zinc-300 leading-snug">{meal.strMeal}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}