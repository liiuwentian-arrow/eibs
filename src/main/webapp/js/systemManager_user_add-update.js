Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
Ext.require('Ext.form.Label');
Ext.require('Ext.form.field.Text');
Ext.require('Ext.form.field.ComboBox');
Ext.require('Ext.data.SimpleStore');
Ext.require('Ext.button.*');

/*var institutionid = Ext.getCmp("page12_userinstitution").getValue();
alert(typeof institutionid)*/
Ext.onReady(function(){
	
	var page12_userrole_store = new Ext.data.SimpleStore({
		fields : ['rolename', 'id'],
		proxy: {
			type: 'ajax',
			url:  '../../role/selectRoleName.action',
			reader: {
				type: 'json',
				root: 'data'
			}
		},
		autoLoad:true,
		listeners:{
			"beforeload":function(store,option){
				
				var institutionid = Ext.getCmp("page12_userinstitution").getValue();
				if(institutionid==null){
					
					return false;
				}
				Ext.apply(store.proxy.extraParams,{"institutionid":institutionid});
			}
		
		}
	});
	
	var page12_userinstitution_store = new Ext.data.SimpleStore({
		fields : ['institutionname', 'id'],
		proxy: {
			type: 'ajax',
			url:  '../../insti/selectInstiName.action',
			reader: {
				type: 'json',
				root: 'datains'
			}
		},
		autoLoad:true
	});


		var page12_userclasses_store = new Ext.data.SimpleStore({
			fields : ['classname', 'id'],
			
			proxy: {
				type: 'ajax',
				url:  '../../cla/selectClaName.action',
				reader: {
					type: 'json',
					root: 'datacla'
				}
			},
			autoLoad:true,
			listeners:{
				"beforeload":function(store,option){
					
					var institutionid = Ext.getCmp("page12_userinstitution").getValue();
					if(institutionid==null){
						
						return false;
					}
					Ext.apply(store.proxy.extraParams,{"institutionid":institutionid});
				}
			
			}
			
		});
	
	
	
	
	
	var page12_usergender_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
		data : [['', ''],['男', 'man'],['女', 'woman']]
	});
	
	var page12_userstate_store = new Ext.data.SimpleStore({
		fields : ['label', 'value'],
	    data : [['正常', '0'],['注销', '1'],['锁定', '2']]
	});
	
	var page12_jViewport1 = Ext.create('Ext.container.Viewport', {
		layout: 'border',
		autoScroll: true,
		items: [
			{
				xtype: 'panel',
				id: 'page12_jExtPanel1',
				height: 26,
				border: false,
				region: 'north',
				layout: 'absolute',
				title: '用户详细信息'
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel12',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel11',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户名'
					},
					{
						xtype: 'textfield',
						id: 'page12_username',
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
				id: 'page12_jExtPanel2',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel1',
						x: 200,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '身份证'
					},
					{
						xtype: 'textfield',
						id: 'page12_useridcard',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"blur":function(){
								var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
								if(this.getValue().length!=0){
									if(!reg.test(this.getValue())){
										alert("身份证号填写有误");
										this.focus();
									}
								}
								
								
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel3',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel2',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '姓名'
					},
					{
						xtype: 'textfield',
						id: 'page12_realname',
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
				id: 'page12_jExtPanel16',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel15',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '性别'
					},
					{
						xtype: 'combobox',
						id: 'page12_usergender',
						x: 251,
						y: 5,
						width: 150,
						store: page12_usergender_store,
						displayField: 'label',
						valueField: 'value',
						hideLabel: true,
						listeners:{
							"select":function(combo, record, index){
							  var s =this.getRawValue();
							  //alert(this.getValue());
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel15',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel14',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '年龄'
					},
					{
						xtype: 'textfield',
						id: 'page12_userage',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"blur":function(){
								//alert(1);
								var reg=/^[1-6]?[0-9]$/;
								//alert(this.getValue());
								if(this.getValue().length!=0){
								if(!reg.test(this.getValue())){
									alert("年龄在1到69之间");
									this.focus();
								 }
								}
							}
							
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel17',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel16',
						x: 204,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '民族'
					},
					{
						xtype: 'textfield',
						id: 'page12_usernation',
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
				id: 'page12_jExtPanel13',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel12',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户编号'
					},
					{
						xtype: 'textfield',
						id: 'page12_usernum',
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
				id: 'page12_jExtPanel5',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel4',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '所属机构'
					},
					{
						xtype: 'combobox',
						id: 'page12_userinstitution',
						x: 251,
						y: 5,
						width: 164,
						store: page12_userinstitution_store,
						displayField: 'institutionname',
						valueField: 'id',
						hideLabel: true,
						listeners:{
							"select":function(combo, record, index){
							  var s =this.getRawValue();
							  Ext.getCmp("page12_userclasses").reset();
							  //alert(1);
							  page12_userclasses_store.getProxy().url='../../cla/selectClaName.action';
							  page12_userclasses_store.load({
								  //url:'../../cla/selectClaName1.action',
								  params:{"institutionid":combo.value}
							  });
							  //alert(1);
							  Ext.getCmp("page12_userrole").setValue(null);
							  
							  page12_userrole_store.load({
								  params:{"institutionid":combo.value}
							  });
							  
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel4',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel3',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户角色'
					},
					{
						xtype: 'combobox',
						id: 'page12_userrole',
						x: 251,
						y: 5,
						width: 164,
						//value: '0',
						store: page12_userrole_store,
						displayField: 'rolename',
						valueField: 'id',
						hideLabel: true,
						value:"请先选择机构",
						listeners:{
							"select":function(combo, record, index){
								  var s =this.getRawValue();
								  if(s.indexOf("生")==-1){
									  Ext.getCmp("page12_jExtPanel7").hide();
								  }else{
									  Ext.getCmp("page12_jExtPanel7").show();
								  }
								}
						}
					}
				]
			},
			
			{
				xtype: 'panel',
				id: 'page12_jExtPanel7',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel6',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '所属班级'
					},
					{
						xtype: 'combobox',
						id: 'page12_userclasses',
						x: 251,
						y: 5,
						width: 164,
						//value: '0',
						store: page12_userclasses_store,
						displayField: 'classname',
						valueField: 'id',
						hideLabel: true,
						value:"请先选择角色",
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
				id: 'page12_jExtPanel8',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel7',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '联系电话'
					},
					{
						xtype: 'textfield',
						id: 'page12_userphone',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"blur":function(){
								var reg = /^1[3|4|5|8][0-9]\d{8,8}$/;
								if(this.getValue().length!=0){
								if(!reg.test(this.getValue())){
									alert("请输入正确的手机号吗");
									this.focus();
								}
							 }
								
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel9',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel8',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '电子邮件'
					},
					{
						xtype: 'textfield',
						id: 'page12_useremail',
						x: 251,
						y: 5,
						width: 150,
						height: 20,
						hideLabel: true,
						listeners:{
							"blur":function(){
								var reg = /^((([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})[; ,])*(([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})))$/;
								if(this.getValue().length!=0){
								if(!reg.test(this.getValue())){
									alert("请输入正确的邮箱地址");
									this.focus();
								}
							  }	
							}
						}
					}
				]
			},
			{
				xtype: 'panel',
				id: 'page12_jExtPanel6',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel5',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '更新时间'
					},
					{
						xtype: 'textfield',
						id: 'page12_userupdate',
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
				id: 'page12_jExtPanel14',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel13',
						x: 200,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '操作员'
					},
					{
						xtype: 'textfield',
						id: 'page12_czername',
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
				id: 'page12_jExtPanel10',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'label',
						id: 'page12_jLabel9',
						x: 188,
						y: 8,
						style: 'color:#3D6BA3;',
						text: '用户状态'
					},
					{
						xtype: 'combobox',
						id: 'page12_userstate',
						x: 251,
						y: 5,
						width: 164,
						store: page12_userstate_store,
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
				id: 'page12_jExtPanel11',
				height: 34,
				bodyStyle:'background: rgba(237,246,254,1)',
				region: 'north',
				layout: 'absolute',
				items: [
					{
						xtype: 'button',
						id: 'page12_back',
						x: 328,
						y: 5,
						width: 60,
						height: 20,
						text: '返回',
						icon: '../../images/jarrow_left.png'/*,
						listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=0','_self');
							}
						}*/
					},
					{
						xtype: 'button',
						id: 'page12_submit',
						x: 251,
						y: 5,
						width: 60,
						height: 20,
						text: '提交',
						icon: '../../images/jPngButtonOk.png'
						/*listeners:{
							"click":function(){
							  window.open('systemManager_module.jsp?tabNum=0','_self');
							}
						}*/
					}
				]
			}
		]
	});
	
});


