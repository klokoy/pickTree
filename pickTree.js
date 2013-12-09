angular.module('treePick', ['ngAnimate', 'ionic'])
    .directive("treePick", function () {
        return {
            restrict: "E",
            templateUrl: 'pickTree.html',
            controller: function ($scope) {
                var selected;
                $scope.items = $scope.tree;

                $scope.history = [];

                $scope.back = function (obj) {
                    var parents = $scope.history.pop();
                    $scope.items = parents;
                };

                $scope.canSelect = function (item) {
                    return !!item.canSelect;
                };

                $scope.showBackButton = function () {
                    return !!$scope.history.length;
                };

                $scope.hasChildren = function (item) {
                    return !!item.children.length;
                };

                $scope.select = function (item) {
                    selected = item;
                    console.log('selected leaf', item);
                };

                $scope.click = function (item) {
                    //select if leaf
                    //if the item has been selected prevent digging into it.
                    if (item !== selected && item.children.length) {
                        $scope.history.push($scope.items);
                        $scope.items = item.children;
                    } else {
                        $scope.select(item);
                    }
                }
            }
        }
    });
