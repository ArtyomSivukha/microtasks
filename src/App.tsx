import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {MapComponent} from "./Components/map/MapComponent";
import {Button} from "./Components/Button/Button";
import {Filter} from "./Components/Filter/Filter";

type Filter = "All" | "Ruble" | "Dollar"

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<Filter>("All")

    let currentMoney = money;
    if (filter === "Ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if (filter === "Dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }


    const ButtonFoo1 = (sub: Filter) => {
        setFilter(sub)
    }
    return (
        <div>
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
            <MapComponent allCars={topCars}/>
            <Filter allMoney={currentMoney}/>
            <Button titleForButton={"All"} callback={() => ButtonFoo1("All")}/>
            <Button titleForButton={"Ruble"} callback={() => ButtonFoo1("Ruble")}/>
            <Button titleForButton={"Dollar"} callback={() => ButtonFoo1("Dollar")}/>
        </div>
    );
}


export default App;
