import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 is the third of its name. It is a Generative Pre-trained Transformer neural network that uses internat data to generate text. It is developed by OpenAI."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Don't have any friends? GPT-3 is your friend. Chat away all night, talking about any topic of your choosing."
        />
        <Feature
          title="Knowledgebase"
          text="Store, Access, and Discover knowledge like never before by leveraging the power of AI."
        />
        <Feature
          title="Education"
          text="Forget the expensive textbooks and tiny desks; learn at home with the power of the Internet, distilled."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
