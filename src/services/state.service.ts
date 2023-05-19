import STATE,{State} from "../models/states.model";

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
        
        const the_state = await STATE.findOne({name: state})
        .populate( "region", {name: 1 })

        return the_state
    }
}


export default StateService;