'use client'

import { useEffect, useState } from 'react';
import { GetOfData } from './services/services';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';
import Pie from './components/Pie';
import Pie2 from './components/Pie2';
import mapUnits from './mapUnits';

export default function Home() {
    const [data, setData] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState('hidroelectricas');

    useEffect(() => {
        GetOfData(uuidv4()).then((val) => {
            setData(val);
        });
    }, []);

    const refreshData = () => {
        GetOfData(uuidv4()).then((val) => {
            setData(val);
        });
    };

    const { pie, pie2, unit } = data || {};
    console.log(pie);
    const transformedUnits = mapUnits(unit);
    const filteredUnits = transformedUnits.filter((unit) => unit.type === selectedUnit);
    console.log(filteredUnits);

    const seriesData = filteredUnits.map((unit) => unit.value); 
    const labelsData = filteredUnits.map((unit) => unit.name);
    const typeData = filteredUnits.map((unit) => unit.type);
  

    return (
        <>
            <header className="bg-primary text-white py-3">
                <div className="container">
                    <h1 className="text-center">Centro Nacional de Despacho</h1>
                </div>
            </header>

            <div className="m-5 row">
                <div className="col-md-6">
                    <h2 className="text-center">Energía Renovable vs. Energía Térmica (MW)</h2>
                    <Pie
                        series={pie2}
                        type={'donut'}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Tipos de Generación (MW)</h2>
                    <Pie
                        series={pie}
                        type={'pie'}
                    />
                </div>
            </div>

            {/* <label htmlFor="unit">Generador: </label> */}
            <select
                className="form-select form-select-lg mb-5 w-25" 
                aria-label="Large select example"
                name="unit" 
                id="unit"
                onChange={(e) => setSelectedUnit(e.target.value)}
            >
                <option value="hidroelectricas">Hidroeléctricas</option>
                <option value="termicas">Térmicas</option>
                <option value="solares">Solares</option>
                <option value="eolicas">Eólicas</option>
            </select>

            <Pie2
                series={seriesData}
                labels={labelsData} 
                type={'bar'}
            />

            <div className="text-center mb-5">
                <Button onClick={refreshData} className="btn-lg">ACTUALIZAR GRÁFICAS</Button>
            </div>
        </>
    );
}
