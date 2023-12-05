import React from 'react'
import ScrollableTabsButtonAuto from '../utils/ScrollableTabsButtonAuto'

const Dashboard = () => {
    const tabs = [
        'Environmental',
        'Lifestyles & Healthcare',
        'Industries',
        'Organization',
        'Political',
        'Social',
        'Technological',
        'Economic',
    ]

    return (
        <div className='w-full border-b-2 '>
            <ScrollableTabsButtonAuto tabs={tabs} />
        </div>
    )
}

export default Dashboard