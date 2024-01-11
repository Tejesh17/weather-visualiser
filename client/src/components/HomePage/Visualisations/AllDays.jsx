import { useEffect, useState } from 'react'
import weatherData from '../../../constants/WeatherData'
import LineChart from 'echarts-for-react'

const AllDays = (props) => {
    const [allDaysData, setAllDaysData] = useState({})

    const getAllDaysData = async () => {
        const data = weatherData.list.map((d) => {
            return {
                ...(d.dt_txt && { date: d.dt_txt }),
                ...(d.main.temp && { temp: d.main.temp }),
            }
        })

        // let data = {}
        // try {
        //     data = await fetch('http://localhost:5000/weather')
        //     data = await data.json()
        // } catch (e) {
        //     console.log('error', e)
        // }

        const options = {
            xAxis: {
                type: 'category',
                // data: data.list.map((d) => d.dt_txt),
                data: data.map((d) => d.date),
            },
            yAxis: {
                type: 'value',
                min: 270,
            },
            series: [
                {
                    // data: data.list.map((d) => d.main.temp),
                    data: data.map((d) => d.temp),
                    type: 'line',
                },
            ],
            tooltip: {
                trigger: 'axis',
            },
        }
        setAllDaysData(options)
    }
    useEffect(() => {
        getAllDaysData()
    }, [])

    const onChartClick = (params) => {
        props.changeVisualisation(params.name)
    }

    const chartEvents = {
        click: onChartClick,
    }

    return (
        <>
            <LineChart option={allDaysData} onEvents={chartEvents} />
        </>
    )
}

export default AllDays
