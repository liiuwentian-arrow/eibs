Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.form.field.ComboBox');
Ext.require('Ext.data.SimpleStore');
Ext.require('Ext.button.*');

Ext.onReady(function(){
	
	var page11_userrole_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		
	});
	
	var page11_userinstitution_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		
	});
	
	var page11_userclasses_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		
	});
	
	var page11_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page11_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '用户详细信息'
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel12',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel11',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户名'
					},
					{
						xtype: 'textfield',
						id: 'page11_username',
						x: 251,
						y: 5,
						width: 150,
						height: 20,						
						hideLabel: true,
						//style:'background:#FEFEA1;',
						listeners:{
							　"focus":function(){
                                  //alert(1);
							　　　　this.blur();

							　　}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel1',
						x: 200,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '身份证'
					},
					{
						xtype: 'textfield',
						id: 'page11_useridcard',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel3',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel2',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '姓名'
					},
					{
						xtype: 'textfield',
						id: 'page11_realname',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel14',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel13',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户编号'
					},
					{
						xtype: 'textfield',
						id: 'page11_usernum',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel4',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel3',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户角色'
					},
					{
						xtype: 'combobox',
						id: 'page11_userrole',
						x: 251,
						y: 5,
						width: 164,
						//value: '0',
						store: page11_userrole_store,
						displayField: 'label',
						valueField: 'value',
						hideLabel: true,
						readOnly:true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel5',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel4',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '所属机构'
					},
					{
						xtype: 'combobox',
						id: 'page11_userinstitution',
						x: 251,
						y: 5,
						width: 164,
						store: page11_userinstitution_store,
						displayField: 'label',
						valueField: 'value',
						hideLabel: true,
						readOnly:true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel7',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel6',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '所属班级'
					},
					{
						xtype: 'combobox',
						id: 'page11_userclasses',
						x: 251,
						y: 5,
						width: 164,
						//value: '0',
						store: page11_userclasses_store,
						displayField: 'label',
						valueField: 'value',
						hideLabel: true,
						readOnly:true
						
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel8',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel7',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '联系电话'
					},
					{
						xtype: 'textfield',
						id: 'page11_userphone',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel9',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel8',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '电子邮件'
					},
					{
						xtype: 'textfield',
						id: 'page11_useremail',
						x: 251,
						y: 7,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel6',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel5',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '更新时间'
					},
					{
						xtype: 'textfield',
						id: 'page11_userupdate',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel13',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel12',
						x: 200,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '操作员'
					},
					{
						xtype: 'textfield',
						id: 'page11_czername',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"focus":function(){
								this.blur();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel10',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page11_jLabel9',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户状态'
					},
					{
						xtype: 'label',
						id: 'page11_jLabel10',
						x: 251,
						y: 8,
						//text: '正常'
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page11_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page11_back',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=0','_self');
								//window.history.go(-1);
							}
						}
					}
				]
			}
		]
	});

});
