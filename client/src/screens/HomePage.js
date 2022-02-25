import React from "react";
import Meal from "../components/Meal";

import meals from "../mealsdata";

export default function HomePage() {
  return (
    <div>
      <div className="row">
        {meals.map((meal) => {
          return (
            <div className="col-md-4 ">
              <div>
                <Meal meal={meal} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
