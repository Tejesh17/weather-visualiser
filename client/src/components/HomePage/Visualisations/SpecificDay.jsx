import { useEffect, useState } from 'react'
import weatherData from '../../../constants/WeatherData'
import EChartsReact from 'echarts-for-react'

const dropdownOptions = [
    "2018-02-20 00:00:00"
]
const SpecificDay = () => {
    const [specificDayData, setSpecificDayData] = useState({})

    
    const getSpecificDayData = async () => {
        const data = weatherData.list.filter(
            (d) => (d.dt_txt = '2018-02-20 00:00:00')
        )[0]

        const option = {
            xAxis: {
                data: [data.dt_txt.slice(0, 10)],
            },
            yAxis: {
                min: 280,
            },
            series: [
                {
                    type: 'candlestick',
                    data: [
                        [
                            data.main.temp,
                            data.main.temp,
                            data.main.temp_min,
                            data.main.temp_max,
                        ],
                    ],
                },
            ],
            tooltip: {
                trigger: 'axis',
            },
        }
        console.log(option)

        setSpecificDayData(option)
    }
    useEffect(() => {
        getSpecificDayData()
    }, [])

    return (
        <>
        <div className='flex flex-row   justifycenter'>

          <select
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            // value={selectedOption}
            // onChange={handleOptionChange}
            placeholder="Select a date"
          >

            <option value="" disabled>
              Select a date
            </option>
            {dropdownOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
            Go
            </button>
          </div>
        </div>
            
            <EChartsReact option={specificDayData} />
        </>
    )
}

export default SpecificDay
