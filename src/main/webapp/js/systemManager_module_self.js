/**
 * liuwentian  2018-04-23
 */
Ext.require('Ext.container.Viewport');
Ext.require('Ext.tab.Panel');
Ext.require('Ext.tab.Tab');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.Toolbar');
Ext.require('Ext.button.*');
Ext.require('Ext.form.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.form.field.ComboBox');
Ext.require('Ext.data.SimpleStore');
Ext.require('Ext.grid.Panel');
Ext.require('Ext.selection.CheckboxModel');
Ext.require('Ext.form.DateField');

Ext.onReady(function(){
		Ext.getCmp("page11_jButton12").on('click',function(){
			var row = Ext.getCmp("page11_jDataGrid1").selModel.getSelection();
			if(row.length==0){
				alert("请选择一条数据！");
			}else if(row.length>1){
				alert("只能选择一条数据");
			}else {
				 Ext.Ajax.request({
					    method:'POST',
					    //async : false,  
						url:'../../user/selectDetail.action',
						dataType:'json',
						params:{
							"userid":row[0].data.id
						},
						success:function(response){
							var data = response.responseText;
							var datause = eval("("+data+")");
							if(datause.msg==null){
								window.open('systemManager_user_details.jsp?userid='+row[0].data.id,'_self');
							}else{
								alert(datause.msg);
							}
						}
						
					});
				
				
				
			}
			
		})
		
		
		Ext.getCmp("page11_jButton7").on('click',function(){
			var row = Ext.getCmp("page11_jDataGrid1").selModel.getSelection();
			if(row.length==0){
				alert("请选择一条数据！");
			}else if(row.length>1){
				alert("只能选择一条数据");
			}else {
				 Ext.Ajax.request({
				    method:'POST',
				    //async : false,  
					url:'../../user/selectAllDetailById.action',
					dataType:'json',
					params:{
						"userid":row[0].data.id
					},
					success:function(response){
						var data = response.responseText;
						var datause = eval("("+data+")");
						if(datause.msg==null){
							window.open('systemManager_user_add-update.jsp?userid='+row[0].data.id,'_self');
						}else{
							alert(datause.msg);
						}
					}
					
				});
				
			}
			
			
		})
		
		var params = Ext.urlDecode(location.search.substring(1));
		//alert(params.userid);
		if(params.userid!=null){
			//alert(1);
			//var page11_jDataGrid1_store = Ext.getCmp("page11_jDataGrid1");
			  page11_jDataGrid1_store.getProxy().url='../../user/selectById.action';
			

				page11_jDataGrid1_store.load({
					params:{"userid":params.userid}
				});
			
			
			
		 }
		
		Ext.getCmp("page11_jButton8").on('click',function(){
			var base = [];
			var insid = [];
			var row = Ext.getCmp("page11_jDataGrid1").selModel.getSelection();
			if(row.length==0){
				alert("请选择数据！");
				return false;
			}else {
				for (var i = 0; i < row.length; i++) {
					 base.push(row[i].data.id);
				}
				var base1 = base.join();
				
				for (var i = 0; i < row.length; i++) {
					insid.push(row[i].data.institutionId);
				}
				var insid1 = insid.join();
				//alert(base1);
				//alert(base1.split(",")[0]);
				//alert(typeof base.join());
				//alert(base.length);
				//alert(str.length);
				Ext.Ajax.request({
				    method:'POST',
				    //async : false,  
					url:'../../user/deleteUser.action',
					dataType:'json',
				    params:{
				    	"ids":base1,
				    	"institutionId":insid1
				    },
				    success:function(response){
				    	var data = response.responseText;
				    	//alert(typeof data);  //这里后台是直接返回字符串，没有键名  data是字符串 不是字符串json
						//var datause = eval("("+data+")");  
						
						if(data=="删除成功"){
							alert("删除成功");
							window.open('systemManager_module.jsp?tabNum=0','_self');
						}else{
							if(data!="删除失败"){
								alert(data);
							}else{
								alert("删除失败");
								window.open('systemManager_module.jsp?tabNum=0','_self');
							}
							
							
						}
				    }
					
				});
			}
			
			
			
			
			//window.open('../../user/delete.action?ids='+base1,'_self');
		});
		
		
		Ext.getCmp("page11_jButton27").on('click',function(){
			
			//alert(username);
			//alert(institutionId);
			var userName = Ext.getCmp("page11_jEdit1").getValue();
	    	var cun = Ext.getCmp("page11_jEdit2").getValue();
	    	var userState = Ext.getCmp("page11_jComboBox1").getRawValue();
	    /*	Ext.Ajax.request({
			    method:'POST',
			    //async : false,  
				url:'../../user/userExport.action',
				
			    params:{
			    	"userName":userName,
			    	"updateUserName":cun,
			    	"userState":userState
			    }updateUserName
	    	
			    
	    	});*/
			window.open("../../user/userExport.action?userName="+userName+"&updateUserName="+cun+"&userState="+userState+"&loginUserName="+username+"&institutionId="+institutionId);
		});
		
		
		Ext.getCmp("page11_jButton20").on('click',function(){
			var row = Ext.getCmp("page11_jDataGrid1").selModel.getSelection();
			var base = [];
			var insid = [];
			
			for (var i = 0; i < row.length; i++) {
				 base.push(row[i].data.id);
			}
			var base1 = base.join();
			
			for (var i = 0; i < row.length; i++) {
				insid.push(row[i].data.institutionId);
			}
			var insid1 = insid.join();
			
			
			if(row.length==0){
				alert("请选择数据！");
				return false;
			}else{
				Ext.Ajax.request({
				    method:'POST',
				    //async : false,  
					url:'../../user/resetpwd.action',
					dataType:'json',
				    params:{
				    	"userid":base1,
				    	"institutionId":insid1
				    },
				    success:function(response){
				    	var data = response.responseText;
				    	if(data=="密码重置成功，设为9999"){
							alert("密码重置成功，设为9999");
							window.open('systemManager_module.jsp?tabNum=0','_self');
						}else{
							if(data!="密码重置失败"){
								alert(data);
							}else{
								alert("密码重置失败");
								window.open('systemManager_module.jsp?tabNum=0','_self');
							}
							
							
						}
				    	
				    	
				    }
				  
				 });
				
				//window.open("../../user/resetpwd.action?userid="+base1+"&institutionId="+insid1);
			}
			
			
			
			
			
		});
		
	
		
		
});
