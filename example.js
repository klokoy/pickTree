var app = angular.module('example', ['treePick'])
    .controller('ExampleCtrl', function ($scope) {
        $scope.tree = [
            {
                "_id": 2,
                "parent": null,
                "name": "root 1",
                canSelect: true,
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
            },
            {
                "_id": 6,
                "parent": null,
                "name": "root 2",
                "children": []
            }
        ];
    })