/**
 * liuwentian 2018-04-23
 */
Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.form.field.ComboBox');
Ext.require('Ext.data.SimpleStore');
Ext.require('Ext.button.*');

Ext.onReady(function(){
	  var params = Ext.urlDecode(location.search.substring(1));
	  
	  //alert( params.userid);
	  if(params.userid!=null&&params.userid.length>0){
		  Ext.Ajax.request({
			    method:'POST',
				url:'../../user/selectDetail.action',
				dataType:'json',										            
	          params: {userid:(params.userid)},
	         
	          success: function (response) {
	            var datajs=response.responseText;//这句话就已经得到了java后端传过来的json数据了 ,字符串形式的数据，这个data是后台传过来的数据（加了字符串的json）
	            var datause = eval("("+datajs+")");  //去掉字符串，只保留json对象，传递过来的数据到前端datajs为json字符串。
	            //alert(datajs);
	            Ext.getCmp("page11_username").setValue(datause.data.userName);  //datause后面的.data是通过键名获取值，值也是一个json也是通过键名获取值
	            Ext.getCmp("page11_useridcard").setValue(datause.data.identityCard);
	            Ext.getCmp("page11_realname").setValue(datause.data.realName);
	            Ext.getCmp("page11_usernum").setValue(datause.data.userNumber);
	            Ext.getCmp("page11_userrole").setValue(datause.data.roleName);
	            Ext.getCmp("page11_userinstitution").setValue(datause.data.institutionName);
	            Ext.getCmp("page11_userclasses").setValue(datause.data.className);
	            Ext.getCmp("page11_userphone").setValue(datause.data.phone);
	            Ext.getCmp("page11_useremail").setValue(datause.data.mail);
	            Ext.getCmp("page11_userupdate").setValue(datause.data.updatetime);
	            Ext.getCmp("page11_czername").setValue(datause.data.updateUserName);
	            Ext.getCmp("page11_jLabel10").setText( datause.data.userState);
	          }
		 });
		  
	  }
	  
	
	  
	 /*var input = document.getElementsByClassName("x-form-field");
	 for (var i = 0; i < input.length; i++) {
		input[i].style.backgroundColor="yellow";
	}*/
	
	
	
	
	
	
	
	
	
})