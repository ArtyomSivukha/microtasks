import {useState} from "react";


type FilterType = {
    allMoney: Array<Money>
}

type Money = {
    banknots: string
    value: number
    number: string
}


export const Filter = (props:FilterType) => {
    return (
        <ul>
            {props.allMoney.map((objectFromMoney) => {
                return (
                    <li>
                        <span>{objectFromMoney.banknots}</span>
                        <span>{objectFromMoney.value}</span>
                        <span>{objectFromMoney.number}</span>
                    </li>
                )
            })}

        </ul>
    )
}