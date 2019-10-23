var title;
var date;
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
  date = button[0].id;
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
  	myTimes[date] = text;
  	console.log(myTimes);
  	// show next button
	$("#nextBtn").show();
  };







  function postToGoogle() {
                var field1 = $("#nameField").val();
                var field2 = $("#emailField").val();
                var field3 = finalTimes;
                // var field4 = myTimes;
        
        if(field1 == ""){
          alert('Please Fill Your Name');
          document.getElementById("nameField").focus();
          return false;
        }
        if(field2 == ""){
          alert('Please Fill Your Email');
          document.getElementById("emailField").focus();
          return false;
        }
        // if(field3 == "" || field3.length > 10 || field3.length < 10){
        //   alert('Please Fill Your Mobile Number');
        //   document.getElementById("mobField").focus();
        //   return false;
        // }


        
  
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSeQBlvPT8ff2UxFycd9RicTHsHvjm9bONjJTc2PQu2UM1NbJg/formResponse?",
          data: {"entry.739616620": field1, "entry.1591878149": field2, "entry.574420465": field3},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
          {
          },
          error: function(x, y, z)
            {

              $('#success-msg').show();
              $('#form').hide();
              
            }
                });
        return false;
            }




function confirmationPage() {
  window.location.href = 'confirmation.html';
  myTimes = JSON.stringify(myTimes);
  localStorage.setItem("finalTimes",myTimes);
  localStorage.setItem("finalTimesHtml",$("#myTimes").html());

}







