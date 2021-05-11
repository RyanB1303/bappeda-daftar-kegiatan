import React, { useContext } from 'react';
import { GlobalContext } from '../provider/store';
import FirstPage from './FirstPage';
import FilterPage from './FilterPage';

// TODO : try sort tahun
const Home = () => {
  const { wilayah, tahun, data, error } = useContext(GlobalContext);
  // const [selected, setSelected] = useState(0);
  // const [filteredData, setFilteredData] = useState([]);
  // const set_of_skpd = [
  //   // untuk select option skpd
  //   ...new Map(data.map(item => [item['id_skpd'], item])).values()
  // ];
  // const set_id_program = [
  //   // untuk select option program
  //   ...new Map(data.map(item => [item['id_program'], item])).values()
  // ];
  // const handleSelectSkpd = e => {
  //   const skpd = parseInt(e.target.value);
  //   setSelected(skpd);
  // };
  // const handleSelectProgram = e => {
  //   const skpd = parseInt(e.target.value);
  //   setSelected(prevState => ({ ...prevState, id_program: skpd }));
  // };

  // useEffect(() => {
  //   // const newFilter = data.filter(item => {
  //   //   for (let key in selected) {
  //   //     if (item[key] === undefined || item[key] !== selected[key])
  //   //       return false;
  //   //   }
  //   //   return true;
  //   // });
  //   const newFilter = data.filter(item => item.id_skpd === selected);
  //   setFilteredData(newFilter);
  // }, [data, selected]);

  return (
    <div>
      <h1 className="title text-center text-5xl bg-gray-100">{wilayah}</h1>
      <div className="app-content min-w- flex-row mt-5 mx-5 px-5">
        <p>Tahun : {`${tahun},`}</p>
        {/* <select
        name="nama_skpd"
        id="skpd"
        onChange={handleSelectSkpd}
        className="mx-5 my-2 p-2"
      >
        <option value="0">Pilih SKPD</option>
        {set_of_skpd.map((item, i) => (
          <option value={item.id_skpd} key={i}>
            {item.nama_skpd}
          </option>
        ))}
      </select> */}
        {/* <select
        name="id_program"
        id="program"
        onChange={handleSelectProgram}
        className="mx-5 my-2 p-2"
      >
        <option value={selected}>Pilih Program</option>
        {set_id_program.map((item, i) => (
          <option value={item.id_program} key={i}>
            {item.nama_program}
          </option>
        ))}
      </select> */}
        {error.isError && (
          <h2 className="text-red-500 text-xl font-bold">{error.message}</h2>
        )}
        <br />
        {/* {filteredData && <FirstPage selected={filteredData} />} */}
        <FilterPage />
      </div>
    </div>
  );
};

export default Home;
