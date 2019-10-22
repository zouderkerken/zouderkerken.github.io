var title;
var myTimes = {};


//  EVENT LISTENER FOR CLOSE BTN --> REMOVE TIMES
$("#myTimes").on('click', '.closeBtn', function() {
	$(this).parent().remove()
})


// INITIATE MODAL
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


// MODAL EVENT
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  title = button.data('whatever') // Extract info from data-* attributes

  // Get Times from Object, Grab date of selected button, find times in object
  var date = button[0].id;
  var times = datesAndTimes[date];
  let html = ""

	for (var i = 0; i < times.length; i++) {
		html += `<label><input class = 'chckbx' id = 'input${i}' type = 'checkbox' value = '${times[i]}'>${times[i]}</label> <br> \ `
	}

  $("#modalTimes").html(html);
	
 
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(title + " Times");
  // modal.find('.modal-body').text(title + " Times")
});





// SAVE  FUNCTION ----------------------------------------------------------------
  function save() {
	var text = "";
  	$(":checked").each(function() {
  		text += $(this).val() + "<br>";
  	});

  	// add times to bottom div
  	$("#myTimes").append(`<div class="newTime py-3"><button class="closeBtn">X</button> <h5>${title}</h5> \ <p>${text}</p></div>`);
  	myTimes[title] = text;
  	console.log(myTimes);
  	// show next button
	$("#nextBtn").show();
  };






// SUBMIT  FUNCTION ----------------------------------------------------------------
function submit() {
	// fill mytimes with response text, change .alert css to display blocl
	$(".alert").css("display", "block");;
	// remove times
	$(".newTime").hide();
	// remove next button
	$("#nextBtn").hide();
}









