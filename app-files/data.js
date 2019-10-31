var APP_DATA = {
  "scenes": [
    {
      "id": "0-grabo",
      "name": "Grabo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": -1.524411241679914,
          "pitch": 0.45106330995078103,
          "rotation": 0,
          "target": "1-grabo1"
        },
        {
          "yaw": 1.2384335627073124,
          "pitch": 0.28423351826550913,
          "rotation": 0,
          "target": "2-grabo2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-grabo1",
      "name": "Grabo1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 0.12371738319433234,
          "pitch": -0.5202822453533145,
          "rotation": 0,
          "target": "0-grabo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-grabo2",
      "name": "Grabo2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948965
      },
      "linkHotspots": [
        {
          "yaw": 0.06540489268040339,
          "pitch": -0.49436392931440664,
          "rotation": 0,
          "target": "0-grabo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
