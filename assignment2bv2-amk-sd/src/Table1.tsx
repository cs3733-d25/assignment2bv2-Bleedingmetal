import { FC } from 'react';

const Table1 : FC= ()=>(
    <table className="collapse">
        <caption>My favourite drivers</caption>
        <thead>
        <tr>
            <th>Driver</th>
            <th>Team</th>
            <th># of WDC</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>Lewis Hamilton</td>
            <td>Ferrari</td>
            <td>7</td>
        </tr>
        </tbody>

        <tbody>
        <tr>
            <td>Charles Leclerc</td>
            <td>Ferrari</td>
            <td>none</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Kimi Antonelli</td>
            <td>Mercedes</td>
            <td>0</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Max Verstappen</td>
            <td> RedBull</td>
            <td>4</td>
        </tr>
        </tbody>
    </table>
)


export default Table1;