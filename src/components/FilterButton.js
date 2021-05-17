import React from 'react';
// TODO : nama filter terpilih di buat button lucu gantiin checklist
// TODO : implementasi backend yang baru dibuat , untuk membuat tag baru harus disertai nama , dan item terpilih, tambahkan error checking
const Filter = ({ tagId, tagName, filterClickHandler }) => {
  return (
    <>
      <button
        className="flex-initial mx-1 my-2 p-5 w-40 focus:text-gray-200 hover:text-white text-sm hover:bg-purple-500 focus:bg-purple-700 active:bg-purple-800 border border-gray-800 focus:ring-purple-500 focus:ring-opacity-50 focus:ring-2"
        onClick={() => filterClickHandler(tagId)}
      >
        {tagName}
      </button>
    </>
  );
};

export default Filter;
