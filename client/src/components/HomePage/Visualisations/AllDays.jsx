import { useEffect, useState } from 'react'
// import weatherData from '../../../constants/WeatherData'
import LineChart from 'echarts-for-react'

const AllDays = () => {
    const [allDaysData, setAllDaysData] = useState({})

    const getAllDaysData = async () => {
        // const data = weatherData.list.map((d) => {
        //     return {
        //         ...(d.dt_txt && { date: d.dt_txt }),
        //         ...(d.main.temp && { temp: d.main.temp }),
        //     }
        // })
        let data = {}
        try{
            data = await fetch("http://localhost:5000/weather")
            data = await data.json()
        }catch(e){
            console.log("error", e )
        }

        console.log(data)
        const options = {
            xAxis: {
                type: 'category',
                data: data.list.map((d) => d.dt_txt),
                // data: data.map((d) => d.date),
            },
            yAxis: {
                type: 'value',
                min: 270,
            },
            series: [
                {
                    // data: [data.map((d) => d.temp)],
                    data: data.list.map((d) => d.main.temp),
                    // data: data.map((d) => d.temp),
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
