
//Get info
$(document).ready(function(){
	$.getJSON("users.json",function(data){
		var users_data = '';
		$.each(data, function(key,value){
			users_data+='<tr>';
			users_data+='<td>'+value.id+'</td>';
			users_data+='<td>'+value.name+'</td>';
			users_data+='<td>'+value.username+'</td>';
			users_data+='<td>'+value.email+'</td>';
			users_data+='<td>'+value.address.street+'</td>';
			users_data+='<td>'+value.address.suite+'</td>';
			users_data+='<td>'+value.address.city+'</td>';
			users_data+='<td>'+value.password+'</td>';
			
			users_data+='</tr>';
		});
		$('#mydata').append(users_data);
	});
});


//login

	function login() {
		var username=document.getElementById("username").value;
		var password=document.getElementById("password").value;
		var flag=0;
		document.write();
		$(document).ready(function(){
		$.getJSON("users.json",function(data){
			$.each(data, function(key,value){
				if(value.username==username && value.password==password)
				{
					flag=1;
					
				}
				else if(flag!=1)
				{
					flag=0;
				}
			});
		if(flag==1)
			window.location="profile.html";
		else
			window.location="login.html";
		});
	});
		
	}
	
