/**
 * 
 */

Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');

Ext.onReady(function(){
	
	   Ext.getCmp("page30_submit").on('click',function(){
		   
		   
			var newpwd = Ext.getCmp("page30_newpwd").getValue();
			var renewpwd = Ext.getCmp("page30_renewowd").getValue();
			if(newpwd!=renewpwd){
				alert("2次输入密码不一致");
				return false;
				
			}
			
		   
		   Ext.Ajax.request({
			    method:'POST',
			    //async : false,  
				url:'../../user/updatePwd.action',
				dataType:'json',
				params:{
				    "pwd":newpwd,
				    "id":0
				},
				success:function(response){
					var data = response.responseText;
				    //alert(data);
					if(data=="修改成功"){
						alert("修改成功");
						top.window.open('../../main.jsp','_parent');
					}else{
						alert("修改失败");
						top.window.open('../../main.jsp','_parent');
					}
					
				}
		   });
		   
		   
		   
		   
	   });
	   
	   
	   
	   Ext.getCmp("page30_back").on('click',function(){
		   
		   
		   top.window.open('../../main.jsp','_parent');
		   
	   });
	
	
	
	
	
	
	
	
	
})