Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.button.*');
Ext.require('Ext.form.TextArea');

Ext.onReady(function(){
	
	var page19_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page19_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '日志详细信息'
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel12',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel11',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '标题'
					},
					{
						xtype: 'textfield',
						id: 'page19_logtitle',
						x: 251,
						y: 5,
						width: 213,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel1',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生模块'
					},
					{
						xtype: 'textfield',
						id: 'page19_logmoudle',
						x: 251,
						y: 5,
						width: 215,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel3',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel2',
						x: 180,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生子模块'
					},
					{
						xtype: 'textfield',
						id: 'page19_logsubmoudle',
						x: 251,
						y: 5,
						width: 214,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel14',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel13',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生文件'
					},
					{
						xtype: 'textfield',
						id: 'page19_logsourcefile',
						x: 251,
						y: 4,
						width: 288,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel4',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel3',
						x: 170,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生目标事件'
					},
					{
						xtype: 'textfield',
						id: 'page19_logevent',
						x: 249,
						y: 5,
						width: 204,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel5',
				height: 206,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel4',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '日志内容'
					},
					{
						xtype: 'textarea',
						id: 'page19_logcomments',
						x: 249,
						y: 12,
						width: 660,
						height: 179,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel7',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel6',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '日志级别'
					},
					{
						xtype: 'textfield',
						id: 'page19_loglevels',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel8',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel7',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生时间'
					},
					{
						xtype: 'textfield',
						id: 'page19_logtime',
						x: 252,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel9',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel8',
						x: 198,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '发生IP'
					},
					{
						xtype: 'textfield',
						id: 'page19_logip',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel6',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel5',
						x: 198,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '操作员'
					},
					{
						xtype: 'textfield',
						id: 'page19_czername',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel13',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page19_jLabel12',
						x: 200,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '版本号'
					},
					{
						xtype: 'textfield',
						id: 'page19_logversion',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page19_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page19_back',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png',
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=3','_self');
							}
						}
					}
				]
			}
		]
	});

});
