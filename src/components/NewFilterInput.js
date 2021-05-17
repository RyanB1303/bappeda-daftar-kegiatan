import React from 'react';

const NewFilterInput = () => {
  const addFilterHandler = e => {
    // setFilterName(e.target.value);
    console.log(e.target.value);
  };

  const newFilter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(e.target.value);
      // const filterName = e.target.value;
      // const newTag = {
      //   tagId: 56352, // TODO Buat programmatically tagId dengan entah apa
      //   tagName: filterName,
      //   items: selectedKegiatan
      // };
      // console.log('newTag :>> ', newTag); // TODO Ganti dengan save to localStorage atau local json
      // setNewFilt(prevState => [...prevState, newTag]); // or just Take from newTag make useEffect
    }
  };

  return (
    <>
      <input
        type="text"
        name="filterName"
        id="filterName"
        placeholder="Input new filter"
        className="flex-initial mx-1 my-2 p-5 text-gray-900 text-sm border-4 border-blue-400"
        onChange={addFilterHandler}
        onKeyPress={newFilter}
      />
    </>
  );
};

export default NewFilterInput;
