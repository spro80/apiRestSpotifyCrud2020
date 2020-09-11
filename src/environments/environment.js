environment = {
    "development": {
        "SERVERURL": "/api",
        "PORT": 3000,
        "BASE_PATH": "/api",
        "DATABASE": {
            "user": "pkfzjgwskkflds",
            "password": "f7b17b3efdb950071458a47e5eeb5435472963edc95b9225f2b90fe4940274a9",
            "database": "damjjn0n3aon5p",
            "port": 5432,
            "host": "ec2-3-226-231-4.compute-1.amazonaws.com"
        },
        "MOCK_RESPONSE": false
    },
    "qa":{
        "SERVERURL":"http://localhost:3001/",
        "PORT": 3000
    },
    "production": {
        "SERVERURL": "http://localhost:3001/",
        "PORT": 3000
    }
}

module.exports = environment;






