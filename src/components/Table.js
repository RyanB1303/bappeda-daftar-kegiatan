import React from 'react';
// import NewFilterInput from './NewFilterInput';

const Table = ({ filter, handleChange }) => {
  return (
    <div>
      <table className="align-self-center table-auto min-w-full border">
        <thead>
          <tr>
            <th className="mx-5 p-5 border border-gray-400">No.</th>
            <th className="mx-5 p-5 border border-gray-400">SKPD</th>
            <th className="mx-5 p-5 text-left border border-gray-400">
              Nama Sub Kegiatan
            </th>

            <th className="mx-5 p-5 border border-gray-400">ID Sub Kegiatan</th>
            <th className="mx-5 p-5 border border-gray-400">Tahun Kegiatan</th>
            <th className="mx-5 p-5 border border-gray-400">Pagu</th>
            <th className="mx-5 p-5 border border-gray-400">Filter </th>
          </tr>
        </thead>
        <tbody>
          {filter.map((item, i) => (
            <tr key={i} className="odd:bg-gray-200">
              <td className="p-5 text-center border border-gray-400">
                {i + 1}
              </td>
              <td className="p-5 border border-gray-400">{item.nama_skpd}</td>
              <td className="p-5 border border-gray-400">
                {item.nama_sub_giat}
              </td>
              <td className="p-5 text-center border border-gray-400">
                {item.id_sub_giat}
              </td>
              <td className="p-5 text-center border border-gray-400">
                {item.tahun}
              </td>
              <td className="p-5 border border-gray-400">
                {item.pagu &&
                  item.pagu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </td>
              <td className="p-5 text-center border border-gray-400">
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

export default Table;