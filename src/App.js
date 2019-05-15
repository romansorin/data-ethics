import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Title from "./components/Title.js";
import Image from "react-bootstrap/Image";

class App extends Component {
  state = {
    sections: {
      one: [
        { heading: "Context" },
        {
          text:
            "With the emergence of fields such as Predictive Analysis, Machine Learning, and Artificial Intelligence, " +
            "the use and collection of data has become increasingly desireable. In an effort to enhance systems, processes, " +
            "and improve accuracy of predictive models, data has become an integral part of statistical methods and business decisions." +
            " As a concrete form of data with a decreased level of ambiguity and increased sample sizes, large collections of data become influential in large-scale decision making, power, and profit."
        },
        {
          text:
            "Unfortunately, the high availability of data and power which it holds leads to less desireable consequences – " +
            "use of data as a motive for profit, unethical practices, and an unclear definition of transparency. " +
            "While data is an invaluable tool and medium of support for statistical analysis, identifying trends, and innovtation, data raises major privacy, ethical, and integrity concerns in regards to consumers and individuals. "
        },
        {
          text:
            "The implementation and concern of data is already quite evident when considering global entities, including Google, Twitter, Facebook, health institutions, and government forms of surveillance." +
            'On both a finer and global scale, data is used to drive many of the most important decisions. In turn, data ethics is an emerging discipline across many branches of development, engineering, and sciences – relating to the morality and ethical concerns of use of data (including "big data")' +
            " and monetization through external sources. Historically, ethics of this domain related mostly to use of information in computers and software; " +
            "but, the exponential growth, innovation, and implementation of algorithms, machine learning, and data science have effectively shifted the focus from being information-centric to data-centric."
        }
      ],
      two: [
        { heading: "Who's Affected?" },
        {
          text:
            "A vast majority of data collected is a result of tech giants, government entities, and healthcare records. As such, the primary concern is the privacy and protection of the consumer; i.e., individuals who use products, services, or exist amongst the space of these groups. Beyond individuals, the issue of data ethics, privacy, and associated fields spreads far into the political, economic, and scientific realms. As such, in addition to consumers, figures such as companies, corporations, governments, medical providers, patients, researchers"
        }
      ],
      three: [
        { heading: "Conclusion, Solutions, and Need For Action" },
        {
          text:
            "For the purposes of effective protection, transpraency, and integrity, it is clear that data must be kept safe in both consumer and corporate contexts. Due to the tendency and nature of data collection, which is often involuntary, individuals with collected data are considerably more entitled to legal acquisition of information, assuming these specific rights surrounding the data in question are not signed off. Ethically, it's imperative to ensure more public awareness of this growing field due to growing occurences of data leaks, poor security, and dependence on online services."
        },
        {
          text:
            "Arguably, the most plausible measures and solutions include the demand of improvement of companies’ security, due to the importance of consumer participation in certain data practices, advertisements, and market involvement. Furthermore, on the more technical side of data security, it is necessary to improve encryption through hasing, salting, and focus on cryptographical practices."
        },
        {
          text:
            "Time and time again, individuals have found it to be a notoriously poor mistake to simply rely on professional and trustworthy practices by companies. As a result, it is imperative to stress individual preventative measures, such as random password generation, protection of personal data, and informing oneself of how their specific data may be used."
        }
      ]
    },
    images: {
      one: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Home content={this.state.sections.one} />
        <Image className="content-img" src={this.state.images.one} fluid />
        <Home content={this.state.sections.two} />
        <Home content={this.state.sections.three} />
      </div>
    );
  }
}

export default App;
