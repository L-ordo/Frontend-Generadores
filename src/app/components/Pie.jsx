import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });



const Pie = ( {series, type} ) => {
    // console.log(series)
    const params = {
        series: Array.from(series || []).map((serie)=>serie.value),
        labels: Array.from(series || []).map((serie)=>serie.name),
        options: {
            chart: {
                type: type,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }

    return (
        <Chart
            height={320}
            options={params}
            series={params.series}
            type={type}
            width={"100%"}
        />
    )
}

export default Pie;