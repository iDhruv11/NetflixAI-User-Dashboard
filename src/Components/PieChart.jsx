import { ResponsivePie } from "@nivo/pie"
import { useEffect } from "react"

export const PieChart = ({ data }) => {

    const mostWatchedFilmCount = Math.max(...data.map(genre => genre.value))
    const MostWatchedFilmGenre = data.find(genre => genre.value == mostWatchedFilmCount)


    useEffect( () => {
        console.log("profile change from piechart")
    }, [data])

    return (
        <div className="w-[50%] min-w-[50%] h-[290px] pr-6 flex bg-[#52545f2d] rounded-2xl pt-1 gap-2">

            <h1 className="text-white text-3xl font-medium ml-8 mt-6 inline-block w-[50%]" style={{wordSpacing: '.3rem'}}>You watched <span className="text-[#e50914] font-semibold">{mostWatchedFilmCount}</span> films and shows from <span className="text-[#e50914] font-semibold">{MostWatchedFilmGenre.id}</span> genre this week</h1>

            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 50, bottom: 40, left: 70 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="white"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                colors={['#084594', '#2171b5', '#4292c6', '#6baed6', '#9ecae1', '#c6dbef']}
            />
        </div>
    )
}