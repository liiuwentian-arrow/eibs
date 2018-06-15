<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
	+ request.getServerName() + ":" + request.getServerPort()
	+ path + "/";
Boolean[] tabIsHiddenArray={true,true,true,true,true};
if(session.getAttribute("tabIsHiddenArray")!=null){
	tabIsHiddenArray=(Boolean[])session.getAttribute("tabIsHiddenArray");
}
String tabNum=request.getParameter("tabNum");
String index=request.getParameter("index");
pageContext.setAttribute("tabNum", tabNum);
if(tabNum!=null){
	tabIsHiddenArray[Integer.parseInt(tabNum)]=false;
}
if(index!=null){
	tabIsHiddenArray[Integer.parseInt(index)]=true;
}
session.setAttribute("tabIsHiddenArray", tabIsHiddenArray);
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>选项卡</title>
	<link href="../../css/config.css" rel="stylesheet" type="text/css" />
	<script src="../../extjs/ext-all.js"></script>
	<script src="../../extjs/ext-theme-classic/ext-theme-classic.js"></script>
	<link rel="stylesheet" href="../../extjs/ext-theme-classic/resources/ext-theme-classic-all.css">
	<script type="text/javascript" src="../../extjs/Ext.ux.data.PagingStore.js"></script>
	<script type="text/javascript" src="../../js/systemManager_module.js"></script>
	<script type="text/javascript" >
	 tabNum=${tabNum};
	 var username = "${user.username}";
	 var institutionId ="${user.institutionid}";
	 tabIsHiddenArray=[${tabIsHiddenArray[0]},${tabIsHiddenArray[1]},${tabIsHiddenArray[2]},${tabIsHiddenArray[3]},${tabIsHiddenArray[4]}];
	function tabIsHiddenArrayChange(i){
		location.href="systemManager_module.jsp?tabNum="+tabNum+"&index="+i;
	} 
	</script>
	<script type="text/javascript" src="../../js/systemManager_module_self.js""></script>
	<style type="text/css">
	 .x-grid-item{
	   width:0px;
	   height: 32px;
	   line-height:32px;
	 }
	</style>
</head>
<body data-curpagename="page11" >
<input type="hidden" id="remsg" value="${remsg }"/>
</body>
</html>