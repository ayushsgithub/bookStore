import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
    </div>
  );
};

export default Spinner;
