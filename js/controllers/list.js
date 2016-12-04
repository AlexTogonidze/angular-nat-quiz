(function(){
 
    angular
        .module("geoNature")
        .controller("listCtrl", ListController);
 
    ListController.$inject = ['QuizMetrics', 'DataService'];
 
    function ListController(QuizMetrics, DataService){
 
        var vm = this;
        
        vm.QuizMetrics = QuizMetrics;
        vm.data = DataService.turtlesData; 
        vm.activeTurtle = {}; 
        vm.changeActiveTurtle = changeActiveTurtle; 
        vm.activateQuiz = activateQuiz; 
        vm.search = ""; 
 
        function changeActiveTurtle(index){
            vm.activeTurtle = index;
        }
 
        function activateQuiz(){
            QuizMetrics.changeState(true);
        }
    }
 
})();