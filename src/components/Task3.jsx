import React,{useState} from 'react'
import { Layout,Loader } from '.'
import styles from '../styles/task3.module.css'
import axios from 'axios'

export default function Task3() {

  const [date, setDate] = useState('')
  const [toShow, setToShow] = useState({})
  const [isSearching, setIsSearching] = useState(false)


  return (
    <Layout>
      <form >
            <div className='flex flex-col'>
                <div className='space-x-2 d-flex'>
                    <input type="date"   style={{backgroundColor:'white',border:'solid 2px #ccc',outline:'none'}} className="p-2 rounded-md "/>
                    <button  type='button' className='text-white bg-blue-600 p-2 rounded-md '> {isSearching ? <Loader/> : <span>Submit</span>} </button>
                </div>
            </div>
        </form>
        <div className=" space-y-4 mt-5  z-2 overflow-auto relative ">
          {/* {toShow.length > 0 ? renderList : <span className='font-normal'>No Search Result</span>} */}
        </div>
    </Layout>
  )
}
