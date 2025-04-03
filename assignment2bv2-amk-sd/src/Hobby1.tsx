import { FC } from 'react';
import List1 from "./list1";
import Table1 from "./Table1";
import Form1 from "./Form1";
import "./List1.css"

const Hobby1 :FC = ()=> (

    <div>
        <h1>Aditya Manoj's Hobbies:</h1>
        <img src ="/f1_aditya.jpg" alt = "f1"/>
        <p>
            I like formula 1 and my favourite driver is Lewis Hamilton.
        </p>

        <List1/>
        <Table1/>
        <Form1/>



    </div>
)

export default Hobby1;

