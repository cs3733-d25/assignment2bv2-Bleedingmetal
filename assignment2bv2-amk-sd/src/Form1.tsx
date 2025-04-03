import { FC } from 'react';

const Form1: FC = ()=>(
    <form>
        <label htmlFor="fullname">What is your name?</label>
        <input type="text" id="fullname"/>
        <br/>
        <label htmlFor="email">Enter your email address:</label>
        <input type="text" id="email" name="email"/>

        <p>What topics are you interested in?</p>
        <label><input type="checkbox" name="topics" value="formula one"/>Formula one</label>
        <label><input type="checkbox" name="topics" value="Minecraft"/>Minecraft</label>
        <label><input type="checkbox" name="topics" value="GTAV"/>GTAV</label>

        <p>How often do you watch F1 if you do.</p>
        <label><input type="radio" name="frequency" value="daily"/>Daily</label>
        <label><input type="radio" name="frequency" value="weekly"/>Weekly</label>
        <label><input type="radio" name="frequency" value="monthly"/>Monthly</label>
        <br/>
        <br/>
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" name="comments" rows={4} cols={40}></textarea>
        <br/>
        <br/>
        <label htmlFor="driver">Favorite Driver</label>
        <select id="driver" name="driver">
            <option value="LH">Lewis Hamilton</option>
            <option value="CL">Charles Leclerc</option>
            <option value="LS">Lance Stroll</option>
        </select>
        <br/>
        <br/>
        <button type="submit">Submit</button>
    </form>
)
export default Form1;