import supertest from "supertest";
import mongoose from "mongoose";
import app from '../../src/app'
import STATE from "../../src/models/states.model";
import { MongoMemoryServer } from "mongodb-memory-server";
//import genAPIKey from "../../src/middlewares/generateApiKey.middleware";


const userInput = {
    username: "lebron",
    password: "Password123",
  };

  const stateInput = {
    name: "teststate",
    capital: "testcapital",
    LGA: [
        "LGA1",
        "LGA2",
        "LGA3",
        "LGA4",
        "LGA5"

    ],
    latitude: 6.364738,
    longitude: 7.46883,
    region : "6462b53192eb5caec51d99c0",
    number_of_LGA: 5
  }

describe("state", ()=>{
    let apikey

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
    
        await mongoose.connect(mongoServer.getUri());

        const { body } = await supertest(app)
      .post("/api/user/signup")
      .send(userInput);
apikey = body.data.API_KEY
      });
      afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
      })
    //add state
    it("should add state", async () =>{
        
        const { statusCode, body } = await supertest(app)
            
          .post("/api/states/")
          .query({ username: 'lebron' })
          .send(stateInput)
          .set('Accept', 'application/json')
          .set({ 'x-api-key': `${apikey}`, Accept: 'application/json' });


          expect(statusCode).toBe(201);
          expect(body.data).toHaveProperty(["name"]);
          expect(body.data).toHaveProperty(["capital"]);
          expect(body.data).toHaveProperty(["LGA"]);
          expect(body.data).toHaveProperty(["latitude"]);
          expect(body.data).toHaveProperty(["longitude"]);
          expect(body.data).toHaveProperty(["number_of_LGA"]);
          
    });
    //get all the states 
    it("should get all states", async() =>{
        await STATE.create({
            name: "teststate",
            capital: "testcapital",
            LGA: [
                "LGA1",
                "LGA2",
                "LGA3",
                "LGA4",
                "LGA5"
        
            ],
            latitude: 6.364738,
            longitude: 7.46883,
            region : "6462b53192eb5caec51d99c0",
            number_of_LGA: 5
          })

          await STATE.create({
            name: "teststate2",
            capital: "testcapital2",
            LGA: [
                "LGA1",
                "LGA2",
                "LGA3",
                "LGA4",
                "LGA5"
        
            ],
            latitude: 8.73872,
            longitude: 2.46883,
            region : "6462b53192eb5caec51d99c0",
            number_of_LGA: 5
          })

          await STATE.create({
            name: "teststate3",
            capital: "testcapital3",
            LGA: [
                "LGA1",
                "LGA2",
                "LGA3",
                "LGA4",
                "LGA5"
        
            ],
            latitude: 5.93287,
            longitude: 4.98692,
            region : "6462b53192eb5caec51d99c0",
            number_of_LGA: 5
          })
          const text = await STATE.find()


          const { statusCode, body } = await supertest(app)

          .get("/api/states/state")
          .query({ username: 'lebron' })
          .query({ state: 'teststate3' })
          .set('Accept', 'application/json')
          .set({ 'x-api-key': `${apikey}`, Accept: 'application/json' });

          console.log(text)
          expect(statusCode).toBe(202);
          // expect(body.data).toHaveLength(2)
          // expect(body.data).toHaveProperty(["name"]);
          // expect(body.data).toHaveProperty(["capital"]);
          // expect(body.data).toHaveProperty(["LGA"]);
          // expect(body.data).toHaveProperty(["latitude"]);
          // expect(body.data).toHaveProperty(["longitude"]);
          // expect(body.data).toHaveProperty(["number_of_LGA"]);
    });
    // get a state
    it("should get a state", async() =>{
      const { statusCode, body } = await supertest(app)

      .get("/api/states/state")
      .query({ username: 'lebron' })
      .query({ state: 'teststate3' })
      .set('Accept', 'application/json')
      .set({ 'x-api-key': `${apikey}`, Accept: 'application/json' });

      expect(statusCode).toBe(202);
      // expect(body.data).toHaveLength(2)
      // expect(body.data).toHaveProperty(["name"]);
      // expect(body.data).toHaveProperty(["capital"]);
      // expect(body.data).toHaveProperty(["LGA"]);
      // expect(body.data).toHaveProperty(["latitude"]);
      // expect(body.data).toHaveProperty(["longitude"]);
      // expect(body.data).toHaveProperty(["number_of_LGA"]);

    });
    // get states by region
        //Northwest states

        //NorthCentral

        //northEast

        //southeast

        //southsouth

        //southwest

    // get state by cordinates

    // update state
});