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
            const state = await stateService.get_A_state(req.query.state)
            res.status(202).json({data: state})
        } catch (error) {
            res.status(404).json({message: 'no state found'});
        }
    }

    public get_NorthWest_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_NorthWest_states() 
           res.status(202).json({amount_of_northwest_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }

    public get_Northcentral_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_Northcentral_states() 
           res.status(202).json({amount_of_Northcentral_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }

    public get_Northeast_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_Northeast_states() 
           res.status(202).json({amount_of_Northeast_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }

    public get_southeast_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_southeast_states() 
           res.status(202).json({amount_of_southeast_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }

    public get_southsouth_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_southsouth_states()
           res.status(202).json({amount_of_southsouth_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }

    public get_southwest_states = async(req: Request, res: Response, next: NextFunction) => {
        try {
           const states = await stateService.get_southwest_states()
           res.status(202).json({amount_of_southwest_states:states.length ,data: states})
        } catch (error) {
            res.status(404).json({message: 'no states found'});
        }
    }
}

export default StateController;