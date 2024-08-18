import React from "react";

const HorizontalDivider = ({ margin }: { margin: string }) => {
  return <div className={`border-t border-gray-600 ${margin}`}></div>;
};

export default HorizontalDivider;
