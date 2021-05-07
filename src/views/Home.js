import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../provider/store';
import FirstPage from './FirstPage';

// TODO : try sort tahun
const Home = () => {
  const { wilayah, tahun, data } = useContext(GlobalContext);
  // unique data
  // const data_id_skpd = data.map(item => ({
  //   id: item.id_skpd,
  //   nama: item.nama_skpd
  // }));
  const set_of_skpd = [
    ...new Map(data.map(item => [item['id_skpd'], item])).values()
  ];
  return (
    <div>
      <h1 className="text-center text-5xl bg-gray-100">{wilayah}</h1>
      <p>Tahun : {`${tahun},`}</p>
      <select name="nama_skpd" id="skpd">
        {set_of_skpd.map((item, i) => (
          <option value={item.id_skpd} key={i}>
            {item.nama_skpd}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Home;
