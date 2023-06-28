import { Router } from "express";
import StateController from "../controller/state.controller";
import authorization from "../middlewares/auth.middleware";
import { stateDto } from "../dtos/state.dto";
import { ValidationMiddleware } from "../middlewares/validator.middleware";
import cacheMiddleware from "../middlewares/caching.middleware";
const stateController = new StateController();
const stateRouter = Router();

/**
 * @openapi
 * /api/states/:
 *   post:
 *     tags:
 *       - States
 *     summary: Add new state
 *     security:
 *       - x-api-key: []
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *           default: c.ronaldo1
 *         required: true
 *         description: User's username
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: Lagos
 *               capital:
 *                 type: string
 *                 default: Ikeja
 *               LGA:
 *                 type: array
 *                 items:
 *                   type: string
 *                 default:
 *                   - Alimosho
 *                   - Ajeromi-Ifelodun
 *                   - Kosofe
 *                   - Mushin
 *                   - Oshodi-Isolo
 *                   - Ojo
 *                   - Ikorodu
 *                   - Surulere
 *                   - Agege
 *                   - Ifako-Ijaiye
 *                   - Somolu
 *                   - Amuwo-Odofin
 *                   - Lagos Mainland
 *                   - Ikeja
 *                   - Eti-Osa
 *                   - Badagry
 *                   - Apapa
 *                   - Lagos Island
 *                   - Epe
 *                   - Ibeju-Lekki
 *               latitude:
 *                 type: number
 *                 default: 6.5227
 *               longitude:
 *                 type: number
 *                 default: 3.6218
 *               region:
 *                 type: string
 *                 default: 6462b5c892eb5caec51d99c4
 *               number_of_LGA:
 *                 type: number
 *                 default: 20
 *             required:
 *               - name
 *               - capital
 *               - LGA
 *               - latitude
 *               - longitude
 *               - region
 *               - number_of_LGA
 *     responses:
 *       201:
 *         description: Success
 *       400:
 *         description: Bad request
 */
stateRouter.post("/",authorization, ValidationMiddleware(stateDto), stateController.addState);
/**
* @openapi
*  /api/states/:
*  get:
*     tags:
*     - States
*     summary: Get all the states in nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/",
  authorization,
  cacheMiddleware,
  stateController.getAllState
);
/**
 * @openapi
 * /api/states/state:
 *   get:
 *     tags:
 *       - States
 *     summary: Get a state in Nigeria by its name.
 *     security:
 *       - x-api-key: []
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *           default: c.ronaldo1
 *         required: true
 *         description: User's username
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *           default: Kano
 *         required: true
 *         description: The state name (first letter should be capital)
 *     responses:
 *       202:
 *         description: Success
 *       404:
 *         description: State not found
 */
stateRouter.get(
  "/state",
  authorization,
  cacheMiddleware,
  stateController.get_A_state
);
/**
* @openapi
*  /api/states/northwest:
*  get:
*     tags:
*     - States
*     summary: Get all the  states in northwest region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/northwest",
  authorization,
  stateController.get_NorthWest_states
);
/**
* @openapi
*  /api/states/northcentral:
*  get:
*     tags:
*     - States
*     summary: Get all the states in northcentral region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/northcentral",
  authorization,
  stateController.get_Northcentral_states
);
/**
* @openapi
*  /api/states/northeast:
*  get:
*     tags:
*     - States
*     summary: Get all the states in northeast region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/northeast",
  authorization,
  stateController.get_Northeast_states
);
/**
* @openapi
*  /api/states/southeast:
*  get:
*     tags:
*     - States
*     summary: Get all the states in southeast region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/southeast",
  authorization,
  stateController.get_southeast_states
);
/**
* @openapi
*  /api/states/southsouth:
*  get:
*     tags:
*     - States
*     summary: Get all the states in southsouth region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/southsouth",
  authorization,
  stateController.get_southsouth_states
);
/**
* @openapi
*  /api/states/southwest:
*  get:
*     tags:
*     - States
*     summary: Get all the states in southwest region of nigeria
*     security:
*       - x-api-key: []
*     parameters:
*       - in: query
*         name: username
*         schema:
*           type: string
*           default: c.ronaldo1
*         required: true
*         description: User's username
*     responses:
*       202:
*         description: Success
*       404:
*         description: states not found
*/
stateRouter.get(
  "/southwest",
  authorization,
  stateController.get_southwest_states
);
/**
 * @openapi
 * /api/states/coordinates:
 *   post:
 *     tags:
 *       - States
 *     summary: Get a particular state in Nigeria by its coordinates [longitude & latitude]
 *     security:
 *       - x-api-key: []
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *           default: c.ronaldo1
 *         required: true
 *         description: User's username
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               longitude:
 *                 type: number
 *                 default: 9.9992
 *               latitude:
 *                 type: number
 *                 default: 10.7761
 *             required:
 *               - longitude
 *               - latitude
 *     responses:
 *       202:
 *         description: Success
 *       404:
 *         description: State not found
 */
stateRouter.get(
  "/coordinates",
  authorization,
  stateController.find_state_by_coordinates
);

stateRouter.patch("/update", authorization, stateController.update_state);
export default stateRouter;
