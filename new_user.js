 $(function(){
 	let input = $('#infouser'),
 	inpVal = input.val();
    
 	$('#zak').on('change', function(){
        if ($(this).val() != 'new')
        {
        	showng_user_new('new_user','off');
        }
        else
        {
		showng_user_new('new_user','on');

        }
 		input.val(inpVal + $(this).val());

 	});

 });
 function load_data_post(data,url){

// загрузка данных на форму после сохранение на сервре
var zak = document.getElementById('zak');
var kontakt = document.getElementById('kontakt');
var infokontakt = document.getElementById('infokontakt');

$("#zak").append( $('<option value="'+data.org+'">'+data.org+'</option>'));
$("#zak [value='"+data.org+"']").attr("selected", "selected");
$("#kontakt").append( $('<option value="'+data.fio+'">'+data.fio+'</option>'));
$("#kontakt [value='"+data.fio+"']").attr("selected", "selected");
$('#infokontakt').val(data.kont);


/*$.ajax({
                url: url,
                type: "post",
                data: data,
                success: function(d) {
                	if (d.status === 200){
                		alert(d);
                	}else
                	{
                		alert("Пользователь не сохранен");
                	}}
            });
*/
 };

function showng_user_new(id_element,status)
{
var obj = document.getElementById(id_element);
        if (status === 'off')
        {
          	obj.style.display = "none";
        }
        else
        {
			obj.style.display = "block";
        }
};

 $('#save_new_user').on('click',function(){
 	// Сохранить пользователя и заполнить пустые ячейки
 	var org = $("#n_org_name").val();
 	var fio = $("#n_kont_fio").val();
 	var kont = $("#n_infouser").val();
 	
var formData = {
	'org': org,
	'fio': fio,
	'kont': kont,
	'id_requst':'123'
};
 	load_data_post(formData,'/new_user');		
	showng_user_new('new_user','off');
});

  $('#cancal_new_user').on('click',function(){
 	showng_user_new('new_user','off');
 	

 });
