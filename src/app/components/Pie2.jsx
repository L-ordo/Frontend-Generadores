import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Pie2 = ({ series, type , labels = [] }) => {
    const params = {
        series: [{
            data: series
        }],
        options: {
            chart: {
                type: type,
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    distributed: true, // Habilita las columnas distribuidas
                    horizontal: false, // Cambia a true si quieres un gráfico de barras horizontal
                    dataLabels: {
                        position: 'top'
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '5px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: labels,
                position: 'bottom',
                labels: {
                    offsetY: 15, 
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,
                }
            },
            fill: {
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100, 100]
                },
            },
            legend: {
                show: false,
            }
        },
    };

    return (
        <Chart
            height={420}
            options={params.options}
            series={params.series}
            type={type}
            width={"100%"}
        />
    );
};

export default Pie2;
