import React, { useState, useEffect } from 'react';
import { tags } from '../data/Filter';
// App Flow
/* 
  1. App get data from API and save it in global state -> in provider/store.js
  2. User make tag in data
  3. Filter will trigger this amount of effect
  4.1 Store the tags to localStorage with schema like in data/Filter.js
  4.2 The tags than extracted into several state x---x unimportant , skip this
  4.3 Tags then will render and used as filter in data api

 */
// TODO : REFACTOR THIS !!!!!!!!!!!!!!!!!
const FilterPage = ({ data }) => {
  const [kegiatan, setKegiatan] = useState([]); // array kegiatan yang di filter , default kosong
  const [filter, setFilter] = useState([]); // hasil penyaringan data
  const [tagWanted, setTagWanted] = useState([]); // tag apa yang diinginkan
  const [selectedKegiatan, setSelectedKegiatan] = useState([]); // handle state checkbox kegiatan. TODO refresh on submit
  const [filterName, setFilterName] = useState([]); // membuat nama / filter baru , handler input text. TODO rename this to something
  // const [newFilt, setNewFilt] = useState([]);
  useEffect(() => {
    filter.length === 0 && setFilter(data);
  }, [filter, data]);

  useEffect(() => {
    // effect akan berjalan setiap kali user memilih tag / filter
    // filterWanter akan mengecek apakah ada tagWanted dengan id x di dalam item.tagId
    // filtered merupakan hasil penyaringan , yang akan diubah ke flat array
    // lalu simpan filtered kedalam kegiatan

    const filterWanter =
      tagWanted && tags.filter(item => tagWanted.includes(item.tagId));
    const filtered = filterWanter
      .map(item => Object.values(item['items']))
      .flat();
    setKegiatan(filtered); // simpan ke kegiatan untuk dijadikan filter diatas
  }, [tagWanted]);

  useEffect(() => {
    // effect akan berjalan setiap kali ada kegiatan baru masuk
    // effect akan melakukan penyaringan data ( filter ) dan menyimpannya di filter state
    const filters = data.filter(item => {
      return kegiatan.includes(item.id_sub_giat);
    });
    setFilter(filters);
  }, [data, kegiatan]);

  const filterClickHandler = d => {
    // handle click tombol filter yang sudah ada untuk mengirimkan id ke tagWanted
    // setTagWanted(prevState => [...prevState, d]);
    setTagWanted([d]);
  };

  const handleChange = e => {
    // checkbox handler , untuk track id yang dimasukkan lewat checkbox
    const sub_giat = e.target.value;
    setSelectedKegiatan(prevState => [...prevState, sub_giat]);
  };

  const addFilterHandler = e => {
    setFilterName(e.target.value);
  };

  const newFilter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // const filterName = e.target.value;
      const newTag = {
        tagId: 56352, // TODO Buat programmatically tagId dengan entah apa
        tagName: filterName,
        items: selectedKegiatan
      };
      console.log('newTag :>> ', newTag); // TODO Ganti dengan save to localStorage atau local json
      // setNewFilt(prevState => [...prevState, newTag]); // or just Take from newTag make useEffect
    }
  };
  return (
    <div className="min-w- flex-row mx-5 px-5">
      <h4>Filter :</h4>
      <div className="flex flex-wrap p-3 border border-black">
        {tags.length && // TODO : Add highlihgt class to indicate filter selected
          tags.map(tag => (
            <div
              className="flex-initial mx-1 my-2 p-5 text-sm border border-gray-800 cursor-pointer"
              key={tag.tagId}
              onClick={() => filterClickHandler(tag.tagId)}
            >
              {tag.tagName}
            </div>
          ))}
        <input
          type="text"
          name="filterName"
          id="filterName"
          placeholder="Input new filter"
          className="flex-initial mx-1 my-2 p-5 text-gray-900 text-sm border-4 border-blue-400"
          onChange={addFilterHandler}
          onKeyPress={newFilter}
        />
      </div>
      <br />
      <br />
      <h4>Jumlah Kegiatan : {filter.length}</h4>
      <table className="align-self-center table-auto min-w-full border">
        <thead>
          <tr>
            <th className="mx-5 p-5 border border-gray-900">No.</th>
            <th className="mx-5 p-5 border border-gray-900">SKPD</th>
            <th className="mx-5 p-5 text-left border border-gray-900">
              Nama Sub Kegiatan
            </th>

            <th className="mx-5 p-5 border border-gray-900">ID Sub Kegiatan</th>
            <th className="mx-5 p-5 border border-gray-900">Tahun Kegiatan</th>
            <th className="mx-5 p-5 border border-gray-900">Pagu</th>
            <th className="mx-5 p-5 border border-gray-900">Filter </th>
          </tr>
        </thead>
        <tbody>
          {filter.map((item, i) => (
            <tr key={i}>
              <td className="p-5 text-center border border-gray-600">
                {i + 1}
              </td>
              <td className="p-5 border border-gray-600">{item.nama_skpd}</td>
              <td className="p-5 border border-gray-600">
                {item.nama_sub_giat}
              </td>
              <td className="p-5 text-center border border-gray-600">
                {item.id_sub_giat}
              </td>
              <td className="p-5 text-center border border-gray-600">
                {item.tahun}
              </td>
              <td className="p-5 border border-gray-600">
                {item.pagu &&
                  item.pagu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </td>
              <td className="p-5 text-center border border-gray-600">
                <input
                  type="checkbox"
                  name="sub_giat"
                  id={item.id_sub_giat}
                  value={item.id_sub_giat}
                  onChange={handleChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterPage;
