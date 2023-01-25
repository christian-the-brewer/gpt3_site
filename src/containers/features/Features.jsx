import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: 'Improving End to End Sharing',
    text: 'With OpenAI, all possibilities are open, thanks to The Network. Knowledge will be re-defined.',
  },
  {
    title: 'Know, Better Than Ever',
    text: 'Limitless expression of data in a sea of points, the world is to Discover. Make the first step into knowing.',
  },
  {
    title: 'More than Human',
    text: 'Let GPT-3 do what was yesterday, impossible. Limits are only human, we are OpenAI.',
  },
  {
    title: 'Like Human, But Better',
    text: "Progress stops for no man, and soon, it won't need to...",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now. Don't be Left Behind. Step into Future Today. Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;