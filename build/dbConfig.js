//use training-buddy

db.createUser(
    {
        user: "training-buddy",
        pwd: "youwillneverguessit",
        roles: [ "readWrite", "dbAdmin" ]
    }
);