import React from 'react';

const FirstPage = ({ selected }) => {
  const nama_skpd = [...new Set(selected.map(item => item.nama_skpd))];
  return (
    <div className="min-w- flex-row mx-5 px-5">
      <h4>Filter :</h4>
      <div className="flex flex-wrap border">
        {nama_skpd.map((skpd, i) => (
          <div
            className="flex-initial mx-1 my-2 p-5 text-sm border border-gray-800"
            key={i}
          >
            {skpd}
          </div>
        ))}
      </div>
      <br />
      <br />
      <h4>Jumlah Kegiatan : {selected.length}</h4>
      <table className="align-self-center table-auto min-w-full border">
        <thead>
          <tr>
            <th className="mx-5 p-5 border border-gray-900">No.</th>
            <th className="mx-5 p-5 border border-gray-900">SKPD</th>
            <th className="mx-5 p-5 text-left border border-gray-900">
              Nama Sub Kegiatan
            </th>
            <th className="mx-5 p-5 border border-gray-900">Pagu</th>
            <th className="mx-5 p-5 border border-gray-900"> </th>
          </tr>
        </thead>
        <tbody>
          {selected.map((item, i) => (
            <tr key={i}>
              <td className="p-5 border border-gray-600">{i + 1}</td>
              <td className="p-5 border border-gray-600">{item.nama_skpd}</td>
              <td className="p-5 border border-gray-600">
                {item.nama_sub_giat}
              </td>
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

export default FirstPage;
