(function(){
 
    angular
        .module("geoNature")
        .controller("quizCtrl", QuizController);
 
    QuizController.$inject = ['QuizMetrics', 'DataService'];
 
    function QuizController(QuizMetrics, DataService){
        var vm = this;
 
        vm.QuizMetrics = QuizMetrics; 
        vm.dataService = DataService;

        vm.activeQuestion = 0;
        vm.selectAnswer = selectAnswer;
        vm.setActiveQuestion = setActiveQuestion;

        vm.error = false;
        vm.finalise = false;

        vm.questionAnswered = questionAnswered;
         


         var numQuestionsAnswered = 0;


         function setActiveQuestion(index){

             if(index === undefined){
                
             var breakOut = false;
             var quizLength = DataService.quizQuestions.length - 1;

            while(!breakOut){
                
                vm.activeQuestion = vm.activeQuestion < quizLength? ++vm.activeQuestion :  0;

                if(vm.activeQuestion === 0){

                        vm.error  = true;

                }

                if(DataService.quizQuestions[vm.activeQuestion].selected == null){
                    breakOut = true;
                }
            }

             } else{

                vm.activeQuestion = index;

             }


         }

         function questionAnswered(){

             if(DataService.quizQuestions[vm.activeQuestion].selected !== null){

                 var quizLength = DataService.quizQuestions.length;

                 numQuestionsAnswered++;

                 if(numQuestionsAnswered >= quizLength){

                     //finalize
                        for(var i =0; i < quizLength; i++){
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion[i];
                                return;
                            }
                        }

                        vm.error = false;
                        vm.finalise = true;
                        return;

                 }

             }

             vm.setActiveQuestion();

         }


         
         function selectAnswer(index){
                DataService.quizQuestions[vm.activeQuestion].selected = index;
            }
 
    }
 
})();