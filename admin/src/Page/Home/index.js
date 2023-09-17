import React, { useState } from 'react'
import SideBar from './SideBar'
import Body from './Body'

const Home = () => {
    const [tab, setTab] = useState(1)
    return (
        <div className='flex flex-col mobile:gap-4 gap-6 w-full h-full'>
            <div className='flex w-full mobile:px-0 mobile:gap-2 gap-6 px-4 h-full'>
                <SideBar  setTab={setTab}  tab={tab}/>
                <Body tab={tab} />
            </div>
        </div>
    )
}

export default Home