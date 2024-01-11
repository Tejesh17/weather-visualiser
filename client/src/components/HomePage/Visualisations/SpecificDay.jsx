import { useEffect, useState } from 'react'
import weatherData from '../../../constants/WeatherData'
import EChartsReact from 'echarts-for-react'

const dropdownOptions = ['2018-02-19', '2018-02-20', '2018-02-21']
const SpecificDay = (props) => {
    const [specificDayData, setSpecificDayData] = useState({})
    const [optn, setOptn] = useState('2018-02-19')

    useEffect(() => {
        if (props.date) {
            setOptn(props.date)
            getSpecificDayData(props.date)
        }
    }, [])

    const getSpecificDayData = async (date) => {
        // let data = {}
        // try {
        //     data = await fetch(`http://localhost:5000/weather/${optn}`)
        //     data = await data.json()
        //     data = data[optn][0]
        // } catch (e) {
        //     console.log('error', e)
        // }
        let data = {}
        if (date) {
            data = weatherData.list.filter((d) => d.dt_txt === date)[0]
        } else {
            data = weatherData.list.filter((d) => d.dt_txt === optn)[0]
        }

        const option = {
            xAxis: {
                type: 'category',
                data: ['High', 'Average', 'Low'],
            },
            yAxis: {
                type: 'value',
                min: 275,
            },
            series: [
                {
                    data: [
                        data.main.temp_max,
                        data.main.temp,
                        data.main.temp_min,
                    ],
                    type: 'bar',
                },
            ],
            tooltip: {
                trigger: 'axis',
            },
        }
        setSpecificDayData(option)
    }

    return (
        <>
            <div className="flex flex-row   justifycenter">
                <select
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={optn}
                    onChange={(e) => {
                        setOptn(e.target.value)
                    }}
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
                <div
                    className="flex items-center justify-center mt-4"
                    onClick={() => {
                        getSpecificDayData('')
                    }}
                >
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
