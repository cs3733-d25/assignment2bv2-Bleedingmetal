
import React from 'react';

interface IntroProps  {
    name1: string;
    name2: string;
};
const Intro: React.FC<IntroProps> = ({ name1, name2 }) => (
    <section>
        <p>
            Hello! This is <strong>{name1}</strong> and{" "}
            <strong>{name2}</strong>'s hobby page. We’re excited to showcase our hobbies!
            Hi, This is Stuvat Dash. I’ve been passionate about photography since I was young, there’s something magical about capturing a moment just right. Whether it’s the play of light in nature or a spontaneous candid shot, I love the way photography lets me tell stories without saying a word. It’s more than a hobby for me, it’s been a creative outlet
            and a constant companion throughout my life. And This is Aditya, I've always been a motorsport fan and car enthusiast,
            and in 2021 during the lockdown my friend introduced me to Formula 1 and I was just enamoured by the technical expertise
            that went into it and thats kind of how I get into F1.
        </p>
    </section>
)

export default Intro;