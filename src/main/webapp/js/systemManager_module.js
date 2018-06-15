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
var page11_jDataGrid1_store;
Ext.onReady(function(){
	
	var page11_jComboBox1_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['正常', '0'],['注销', '1'],['锁定', '2']]
	});
	
	 page11_jDataGrid1_store = new Ext.data.Store({
		fields : ['id','userName', 'realName', 'institutionName', 'userState', 'roleName', 'updatetime', 'updateUserName'],
		pageSize: 20,
		proxy: {
			type: 'ajax',
			url:  '../../user/selectAll.action',
			reader: {
				type: 'json',
				root: 'data',
				totalProperty:'totalCount',
			}
		}
		
		

	});
	
	var page11_jComboBox2_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['正常', '0'],['注销', '1'],['锁定', '2']]
	});
	
	var page11_jDataGrid5_store = new Ext.data.Store({
		fields : ['A1', 'A2', 'A3', 'A4'],
		pageSize: 20,
		proxy: {
			type: 'memory',
			reader: {
				type: 'array'
			}
		},
		data: [['', '', '', '']
	]
	});
	
	var page11_jDataGrid3_store = new Ext.data.Store({
		fields : ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7','A8'],
		pageSize: 20,
		proxy: {
			type: 'memory',
			reader: {
				type: 'array'
			}
		},
		data: [['', '', '', '', '', '', '']
	]
	});
	
	var page11_jDataGrid4_store = new Ext.data.Store({
		fields : ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'],
		pageSize: 20,
		proxy: {
			type: 'memory',
			reader: {
				type: 'array'
			}
		},
		data: [['', '', '', '', '', '']
	]
	});
	
	var page11_jDataGrid2_store = new Ext.data.Store({
		fields : ['A1', 'A2', 'A3', 'A4'],
		pageSize: 20,
		proxy: {
			type: 'memory',
			reader: {
				type: 'array'
			}
		},
		data: [['', '', '', '']
	]
	});
	
	var page11_jComboBox6_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['湖北省', '0']]
	});
	
	var page11_jComboBox7_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['武汉市', '0']]
	});
	
	var page11_jComboBox8_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['江汉区', '0']]
	});
	
	var tab1 = new Ext.Panel(
			{
				xtype: 'panel',
				title: '用户信息',
				closable: true,
				layout: 'border',
				hidden:tabIsHiddenArray[0],
				items: [
					{
						xtype: 'panel',
						id: 'page11_jExtPanel8',
						height: 41,
						bodyStyle:'background: rgba(218,228,242,1)',
						border: false,
						region: 'north',
						layout: {type:'hbox', align:'middle', pack:'end'},
						items: [
							{
								xtype: 'form',
								id: 'page11_jExtForm1',
								flex: 100,
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border:false,
								margins:'0 100 0 0',
								layout: 'absolute',
								items: [
									{
										xtype: 'label',
										id: 'page11_jLabel1',
										x: 30,
										y: 14,
										text: '登录名'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit1',
										x: 101,
										y: 10,
										width: 100,
										height: 20,
										//value:'1',
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel2',
										x: 231,
										y: 14,
										text: '操作员'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit2',
										x: 302,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel6',
										x: 432,
										y: 14,
										text: '用户状态'
									},
									{
										xtype: 'combobox',
										id: 'page11_jComboBox1',
										x: 515,
										y: 10,
										width: 74,
										value: '正常',
										store: page11_jComboBox1_store,
										displayField: 'label',
										valueField: 'value',
										hideLabel: true,
										listeners:{
											"select":function(combo, record, index){
											  var s =this.getRawValue();  //获取的是页面上显示的值
											
											}
										}
									}
								]
							},
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar1',
								width: 160,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton1',
										width: 59,
										height: 23,
										text: '查询',
										icon: '../../images/jzoom.png',
									    handler:function(){
									    	var userName = Ext.getCmp("page11_jEdit1").getValue();
									    	var cun = Ext.getCmp("page11_jEdit2").getValue();
									    	var userState = Ext.getCmp("page11_jComboBox1").getRawValue();
									    	page11_jDataGrid1_store.currentPage=1;
									    	page11_jDataGrid1_store.getProxy().url='../../user/selectAll.action',
									    	page11_jDataGrid1_store.load({params: {start:0,limit:20,"userName":userName,"cun":cun,"userState":userState}})
									    }
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator2'
									},
									{
										xtype: 'button',
										id: 'page11_jButton10',
										width: 59,
										height: 23,
										text: '重置',
										icon: '../../images/jPngButtonCancel.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=0','_self');
											}
										}
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page11_jExtPanel3',
						height: 32,
						bodyStyle:'background: rgba(218,228,242,1)',
						split: true,
						region: 'north',
						layout: {type:'hbox', align:'', pack:'end'},
						items: [
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar4',
								width: 534,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton2',
										width: 62,
										height: 23,
										text: '增加',
										icon: '../../images/jadd.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_user_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton7',
										width: 62,
										height: 23,
										text: '修改',
										icon: '../../images/jedit.png'
									   /* listeners:{
											"click":function(){
												
											  window.open('systemManager_user_add-update.jsp','_self');
											}
										}*/
									},
									{
										xtype: 'button',
										id: 'page11_jButton8',
										width: 62,
										height: 23,
										text: '删除',
										icon: '../../images/jdelete.png'
										/*listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=0','_self');
											}
										}*/
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator1'
									},
									{
										xtype: 'button',
										id: 'page11_jButton9',
										width: 62,
										height: 23,
										text: '解锁',
										icon: '../../images/jlock.png'
										/*listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=0','_self');
											}
										}*/
									},
									{
										xtype: 'button',
										id: 'page11_jButton12',
										width: 88,
										height: 23,
										text: '查看明细',
										icon: '../../images/jtext_align_justify.png'
									/*	listeners:{
											"click":function(){
											  window.open('systemManager_user_details.jsp','_self');
											}
										}*/
									},
									{
										xtype: 'button',
										id: 'page11_jButton20',
										width: 88,
										height: 23,
										text: '重置密码',
										icon: '../../images/jkey.png'
									/*	listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=0','_self');
											}
										}*/
									},
									{
										xtype: 'button',
										id: 'page11_jButton27',
										width: 63,
										height: 23,
										text: '导出',
										icon: '../../images/jexcel.png'
									}
								]
							}
						]
					},
					{
						xtype: 'gridpanel',
						id: 'page11_jDataGrid1',
						region: 'center',
						border:false,
						selModel: new Ext.create('Ext.selection.CheckboxModel'),
						bbar:new Ext.PagingToolbar({
							store: page11_jDataGrid1_store,
							displayInfo: true
						}),
						store: page11_jDataGrid1_store,
						columns: [
							Ext.create('Ext.grid.RowNumberer'),
							{
								text: '用户名',
								width: 122,
								dataIndex: 'userName'
							},
							{
								text: '姓名',
								width: 116,
								dataIndex: 'realName'
							},
							{
								text: '所属机构',
								width: 141,
								dataIndex: 'institutionName'
							},
							{
								text: '用户状态',
								width: 132,
								dataIndex: 'userState'
							},
							{
								text: '角色',
								width: 136,
								dataIndex: 'roleName'
							},
							{
								text: '更新时间',
								width: 123,
								dataIndex: 'updatetime'
							},
							{
								text: '操作员',
								flex: 1,
								dataIndex: 'updateUserName'
							}
						]
					}
				],
				listeners:{
					"close":function(){
					  tabIsHiddenArrayChange(0);
						//window.open("systemManager_module.jsp?tabNum="+tabNum+"&index=0",'page2_jIframe1')
					}
				}
			  }	
	   
	
	);
	
	var tab2 = new Ext.Panel(
			
			{
				xtype: 'panel',
				title: '机构管理',
				closable: true,
				layout: 'border',
				hidden:tabIsHiddenArray[1],
				items: [
					{
						xtype: 'panel',
						id: 'page11_jExtPanel4',
						height: 41,
						bodyStyle:'background: rgba(218,228,242,1)',
						border: false,
						region: 'north',
						layout: {type:'hbox', align:'middle', pack:'end'},
						items: [
							{
								xtype: 'form',
								id: 'page11_jExtForm6',
								flex: 100,
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border:false,
								margins:'0 100 0 0',
								layout: 'absolute',
								items: [
									{
										xtype: 'label',
										id: 'page11_jLabel10',
										x: 30,
										y: 14,
										text: '机构名称'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit3',
										x: 113,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel21',
										x: 243,
										y: 14,
										text: '所属省'
									},
									{
										xtype: 'combobox',
										id: 'page11_jComboBox6',
										x: 314,
										y: 10,
										width: 74,
										value: '湖北省',
										store: page11_jComboBox6_store,
										displayField: 'label',
										valueField: 'value',
										hideLabel: true,
										listeners:{
											"select":function(combo, record, index){
											  var s =this.getRawValue();
											}
										}
									},
									{
										xtype: 'label',
										id: 'page11_jLabel22',
										x: 418,
										y: 14,
										text: '所属市'
									},
									{
										xtype: 'combobox',
										id: 'page11_jComboBox7',
										x: 489,
										y: 10,
										width: 74,
										value: '武汉市',
										store: page11_jComboBox7_store,
										displayField: 'label',
										valueField: 'value',
										hideLabel: true,
										listeners:{
											"select":function(combo, record, index){
											  var s =this.getRawValue();
											}
										}
									},
									{
										xtype: 'label',
										id: 'page11_jLabel23',
										x: 593,
										y: 14,
										text: '所属区'
									},
									{
										xtype: 'combobox',
										id: 'page11_jComboBox8',
										x: 664,
										y: 10,
										width: 74,
										value: '江汉区',
										store: page11_jComboBox8_store,
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
								xtype: 'toolbar',
								id: 'page11_jToolbar2',
								width: 160,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton4',
										width: 59,
										height: 23,
										text: '查询',
										icon: '../../images/jzoom.png'
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator3'
									},
									{
										xtype: 'button',
										id: 'page11_jButton5',
										width: 59,
										height: 23,
										text: '重置',
										icon: '../../images/jPngButtonCancel.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=1','_self');
											}
										}
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page11_jExtPanel7',
						height: 32,
						bodyStyle:'background: rgba(218,228,242,1)',
						split: true,
						region: 'north',
						layout: {type:'hbox', align:'', pack:'end'},
						items: [
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar3',
								width: 293,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton6',
										width: 62,
										height: 23,
										text: '增加',
										icon: '../../images/jadd.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_institution_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton11',
										width: 62,
										height: 23,
										text: '修改',
										icon: '../../images/jedit.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_institution_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton14',
										width: 62,
										height: 23,
										text: '删除',
										icon: '../../images/jdelete.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=1','_self');
											}
										}
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator4'
									},
									{
										xtype: 'button',
										id: 'page11_jButton15',
										width: 62,
										height: 23,
										text: '导出',
										icon: '../../images/jexcel.png'
									}
								]
							}
						]
					},
					{
						xtype: 'gridpanel',
						id: 'page11_jDataGrid3',
						region: 'center',
						border:false,
						selModel: new Ext.create('Ext.selection.CheckboxModel'),
						bbar:new Ext.PagingToolbar({
							store: page11_jDataGrid3_store,
							displayInfo: true
						}),
						store: page11_jDataGrid3_store,
						columns: [
							Ext.create('Ext.grid.RowNumberer'),
							{
								text: '机构名称',
								width: 241,
								dataIndex: 'A1'
							},
							{
								text: '机构类型',
								width: 236,
								dataIndex: 'A2'
							},
							{
								text: '所属省份',
								width: 162,
								dataIndex: 'A3'
							},
							{
								text: '所属城市',
								width: 127,
								dataIndex: 'A4'
							},
							{
								text: '所属地区',
								width: 134,
								dataIndex: 'A5'
							},
							{
								text: '机构社会统一信用代码',
								width: 136,
								dataIndex: 'A6'
							},
							{
								text: '更新时间',
								width: 149,
								dataIndex: 'A7'
							},
							{
								text: '操作员',
								flex: 1,
								dataIndex: 'A8'
							}
						]
					}
				],
				listeners:{
					"close":function(){
					  tabIsHiddenArrayChange(1);
						//window.open("systemManager_module.jsp?tabNum="+tabNum+"&index=1",'page2_jIframe1')
					}
				}}
	
	
	);
	
	var tab3 = new Ext.Panel(

			{
				xtype: 'panel',
				title: '角色管理',
				closable: true,
				layout: 'border',
				hidden:tabIsHiddenArray[2],
				items: [
					{
						xtype: 'panel',
						id: 'page11_jExtPanel9',
						height: 41,
						bodyStyle:'background: rgba(218,228,242,1)',
						border: false,
						region: 'north',
						layout: {type:'hbox', align:'middle', pack:'end'},
						items: [
							{
								xtype: 'form',
								id: 'page11_jExtForm8',
								flex: 100,
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border:false,
								margins:'0 100 0 0',
								layout: 'absolute',
								items: [
									{
										xtype: 'label',
										id: 'page11_jLabel17',
										x: 30,
										y: 14,
										text: '机构'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit10',
										x: 89,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel7',
										x: 219,
										y: 14,
										text: '角色'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit11',
										x: 278,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel8',
										x: 408,
										y: 14,
										text: '权限'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit12',
										x: 467,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel9',
										x: 597,
										y: 14,
										text: '菜单'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit13',
										x: 656,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									}
								]
							},
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar6',
								width: 160,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton19',
										width: 59,
										height: 23,
										text: '查询',
										icon: '../../images/jzoom.png'
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator5'
									},
									{
										xtype: 'button',
										id: 'page11_jButton21',
										width: 59,
										height: 23,
										text: '重置',
										icon: '../../images/jPngButtonCancel.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=2','_self');
											}
										}
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page11_jExtPanel12',
						height: 32,
						bodyStyle:'background: rgba(218,228,242,1)',
						split: true,
						region: 'north',
						layout: {type:'hbox', align:'', pack:'end'},
						items: [
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar9',
								width: 396,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton23',
										width: 88,
										height: 23,
										text: '增加角色',
										icon: '../../images/jadd.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_role_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton24',
										width: 88,
										height: 23,
										text: '增加权限',
										icon: '../../images/jadd.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_permission_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton25',
										width: 88,
										height: 23,
										text: '增加菜单',
										icon: '../../images/jadd.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_menu_add-update.jsp','_self');
											}
										}
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator8'
									},
									{
										xtype: 'button',
										id: 'page11_jButton26',
										width: 88,
										height: 23,
										text: '增加关系',
										icon: '../../images/jedit.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_role_permission_menu_relation.jsp','_self');
											}
										}
									}
								]
							}
						]
					},
					{
						xtype: 'gridpanel',
						id: 'page11_jDataGrid2',
						region: 'center',
						border:false,
						selModel: new Ext.create('Ext.selection.CheckboxModel'),
						bbar:new Ext.PagingToolbar({
							store: page11_jDataGrid2_store,
							displayInfo: true
						}),
						store: page11_jDataGrid2_store,
						columns: [
							Ext.create('Ext.grid.RowNumberer'),
							{
								text: '角色名称',
								width: 122,
								dataIndex: 'A1'
							},
							{
								text: '权限名称',
								width: 116,
								dataIndex: 'A2'
							},
							{
								text: '菜单名称',
								width: 141,
								dataIndex: 'A3'
							},
							{
								text: '所属机构',
								flex: 1,
								dataIndex: 'A4'
							}
						]
					}
				],
				listeners:{
					"close":function(){
					  tabIsHiddenArrayChange(2);
						//window.open("systemManager_module.jsp?tabNum="+tabNum+"&index=2",'page2_jIframe1')
					}
				}}
	
	);
	
	var tab4 = new Ext.Panel(

			{
				xtype: 'panel',
				title: '日志管理',
				closable: true,
				layout: 'border',
				hidden:tabIsHiddenArray[3],
				items: [
					{
						xtype: 'panel',
						id: 'page11_jExtPanel6',
						height: 41,
						bodyStyle:'background: rgba(218,228,242,1)',
						border: false,
						region: 'north',
						layout: {type:'hbox', align:'middle', pack:'end'},
						items: [
							{
								xtype: 'form',
								id: 'page11_jExtForm4',
								flex: 100,
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border:false,
								layout: 'absolute',
								items: [
									{
										xtype: 'label',
										id: 'page11_jLabel14',
										x: 30,
										y: 14,
										text: '级别'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit6',
										x: 89,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel15',
										x: 219,
										y: 14,
										text: '标题'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit7',
										x: 278,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel16',
										x: 408,
										y: 14,
										text: '模块'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit8',
										x: 467,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel11',
										x: 597,
										y: 14,
										text: '操作员'
									},
									{
										xtype: 'textfield',
										id: 'page11_jEdit4',
										x: 668,
										y: 10,
										width: 100,
										height: 20,
										readOnly: false,
										hideLabel: true
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page11_jExtPanel10',
						height: 41,
						bodyStyle:'background: rgba(218,228,242,1)',
						border: false,
						region: 'north',
						layout: {type:'hbox', align:'middle', pack:'end'},
						items: [
							{
								xtype: 'form',
								id: 'page11_jExtForm7',
								flex: 100,
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border:false,
								margins:'0 100 0 0',
								layout: 'absolute',
								items: [
									{
										xtype: 'label',
										id: 'page11_jLabel18',
										x: 30,
										y: 14,
										text: '起始日期'
									},
									{
										xtype: 'datefield',
										id: 'page11_jDateTimePicker1',
										x: 113,
										y: 10,
										width: 100,
										format: 'Y/m/d',
										hideLabel: true
									},
									{
										xtype: 'label',
										id: 'page11_jLabel19',
										x: 243,
										y: 14,
										text: '截止日期'
									},
									{
										xtype: 'datefield',
										id: 'page11_jDateTimePicker2',
										x: 326,
										y: 10,
										width: 100,
										format: 'Y/m/d',
										hideLabel: true
									}
								]
							},
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar5',
								width: 160,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton16',
										width: 59,
										height: 23,
										text: '查询',
										icon: '../../images/jzoom.png'
									},
									{
										xtype: 'tbseparator',
										id: 'page11_jSeparator6'
									},
									{
										xtype: 'button',
										id: 'page11_jButton17',
										width: 59,
										height: 23,
										text: '重置',
										icon: '../../images/jPngButtonCancel.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_module.jsp?tabNum=3','_self');
											}
										}
									}
								]
							}
						]
					},
					{
						xtype: 'panel',
						id: 'page11_jExtPanel11',
						height: 32,
						bodyStyle:'background: rgba(218,228,242,1)',
						split: true,
						region: 'north',
						layout: {type:'hbox', align:'', pack:'end'},
						items: [
							{
								xtype: 'toolbar',
								id: 'page11_jToolbar7',
								width: 183,
								height: 31,
								border:false,
								items: [
									{
										xtype: 'button',
										id: 'page11_jButton18',
										width: 88,
										height: 23,
										text: '查看明细',
										icon: '../../images/jtext_align_justify.png',
										listeners:{
											"click":function(){
											  window.open('systemManager_log_details.jsp','_self');
											}
										}
									},
									{
										xtype: 'button',
										id: 'page11_jButton22',
										width: 63,
										height: 23,
										text: '导出',
										icon: '../../images/jexcel.png'
									}
								]
							}
						]
					},
					{
						xtype: 'gridpanel',
						id: 'page11_jDataGrid4',
						region: 'center',
						border:false,
						selModel: new Ext.create('Ext.selection.CheckboxModel'),
						bbar:new Ext.PagingToolbar({
							store: page11_jDataGrid4_store,
							displayInfo: true
						}),
						store: page11_jDataGrid4_store,
						columns: [
							Ext.create('Ext.grid.RowNumberer'),
							{
								text: '标题',
								width: 122,
								dataIndex: 'A1'
							},
							{
								text: '发生模块',
								width: 116,
								dataIndex: 'A2'
							},
							{
								text: '发生源文件',
								width: 141,
								dataIndex: 'A3'
							},
							{
								text: '日志级别',
								width: 132,
								dataIndex: 'A4'
							},
							{
								text: '发生时间',
								width: 136,
								dataIndex: 'A5'
							},
							{
								text: '操作员',
								flex: 1,
								dataIndex: 'A6'
							}
						]
					}
				],
				listeners:{
					"close":function(){
					  tabIsHiddenArrayChange(3);
					}
				}}
	
	
	);
	
	 
	var  tab5 = new Ext.Panel(
			
				
					{
						xtype: 'panel',
						title: '批扣文件查询',
						closable: true,
						layout: 'border',
						hidden:tabIsHiddenArray[4],
						items: [
							{
								xtype: 'panel',
								id: 'page11_jExtPanel1',
								height: 41,
								bodyStyle:'background: rgba(218,228,242,1)',
								border: false,
								region: 'north',
								layout: {type:'hbox', align:'middle', pack:'end'},
								items: [
									{
										xtype: 'form',
										id: 'page11_jExtForm5',
										flex: 100,
										height: 41,
										bodyStyle:'background: rgba(218,228,242,1)',
										border:false,
										margins:'0 100 0 0',
										layout: 'absolute',
										items: [
											{
												xtype: 'label',
												id: 'page11_jLabel5',
												x: 30,
												y: 14,
												text: '处理结果'
											},
											{
												xtype: 'combobox',
												id: 'page11_jComboBox2',
												x: 113,
												y: 10,
												width: 74,
												value: '正常',
												store: page11_jComboBox2_store,
												displayField: 'label',
												valueField: 'value',
												hideLabel: true,
												listeners:{
													"select":function(combo, record, index){
													  var s =this.getRawValue();
													}
												}
											},
											{
												xtype: 'label',
												id: 'page11_jLabel3',
												x: 217,
												y: 14,
												text: '起始日期'
											},
											{
												xtype: 'datefield',
												id: 'page11_jDateTimePicker3',
												x: 300,
												y: 10,
												width: 100,
												format: 'Y/m/d',
												hideLabel: true
											},
											{
												xtype: 'label',
												id: 'page11_jLabel4',
												x: 430,
												y: 14,
												text: '截止日期'
											},
											{
												xtype: 'datefield',
												id: 'page11_jDateTimePicker4',
												x: 513,
												y: 10,
												width: 100,
												format: 'Y/m/d',
												hideLabel: true
											}
										]
									},
									{
										xtype: 'toolbar',
										id: 'page11_jToolbar8',
										width: 160,
										height: 31,
										border:false,
										items: [
											{
												xtype: 'button',
												id: 'page11_jButton3',
												width: 59,
												height: 23,
												text: '查询',
												icon: '../../images/jzoom.png'
											},
											{
												xtype: 'tbseparator',
												id: 'page11_jSeparator7'
											},
											{
												xtype: 'button',
												id: 'page11_jButton13',
												width: 59,
												height: 23,
												text: '重置',
												icon: '../../images/jPngButtonCancel.png',
												listeners:{
													"click":function(){
													  window.open('systemManager_module.jsp?tabNum=4','_self');
													}
												}
											}
										]
									}
								]
							},
							{
								xtype: 'gridpanel',
								id: 'page11_jDataGrid5',
								region: 'center',
								border:false,
								selModel: new Ext.create('Ext.selection.CheckboxModel'),
								bbar:new Ext.PagingToolbar({
									store: page11_jDataGrid5_store,
									displayInfo: true
								}),
								store: page11_jDataGrid5_store,
								columns: [
									Ext.create('Ext.grid.RowNumberer'),
									{
										text: '批扣文件名',
										width: 122,
										dataIndex: 'A1'
									},
									{
										text: '批扣日期',
										width: 116,
										dataIndex: 'A2'
									},
									{
										text: '处理结果',
										width: 141,
										dataIndex: 'A3'
									},
									{
										text: '备注',
										flex: 1,
										dataIndex: 'A4'
									}
								]
							}
						],
						listeners:{
							"close":function(){
							  tabIsHiddenArrayChange(4);
							}
						}
					}
	
	);
	
	var page11_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
			xtype: 'tabpanel',
			id: 'page11_jTabControl1',
			autoDestroy:false,
			activeTab: tabNum,
			region: 'center',
			items:[tab1,tab2,tab3,tab4,tab5],
			listeners:{
				"tabchange":function(){
					//alert(1);
					top.Ext.getCmp("page2_jExtPanel7").setTitle("系统管理->"+this.activeTab.title);
				}
			  }
		 	}
		]
			
		
	});

});
