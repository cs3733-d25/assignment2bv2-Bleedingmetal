import { FC } from 'react';

const table2: FC = () => (
    <table className="expand">
        <caption>Photograhy</caption>
        <tbody>
        <tr>
            <th>Genre</th>
            <th>Common Subjects</th>
            <th>Difficulty level </th>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Landscape</td>
            <td>Wildlife</td>
            <td>7</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Portrait</td>
            <td>Animals/birds etc closeup</td>
            <td>9</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Underwater</td>
            <td>Jellyfish</td>
            <td>10</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Panoramic</td>
            <td>City shots etc</td>
            <td>4</td>
        </tr>
        </tbody>
    </table>
);

export default table2;