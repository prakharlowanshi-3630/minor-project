import React,{useState, useEffect} from 'react'
import HarvestCard from '../Components/Search Harvest/HarvestCard'
import HarvestList from '../Components/Search Harvest/HarvestList'

const SearchHarvest = () => {
  const [search,setSearch] = useState('');
  const [harvests,setHarvests] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:3000/harvest/getAllHarvest`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response.data.message)
        }
        return response.json();
      })
      .then((data) => {
        setHarvests(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [search]);
  // const harvests = [
  //   {
  //     _id :'1',
  //      crop:'Gram',
  //      fullName:'Ram',
  //      expectedHarvestDate:'10/1/23',
  //      quantity:'3000',
  //      amountPerKg:'40'
  
  //   }
  // ]
  return (
    <div className='max-w-[1240px] mt-[15px] w-full h-screen mx-auto text-center flex justify-center text-white'>
      <div className='w-full h-auto flex flex-col'>
       <div className='w-full flex justify-center'> 
        <form className='w-1/2' onSubmit={(e) => e.preventDefault()}>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search By Crop Name" required/>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
           </div>
        </form>
       </div>

        <div className='w-full'>
        <div className='w-full h-auto mt-5'>
    <a  className="w-4/5 h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4 w-full">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Wheat</h5>
          </div>
            <div className='w-full text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>Raja Singh</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>10/1/24</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>300</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>400</span></p>
            <div className='flex flex-row justify-end w-full'>
            <a href='' id='' >
            <button  className='bg-green-500 shadow-4xl w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>View Farmer</button>     
            </a>
            <a >
            <button  className='bg-green-500 shadow-4xl w-[150px] ml-4 rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy</button>     
            </a>
            </div>
          </div>
        </div>
    </a>
    </div>
   {/* 2nd */}
    <div className='w-full h-auto mt-5'>
    <a  className="w-4/5 h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4 w-full">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Wheat</h5>
          </div>
            <div className='w-full text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>Raja Singh</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>10/1/24</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>300</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>400</span></p>
            <div className='flex flex-row justify-end w-full'>
            <a href='' id='' >
            <button  className='bg-green-500 shadow-4xl w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>View Farmer</button>     
            </a>
            <a >
            <button  className='bg-green-500 shadow-4xl w-[150px] ml-4 rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy</button>     
            </a>
            </div>
          </div>
        </div>
    </a>
    </div>

    {/* 3rd */}
    <div className='w-full h-auto mt-5'>
    <a  className="w-4/5 h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4 w-full">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Wheat</h5>
          </div>
            <div className='w-full text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>Raja Singh</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>10/1/24</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>300</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>400</span></p>
            <div className='flex flex-row justify-end w-full'>
            <a href='' id='' >
            <button  className='bg-green-500 shadow-4xl w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>View Farmer</button>     
            </a>
            <a >
            <button  className='bg-green-500 shadow-4xl w-[150px] ml-4 rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy</button>     
            </a>
            </div>
          </div>
        </div>
    </a>
    </div>
              {/* 4rd  */}
              <div className='w-full h-auto mt-5'>
    <a  className="w-4/5 h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4 w-full">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Wheat</h5>
          </div>
            <div className='w-full text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>Raja Singh</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>10/1/24</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>300</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>400</span></p>
            <div className='flex flex-row justify-end w-full'>
            <a href='' id='' >
            <button  className='bg-green-500 shadow-4xl w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>View Farmer</button>     
            </a>
            <a >
            <button  className='bg-green-500 shadow-4xl w-[150px] ml-4 rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy</button>     
            </a>
            </div>
          </div>
        </div>
    </a>
    </div>
        {/* fngksgnkjsdfngdjo */}
        {
        <HarvestList harvests={harvests.filter(harvest => (harvest.crop.toLowerCase()).includes(search.toLowerCase()))}/>}
        </div>


      </div>
    </div>
  )
}

export default SearchHarvest