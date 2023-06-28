# Green and White API

Welcome to the Green and White API! This API provides geographical data about Nigeria, including states, regions, and local government areas.

## Features

1. Authentication and Authorization: Some of the endpoints of the API require authentication to perform their services. To use these endpoints, sign up and log in, and then use the provided API key for authorization.

2. General APIs: Retrieve data for all states in Nigeria, data of a particular state, data of states in a particular region or geopolitical zone, and search for a state using its coordinates (longitude and latitude).

## Extra Features

- Caching and rate limiting for higher performance.
- Endpoints are carefully tested.
- The API is also well-documented. [Documentation Link](https://greenandwhite.onrender.com/docs)

## Setup

To set up the Green and White API, follow these steps:

1. Install the required tools: Node, MongoDB, TypeScript, Express, Redis, Jest, etc.
2. Clone this repository.
3. Navigate to the `green-and-white-API` directory.
4. Update the environment variables using the provided example.env file:
    ```
    NODE_ENV=development
    PORT=8080
    MONGODB_URL=<enter your MongoDB URL>
    SECRET_KEY=JCNBDU498BFINE849 (any random characters)
    JWT_LIFESPAN='4h'
    REDIS_USERNAME=<enter your Redis Cloud username>
    REDIS_PORT=<Redis database port>
    REDIS_HOST=<your Redis host>
    REDIS_PASSWORD=<your Redis password>
    ```
5. Run `npm install` to install the dependencies.
6. Run `npm run start:dev` to start the API.

## Base URL
- https://greenandwhite.onrender.com


## Models
---
### User

| field     | data_type | constraints       |
| --------- | --------- | ----------------- |
| id        | string    | required          |
| username  | string    | required          |
| password  | string    | required          |
|  API_KEY     | string  |  default(generated) |
|  max_key_useage |   Number |  default(300)  |


### STATE
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  name | string  |  required|
|  capital  |  string |  required  |
|  LGA  |  array |  required  |
|  latitude  |  number |  required  |
|  longitude     | number  |  required |
|  region |   objectId |  required, unique  |
|  number_of_LGA |  number |  required |

### region

| field    | data_type | constraints       |
| -------- | --------- | ----------------- |
| id       | string    | required          |
| name  | string  | required          |

## APIs


### Signup User

- Route: /api/user/signup
- Method: POST
- Body: 
```
{
  "username": "XXIII",
  "password": "twentythree"
}
```

- Responses

signup successful
```
{
    
    data: {
        "username": "XXIII",
        "password": hash("twentythree"),
        "API_KEY": " d4S8Fsqj91fqUCW",
        "max_key_useage": 300,
        "_id": "649b6e3056ce395be7842aee",
        "__v": 0
    },
    "message": "User signed up"
}
```
---
### Login User

- Route: /api/user/login
- Method: POST
- Body: 
```
{
  "username": "XXIII",
  "password": "twentythree"
}
```

- Responses

Success
```
{
    "APIKEY": " 1mqEG6VlcBsV8i1",
    "message": "User Logged in"
}
```
-this endpoint is incase your APIKEY useage runs out when you login it regenerates a new APIKEY.
---
### STATE (add state)

- Route: /api/states/
- Method: POST
- Header
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
  - username(XXIII) 
- Body: 
```
{
    "name": "Lagos",
    "capital": "Ikeja ",
    "LGA": [
          "Alimosho",
"Ajeromi-Ifelodun",
"Kosofe",
"Mushin",
"Oshodi-Isolo",
"Ojo",
"Ikorodu ",
"Surulere",
"Agege",
"Ifako-Ijaiye",
"Somolu",
"Amuwo-Odofin",
"Lagos Mainland",
"Ikeja",
"Eti-Osa",
"Badagry",
"Apapa",
"Lagos Island",
"Epe",
"Ibeju-Lekki"
    ],
    "latitude": 6.5227,
    "longitude": 3.6218,
    "region": "6462b5c892eb5caec51d99c4",
    "number_of_LGA": 20

}
```

- Responses

Success
status code : 201
```
{
    "data": {
        "name": "Lagos",
        "capital": "Ikeja ",
        "LGA": [
            "Alimosho",
            "Ajeromi-Ifelodun",
            "Kosofe",
            "Mushin",
            "Oshodi-Isolo",
            "Ojo",
            "Ikorodu ",
            "Surulere",
            "Agege",
            "Ifako-Ijaiye",
            "Somolu",
            "Amuwo-Odofin",
            "Lagos Mainland",
            "Ikeja",
            "Eti-Osa",
            "Badagry",
            "Apapa",
            "Lagos Island",
            "Epe",
            "Ibeju-Lekki"
        ],
        "latitude": 6.5227,
        "longitude": 3.6218,
        "region": "6462b5c892eb5caec51d99c4",
        "number_of_LGA": 20,
        "_id": "649b71d67aa8c5e780fbabb7",
        "__v": 0
    },
    "message": "Lagos added"
}
```
---
### STATE(all the states in Nigeria )

- Route: /api/states/
- Method: GET
- Header
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "6467ce5f4ce60f86d18b28ae",
            "name": "Abia",
            "capital": "Umuahia",
            "LGA": [
                "Aba North",
                "Aba South",
                "Arochukwu",
                "Bende",
                "Ikwuano",
                "Isiala Ngwa North",
                "Isiala Ngwa South",
                "Isuikwuato",
                "Obi Ngwa",
                "Ohafia",
                "Osisioma Ngwa",
                "Ugwunagbo",
                "Ukwa East",
                "Ukwa West",
                "Umuahia North",
                "Umuahia South",
                "Umu Nneochi"
            ],
            "latitude": 7.5248,
            "longitude": 5.4527,
            "region": {
                "_id": "6462b53192eb5caec51d99c0",
                "name": "South East"
            },
            "number_of_LGA": 17,
            "__v": 0
        },

        ...()
    ]
}
```
---
### STATE(a Particular  state in Nigeria by its name )

- Route: /api/states/state
- Method: GET
- Header
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
    - state(Kano)CAPITALIZED
- Responses

Success
status code : 202
```
{
    "data": {
        "_id": "6469546ae8003793bf04c45f",
        "name": "Kano",
        "capital": "Kano",
        "LGA": [
            " Fagge",
            "Dala ",
            "Gwale",
            "Kano Municipal",
            "Tarauni ",
            "Nassarawa",
            "Kumbotso",
            "Ungogo",
            "Dawakin Tofa",
            "Tofa",
            "Rimin Gado",
            "Bagwai ",
            "Gezawa",
            "Gabasawa",
            "Minjibir ",
            "Dambatta",
            "Makoda",
            "Kunchi",
            "Bichi",
            "Tsanyawa",
            "Shanono ",
            "Gwarzo",
            "Karaye",
            "Rogo",
            "Kabo",
            "Bunkure",
            "Kibiya",
            "Rano",
            "Tudun Wada",
            "Doguwa",
            "Madobi",
            "Kura",
            "Garun Mallam",
            "Bebeji",
            "Kiru",
            "Sumaila",
            "Garko",
            "Takai",
            "Albasu",
            "Gaya",
            "Ajingi",
            "Wudil",
            "Warawa",
            "Dawakin Kudu"
        ],
        "latitude": 11.7471,
        "longitude": 8.5247,
        "region": {
            "_id": "6462b4ce92eb5caec51d99bc",
            "name": "North Central"
        },
        "number_of_LGA": 44,
        "__v": 0
    }
}
```
---
### STATE(all the states in NORTHWESTER region of Nigeria )

- Route: /api/states/northwest
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "64695617e8003793bf04c461",
            "name": "Katsina",
            "capital": "Katsina",
            "LGA": [
                "Bakori",
                "Batagarawa",
                "Batsari",
                "Baure",
                "Bindawa",
                "Charanchi",
                "Dan Musa",
                "Dandume",
                "Danja",
                "Daura",
                "Dutsi",
                "Dutsin-Ma",
                "Faskari",
                "Funtua",
                "Ingawa",
                "Jibia",
                "Kafur",
                "Kaita",
                "Kankara",
                "Kankia",
                "Katsina",
                "Kurfi",
                "Kusada",
                "Mai'Adua",
                "Malumfashi",
                "Mani",
                "Mashi",
                "Matazu",
                "Musawa",
                "Rimi",
                "Sabuwa",
                "Safana",
                "Sandamu",
                "Zango"
            ],
            "latitude": 12.3797,
            "longitude": 7.6306,
            "region": {
                "_id": "6462b4b692eb5caec51d99ba",
                "name": "North West"
            },
            "number_of_LGA": 34,
            "__v": 0
        },
        {
            "_id": "6469589fe8003793bf04c463",
            "name": "Kebbi",
            "capital": "Birnin Kebbi",
            "LGA": [
                "Aleiro",
                "Arewa Dandi",
                "Argungu",
                "Augie",
                "Bagudo",
                "Birnin Kebbi",
                "Bunza",
                "Dandi",
                "Fakai",
                "Gwandu",
                "Jega",
                "Kalgo",
                "Koko/Besse",
                "Maiyama",
                "Ngaski",
                "Sakaba",
                "Shanga",
                "Suru",
                "Wasagu",
                "Yauri",
                "Zuru"
            ],
            "latitude": 11.4942,
            "longitude": 4.2333,
            "region": {
                "_id": "6462b4b692eb5caec51d99ba",
                "name": "North West"
            },
            "number_of_LGA": 21,
            "__v": 0
        },
        {
            "_id": "64753e5cf45a0683e60a0bd7",
            "name": "Sokoto",
            "capital": "Sokoto",
            "LGA": [
                "Binji",
                "Bodinga",
                "Dange Shuni",
                "Gada",
                "Goronyo",
                "Gudu",
                "Gwadabawa",
                "Illela",
                "Isa",
                "Kebbe",
                "Kware",
                "Rabah",
                "Sabon Birni",
                "Shagari",
                "Silame",
                "Sokoto North",
                "Sokoto South",
                "Tambuwal",
                "Tangaza",
                "Tureta",
                "Wamako",
                "Wurno",
                "Yabo"
            ],
            "latitude": 13.0533,
            "longitude": 5.3223,
            "region": {
                "_id": "6462b4b692eb5caec51d99ba",
                "name": "North West"
            },
            "number_of_LGA": 23,
            "__v": 0
        },
        {
            "_id": "6475438ff45a0683e60a0bdf",
            "name": "Zamfara",
            "capital": "Gusau",
            "LGA": [
                "Anka",
                "Bakura",
                "Birnin Magaji/Kiyaw",
                "Bukkuyum",
                "Bungudu",
                "Chafe (Tsafe)",
                "Gummi",
                "Gusau",
                "Kaura Namoda",
                "Maradun",
                "Maru",
                "Shinkafi",
                "Talata Mafara",
                "Zurmi"
            ],
            "latitude": 12.1222,
            "longitude": 6.2236,
            "region": {
                "_id": "6462b4b692eb5caec51d99ba",
                "name": "North West"
            },
            "number_of_LGA": 14,
            "__v": 0
        }
    ]
}
```
---
### STATE(all the states in NORTHCENTRAL region of Nigeria )

- Route: /api/states/northcentral
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "6467fd55f0464d882fc0bf19",
            "name": "Benue ",
            "capital": "Makurdi",
            "LGA": [
                "Ado",
                " Agatu",
                "Apa",
                "Buruku",
                "Gboko ",
                "Guma ",
                " Gwer East",
                "Gwer West",
                "Katsina-Ala",
                "Konshisha",
                "Kwande",
                "Logo",
                "Makurdi",
                "Obi",
                "Ogbadibo",
                "Oju",
                "Okpokwu",
                "Ohimini",
                "Oturkpo",
                "Tarka",
                "Ukum",
                "Ushongo",
                "Vandeikya"
            ],
            "latitude": 7.3369,
            "longitude": 8.7404,
            "region": {
                "_id": "6462b4ce92eb5caec51d99bc",
                "name": "North Central"
            },
            "number_of_LGA": 23,
            "__v": 0
        },
        {
            "_id": "646950e8e8003793bf04c45d",
            "name": "Kaduna",
            "capital": "Kaduna",
            "LGA": [
                "Birnin Gwari",
                "Chikun ",
                "Giwa",
                "Igabi",
                "Ikara ",
                "Jaba",
                "Jema'a",
                "Kachia",
                "Kaduna North",
                "Kaduna South",
                "Kagarko",
                "Kajuru ",
                "Kaura",
                "Kauru",
                "Kubau ",
                "Kudan",
                "Lere",
                "Makarf",
                "Sabon Gari",
                "Sanga",
                "Soba ",
                "Zangon Kataf",
                "Zaria"
            ],
            "latitude": 10.3764,
            "longitude": 7.7095,
            "region": {
                "_id": "6462b4ce92eb5caec51d99bc",
                "name": "North Central"
            },
            "number_of_LGA": 23,
            "__v": 0
        },
        {
            "_id": "6469546ae8003793bf04c45f",
            "name": "Kano",
            "capital": "Kano",
            "LGA": [
                " Fagge",
                "Dala ",
                "Gwale",
                "Kano Municipal",
                "Tarauni ",
                "Nassarawa",
                "Kumbotso",
                "Ungogo",
                "Dawakin Tofa",
                "Tofa",
                "Rimin Gado",
                "Bagwai ",
                "Gezawa",
                "Gabasawa",
                "Minjibir ",
                "Dambatta",
                "Makoda",
                "Kunchi",
              ...
            ]
        }
    ]
}
```
---
### STATE(all the states in NORTHEAST region of Nigeria )

- Route: /api/states/northeast
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "6467d6ae17a0382290f53f08",
            "name": "Adamawa",
            "capital": " Yola",
            "LGA": [
                "Demsa",
                "Fufore",
                "Ganye",
                "Girei",
                "Gombi",
                "Guyuk  ",
                "Hong",
                "Jada",
                "Lamurde ",
                "Madagali",
                "Maiha",
                "Mayo Belwa",
                "Michika ",
                "Mubi North",
                "Mubi South",
                "Numan",
                "Shelleng",
                "Song",
                "Toungo",
                "Yola North",
                "Yola Sorth"
            ],
            "latitude": 12.3984,
            "longitude": 9.3265,
            "region": {
                "_id": "6462b50d92eb5caec51d99be",
                "name": "North East"
            },
            "number_of_LGA": 21,
            "__v": 0
        },
        ...
    ]
}
```
---
### STATE(all the states in SOUTHEAST region of Nigeria )

- Route: /api/states/southeast
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "6467ce5f4ce60f86d18b28ae",
            "name": "Abia",
            "capital": "Umuahia",
            "LGA": [
                "Aba North",
                "Aba South",
                "Arochukwu",
                "Bende",
                "Ikwuano",
                "Isiala Ngwa North",
                "Isiala Ngwa South",
                "Isuikwuato",
                "Obi Ngwa",
                "Ohafia",
                "Osisioma Ngwa",
                "Ugwunagbo",
                "Ukwa East",
                "Ukwa West",
                "Umuahia North",
                "Umuahia South",
                "Umu Nneochi"
            ],
            "latitude": 7.5248,
            "longitude": 5.4527,
            "region": {
                "_id": "6462b53192eb5caec51d99c0",
                "name": "South East"
            },
            "number_of_LGA": 17,
            "__v": 0
        },
        ...
    ]
}
```
---
### STATE(all the states in SOUTHSOUTH region of Nigeria )

- Route: /api/states/southsouth
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "6467f3c6f0464d882fc0bf0e",
            "name": "Akwa Ibom ",
            "capital": " Uyo",
            "LGA": [
                "Abak",
                "Eastern Obolo",
                "Eket",
                "Esit-Eket",
                "Essien Udim",
                "Etim-Ekpo  ",
                "Etinan",
                "Ibeno",
                "Ibesikpo-Asutan ",
                "Ibiono-Ibom",
                "Ika",
                "Ikono",
                "Ikot Abasi ",
                "Ikot Ekpene",
                "Ini",
                "Itu",
                "Mbo",
                "Mkpat-Enin",
                "Nsit-Atai",
                "Nsit-Ibom",
                "Nsit-Ubium",
                "Obot-Akara",
                "Okobo",
                "Onna",
                "Oron",
                "Oruk Anam",
                "Ukanafun",
                "Udung-Uko",
                "Uruan",
                "Urue-Offong/Oruko",
                "Uyo"
            ],
            "latitude": 4.9057,
            "longitude": 7.8537,
            "region": {
                "_id": "6462b5b092eb5caec51d99c2",
                "name": "South South"
            },
            "number_of_LGA": 31,
            "__v": 0
        },
        ...
    ]
}
```
---
### STATE(all the states in SOUTHWEST region of Nigeria )

- Route: /api/states/southwest
- Method: GET
- Header 
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Responses

Success
status code : 202
```
{
    "data": [
        {
            "_id": "646946a0e8003793bf04c453",
            "name": "Ekiti",
            "capital": "Ado-Ekiti",
            "LGA": [
                "Ado-Ekiti",
                " Aiyekire (Gbonyin)",
                "Efon",
                "Emure",
                "Ekiti East",
                "Ekiti West",
                "Ekiti South-West",
                "Ikere",
                "Ido-Osi",
                "Ijero",
                "Ikole",
                " Ilejemeje ",
                " Irepodun/Ifelodun",
                "Ise/Orun",
                "Moba",
                "Oye"
            ],
            "latitude": 7.719,
            "longitude": 5.311,
            "region": {
                "_id": "6462b5c892eb5caec51d99c4",
                "name": "South West"
            },
            "number_of_LGA": 16,
            "__v": 0
        },
        {
            "_id": "64696074e8003793bf04c469",
            "name": "Lagos",
            "capital": "Ikeja ",
            "LGA": [
                "Alimosho",
                "Ajeromi-Ifelodun",
                "Kosofe",
                "Mushin",
                "Oshodi-Isolo",
                "Ojo",
                "Ikorodu ",
                "Surulere",
                "Agege",
                "Ifako-Ijaiye",
                "Somolu",
                "Amuwo-Odofin",
                "Lagos Mainland",
                "Ikeja",
                "Eti-Osa",
                "Badagry",
                "Apapa",
                "Lagos Island",
                "Epe",
                "Ibeju-Lekki"
            ],
            "latitude": 6.5227,
            "longitude": 3.6218,
            "region": {
                "_id": "6462b5c892eb5caec51d99c4",
                "name": "South West"
            },
            "number_of_LGA": 20,
            "__v": 0
        },
        ...
    ]
}
```
---
### STATE(a Particular  state  in Nigeria by it COORDINATES [longitude & latitude] )

- Route: /api/states/coordinates
- Method: GET
- Header
    - Authorization:
      type : API Key
      key :  x-api-key
      value: 1mqEG6VlcBsV8i1
- Query params: 
    - username(XXIII) 
- Body: 
```
{
    "longitude":9.9992,
    "latitude":10.7761
}
```
- Responses

Success
status code : 202
```
{
    "data": {
        "_id": "6467f95cf0464d882fc0bf12",
        "name": "Bauchi",
        "capital": "Bauchi",
        "LGA": [
            "Bauchi",
            "Tafawa Balewa",
            "Dass",
            "Toro",
            "Bogoro",
            "Ningi ",
            "Warji",
            "Ganjuwa",
            "Kirfi",
            "Alkaleri",
            "Darazo",
            "Misau",
            "Giade",
            "Jamaare",
            "Shira",
            " Katagum",
            " Itas/Gadau",
            "Zaki",
            "Gamawa",
            "Damban"
        ],
        "latitude": 10.7761,
        "longitude": 9.9992,
        "region": "6462b50d92eb5caec51d99be",
        "number_of_LGA": 20,
        "__v": 0
    }
}
```
---


### STATE (Get a particular state in Nigeria by its coordinates [longitude & latitude])

- **URL:** `/api/states/coordinates`
- **Method:** POST
- **Tags:** States

#### Request Parameters

| Parameter  | Type   | Required | Default    | Description       |
|------------|--------|----------|------------|-------------------|
| username   | string | true     | c.ronaldo1 | User's username   |

#### Request Body

The request body should be a JSON object with the following properties:

```json
{
  "longitude": 9.9992,
  "latitude": 10.7761
}
```
---

## Contributor

- Itohowo Monday :
  [Github](https://github.com/techrook)
  [twitter](https://twitter.com/Itohowo23)