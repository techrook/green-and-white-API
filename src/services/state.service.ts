import STATE,{State} from "../models/states.model";
import { HttpException } from "../exceptions/httpException";
class StateService{
    public async addState(stateData: State){
        const newState = await STATE.create(stateData)

        return newState
    }
    public async getAllState(){
        const allState = await STATE.find()
            .populate( "region", {name: 1 })

        return allState
    }
    public async get_A_state(state){
        if(!state) throw new HttpException(404, `enter a state`);
        const the_state = await STATE.findOne({name: state})
        .populate( "region", {name: 1 })

        if(!the_state) throw new HttpException(404, `state not found`);

        return the_state
    }
}


export default StateService; 