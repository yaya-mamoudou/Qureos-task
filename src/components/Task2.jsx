import React,{useState} from 'react'
import { Layout,Loader } from '.'
import styles from '../styles/task2.module.css'
import axios from 'axios'

export default function Task2() {

  const [text, setText] = useState('')
  const [toShow, setToShow] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const getMovieTitles = async (e) => {
    e.preventDefault()
    try {
    setIsSearching(true)
    const allPromises = [];
    let allTitles = [];

    Array(2)
      .fill(0)
      .forEach((element, index) => {
        allPromises.push(
          axios.get(
            `https://jsonmock.hackerrank.com/api/movies/search/?Title=${text}&page=${index + 1}`
          )
        );
      });

    let response = await Promise.all(allPromises);
    await response.forEach(({ data: { data } }) => {
      data.length > 0 &&
        data.forEach((movie) => {
          allTitles.push(movie.Title);
        });
    });

    allTitles = await [...allTitles.sort()];

      setIsSearching(false)
    setToShow(allTitles)
    setText('')
  } catch (error) {
    console.log(error.message);
  }
};

  const handleText = (e) => {
    setText(e.target.value)
  }

  const renderList = toShow.map((data, index) => <div className='bg-slate-200 font-normal py-2 px-3 text-left rounded-lg'>{`${index+1} - ${data}`}</div>)

  return (
    <Layout>
      <form onSubmit={getMovieTitles}>
            <div className='flex flex-col'>
                <div className='space-x-2 d-flex '>
                    <input onChange={handleText} value={text} placeholder='Enter movie title' className="border-solid border-slate-400 border-[2px] flex-grow p-2 rounded-md" type="text" />
                    <button onClick={getMovieTitles} type='button' className='text-white bg-blue-600 p-2 rounded-md '> {isSearching ? <Loader/> : <span>Submit</span>} </button>
                </div>
            </div>
        </form>
        <div className=" space-y-4 mt-5  z-2 overflow-auto relative ">
          {toShow.length > 0 ? renderList : <span className='font-normal'>No Search Result</span>}
        </div>
    </Layout>
  )
}
