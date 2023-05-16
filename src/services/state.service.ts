import STATE,{State} from "@/models/states.model";

class StateService{
    public async addState(stateData: State){
        const newState = await STATE.create(stateData)

        return newState
    }
    public async getAllState(){
        const allState = await STATE.find()
            .populate({path: "REGION", model: "REGION"})

        return allState
    }
    public async get_A_state(state){
        
        const the_state = await STATE.find(state)

        return the_state
    }
}


export default StateService;