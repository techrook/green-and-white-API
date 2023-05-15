import { HttpException } from '../exceptions/httpException';
import REGION,{Region} from '../models/region.model';

class RegionService{
    public async addRegion(regionData:Region){
        if(!regionData) throw new HttpException(404, 'no region data entered')
        const newRegion = await REGION.create(regionData)

        return newRegion
    }


}

export default RegionService;