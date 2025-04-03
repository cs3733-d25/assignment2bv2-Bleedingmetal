import { FC } from 'react';
import List2 from "./list2";
import Table2 from "./Table2";
import Form2 from "./Form2";

const Hobby1 :FC = ()=> (

    <div>
        <h1>Stuvat Dash's Hobbies:</h1>
        <img src ="/photo_stuvat.jpg" alt = "photography"/>
        <p>
            I love photography, it is something that I have taken keen interest in since a very young age.
        </p>

        <List2/>
        <Table2/>
        <Form2/>



    </div>
)

export default Hobby1;

