import React, { useState, useEffect } from 'react';
import { tags } from '../data/Filter';
import Table from '../components/Table';
// import NewFilterInput from '../components/NewFilterInput';
import Filter from '../components/FilterButton';
import ReactPaginate from 'react-paginate';

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
  const [totalPagu, setTotalPagu] = useState('');
  useEffect(() => {
    filter.length === 0 && setFilter(data);
    const paguReducer =
      filter &&
      filter.reduce((a, b) => {
        return a + parseInt(b.pagu ?? 0);
      }, 0);
    console.log(
      'paguReducer :>> ',
      paguReducer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
    setTotalPagu(paguReducer);
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

  return (
    <div className="min-w- flex-row mx-5 px-5">
      <h4>Filter :</h4>
      <div className="flex flex-wrap p-3 border border-black">
        {tags.length && // TODO : Add highlihgt class to indicate filter selected
          tags.map((tag, index) => (
            <Filter
              key={index}
              tagId={tag.tagId}
              tagName={tag.tagName}
              filterClickHandler={filterClickHandler}
            />
          ))}
      </div>
      <br />
      <br />
      <div className="keterangan flex justify-between mb-3">
        <h4>Jumlah Kegiatan : {filter.length}</h4>
        <h4 className="space-x-5">
          Total Pagu : {''}{' '}
          {totalPagu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h4>
      </div>
      <Table filter={filter} handleChange={handleChange} />
    </div>
  );
};

export default FilterPage;
