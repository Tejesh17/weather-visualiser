import { useEffect, useState } from 'react'
import weatherData from '../../../constants/WeatherData'
import EChartsReact from 'echarts-for-react'

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
            <EChartsReact option={specificDayData} />
        </>
    )
}

export default SpecificDay
