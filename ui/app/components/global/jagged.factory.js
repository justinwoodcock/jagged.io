jagged.factory('JaggedFactory', ['Restangular',
    function(Restangular) {
        return {
            createEntity: function(entity) {
                return Restangular.all(entity).getList();
            }
        }
    }

]);