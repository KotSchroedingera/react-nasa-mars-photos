import makeInspectable from "mobx-devtools-mst";
import { flow, types } from "mobx-state-tree";
import { getManifestInfo, getRoverInfo } from "../api/api.methods";
import config from "../api/api.config";


const CameraType = types
  .model({
    name: types.string, 
    full_name: types.string,
  });

const RoverType = types
  .model({
    cameras: types.array(CameraType),
    id: types.identifierNumber,
    landing_date: types.string,
    launch_date: types.string,
    max_date: types.string,
    max_sol: types.integer,
    name: types.string,
    status: types.string,
    total_photos: types.integer,
  }); 

const ManifestPhotosType = types.model({
  "sol": types.integer,
  "earth_date": types.string,
  "total_photos": types.integer,
  "cameras": types.array(types.string)
});

const ManifestType = types.model({
  "name": types.identifier,
  "landing_date": types.string,
  "launch_date": types.string,
  "status": types.string,
  "max_sol": types.number,
  "max_date": types.string,
  "total_photos": types.number, 
  "photos": types.array(ManifestPhotosType)
});


const RoverStore = types
  .model('RoverStore', {
    loading: types.boolean = false, 
    rovers: types.array(RoverType), 
    manifests: types.array(ManifestType)
  })
  .views(self => ({
    manifest(name) {
      return self.manifests.find(elem => elem.name === name);
    }
  }))
  .actions(self => ({
    addRover(rover) {
      self.rovers.push(rover);
    }, 
    addManifest(manifest) {
      self.manifests.push(manifest);
    }
  }))
  .actions(self => ({
    fetchRover: flow(function* (name) {
      self.loading = true;
      try {
        const rover = yield getRoverInfo(name);
        if (self.rovers.find(elem => elem.id === rover.id)) return;
        self.addRover(rover); 
        self.loading = false;
      } catch(err) {
        console.log(err); 
        self.loading = false;
      }
    }),
    fetchAllRovers() {
      config.rovers.forEach(elem => {
        self.fetchRover(elem);
      })
    },
    fetchManifest: flow(function* (name) {
      self.loading = true;
      try {
        const manifest = yield getManifestInfo(name);
        if (self.manifests.find(elem => elem.name === manifest.name)) return;
        self.addManifest(manifest); 
        self.loading = false;
      } catch(err) {
        console.log(err); 
        self.loading = false;
      }
    })
  }));

const roverStore = RoverStore.create();
window.store = roverStore;
makeInspectable(roverStore);
export default roverStore;