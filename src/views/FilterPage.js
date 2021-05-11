import React, { useState, useEffect, useContext } from 'react';
import { tags } from '../data/Filter';
import { GlobalContext } from '../provider/store';

const FilterPage = () => {
  const { data } = useContext(GlobalContext);
  const [tags, setTags] = useState([]);
  const [items, setItems] = useState([]);
  const [giat, setGIat] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const tagKey = tags.map(item => Object.values(item['tagName']));
    const itemName = tags.map(item => Object.values(item['items'])); // TODO rename itemName to kegiatan key
    const giatKey = tags.map(item => Object.values(item));
    setGIat(giatKey);
    setTags(tagKey);
    setItems(itemName);

    // filter data
    const filter = data.filter(item => {
      return items[0].includes(item.id_sub_giat);
    });
    console.log('filter :>> ', items[0], filter);
    setFilter(filter);
  }, []);

  return (
    <div className="min-w- flex-row mx-5 px-5">
      <h4>Filter :</h4>
      <div className="flex flex-wrap border">
        {tags.map((tag, i) => (
          <div
            className="flex-initial mx-1 my-2 p-5 text-sm border border-gray-800"
            key={i}
          >
            {tag}
          </div>
        ))}
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
            <th className="mx-5 p-5 border border-gray-900"> </th>
          </tr>
        </thead>
        <tbody>
          {filter.map((item, i) => (
            <tr key={i}>
              <td className="p-5 border border-gray-600">{i + 1}</td>
              <td className="p-5 border border-gray-600">{item.nama_skpd}</td>
              <td className="p-5 border border-gray-600">
                {item.nama_sub_giat}
              </td>
              <td className="p-5 border border-gray-600">{item.id_sub_giat}</td>
              <td className="p-5 border border-gray-600">{item.tahun}</td>
              <td className="p-5 border border-gray-600">
                {item.pagu &&
                  item.pagu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </td>
              <td className="p-5 border border-gray-600">
                <input
                  type="checkbox"
                  name="sub_giat"
                  id={item.id_sub_giat}
                  value={item.id_sub_giat}
                />{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterPage;
