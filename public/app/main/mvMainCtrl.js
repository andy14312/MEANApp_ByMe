app.controller('mvMainCtrl',function($scope){
    $scope.courses = [
        {name: 'featured course 1',featured:true,published:new Date('08/15/2016')},
        {name: 'featured course 2',featured:true,published:new Date('05/15/2016')},
        {name: 'new course 1',featured:false,published:new Date('08/15/2015')},
        {name: 'new course 2',featured:false,published:new Date('08/15/2014')},
        {name: 'new course 3',featured:false,published:new Date('08/17/2016')},
        {name: 'new course 4',featured:false,published:new Date('08/02/2016')},
        {name: 'new course 5',featured:false,published:new Date('06/15/2016')},
        {name: 'new course 6',featured:false,published:new Date('08/15/2016')},
        {name: 'new course 7',featured:false,published:new Date('08/15/2018')},
        {name: 'new course 8',featured:false,published:new Date('08/15/2011')},
        {name: 'featured course 3',featured:true,published:new Date('08/15/2010')},
        {name: 'featured course 4',featured:true,published:new Date('09/15/2016')},
        {name: 'featured course 5',featured:true,published:new Date('10/15/2016')},
        {name: 'featured course 6',featured:true,published:new Date('08/14/2016')},
        {name: 'featured course 7',featured:true,published:new Date('08/13/2016')},
        {name: 'featured course 8',featured:true,published:new Date('12/15/2016')}
    ];
});