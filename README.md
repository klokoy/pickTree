##Tree selection widget for ionic and angular

##Tree syntax

```json

[
      {
          "_id": 2,
          "parent": null,
          "name": "root",
          "children": [
              {
                  "_id": 3,
                  "parent": 2,
                  "name": "leaf child",
                  "children": []
              },
              {
                  "_id": 4,
                  "parent": 2,
                  "name": "selectable child",
                  "children": [
                      {
                          "_id": 5,
                          "parent": 4,
                          "name": "child",
                          "children": []
                      }
                  ]
              }
          ]
      }
  ]
```