Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');

Ext.onReady(function(){
	
	var page30_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page30_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '修改密码'
			},
			{
				xtype: 'panel',
				id: 'page30_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page30_jLabel1',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '原密码'
					},
					{
						xtype: 'textfield',
						id: 'page30_oripwd',
						x: 251,
						y: 5,
						width: 209,
						height: 20,
						inputType:'password',
						hideLabel: true,
						listeners:{
							"blur":function(){
								Ext.Ajax.request({
								    method:'POST',
								    //async : false,  
									url:'../../user/ckeckpwd.action',
									dataType:'json',
								    params:{
								    	"pwd":Ext.getCmp("page30_oripwd").getValue()
								    	
								    },
								    success:function(response){
								    	var data = response.responseText;
								    	if(data=="原密码输入正确"){
											alert("原密码输入正确");
											//window.open('systemManager_module.jsp?tabNum=0','_self');
										}else{
											
												alert("原密码输入错误");
												//window.open('systemManager_module.jsp?tabNum=0','_self');
												Ext.getCmp("page30_oripwd").focus();
											
											
										}
								    	
								    	
								    }
								  
								 });
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page30_jExtPanel8',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page30_jLabel7',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '新密码'
					},
					{
						xtype: 'textfield',
						id: 'page30_newpwd',
						x: 251,
						y: 5,
						width: 209,
						height: 20,
						inputType:'password',
						hideLabel: true,
						listeners:{
							"blur":function(){
								var newpwd = Ext.getCmp("page30_newpwd").getValue();
								if(newpwd.length>0){
									if(newpwd.length<6||newpwd.length>10){
										alert("请输入6到10位密码");
										Ext.getCmp("page30_newpwd").focus();
										
									}
								}
								
								
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page30_jExtPanel6',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page30_jLabel5',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '确认新密码'
					},
					{
						xtype: 'textfield',
						id: 'page30_renewowd',
						x: 251,
						y: 4,
						width: 209,
						height: 20,
						inputType:'password',
						hideLabel: true,
						listeners:{
							"blur":function(){
								var newpwd = Ext.getCmp("page30_newpwd").getValue();
								var renewpwd = Ext.getCmp("page30_renewowd").getValue();
								if(newpwd.length>0){
								if(newpwd!=renewpwd){
									alert("2次输入密码不一致");
									Ext.getCmp("page30_renewowd").focus();
									
								}
							  }
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page30_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page30_submit',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '提交',
						icon: '../../images/jPngButtonOk.png'
					},
					{
						xtype: 'button',
						id: 'page30_back',
						x: 361,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png'
					}
				]
			}
		]
	});

});
