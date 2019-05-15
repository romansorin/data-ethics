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
            "context related to the issue, the conclusions you drew based on your research, the perspectives affected by the issue, your proposed solution, and a call to action"
        },
        {
          text:
            "Mauris ligula erat, gravida ac mauris non, rutrum blandit velit. Duis convallis ex id cursus posuere. Quisque tristique hendrerit elit, sed euismod risus ullamcorper quis. Proin pulvinar vestibulum sem, eget sollicitudin mi porttitor id. Phasellus mi est, placerat sed dolor a, consequat luctus ex. Suspendisse vestibulum mi molestie tellus placerat, vel tempus ante viverra. Vestibulum purus enim, accumsan eget fringilla in, rhoncus a justo. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac ligula ornare, gravida ligula id, tristique erat. Vestibulum nec sem non leo imperdiet ornare eu vitae turpis."
        }
      ],
      two: [
        { heading: "Conclusions" },
        {
          text:
            "Sed placerat lacinia velit et fringilla. Vivamus eget erat ac sem dignissim sagittis vitae venenatis ex. Morbi scelerisque mollis leo in vehicula. Quisque mollis sodales turpis, id sodales diam scelerisque non. Nullam ultrices vestibulum odio vel posuere. Nam et tincidunt velit. Proin eu scelerisque quam, non lobortis ante. Donec vehicula dapibus lectus, id placerat ligula tincidunt eget. Quisque pellentesque ullamcorper diam vitae laoreet. Nunc volutpat lorem in interdum lobortis. Aliquam erat volutpat. Morbi convallis dictum justo euismod bibendum. Donec sollicitudin diam a neque condimentum, sit amet vehicula purus fringilla."
        },
        {
          text:
            "In at mi felis. Phasellus egestas, augue sit amet lobortis ultrices, magna magna egestas tellus, in imperdiet nibh nisi id sem. Pellentesque pulvinar gravida felis, non ullamcorper enim luctus ac. Pellentesque fermentum bibendum turpis et ultricies. Nam accumsan odio et erat pulvinar, ac pharetra velit sagittis. Vestibulum tristique eget dui interdum tristique. Donec vestibulum tempus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id bibendum ante. Duis molestie vulputate augue, quis finibus dui lacinia a. Nulla facilisi. Sed id euismod neque. Sed efficitur ipsum gravida ipsum lobortis porta. Vestibulum eget tempor leo."
        },
        {
          text:
            "Nam eget ex consequat, aliquam tellus id, sodales felis. In hac habitasse platea dictumst. Vivamus faucibus nisi non purus lobortis, ac accumsan mauris blandit. Nulla sit amet ullamcorper magna. Curabitur a efficitur sapien, finibus malesuada quam. Nulla aliquet leo nec velit aliquam, non tempus eros consectetur. Proin vitae faucibus est. Cras lectus justo, pellentesque in dolor quis, varius dignissim metus. In ante magna, dictum vel molestie ut, auctor non enim. Praesent interdum dolor nibh, at tincidunt ipsum faucibus non. Nulla urna justo, elementum in elementum ac, porta nec odio. In in ligula eleifend, porta quam vitae, interdum augue. Nulla auctor urna eu tempor scelerisque. Vestibulum faucibus, magna vel tempor rutrum, sapien erat ornare diam, vel egestas lorem eros sed nunc."
        }
      ],
      three: [
        { heading: "Perspectives" },
        {
          text:
            "Sed placerat lacinia velit et fringilla. Vivamus eget erat ac sem dignissim sagittis vitae venenatis ex. Morbi scelerisque mollis leo in vehicula. Quisque mollis sodales turpis, id sodales diam scelerisque non. Nullam ultrices vestibulum odio vel posuere. Nam et tincidunt velit. Proin eu scelerisque quam, non lobortis ante. Donec vehicula dapibus lectus, id placerat ligula tincidunt eget. Quisque pellentesque ullamcorper diam vitae laoreet. Nunc volutpat lorem in interdum lobortis. Aliquam erat volutpat. Morbi convallis dictum justo euismod bibendum. Donec sollicitudin diam a neque condimentum, sit amet vehicula purus fringilla."
        },
        {
          text:
            "In at mi felis. Phasellus egestas, augue sit amet lobortis ultrices, magna magna egestas tellus, in imperdiet nibh nisi id sem. Pellentesque pulvinar gravida felis, non ullamcorper enim luctus ac. Pellentesque fermentum bibendum turpis et ultricies. Nam accumsan odio et erat pulvinar, ac pharetra velit sagittis. Vestibulum tristique eget dui interdum tristique. Donec vestibulum tempus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id bibendum ante. Duis molestie vulputate augue, quis finibus dui lacinia a. Nulla facilisi. Sed id euismod neque. Sed efficitur ipsum gravida ipsum lobortis porta. Vestibulum eget tempor leo."
        },
        {
          text:
            "Nam eget ex consequat, aliquam tellus id, sodales felis. In hac habitasse platea dictumst. Vivamus faucibus nisi non purus lobortis, ac accumsan mauris blandit. Nulla sit amet ullamcorper magna. Curabitur a efficitur sapien, finibus malesuada quam. Nulla aliquet leo nec velit aliquam, non tempus eros consectetur. Proin vitae faucibus est. Cras lectus justo, pellentesque in dolor quis, varius dignissim metus. In ante magna, dictum vel molestie ut, auctor non enim. Praesent interdum dolor nibh, at tincidunt ipsum faucibus non. Nulla urna justo, elementum in elementum ac, porta nec odio. In in ligula eleifend, porta quam vitae, interdum augue. Nulla auctor urna eu tempor scelerisque. Vestibulum faucibus, magna vel tempor rutrum, sapien erat ornare diam, vel egestas lorem eros sed nunc."
        }
      ],
      four: [
        { heading: "Solution & CTA" },
        {
          text:
            "Sed placerat lacinia velit et fringilla. Vivamus eget erat ac sem dignissim sagittis vitae venenatis ex. Morbi scelerisque mollis leo in vehicula. Quisque mollis sodales turpis, id sodales diam scelerisque non. Nullam ultrices vestibulum odio vel posuere. Nam et tincidunt velit. Proin eu scelerisque quam, non lobortis ante. Donec vehicula dapibus lectus, id placerat ligula tincidunt eget. Quisque pellentesque ullamcorper diam vitae laoreet. Nunc volutpat lorem in interdum lobortis. Aliquam erat volutpat. Morbi convallis dictum justo euismod bibendum. Donec sollicitudin diam a neque condimentum, sit amet vehicula purus fringilla."
        },
        {
          text:
            "In at mi felis. Phasellus egestas, augue sit amet lobortis ultrices, magna magna egestas tellus, in imperdiet nibh nisi id sem. Pellentesque pulvinar gravida felis, non ullamcorper enim luctus ac. Pellentesque fermentum bibendum turpis et ultricies. Nam accumsan odio et erat pulvinar, ac pharetra velit sagittis. Vestibulum tristique eget dui interdum tristique. Donec vestibulum tempus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id bibendum ante. Duis molestie vulputate augue, quis finibus dui lacinia a. Nulla facilisi. Sed id euismod neque. Sed efficitur ipsum gravida ipsum lobortis porta. Vestibulum eget tempor leo."
        },
        {
          text:
            "Nam eget ex consequat, aliquam tellus id, sodales felis. In hac habitasse platea dictumst. Vivamus faucibus nisi non purus lobortis, ac accumsan mauris blandit. Nulla sit amet ullamcorper magna. Curabitur a efficitur sapien, finibus malesuada quam. Nulla aliquet leo nec velit aliquam, non tempus eros consectetur. Proin vitae faucibus est. Cras lectus justo, pellentesque in dolor quis, varius dignissim metus. In ante magna, dictum vel molestie ut, auctor non enim. Praesent interdum dolor nibh, at tincidunt ipsum faucibus non. Nulla urna justo, elementum in elementum ac, porta nec odio. In in ligula eleifend, porta quam vitae, interdum augue. Nulla auctor urna eu tempor scelerisque. Vestibulum faucibus, magna vel tempor rutrum, sapien erat ornare diam, vel egestas lorem eros sed nunc."
        }
      ]
    },
    images: {
      one:
        "https://images.pexels.com/photos/2170234/pexels-photo-2170234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      two:
        "https://images.pexels.com/photos/2170234/pexels-photo-2170234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Home content={this.state.sections.one} />
        <Image src={this.state.images.one} fluid />
        <Home content={this.state.sections.two} />
        <Home content={this.state.sections.three} />
        <Home content={this.state.sections.four} />
      </div>
    );
  }
}

export default App;
