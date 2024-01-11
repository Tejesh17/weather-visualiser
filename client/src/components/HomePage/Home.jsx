import { useState } from 'react'
import Heading from './Heading'
import AllDays from './Visualisations/AllDays'
import SpecificDay from './Visualisations/SpecificDay'

const Home = () => {
    const [visualisation, setVisualisation] = useState('None')
    const [date, setDate] = useState('')

    const changeVisualisation = (date) => {
        setDate(date)
        setVisualisation('Specific Day')
    }

    return (
        <>
            <Heading />
            <div className="CreatePost m-4">
                Select the type of visualisation you would like to view!
                <div className="flex flex-row mt-3">
                    <button
                        className="bg-blue-500 text-white py-1 px-2 rounded mt-1 hover:bg-blue-600 w-1/2 mr-2"
                        onClick={() => {
                            setVisualisation('Specific Day')
                        }}
                    >
                        View temps for a specific date
                    </button>
                    <button
                        className="bg-orange-500 text-white py-1 px-2 rounded mt-1 hover:bg-orange-600 w-1/2"
                        onClick={() => {
                            setVisualisation('All Days')
                        }}
                    >
                        View Average temp for all days
                    </button>
                </div>
            </div>
            {visualisation === 'All Days' && (
                <AllDays changeVisualisation={changeVisualisation} />
            )}
            {visualisation === 'Specific Day' && <SpecificDay date={date} />}
        </>
    )
}

export default Home
