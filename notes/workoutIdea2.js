ExerciseType: {
  name: "pompki",
    category: "barki",
    wartosci: {
    "powtorzenia": "number"
  }
}

ExerciseType: {
  name: "basen",
    category: "basen",
    wartosci: {
    "dlugosci": "number",
      "dl basenu": "number" //[default: "25m"]
  }
}

"workout": {
  "data": "13.01.2016",
    "duration": "60min",
    "godzina_rozpoczecia": "18:40"
  "comment": "?",
    "exercises": [
    {	"type":"pompki",
      "powtorzen": [15, 15, 15]
    },
    {
      "type":"plank",
      "duration": ["30s", "30s", "30s"]
    },
    {
      "type":"brzuszki",
      "powtorzen": [15, 15, 15]
    },
    {
      "type":"przysiady",
      "powtorzen": [15, 15, 15]
    },
    {
      "type": "laweczka",
      "serie": [
        {
          "waga": "20kg",
          "powtorzen": 10
        },
        {
          "waga": "25kg",
          "powtorzen" 15
        },
        {
          "waga": "20kg",
          "powtorzen": 10
        }
      ]
    },
    {
      "type": "drazek",

    }

  ],
    "rozciaganie": {
    "duration": "10min",
      "cwiczenia": ['czworoglowy uda', 'naramienny dlugi', 'lydki']
  }
}

"workout": {
  "data": "13.01.2016",
    "duration": "60min",
    "godzina_rozpoczecia": "18:40"
  "comment": "basenowy cud - pierwszy raz w zyciu zrobile wiecej niz 4 dlugosci kraulem",
    "exercises": [
    {
      "type": "basen",
      "dlugosci": 50,
      "duragion": "40min",
      "dl basenu": "25m",
      "dlugosci pod woda": 3,
      "max dystans pod woda": 25
    }
}


WagaSchema = {
  "date": "13.01.2016",
  "weigth": "80kg"
}

Schemas:
  Waga, ExerciseType, Exercise, Workout


activity {
  type: squash,
    category: ogolnorozwojowka,
    duration: 60min,
    comment: "gra z Igorem"
}

activity {
  type: bieg
  category: wydolnosciowe
  duration: 30min,
    comment: "bieg o puchar rektora"
}

activity {
  type: sauna,
    duration: 45min
}

activity {
  type: pompki wasko,
    powtorzen: [15, 30, 15],
    comment
}

activity {
  type: bieg,
    duration: 45min
  tempo: 5min/km
    ?obciazenie: 3kg
}

activity {
  type: scianka,
    duration: 60min,
}


ActivityType {
  name: "running",
    duration: true,
    pace: true,
    load: true, //?
    comment: true

  repetitions: false,
    poolLength: false,
    poolSize: false,
    lengthsUnderwater: false,
    maxDistanceUnderwater: false,
    series: false
}

ActivityType {
  name: "push ups",
    repetitions: true,
    comment: true,

    duration: false,
    poolLengths: false,
    poolSize: false,
    lengthsUnderwater: false,
    maxDistanceUnderwater: false,
    pace: false,
    load: false,
    series: false,
    weightSeries: false
}