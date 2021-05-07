import React from 'react';

const FirstPage = ({ selected }) => {
  const nama_skpd = [...new Set(selected.map(item => item.nama_skpd))];
  return (
    <div className="container flex justify-center p-5">
      <div className="tempat-filter p-5 border">
        <h4>Filter :</h4>
        <h1 className="center mt-5 p-5 text-lg text-sm border border-gray-800">
          {nama_skpd}
        </h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="mx-5 p-5">Nama Sub Kegiatan</th>
            <th className="mx-5 p-5">Pagu</th>
          </tr>
        </thead>
        <tbody>
          {selected.map((item, i) => (
            <tr key={i}>
              <td className="mx-5 p-5">{item.nama_sub_giat}</td>
              <td className="mx-5 p-5">{item.pagu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstPage;
