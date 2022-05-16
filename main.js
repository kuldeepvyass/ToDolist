window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const form1 = document.querySelector("#selected-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_date = document.createElement('label');
		task_date.classList.add('task_date');
		var today = new Date();
		var tasktime = today.getHours() + ':' + today.getMinutes() +':' + today.getSeconds();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy + '   ' + tasktime;
          
		task_date.innerText = today;

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		
		
		//var checkbox = document.createElement('');
		//checkbox.type='checkbox';
		//checkbox.name='enter';
		//checkbox.value='1';

		

		
         var checkbox = window.document.createElement('input');
		 checkbox.classList.add('checkbox');
         checkbox.type = "checkbox";
        
         
		 
		
        

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(checkbox);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_date);
		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);
        
		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		   
		
		});

			
		
	});
	
});	
form1.addEventListener('submit', (e) => {
	e.preventDefault();

selected_task_delete.addEventListener('click', (e) => {
	list_el.removeChild(task_el);
	   
});
});
