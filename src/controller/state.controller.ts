import { NextFunction, Request, Response } from 'express';
import StateService from '../services/state.service'; 

const stateService = new StateService();
class StateController{

    public addState = async(req: Request, res: Response, next: NextFunction) =>{
        try {
            const addedState = await stateService.addState(req.body)
            res.status(201).json({data: addedState, message: `${addedState.name} added`});
        } catch (error) {
            res.status(406).json({message: 'state not added'});
        }
    }
    public getAllState = async(req: Request, res: Response, next: NextFunction) =>{
        try {
            const states = await stateService.getAllState()
            res.status(202).json({data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }

    }

    public get_A_state = async(req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.query.state)
            const state = await stateService.get_A_state(req.query.state)
            res.status(202).json({data: state})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }
}

export default StateController;