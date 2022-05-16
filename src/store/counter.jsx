import { makeAutoObservable } from "mobx";
import config from '../api/api.config';
import { getRoverInfo } from '../api/api.methods';


class Rovers {

  rovers = []; 

  constructor() {
    makeAutoObservable(this);
  }

  getRovers() {
    config.rovers.forEach(elem => {
      getRoverInfo(elem)
        .then(data => this.addRover(data));
    });
  }

  addRover(elem) {
    if (this.rovers.find(rover => rover.id === elem.id)) return;
    this.rovers.push(elem);
  }

  get info() {
    return `Total: ${this.rovers.length}`;
  }

}

export { Rovers };