import React,{useState} from 'react'

import { Layout } from '.'
import styles from '../styles/task1.module.css'

export default function Task1() {
    const [text, setText] = useState('')
    const [toShow, setToShow] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setText('')
        setToShow(text)
    }

    const renderList = toShow.split('').map((char, index) => {
       return char !== ' ' && <div className='px-2 py-1 bg-slate-200 rounded-lg'>{`${char}-${index + 1}`}</div>
    });

    const handleText = (e) => {
        setText(e.target.value);
    }

  return (
    <Layout>
          <div>
              <form onSubmit={submit}>
                  <div className='flex flex-col'>
                      <div className='space-x-2'>
                          <input onChange={handleText} value={text} placeholder='Enter some text' className="border-solid border-slate-400 border-[2px] flex-grow p-2 rounded-md" type="text" />
                          <button onClick={submit} type='button' className='text-white bg-blue-600 p-2 rounded-md'>Submit</button>
                      </div>
                  </div>
              </form>
              <div className="flex flex-wrap gap-2 mt-5">
              {toShow ? renderList : <span className='font-normal'>Output will display here</span>}
                </div>
          </div>
    </Layout>
  )
}
