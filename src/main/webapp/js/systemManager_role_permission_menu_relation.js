Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');
Ext.require('Ext.form.field.ComboBox');
Ext.require('Ext.data.SimpleStore');

Ext.onReady(function(){
	
	var page20_instiname_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['', '']]
	});
	
	var page20_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page20_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '权限详细信息'
			},
			{
				xtype: 'panel',
				id: 'page20_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page20_jLabel1',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '角色名称'
					},
					{
						xtype: 'textfield',
						id: 'page20_rolename',
						x: 251,
						y: 5,
						width: 209,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page20_jExtPanel8',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page20_jLabel7',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '权限名称'
					},
					{
						xtype: 'textfield',
						id: 'page20_perminname',
						x: 251,
						y: 5,
						width: 209,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page20_jExtPanel6',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page20_jLabel5',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '菜单名称'
					},
					{
						xtype: 'textfield',
						id: 'page20_menuname',
						x: 251,
						y: 4,
						width: 209,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page20_jExtPanel7',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page20_jLabel6',
						x: 189,
						y: 10,
						style: 'color:#3D6BA3;',
						text: '所属机构'
					},
					{
						xtype: 'combobox',
						id: 'page20_instiname',
						x: 251,
						y: 5,
						width: 173,
						store: page20_instiname_store,
						displayField: 'label',
						valueField: 'value',
						hideLabel: true,
						listeners:{
							"select":function(combo, record, index){
							  var s =this.getRawValue();
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page20_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page20_submit',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '提交',
						icon: '../../images/jPngButtonOk.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=2','_self');
							}
						}
					},
					{
						xtype: 'button',
						id: 'page20_back',
						x: 361,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=2','_self');
							}
						}
					}
				]
			}
		]
	});

});
