import React,{useState} from 'react'
import { Layout,Loader } from '.'
import styles from '../styles/task3.module.css'
import axios from 'axios'

export default function Task3() {

  const [date, setDate] = useState('')
  const [toShow, setToShow] = useState()
  const [isSearching, setIsSearching] = useState(false)

  const getMovieTitles = async (e) => {
    e.preventDefault()
    try {
      setIsSearching(true)
      let res = await axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
      let {data} = res.data
      console.log(data);
      setIsSearching(false)
      setToShow(data)
  } catch (error) {
    console.log(error.message);
  }
};

  const handleDate = async (e) => {
    let date = await formatDate(e.target.value)
    setDate(date)
  }

  const renderList = toShow && toShow.length > 0 ? toShow.map(data => (
    <div className='flex gap-2 font-normal'>
      <div className='bg-slate-200 rounded-lg px-2 py-2'>Close: {data.close}</div>
      <div className='bg-slate-200 rounded-lg px-2 py-2'>Open: {data.open}</div>
      <div className='bg-slate-200 rounded-lg px-2 py-2'>High: {data.high}</div>
      <div className='bg-slate-200 rounded-lg px-2 py-2'>Low: {data.low}</div>
    </div>
)) : <div>Nothing Found</div>
  return (
    <Layout>
      <form onSubmit={getMovieTitles}>
            <div className='w-fit'>
              <div className='text-left'>Select date</div>
                <div className='space-x-2 d-flex'>
                    <input type="date"  onChange={handleDate} style={{backgroundColor:'white',border:'solid 2px #ccc',outline:'none'}} className="p-2 rounded-md "/>
                    <button onClick={getMovieTitles} type='button' className='text-white bg-blue-600 p-2 rounded-md '> {isSearching ? <Loader/> : <span>Submit</span>} </button>
                </div>
            </div>
        </form>
        <div className=" space-y-4 mt-5  z-2 overflow-auto font-normal relative ">
        {toShow ? renderList : <span className=''>No Search Result</span>}
        </div>
    </Layout>
  )
}

const formatDate = async (date) => {
  let year = date.slice(0, 4)
  let month = await monthString(date.slice(5, 7))
  let day = String(date.slice(8, 10)).startsWith('0') ? date.slice(8, 10)[1] : date.slice(8, 10)

  return `${day}-${month}-${year}`;
}

const monthString = (month) => {
  switch (month) {
    case '01':
      return 'January'
      break;
    case "02":
      return 'February'
      break;
    case "03":
      return 'March'
      break;
    case "04":
      return 'April'
      break;
    case "05":
      return 'May'
      break;
    case "06":
      return 'June'
      break;
    case "07":
      return 'July'
      break;
      case "08":
        return 'August'
        break;
        case "09":
      return 'September'
      break;
    case "10":
      return 'October'
      break;
    case "11":
      return 'November'
      break;
    case "12":
      return 'December'
      break;
  }
}