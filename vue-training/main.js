new Vue({
	el: '#app',
	data: {
		tasks: [
			{ body:'Go to the store' , completed:false},
			{ body:'Go to the bank' , completed:false},
			{ body:'Go to the doctor' , completed:true}
		]
	},
	/*methods: {
		toggleCompleteFor: function(task){
			task.completed =! task.completed;
		}
	}*/
});