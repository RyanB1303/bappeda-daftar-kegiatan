import React from 'react';

const Filter = ({ tagId, tagName, filterClickHandler }) => {
  return (
    <>
      <div
        className="flex-initial mx-1 my-2 p-5 text-sm border border-gray-800 cursor-pointer"
        onClick={() => filterClickHandler(tagId)}
      >
        {tagName}
      </div>
    </>
  );
};

export default Filter;
