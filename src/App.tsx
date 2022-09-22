import './App.css'
import React from 'react';
import Title from './components/Title';
import IndexDisplay from './components/IndexDisplay';
import Background from './components/Background';
import Depth from './components/Depth';
import Creature from './components/Creature';
import ICreature from "./interfaces/ICreature";
import creaturesData from "./Creatures.json";

import icons from "./components/Creature/Icons";

interface IProps { }
interface IState {
  current: number;
  creature: ICreature;
  depth: number;
  anim: boolean;
  y: number;
}
export default class App extends React.Component<IProps, IState> {
  t: number = 0;
  lastDepth: number = 0;
  constructor(props: IProps) {
    super(props);
    this.state = {
      creature: this.transformedCreature(0),
      current: 0,
      depth: 1,
      y: 0,
      anim: false
    }
    this.handleWheel = this.handleWheel.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.anim = this.anim.bind(this);
    this.changeDepth = this.changeDepth.bind(this);
  }
  handleWheel(event: WheelEvent) {
    if (this.state.anim) return;
    event.deltaY < 0 ? this.prev() : this.next();
    this.t = 0;
  }
  anim() {
    this.setState({ anim: true });
    setTimeout(() => {
      this.setState({ anim: false });
    }, 500)
  }
  componentDidMount(): void {
    window.addEventListener("wheel", this.handleWheel);
    this.changeDepth();
  }
  prev() {
    if (this.state.current <= 0) return;
    this.setState(state => ({
      current: state.current - 1,
      creature: this.transformedCreature(state.current - 1),
      y: state.y + 100
    }))
    this.anim();
    this.lastDepth = parseInt(this.state.creature.depth);
  }
  next() {
    if (this.state.current >= creaturesData.creatures.length - 1) return;
    this.setState(state => ({
      current: state.current + 1,
      creature: this.transformedCreature(state.current + 1),
      y: state.y - 100
    }));
    this.anim();
    this.lastDepth = parseInt(this.state.creature.depth);
  }
  changeDepth() {
    let td = parseInt(this.transformedCreature(this.state.current).depth);
    let cd = this.state.depth;
    this.t += .5 * .02;
    if (this.t > 1.0) {
      this.t = 0;
    }
    let curve;
    if (td > this.lastDepth)
      curve = Math.ceil(cd + (td - cd) * this.t);
    else
      curve = Math.floor(cd + (td - cd) * this.t);

    this.setState({ depth: curve })
    requestAnimationFrame(this.changeDepth)
  }
  transformedCreature(index: number): ICreature {
    var aux: ICreature = {
      name: creaturesData.creatures[index].name,
      description: creaturesData.creatures[index].desc,
      depth: creaturesData.creatures[index].depth,
      src: icons[index]
    }
    return aux;
  }
  render(): React.ReactNode {
    return (
      <div className="App">
        <Background>
          <IndexDisplay max={creaturesData.creatures.length} y={this.state.y} />
          <Title />
        </Background>

        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Creature
            anim={this.state.anim}
            name={this.state.creature.name}
            description={this.state.creature.description}
            src={this.state.creature.src} />
          <Depth value={this.state.depth} />
        </div>

      </div>
    )
  }
}