import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '.'
export default function Home() {
  return (
    <Layout>
      <div className="flex space-x-[1rem] text-white text-xl">
            <div className="space-y-[1rem]  flex-grow">
              <div className="p-[50px]  shadow-lg shadow-slate-400 rounded-lg bg-sky-400">
                  <Link to={'/task1'} >Task 1</Link>
              </div>
              <div  className="p-[50px] shadow-lg shadow-slate-400 rounded-lg bg-teal-400">
                  <Link to={'/task2'}>Task 1</Link>
              </div>
            </div>
            <div className="p-[50px] flex items-center justify-center shadow-lg shadow-slate-400 flex-grow rounded-lg bg-cyan-500">
                <Link to={'/task3'}>Task 1</Link>
            </div>
          </div>
   </Layout>
  )
}
