Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Panel');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');
Ext.require('Ext.Img');
Ext.require('Ext.form.Label');

Ext.onReady(function(){
	
	var page1_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page1_jExtPanel1',
				bodyStyle:'background: transparent',
				border: false,
				region: 'center',
				layout: {type:'vbox', align:'stretch', pack:'center'},
				items: [
					{
						xtype: 'panel',
						id: 'page1_jExtPanel2',
						width: 1366,
						height: 195,
						bodyStyle:'background: transparent url(images/jLogin001.jpg) repeat',
						border: false,
						layout: {type:'hbox', align:'stretch', pack:'center'},
						items: [
							{
								xtype: 'form',
								id: 'page1_jExtForm1',
								contentEl: page1_jExtForm1_content,
								width: 361,
								height: 195,
								bodyStyle:'background: transparent',
								border:false,
								layout: 'absolute',
								items: [
									{
										xtype: 'textfield',
										id: 'page1_jEdit1',
										x: 89,
										y: 29,
										width: 221,
										height: 20,
										hideLabel: true
									},
									{
										xtype: 'button',
										id: 'page1_jButton1',
										x: 91,
										y: 150,
										width: 96,
										height: 22,
										text: '登录',
										listeners:{
											"click":function(){
												var authCode = Ext.getCmp("page1_jEdit3").getValue();
												var username = Ext.getCmp("page1_jEdit1").getValue();
												var password = Ext.getCmp("page1_jEdit2").getValue();
												
										Ext.Ajax.request({
									        method:'POST',
											url:'user/login.action',
											dataType:'json',
											params:{
											username:username,
											password:password,
											authcode:authCode
											},
											success:function(response){
											var data=response.responseText;//这句话就已经得到了java后端传过来的json数据了 
											//var datause=eval("("+data+")")
											if(data==null||data==''){
												window.open('main.jsp','_self');
												}else {
												    alert(data);
													}
												}
											});

												
												
												
												
											  
											}
										}
									},
									{
										xtype: 'button',
										id: 'page1_jButton2',
										x: 205,
										y: 150,
										width: 96,
										height: 22,
										text: '重置',
										listeners:{
											"click":function(){
										      
											  window.open('login.jsp','_self');
											}
										}
									},
									{
										xtype: 'textfield',
										id: 'page1_jEdit2',
										x: 89,
										y: 60,
										width: 221,
										height: 20,
										inputType:'password',
										hideLabel: true
									},
									{
										xtype: 'textfield',
										id: 'page1_jEdit3',
										x: 89,
										y: 90,
										width: 118,
										height: 20,
										hideLabel: true
									},
									{
										xtype: 'image',
										id: 'page1_jImages1',
										x: 224,
										y: 87,
										width: 90,
										height: 36,
										src: 'authCode.action',
										listeners:{
											el:{
												"click":function(){
												//alert(1);
												Ext.getCmp('page1_jImages1').setSrc('authCode.action?time='+new Date());
											}
										  }
										}
									},
									{
										xtype: 'label',
										id: 'page1_jLabel2',
										x: 36,
										y: 30,
										text: '用户名：'
									},
									{
										xtype: 'label',
										id: 'page1_jLabel3',
										x: 36,
										y: 62,
										text: '密码：'
									},
									{
										xtype: 'label',
										id: 'page1_jLabel4',
										x: 36,
										y: 94,
										text: '校验码：'
									}
								]
							}
						]
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page1_jExtPanel3',
				contentEl: page1_jExtPanel3_content,
				height: 74,
				bodyStyle:'background: transparent',
				border: false,
				region: 'north',
				layout: 'absolute'
			},
			{
				xtype: 'panel',
				id: 'page1_jExtPanel4',
				height: 49,
				bodyStyle:'background: transparent',
				border: false,
				region: 'south',
				layout: {type:'hbox', align:'middle', pack:'center'},
				items: [
					{
						xtype: 'label',
						id: 'page1_jLabel1',
						text: '版权所有：武汉新晨信息科技有限公司'
					}
				]
			}
		]
	});

});
