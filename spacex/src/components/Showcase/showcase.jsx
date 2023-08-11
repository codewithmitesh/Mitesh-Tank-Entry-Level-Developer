import React, { useEffect, useState } from 'react'
import bgImageTiles from '../../assets/Hero/BgImage2.jpg'
import fetchCapsuleData from '../../services/LandingAPI/apis'
const Showcase = () => {

    const [CapsuleData, setCapsuleData] = useState([])
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const capsuleStatusOptions = ['active', 'retired', 'unknown'];
    const typeOptions = ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];
    useEffect(() => {
        const fetchCapsules = async () => {
            const data = await fetchCapsuleData();
            // console.log(data)
            // setCapsuleData(data);
            const filteredResults = data.filter((capsule) => {
                return (
                    (status === '' || capsule.status === status) &&
                    (type === '' || capsule.type === type)
                );
            });

            setSearchResults(filteredResults);
        };
        fetchCapsules();
    }, [status, type])

    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const resultsPerPage = 5; // Number of results per page

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='w-full h-screen bg-black text-white p-6'
        >
            <div className='w-full h-screen bg-no-repeat bg-cover' style={
                {
                    backgroundImage: `url(${bgImageTiles})`
                }}>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-10">
                    {currentResults.map((item) => {
                        return (
                            <div key={item.capsule_serial} className="rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={'https://i.pinimg.com/564x/78/92/52/7892528fb153ceeb0c4d30932a95c767.jpg'} alt="Sunset in the mountains" />
                                <div className="px-4 py-4">
                                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  {item.details}</p>
                                </div>
                                <div className="px-1 pt-1 pb-1   sm:display-none  ">
                                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 sm:text-none   ">Status: {item.status} </span> */}
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">asf</p>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">Type: {item.type}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* Pagination links */}
                    {searchResults.length > resultsPerPage && (
                        <ul className="pagination">
                            {Array.from({ length: Math.ceil(searchResults.length / resultsPerPage) }).map((_, index) => (
                                <li key={index} className="page-item">
                                    <button className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </ div >
        </div >
    )
}

export default Showcase