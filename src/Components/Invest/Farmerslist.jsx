import { useState, useEffect } from 'react';
import Farmercard from './Farmercard';

const Farmerslist = () => {
  const [farmersList, setFarmersList] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/user/getFarmers'; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot retreive Farmers List.');
        }
        return response.json();
      })
      .then((data) => {
        setFarmersList(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className='w-full py-12 columns-2'>
 
      {/* {farmersList.length > 0 ? (
        farmersList.map((farmer) => {
          if(farmer.crops.length > 0){
            return <Farmercard key={farmer._id} id={farmer._id} fullName={farmer.fullName} location={farmer.location} area={farmer.area} crops={farmer.crops}/>
          }
          else{
            return <></>;
          }
      })
      ) : (
        <p className='text-5xl font-extrabold text-gray-700'>No farmers data available.</p>
      )} */}
         <div className='w-full h-auto'>
    <a  className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[250px] rounded-xl h-[200px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div className="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Raja singh</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>Rice ,Wheat , Moong</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Harda</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>2 Acars</span></p>
            </div>
        </div>
    </a>
    </div>
    {/* 2nd */}
    <div className='w-full h-auto'>
    <a  className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[250px] rounded-xl h-[200px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div className="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Raja singh</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>Rice ,Wheat , Moong</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Harda</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>2 Acars</span></p>
            </div>
        </div>
    </a>
    </div>
    {/* 3rd */}
    <div className='w-full h-auto'>
    <a  className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[250px] rounded-xl h-[200px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div className="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Raja singh</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>Rice ,Wheat , Moong</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>Harda</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>2 Acars</span></p>
            </div>
        </div>
    </a>
    </div>
    </div>
  );
};

export default Farmerslist;
