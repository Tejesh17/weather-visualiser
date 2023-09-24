import { useEffect, useState } from 'react'
import weatherData from '../../../constants/WeatherData'
import LineChart from 'echarts-for-react'

const AllDays = () => {
    const [allDaysData, setAllDaysData] = useState({})

    const getAllDaysData = async () => {
        const data = weatherData.list.map((d) => {
            return {
                ...(d.dt_txt && { date: d.dt_txt }),
                ...(d.main.temp && { temp: d.main.temp }),
            }
        })

        console.log(data)
        const options = {
            xAxis: {
                type: 'category',
                data: data.map((d) => d.date.slice(0, 10)),
            },
            yAxis: {
                type: 'value',
                min: 270,
            },
            series: [
                {
                    // data: [data.map((d) => d.temp)],
                    data: data.map((d) => d.temp),
                    type: 'line',
                },
            ],
            tooltip: {
                trigger: 'axis',
            },
        }
        console.log(options)

        setAllDaysData(options)
    }
    useEffect(() => {
        getAllDaysData()
    }, [])

    return (
        <>
            <LineChart option={allDaysData} />
        </>
    )
}

export default AllDays
