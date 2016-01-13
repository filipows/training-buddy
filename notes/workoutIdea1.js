{
  "workout": {
  "data": "13.01.2016",
    "duration": "60min",
    "godzina_rozpoczecia": "18:40"
  "comment": "?",
    "exercises": [
    {
      "type": "pompki",
      "category": "obr?cz barkowa/barki?"
      "powtorzen": 15
    },
    {
      "type": "pompki",
      "powtorzen": 15
    },
    {
      "type": "pompki",
      "powtorzen": 15
    },
    {
      "type": "pompki",
      "powtorzen": 15
    },
    {
      "type": "plank",
      "duration": "30s"
    },
    {
      "type": "plank",
      "duration": "30s"
    },
    {
      "type": "plank",
      "duration": "30s"
    },
    {
      "type": "brzuszki",
      "powtorzen": 15
    },
    {
      "type": "brzuszki",
      "powtorzen": 15
    },
    {
      "type": "brzuszki",
      "powtorzen": 15
    },
    {
      "type": "przysiady",
      "powtorzen": 15
    },
    {
      "type": "przysiady",
      "powtorzen": 15
    },
    {
      "type": "przysiady",
      "powtorzen": 15
    },
  ],
}
}

workout == trening


workoutSchema = {
  date: Date,
  duration: Number,
  exercises: [exerciseSchema]
}