import React from 'react';

const FirstPage = ({ data }) => {
  return (
    <div className="container p-5">
      <table>
        <thead>
          <tr>
            <th>Nama SKPD</th>
            <th>Nama Urusan</th>
            <th>Pagu</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.nama_skpd}</td>
              <td>{item.nama_urusan}</td>
              <td>{item.pagu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstPage;
