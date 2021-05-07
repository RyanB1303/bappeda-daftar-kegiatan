import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../provider/store';
import FirstPage from './FirstPage';

// TODO : try sort tahun
const Home = () => {
  const { wilayah, tahun, data } = useContext(GlobalContext);
  // unique data
  const [selected, setSelected] = useState(0);
  const set_of_skpd = [
    ...new Map(data.map(item => [item['id_skpd'], item])).values()
  ];
  const selectHandler = e => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1 className="text-center text-5xl bg-gray-100">{wilayah}</h1>
      <p>Tahun : {`${tahun},`}</p>
      <select name="nama_skpd" id="skpd" onChange={selectHandler}>
        <option value="0">Pilih SKPD</option>
        {set_of_skpd.map((item, i) => (
          <option value={item.id_skpd} key={i}>
            {item.nama_skpd}
          </option>
        ))}
      </select>
      <br />
      <FirstPage selected={selected} />
    </div>
  );
};

export default Home;
