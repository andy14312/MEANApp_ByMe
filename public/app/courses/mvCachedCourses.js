angular.module('app').factory('mvCachedCourses',function(mvCourse){
    var cachedCourses;
    return {
        query: function(){
            if(!cachedCourses) {
                cachedCourses = mvCourse.query();
            }
            return cachedCourses;
        }
    }
});