Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.tree.Panel');
Ext.require('Ext.tree.View');

Ext.onReady(function(){
	
	var page2_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page2_jExtPanel1',
				width: 255,
				split: true,
				region: 'west',
				layout: 'accordion',
				title: '导航菜单',
				collapsible: true,
				collapseDirection: 'left',
				items: [
					{
						xtype: 'panel',
						id: 'page2_jExtPanel2',
						layout: 'fit',
						title: '系统管理',
						collapsible: true,
						collapseDirection: 'top',
						items: [
							{
								xtype: 'treepanel',
								id: 'page2_jTreeView1',
								rootVisible: false,
								border:false,
								root: {
									text: 'root',
									expanded: true,
									children: [
											{
												id: 1,
												text: '系统管理',
												expanded: true,
												children: [
													{
														id: 2,
														text: '用户管理',
														leaf: true
													},
													{
														id: 3,
														text: '角色管理',
														leaf: true
													},
													{
														id: 6,
														text: '机构管理',
														leaf: true
													},
													{
														id: 5,
														text: '日志管理',
														leaf: true
													},
													{
														id: 7,
														text: '批扣文件查询',
														leaf: true
													}
												]
											}
									]
								},
								listeners:{
									"itemclick":function(view,record,item,index,e){
									  var id=record.get('id');
									  if (id=='2') {window.open('page/system/systemManager_module.jsp?tabNum=0','page2_jIframe1');}
									  if (id=='6') {window.open('page/system/systemManager_module.jsp?tabNum=1','page2_jIframe1');}
									  if (id=='3') {window.open('page/system/systemManager_module.jsp?tabNum=2','page2_jIframe1');}
									  if (id=='5') {window.open('page/system/systemManager_module.jsp?tabNum=3','page2_jIframe1');}
									  if (id=='7') {window.open('page/system/systemManager_module.jsp?tabNum=4','page2_jIframe1');}
									}
								}
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page2_jExtPanel3',
						layout: 'absolute',
						title: '面板2',
						collapsible: true,
						collapseDirection: 'top'
					},
					{
						xtype: 'panel',
						id: 'page2_jExtPanel4',
						layout: 'absolute',
						title: '面板3',
						collapsible: true,
						collapseDirection: 'top'
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page2_jExtPanel5',
				contentEl: page2_jExtPanel5_content,
				height: 93,
				bodyStyle:'background: url(images/jTitle001.jpg) repeat',
				region: 'north',
				layout: 'border',
				items: [
					{
						xtype: 'panel',
						id: 'page2_jExtPanel6',
						contentEl: page2_jExtPanel6_content,
						width: 420,
						bodyStyle:'background: transparent',
						border: false,
						region: 'east',
						layout: 'absolute',
						items: [
							{
								xtype: 'label',
								id: 'page2_jLabel3',
								x: 288,
								y: 11,
								text: '|'
							},
							{
								xtype: 'label',
								id: 'page2_jLabel4',
								x: 357,
								y: 11,
								text: '|'
							},
							{
								xtype: 'label',
								id: 'page2_jLabel5',
								x: 220,
								y: 11,
								text: '|'
							},
							{
								xtype: 'label',
								id: 'page2_jLabel1',
								x: 26,
								y: 48,
								text: '现在时间是：2014年7月15日 星期二 10:24:30 '
							},
							{
								xtype: 'label',
								id: 'page2_jLabel2',
								x: 311,
								y: 48,
								text: '欢迎您：管理员'
							}
						]
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page2_jExtPanel7',
				contentEl: page2_jExtPanel7_content,
				region: 'center',
				layout: 'fit',
				title: '系统管理->用户管理',
				collapsible: true,
				collapseDirection: 'top'
			}
		]
	});

});
