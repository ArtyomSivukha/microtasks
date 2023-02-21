type MapType = {
    allCars: Array<Cars>
}

type Cars = {
    manufacturer: string
    model: string
}

export const MapComponent = (props: MapType) => {
    return (
        <ul>
            {props.allCars.map((objectsFromCars, index) => {
                return (
                    <li>
                        <span>{++index} </span>
                        <span>{objectsFromCars.manufacturer} </span>
                        <span>{objectsFromCars.model}</span>
                    </li>

                )
            })}
        </ul>
    )
}