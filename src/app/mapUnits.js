export default function mapUnits(units = []) {
    const output = [...units]
    const batchOneFirstValue = Array.from(units || []).findIndex((unit) => unit.name === "Algarrobos 1")
    const batchOneLastValue = Array.from(units || []).findIndex((unit) => unit.name === "Yeguada 3")
    const batchTwoFirstValue = Array.from(units || []).findIndex((unit) => unit.name === "ACP Miraflores 5")
    const batchTwoLastValue = Array.from(units || []).findIndex((unit) => unit.name === "Tropitérmica 3")
    const batchThreeFirstValue = Array.from(units || []).findIndex((unit) => unit.name === "Andrea's Power")
    const batchThreeLastValue = Array.from(units || []).findIndex((unit) => unit.name === "Vista Alegre")
    const batchFourFirstValue = Array.from(units || []).findIndex((unit) => unit.name === "Marañón GGC1")
    const batchFourLastValue = Array.from(units || []).findIndex((unit) => unit.name === "Toabré")
    for(let index = batchOneFirstValue;index<=batchOneLastValue; index++) {
        output[index] = {
            ...output[index],
            type: 'hidroelectricas'
        }
    }
    for(let index = batchTwoFirstValue;index<=batchTwoLastValue; index++) {
        output[index] = {
            ...output[index],
            type: 'termicas'
        }
    }
    for(let index = batchThreeFirstValue;index<=batchThreeLastValue; index++) {
        output[index] = {
            ...output[index],
            type: 'solares'
        }
    }
    for(let index = batchFourFirstValue;index<=batchFourLastValue; index++) {
        output[index] = {
            ...output[index],
            type: 'eolicas'
        }
    }
    return output
}