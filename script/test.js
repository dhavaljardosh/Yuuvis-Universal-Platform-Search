const Axios =require("axios");

var data = [
    {
        "user": "UMBPVBT7U",
        "type": "message",
        "subtype": "channel_join",
        "ts": "1566670181.000200",
        "text": "<@UMBPVBT7U> has joined the channel"
    },
    {
        "user": "UMGS8QGE5",
        "type": "message",
        "subtype": "channel_join",
        "ts": "1566672732.000400",
        "text": "<@UMGS8QGE5> has joined the channel"
    },
    {
        "client_msg_id": "6e10b1ac-75c7-47fa-9c92-a4bced58c758",
        "type": "message",
        "text": "Hey, does anyone know i can find data on yuuvis vehicle sales for Dummy C?",
        "user": "UMBPVBT7U",
        "ts": "1566677181.001000",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "user": "UMNQB1NAG",
        "type": "message",
        "subtype": "channel_join",
        "ts": "1566677218.001200",
        "text": "<@UMNQB1NAG> has joined the channel"
    },
    {
        "client_msg_id": "7c833e0f-4ee8-4177-be5e-65adce367e81",
        "type": "message",
        "text": "Maybe <@UMNQB1NAG> knows?",
        "user": "UMBPVBT7U",
        "ts": "1566677249.001400",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "780d9d79-2a81-4df4-9746-53c44feffd4a",
        "type": "message",
        "text": "who is Dummy C? and why does he need data on yuuvis vehicle sales?",
        "user": "UMNQB1NAG",
        "ts": "1566677361.001800",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "6b8ba954-5487-4cd0-9b57-b5df09a49ea8",
        "type": "message",
        "text": "xD",
        "user": "UMNQB1NAG",
        "ts": "1566677364.002000",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "de968fbd-e1f6-493e-b18c-4142d53b9464",
        "type": "message",
        "text": "Supplier dude",
        "user": "UMBPVBT7U",
        "ts": "1566677408.002200",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "4b0f48bf-a651-4422-bf5a-1d0894019411",
        "type": "message",
        "text": "Needs it for marketing data",
        "user": "UMBPVBT7U",
        "ts": "1566677426.002600",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "2e11330a-969a-4ee4-8fd7-4fe41a477559",
        "type": "message",
        "text": "what would you suggest i upholster my new GMC Sierra with? Lion, bear, antelope, or something else?",
        "user": "UMNQB1NAG",
        "ts": "1566677688.003100",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "8b380827-c400-44da-84ab-72af284c6a13",
        "type": "message",
        "text": "haha",
        "user": "UMBPVBT7U",
        "ts": "1566677698.003300",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "ed39ec9d-9217-4781-b993-9e34dda39849",
        "type": "message",
        "text": "depends on vibe you want",
        "user": "UMBPVBT7U",
        "ts": "1566677713.003500",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "5ee5196c-eca3-42fb-9ff9-60109c7b95fd",
        "type": "message",
        "text": "hmmm",
        "user": "UMNQB1NAG",
        "ts": "1566677720.003900",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "68471e7a-bb9b-4c42-8fb2-43a202cb40a3",
        "type": "message",
        "text": "Is vehicle sales data in vehicle schema?",
        "user": "UMBPVBT7U",
        "ts": "1566677734.004600",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "83f21736-5d87-4e45-aa7d-8f16e997669a",
        "type": "message",
        "text": "That makes the most sense",
        "user": "UMBPVBT7U",
        "ts": "1566677736.004800",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "84911753-6aaa-418c-a5ba-a9f4d29d3d8b",
        "type": "message",
        "text": "I would assume that the total number of cars sold in the U.S. is equivalent to that of all the people in the U.S. who can actually afford cars :thinking_face::rolling_on_the_floor_laughing::wink:",
        "user": "UMNQB1NAG",
        "ts": "1566677802.005800",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "a76b799b-ff5f-4a4a-afd0-1ec198eb3ef2",
        "type": "message",
        "text": "yeah ok it’s in there. just a mess right now",
        "user": "UMBPVBT7U",
        "ts": "1566677841.006300",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "8edf4512-a1fb-45ea-b666-7479b6cda741",
        "type": "message",
        "text": "and no that’s not true actually",
        "user": "UMBPVBT7U",
        "ts": "1566677861.006500",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "60208d75-d0af-4a6a-aa1b-b99e3a892ddc",
        "type": "message",
        "text": "the company makes like tens of millions of cars per year",
        "user": "UMBPVBT7U",
        "ts": "1566677877.006900",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "194d6aa9-b33c-4771-87a9-b964b6f0e17d",
        "type": "message",
        "text": "no way that many people are looking for a new car every year",
        "user": "UMBPVBT7U",
        "ts": "1566677884.007300",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "ea53db48-a013-4be4-b11e-8d8ab91f02c7",
        "type": "message",
        "text": "i said *sold*, not *built* :wink: just being super Captain Obvious :slightly_smiling_face:",
        "user": "UMNQB1NAG",
        "ts": "1566677906.007800",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ga70f5c31158",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/a70f5c31158d27b7b15fd9d35ce70e7e.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0007-72.png",
            "first_name": "",
            "real_name": "George",
            "display_name": "George",
            "team": "TMRD2DVHU",
            "name": "jorge.antonio.de.segu",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    },
    {
        "client_msg_id": "36a1ae87-dde8-4ac7-809c-9398eb4a940d",
        "type": "message",
        "text": "oh lol",
        "user": "UMBPVBT7U",
        "ts": "1566677915.008000",
        "team": "TMRD2DVHU",
        "user_team": "TMRD2DVHU",
        "source_team": "TMRD2DVHU",
        "user_profile": {
            "avatar_hash": "ge1d7533e265",
            "image_72": "https:\/\/secure.gravatar.com\/avatar\/e1d7533e265a9208a5db0dbf6047a882.jpg?s=72&d=https%3A%2F%2Fa.slack-edge.com%2F136bc%2Fimg%2Favatars%2Fuser_shapes%2Fava_0019-72.png",
            "first_name": "Chris",
            "real_name": "Chris Nguyen",
            "display_name": "",
            "team": "TMRD2DVHU",
            "name": "christopher811",
            "is_restricted": false,
            "is_ultra_restricted": false
        }
    }
]

const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '08efc22e87fe4802ae1219e39bf64d6b'
  }

function postThings () {
    Axios.post('https://api.yuuvis.io/dms/objects',data,headers).then(data => console.log(data)).catch(e=>console.log(e))
}

postThings();