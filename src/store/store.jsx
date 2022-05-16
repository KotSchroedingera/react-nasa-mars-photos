import { makeAutoObservable } from "mobx";
import config from '../api/api.config';
import { getManifestInfo, getRoverInfo } from '../api/api.methods';


class Rovers {

  rovers = []; 
  manifests = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRovers() {
    config.rovers.forEach(elem => {
      getRoverInfo(elem)
        .then(data => this.addRover(data));
    });
  }

  addRover(elem) {
    if (this.rovers.find(rover => rover.id === elem.id)) return;
    this.rovers.push(elem);
  }

  fetchMainfest(name) {
    getManifestInfo(name)
      .then(data => this.addManifest(data));
  }

  addManifest(elem) {
    if (this.manifests.find(manifest => {
      return manifest.name === elem.name
    })) return;
    this.manifests.push(elem);
  }

  getManifest(name) {
    return this.manifests.find(elem => elem.name.toLowerCase() === name.toLowerCase());
  }

}

export const roversMb = new Rovers();
