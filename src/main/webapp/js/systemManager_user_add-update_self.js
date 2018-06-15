/**
 * liuwentian 2018-04-24
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
	//alert(params);
	 if(params.userid!=null&&params.userid.length>0){
		  Ext.Ajax.request({
			    method:'POST',
				url:'../../user/selectAllDetailById.action',
				dataType:'json',										            
	          params: {userid:params.userid},
	         
	          success: function (response) {
	            var datajs=response.responseText;//这句话就已经得到了java后端传过来的json数据了 ,字符串形式的数据，这个data是后台传过来的数据（加了字符串的json）
	            var datause = eval("("+datajs+")");  //去掉字符串，只保留json对象，传递过来的数据到前端datajs为json字符串。
	            //alert(datajs);
	            Ext.getCmp("page12_username").setValue(datause.data.userName);  //datause后面的.data是通过键名获取值，值也是一个json也是通过键名获取值
	            Ext.getCmp("page12_useridcard").setValue(datause.data.identityCard);
	            Ext.getCmp("page12_realname").setValue(datause.data.realName);
	            Ext.getCmp("page12_usergender").setRawValue(datause.data.gender);
	            Ext.getCmp("page12_userage").setValue(datause.data.age);
	            Ext.getCmp("page12_usernation").setValue(datause.data.nation);
	            Ext.getCmp("page12_usernum").setValue(datause.data.userNumber);
	            Ext.getCmp("page12_userrole").setValue(datause.data.roleId);
	            Ext.getCmp("page12_userinstitution").setValue(datause.data.institutionId);
	            Ext.getCmp("page12_userclasses").setValue(datause.data.classId);
	            Ext.getCmp("page12_userphone").setValue(datause.data.phone);
	            Ext.getCmp("page12_useremail").setValue(datause.data.mail);
	            Ext.getCmp("page12_userupdate").setValue(datause.data.updatetime);
	            Ext.getCmp("page12_czername").setValue(datause.data.updateUserName);
	            Ext.getCmp("page12_userstate").setRawValue( datause.data.userState);
	            //alert(Ext.getCmp("page12_userrole").getValue());
	          }
		 });
		  
	  };
	 
	  //var userid;
	 
	  
	
		 
		 //alert(params.userid!=null);
		if(params.userid!=null){
			 Ext.getCmp("page12_submit").on('click',function(){
			   var username = Ext.getCmp("page12_username").getValue();
			   var useridcard = Ext.getCmp("page12_useridcard").getValue();
			   var realname = Ext.getCmp("page12_realname").getValue();
			   var usergender = Ext.getCmp("page12_usergender").getRawValue();
			   var userage =  Ext.getCmp("page12_userage").getValue();
			   var usernation = Ext.getCmp("page12_usernation").getValue();
			   var usernum = Ext.getCmp("page12_usernum").getValue();
			   var roleid = Ext.getCmp("page12_userrole").getValue();
			   var institutionid = Ext.getCmp("page12_userinstitution").getValue();
			   var classid = Ext.getCmp("page12_userclasses").getValue();
			   var phone = Ext.getCmp("page12_userphone").getValue();
			   var email = Ext.getCmp("page12_useremail").getValue();
			   var userstate = Ext.getCmp("page12_userstate").getRawValue();
			   //alert(email);
			   //alert(roleid);
			   //var userid1=userid;
			   Ext.Ajax.request({
				    method:'POST',
				    //async : false,  
					url:'../../user/updateUser.action',
					dataType:'json',
					params:{"id":params.userid,"username":username,"identitycard":useridcard,"realname":realname,"gender":usergender,
						    "age":userage,"nation":usernation,"usernumber":usernum,"roleid":roleid,"institutionid":institutionid,
						    "classid":classid,"phone":phone,"mail":email,"userstate":userstate
					
					},
					success:function(response){
						var data = response.responseText;
						var datause = eval("("+data+")");
						var userid=datause.userid;
						if(datause.msg=="更新成功"){
							alert("更新成功");
							window.open('systemManager_module.jsp?tabNum=0&userid='+userid,'_self');
						}else{
							alert("更新失败");
							window.open('systemManager_module.jsp?tabNum=0&userid='+userid,'_self');
						}
						
					}
			   });
		    });
		  }else{
			  //alert(1);
			  Ext.getCmp("page12_jExtPanel6").hide();
			  Ext.getCmp("page12_jExtPanel14").hide();
			  Ext.getCmp("page12_submit").on('click',function(){
				   var username = Ext.getCmp("page12_username").getValue();
				   var useridcard = Ext.getCmp("page12_useridcard").getValue();
				   var realname = Ext.getCmp("page12_realname").getValue();
				   var usergender = Ext.getCmp("page12_usergender").getRawValue();
				   var userage =  Ext.getCmp("page12_userage").getValue();
				   var usernation = Ext.getCmp("page12_usernation").getValue();
				   var usernum = Ext.getCmp("page12_usernum").getValue();
				   var roleid = Ext.getCmp("page12_userrole").getValue();
				   var institutionid = Ext.getCmp("page12_userinstitution").getValue();
				   var classid = Ext.getCmp("page12_userclasses").getValue();
				   var phone = Ext.getCmp("page12_userphone").getValue();
				   var email = Ext.getCmp("page12_useremail").getValue();
				   var userstate = Ext.getCmp("page12_userstate").getRawValue();
				   
				   if(userage.length!=0){
					   var reg=/^[1-6]?[0-9]$/;
						//alert(this.getValue());
						if(!reg.test(userage)){
							alert("年龄在1到60之间");
							return false;
						}
				   }
				  
				   
				   if(phone.length!=0){
					   var reg = /^1[3|4|5|8][0-9]\d{8,8}$/;
						if(!reg.test(phone)){
							alert("请输入正确的手机号吗");
							return false;
						}
				   }
					
					if(useridcard.length!=0){
						var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
						if(!reg.test(useridcard)){
							alert("身份证号填写有误");
							return false;
						}
						
					}
					
					if(email.length!=0){
						alert(1);
						var reg = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})[; ,])*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
						if(!reg.test(email)){
							alert("请输入正确的邮箱地址");
							return false;
						}
					}
					
					
					
				   //alert(roleid);alert(institutionid);alert(usernation);
				   if((typeof classid)=="string"){
					   classid=null;
					   
				   }
				   //alert(classid);
				   Ext.Ajax.request({
					    method:'POST',
					    //async : false,  
						url:'../../user/addUser.action',
						dataType:'json',
						params:{"username":username,"identitycard":useridcard,"realname":realname,"gender":usergender,
							    "age":userage,"nation":usernation,"usernumber":usernum,"roleid":roleid,"institutionid":institutionid,
							    "classid":classid,"phone":phone,"mail":email,"userstate":userstate
						
						},
						success:function(response){
							var data = response.responseText;
							var datause = eval("("+data+")");
							var userid=datause.userid;
							//alert(data);
							if(datause.msg=="增加成功"){
								alert("增加成功");
								window.open('systemManager_module.jsp?tabNum=0&userid='+userid,'_self');
							}else{
								alert("增加失败");
								window.open('systemManager_module.jsp?tabNum=0','_self');
							}
							
						}
				   });
				   
				   
			  });
			  
		  }
	  
	 
	
	 
	 
	 Ext.getCmp("page12_back").on('click',function(){
		 //alert(userid);
		 window.open('systemManager_module.jsp?tabNum=0','_self');
		 
		 
		 
	 });
	 
	 
	 
})