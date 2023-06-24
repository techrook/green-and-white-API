import STATE, { State } from "../models/states.model";
import { HttpException } from "../exceptions/httpException";

class StateService {
  public async addState(stateData) {
    if (!stateData) throw new HttpException(404, `enter  state data`);
    const newState = await STATE.create(stateData);

    return newState;
  }
  public async getAllState() {
    const allState = await STATE.find().populate("region", { name: 1 });

    return allState;
  }
  public async get_A_state(state) {
    if (!state) throw new HttpException(404, `enter a state`);
    const the_state = await STATE.findOne({ name: state }).populate("region", {
      name: 1,
    });

    if (!the_state) throw new HttpException(404, `state not found`);

    return the_state;
  }
  public async get_NorthWest_states() {
    const states = await STATE.find({
      region: "6462b4b692eb5caec51d99ba",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }
  public async get_Northcentral_states() {
    const states = await STATE.find({
      region: "6462b4ce92eb5caec51d99bc",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }
  public async get_Northeast_states() {
    const states = await STATE.find({
      region: "6462b50d92eb5caec51d99be",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }
  public async get_southeast_states() {
    const states = await STATE.find({
      region: "6462b53192eb5caec51d99c0",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }
  public async get_southsouth_states() {
    const states = await STATE.find({
      region: "6462b5b092eb5caec51d99c2",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }
  public async get_southwest_states() {
    const states = await STATE.find({
      region: "6462b5c892eb5caec51d99c4",
    }).populate("region", { name: 1 });

    if (!states) throw new HttpException(404, `states not found`);

    return states;
  }

  public async find_state_by_coord({ longitude, latitude }) {
    const state_lat = await STATE.findOne({ latitude: latitude });
    if (!state_lat) throw new HttpException(404, `enter correct coordinates`);

    if (state_lat.longitude == longitude) {
      return state_lat;
    } else {
      throw new HttpException(404, `enter correct coordinates`);
    }
  }
  public async update_state({ id, updateData }) {
    if (!id) throw new HttpException(404, `enter state id`);
    if (!updateData) throw new HttpException(400, `no update data`);
    const updatedState = await STATE.findByIdAndUpdate(id, { updateData });
    return updatedState;
  }
}

export default StateService;
