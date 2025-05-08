import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const TeaserGrid = ({ teasers }: { teasers: ReactNode[] }) => {
  if (!teasers || teasers.length === 0) {
    return null; // Return null if no teasers are provided
  }
  const gridCols = teasers.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  return (
    <div className={twMerge(" grid grid-cols-1 gap-4", gridCols)}>
      {teasers.map((teaser, index) => (
        <div key={index}>{teaser}</div>
      ))}
    </div>
  );
};

export default TeaserGrid;
