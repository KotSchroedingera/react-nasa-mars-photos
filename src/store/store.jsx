import { flow, getSnapshot, types } from "mobx-state-tree";
import { getRoverInfo } from "../api/api.methods";

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

const RoverStore = types
  .model('RoverStore', {
    loading: types.boolean = false, 
    rovers: types.array(RoverType)
  })
  .views(self => {
    return {
      get quantity() {
        return self.rovers.length;
      }
    }
  })
  .actions(self => {
    return {
      addRover(rover) {
        self.rovers.push(rover);
      }
    }
  })
  .actions(self => ({
    fetchRovers: flow(function* fetchRovers(name) {
      self.loading = true;
      try {
        const rover = yield getRoverInfo(name);
        console.log(rover);
        self.addRover(rover); 
        self.loading = false;
      } catch(err) {
        console.log(err); 
        self.loading = false;
      }
    })
  }));

  const store = RoverStore.create();
  console.log(getSnapshot(store));
  console.log(store.quantity);
  // store.addRover({
  //   name: 'luna', 
  //   status: 'complete',
  //   total_photos: 123
  // })
  console.log(getSnapshot(store));
  store.fetchRovers('spirit');
  console.log(getSnapshot(store));

  export default store;




// class Rovers {

//   rovers = []; 
//   manifests = [];

//   constructor() {
//     makeAutoObservable(this);
//   }

//   fetchRovers() {
//     config.rovers.forEach(elem => {
//       getRoverInfo(elem)
//         .then(data => this.addRover(data));
//     });
//   }

//   addRover(elem) {
//     if (this.rovers.find(rover => rover.id === elem.id)) return;
//     this.rovers.push(elem);
//   }

//   fetchMainfest(name) {
//     getManifestInfo(name)
//       .then(data => this.addManifest(data));
//   }

//   addManifest(elem) {
//     if (this.manifests.find(manifest => {
//       return manifest.name === elem.name
//     })) return;
//     this.manifests.push(elem);
//   }

//   getManifest(name) {
//     return this.manifests.find(elem => elem.name.toLowerCase() === name.toLowerCase());
//   }

// }

// export const roversMb = makeInspectable(new Rovers());
