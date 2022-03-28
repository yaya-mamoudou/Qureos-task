import React,{useState,useEffect} from 'react'
import logo from '../img/logo.png'

export default function Layout({ children }) {
    const [height, setHeight] = useState("auto")
    useEffect(() => {
        let nav = document.getElementById('nav')
        console.log(window.innerHeight - nav.offsetHeight);
        setHeight(window.innerHeight - nav.offsetHeight)
    }, [])
    
  return (
    <div className="App container-full">
    <div className="container mx-auto">
        <nav className='' id='nav'><img height={50} width={120} mi className="py-4" src={logo} alt="" /></nav>
              <main className={`flex main_box`}>
            <div className='mx-auto h-full flex flex-col justify-center font-bold text-center my-auto h-auto border-solid  p-5'>
            {children}
            </div>
        </main>
  </div>
</div>
  )
}
