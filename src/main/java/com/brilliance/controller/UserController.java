package com.brilliance.controller;

import java.beans.IntrospectionException;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.net.URLEncoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.brilliance.pojo.Classes;
import com.brilliance.pojo.ClassesExample;
import com.brilliance.pojo.Role;
import com.brilliance.pojo.User;
import com.brilliance.pojo.UserExample;
import com.brilliance.pojo.UserRole;
import com.brilliance.service.ClassesService;
import com.brilliance.service.RoleService;
import com.brilliance.service.UserRoleService;
import com.brilliance.service.UserService;
import com.brilliance.utils.ExcelUtils;
import com.brilliance.view.UserProxy;

@Controller
public class UserController {
    @Autowired
	UserService userService;
    @Autowired
    ClassesService classesService;
    @Autowired
    UserRoleService userRoleService;
    @Autowired
    RoleService roleService;
      
    /**
     * 
     * @param userName
     * @param cun 操作员用户名
     * @param userState
     * @param start
     * @param limit
     * @return
     * @throws ParseException
     */
     
    @ResponseBody  //返回json格式的数据要加这个注解
    @RequestMapping("user/selectAll.action")
    public Map<String, Object> selectAll(@Param("userName") String userName,@Param("cun") String cun,@Param("userState") String userState,@Param("start") String start,@Param("limit") String limit)throws ParseException{
    	//System.out.println(start);
    	//HttpServletRequest request;
    	
    	int start1 = Integer.parseInt(start);
    	int limit1 = Integer.parseInt(limit);
    	List<UserProxy>  listuser = userService.selectAll(userName,cun,userState, start1, limit1);
    	for (int i = 0; i < listuser.size(); i++) {
    		Date date = listuser.get(i).getUpdateTime();
    		//System.out.println(listuser.get(i).getCreateUserName());
    		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
    		String strDate = sdf.format(date);
    		//System.out.println(strDate);
    		listuser.get(i).setUpdatetime(strDate);
		}
    	
    	UserExample example = new UserExample();
     	UserExample.Criteria  c= example.createCriteria();
     	if(userName!=null&&userName.length()>0) {
     		c.andUsernameEqualTo(userName);
     	}
    	if(cun!=null&&cun.length()>0) {
    		c.andCreateusernameEqualTo(cun);
    	}
    	
    	if(userState!=null&&userState.length()>0) {
    		c.andUserstateEqualTo(userState);
    	}
    	
    	
    	int total = userService.countByExample(example);
    	//System.out.println(total);
    	
    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("data", listuser);
    	map.put("totalCount", total);
		return map;
    	
    }
    
    /**
     * 
     * @param userid
     * @return
     */
    @ResponseBody  //返回json格式的数据要加这个注解
    @RequestMapping("user/selectById.action")
    public Map<String, Object> selectById(@Param("userid") String userid){
    	//System.out.println(start);
    	//HttpServletRequest request;
    	
    	
    	UserProxy  user = userService.selectByPrimaryKey(Integer.parseInt(userid));
    	
    		Date date = user.getUpdateTime();
    		//System.out.println(listuser.get(i).getCreateUserName());
    		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
    		String strDate = sdf.format(date);
    		//System.out.println(strDate);
    		user.setUpdatetime(strDate);
		
    	
    	UserExample example = new UserExample();
     	UserExample.Criteria  c= example.createCriteria();
     	
    	/*List<UserProxy> listuser = new ArrayList<UserProxy>();
    	listuser.add(user);*/
    	c.andIdEqualTo(Integer.parseInt(userid));
     	
    	int total = userService.countByExample(example);
    	//System.out.println(total);
    	
    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("data", user);
    	map.put("totalCount", total);
		return map;
    	
    }
    
    
    /**
     * 
     * @param userid
     * @return
     */
    @ResponseBody 
    @RequestMapping("user/selectDetail.action")   //查看明细功能对应
    public Map<String, Object> selectDetail(@Param("userid") String userid,HttpSession session){
    	UserProxy  userDetail = userService.selectDetailById(Integer.parseInt(userid));
    	Map<String, Object> map = new HashMap<String, Object>();
    	User userlogin = (User) session.getAttribute("user");
    	if(!userlogin.getUsername().equals("admin")) {
    		if(userlogin.getInstitutionid()!=userDetail.getInstitutionId()) {
        		map.put("msg", "无法查看其它机构用户信息");
        		return map;
        	}	
    	}
    	
    	
    	Date date = userDetail.getUpdateTime();
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	String strDate = sdf.format(date);
    	userDetail.setUpdatetime(strDate);
		map.put("data", userDetail);
    	return map;
    }
    
    /**
     * 
     * @param institutionid
     * @return
     */
    @ResponseBody
    @RequestMapping("cla/selectClaName.action")  
    public Map<String, Object>  selectClaName(String institutionid){
    	ClassesExample classesExample = new ClassesExample();
    	List<Classes> list = classesService.selectByIns(Integer.parseInt(institutionid));
    	//System.out.println(list.size());
    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("datacla", list);
    	return map;
    }
    
    
    /**
     * 
     * @param userid
     * @return
     */
    @ResponseBody  //返回json格式的数据要加这个注解
    @RequestMapping("user/selectAllDetailById.action")  //修改的功能对应
    public Map<String, Object> selectAllDetailById(@Param("userid") String userid,HttpSession session){
    	Map<String, Object> map = new HashMap<String, Object>();
    	UserProxy userAllDetail = userService.selectAllDetailById(Integer.parseInt(userid));
    	User userlogin = (User) session.getAttribute("user");
    	if(!userlogin.getUsername().equals("admin")) {
    		if(userlogin.getInstitutionid()!=userAllDetail.getInstitutionId()) {
        		map.put("msg", "无法修改其它机构用户信息");
        		return map;
        	}	
    	}
    		
    	//System.out.println(userAllDetail.getRoleId());
    	Date date = userAllDetail.getUpdateTime();
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	String strDate = sdf.format(date);
    	userAllDetail.setUpdatetime(strDate);   	
    	map.put("data", userAllDetail);
    	return map;
    }
    
    /**
     * 
     * @param user
     * @param userRole
     * @param session
     * @return
     */
    @ResponseBody   //返回json格式的数据要加这个注解
    @RequestMapping("user/updateUser.action")
    public Map<String,Object> updateUser( User user, UserRole userRole,HttpSession session) {
    	//System.out.println(user.getId());
    	//System.out.println(userRole.getRoleid());
    	String msg="";
    	int userid = user.getId();
    	User userlogin = (User) session.getAttribute("user");
    	//user.setCreateusername(userlogin.getUsername());
    	user.setUpdateusername(userlogin.getUsername());
    	//user.setCreateuserid(userlogin.getId());
    	user.setUpdateuserid(userlogin.getId());
    	int num = userService.updateByPrimaryKeySelective(user);
    	int num1 = userRoleService.updateByUserId(userRole.getRoleid(), userid);
    	//System.out.println(num);
    	//System.out.println(num1);
    	if(num>0&&num1>0) {
    		msg="更新成功";
    	}else {
    		msg="更新失败";
    	}
    	Map<String, Object> map = new HashMap<String, Object>(); 
    	map.put("msg", msg);
    	map.put("userid", userid);
    	return map;
    }
    
    /**
     * 
     * @param username
     * @param password
     * @param authcode
     * @param session
     * @return
     * @throws UnsupportedEncodingException
     */
	@ResponseBody
    @RequestMapping(value ="user/login.action",produces = "text/json;charset=UTF-8")
    public String login(@Param("username") String username,@Param("password") String password,@Param("authcode") String authcode,HttpSession session) throws UnsupportedEncodingException {
    	User user = userService.login(username, password);
    	String msg = "";
    	if((username!=null&&username!="")&&(password!=null&&password!="")) {
    		if(user==null) {
        		msg="用户名或者密码错误\n";
        	}
    		
    	}else {
    		msg="请输入用户名或者密码\n";
    	}
    	
    	String authcodese = (String) session.getAttribute("authCode");
    	if(authcode!=null&&authcode!="") {
    		if(!(authcode.toUpperCase().equals(authcodese.toUpperCase()))) {
        		msg+="验证码错误";
        		user=null;		
        	}
    	}else {
    		msg+="请输入验证码";
    	}
    	
    	session.setAttribute("user", user);
    	//System.out.println(session.getAttribute("user"));
    	return msg;
    }
	
	/**
	 * 
	 * @param session
	 * @return
	 */
	
	@RequestMapping("user/relogin.action")
	public String relogin(HttpSession session) {
		session.removeAttribute("user");
		//System.out.println(session.getAttribute("user"));
		return "redirect:../login.jsp";
	}
	
	
	/**
	 * 
	 * @param session
	 * @return
	 */
	@RequestMapping("user/loginout.action")
	public String loginout(HttpSession session) {
		session.removeAttribute("user");
		//System.out.println(session.getAttribute("user"));
		return "redirect:../login.jsp";
	}
	
	/**
	 * 
	 * @param userName
	 * @return
	 */
	public int selectUserId(String userName) {
		int userId = userService.selectUserId(userName);
		return userId;
	}
	
	/**
	 * 
	 * @param roleId
	 * @return
	 */
	public String selectRoleName(int roleId) {
		
		String roleName = roleService.selectRoleName(roleId);
		
		return roleName;
	}
	
    
   /*public List<Role> selectRoleByInsAdd(String institutionid){
    	//System.out.println(institutionid);
	    //RoleExample roleExample = new RoleExample();
		List<Role> list = roleService.selectRoleByIns(Integer.parseInt(institutionid));
		//System.out.println(list.size());
		//Map<String,Object> map = new HashMap<String,Object>();
		//map.put("data", list);
		return list;
	}*/
	
	/**
	 * 
	 * @param user
	 * @param userRole
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping("user/addUser.action")
	public Map<String,Object> addUser(User user, UserRole userRole,HttpSession session){
		String msg="";
    	//int userid = user.getId();
		//System.out.println(user.getInstitutionid().toString());
    	User userlogin = (User) session.getAttribute("user");
    	user.setCreateusername(userlogin.getUsername());
    	user.setUpdateusername(userlogin.getUsername());
    	user.setCreateuserid(userlogin.getId());
    	user.setUpdateuserid(userlogin.getId());
    	int num = userService.insertSelective(user);
    	
    	
    	int userId = selectUserId(user.getUsername());
    	
    	userRole.setCreateusername(userlogin.getUsername());
    	userRole.setUpdateusername(userlogin.getUsername());
    	userRole.setCreateuserid(userlogin.getId());
    	userRole.setUpdateuserid(userlogin.getId());
    	userRole.setUserid(userId);
    	int num1 = userRoleService.insertSelective(userRole);
    	
    	
    	//List<Role> list = selectRoleByInsAdd(user.getInstitutionid().toString());
    	//List<Role> list = (List<Role>) map.get("data");
    	//System.out.println(list.size());
    	/*Role role = new Role();
    	int num2 = 0;
    	if(list.size()<1) {

            
       	role.setCreateusername(userlogin.getUsername());
       	role.setUpdateusername(userlogin.getUsername());
       	role.setCreateuserid(userlogin.getId());
       	role.setUpdateuserid(userlogin.getId());
       	role.setRolename(selectRoleName(userRole.getRoleid()));
       	role.setInstitutionid(user.getInstitutionid());
       	 num2 = roleService.insertSelective(role);
    	}
    	
    	*/
    	
    	
		
				
		if(num>0&&num1>0) {
    		msg="增加成功";
    	}else {
    		msg="增加失败";
    	}
    	
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("msg", msg);
		map.put("userid", userId);
    	
		return map;
	}
	
	/**
	 * 
	 * @param ids
	 * @return
	 */
	@ResponseBody
    @RequestMapping(value ="user/deleteUser.action",produces = "text/json;charset=UTF-8")
	public String deleteUser(@Param("ids") String ids,@Param("institutionId") String institutionId,HttpSession session) {
		User userlogin = (User) session.getAttribute("user");
		String msg="";
		String[] base = ids.split(",");
		int[] id = new int[base.length];
		
		for (int i = 0; i < base.length; i++) {
			id[i] = Integer.parseInt(base[i]) ;
		}
		
		String[] insbase = institutionId.split(",");
		int[] insid1 = new int[insbase.length];
		for (int i = 0; i < insbase.length; i++) {
			insid1[i] = Integer.parseInt(insbase[i]);
		}
		
		for (int i = 0; i < insid1.length; i++) {
		 if(!userlogin.getUsername().equals("admin")) {
			if(userlogin.getInstitutionid()!=insid1[i]) {
				
				msg="无法删除其它机构用户";
				
				return msg;
			 }
			}
		}
		
		
		
		
		int num = userService.deleteAll(id);
		int num1 = userRoleService.deleteAll(id);
		
		if(num>0&&num1>0) {
    		msg="删除成功";
    	}else {
    		msg="删除失败";
    	}
				
		return msg;
	};
	
	
	/**
	 * 
	 * @param userName
	 * @param updateUserName
	 * @param userState
	 * @param loginUserName
	 * @param institutionId
	 * @param response
	 * @param session
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws ClassNotFoundException
	 * @throws NoSuchMethodException
	 * @throws SecurityException
	 * @throws IntrospectionException
	 * @throws ParseException
	 */
	@RequestMapping("user/userExport.action")
	public void userExport( String userName, String updateUserName, String userState,String loginUserName,String institutionId,HttpServletResponse response,HttpSession session) throws IllegalArgumentException, IllegalAccessException, InvocationTargetException, ClassNotFoundException, NoSuchMethodException, SecurityException, IntrospectionException, ParseException {
		UserProxy userProxy = new UserProxy(userName, userState,updateUserName);
		//User user = (User) session.getAttribute("user");
		//String username = loginUserName;
		//System.out.println(loginUserName);
		//System.out.println(institutionId);
		if(!(loginUserName.equals("admin"))) {
			userProxy.setInstitutionId(Integer.parseInt(institutionId));
		}
		//userProxy.setInstitutionId(user.getInstitutionid());
		//System.out.println(userName);
		List<UserProxy> list = userService.selectByRecord(userProxy);
		
		
	 //System.out.println(list.size());
	 
		//文件名
      	String excelName = "用户信息.xlsx";
          try {
  			excelName = java.net.URLDecoder.decode(excelName,"utf-8");
  		} catch (UnsupportedEncodingException e1) {
  			// TODO Auto-generated catch block
  			e1.printStackTrace();
  		}
        //设置响应  
          try {
              response.setCharacterEncoding("utf-8");
  			response.setHeader("Content-Disposition", "attachment;filename=" + new String(excelName.getBytes(), "ISO-8859-1"));
  	        response.setContentType("application/vnd.ms-excel;charset=utf-8");
  		} catch (UnsupportedEncodingException e1) {
  			// TODO Auto-generated catch block
  			e1.printStackTrace();
  		} 
        //生产Excel文件
          ExcelUtils eu=new ExcelUtils();
          XSSFWorkbook workbook = null;
  		workbook = eu.createExcelFile(UserProxy.class, list, "UserInf_Query");
  		
          
          //输出文件
          OutputStream output;  
          try {  
              output = response.getOutputStream();  
              BufferedOutputStream bufferedOutPut = new BufferedOutputStream(output);  
              bufferedOutPut.flush();  
              workbook.write(bufferedOutPut);  
              bufferedOutPut.close();  
          } catch (IOException e) {  
              e.printStackTrace();  
          } 
		
          
         
	}
	
	/**
	 * 
	 * @param userid
	 * @param institutionId
	 * @param session
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="user/resetpwd.action",produces = "text/json;charset=UTF-8")
	public String  resetpwd(@Param("userid") String userid,@Param("institutionId") String institutionId,HttpSession session) {
		User userlogin = (User) session.getAttribute("user");
		String msg="";
		String[] base = userid.split(",");
		int[] id = new int[base.length];
		
		for (int i = 0; i < base.length; i++) {
			id[i] = Integer.parseInt(base[i]) ;
		}
		
		String[] insbase = institutionId.split(",");
		int[] insid1 = new int[insbase.length];
		for (int i = 0; i < insbase.length; i++) {
			insid1[i] = Integer.parseInt(insbase[i]);
		}
		
		for (int i = 0; i < insid1.length; i++) {
			 if(!userlogin.getUsername().equals("admin")) {
				if(userlogin.getInstitutionid()!=insid1[i]) {
					
					msg="无法重置其它机构用户密码";
					
					return msg;
				 }
				}
			}
		
		
		
		int num = userService.resetPwd(id);
		if(num>0) {
			msg="密码重置成功，设为9999";
		}else {
			msg="密码重置失败";
		}
		//session.setAttribute("remsg", msg);
		
		return msg;
	}
	
	
	@ResponseBody
	@RequestMapping(value="user/ckeckpwd.action",produces="text/json;charset=UTF-8")
	public String ckeckPwd(@Param("pwd") String pwd,HttpSession session) {
		User userLogin = (User) session.getAttribute("user");
		String msg="";
		String pwdc = userService.ckeckPwd(userLogin.getId());
		if(pwd.equals(pwdc)) {
			
			msg="原密码输入正确";
			
		}else {
			msg="原密码输入错误";
		}
		
		
		
		return msg;
	}
	
	@ResponseBody
	@RequestMapping(value="user/updatePwd.action",produces="text/json;charset=UTF-8")
	public String updatePwd(@Param("id") int id,@Param("pwd") String pwd,HttpSession session) {
		User userLogin = (User) session.getAttribute("user");
		String msg="";
		int id1 = userLogin.getId();
		int num = userService.updatePwd(id1, pwd);
		
		if(num>0) {
			
			msg="修改成功";
		}else {
			msg="修改失败";
		}
		
		
		return msg;
	}
	
	
	
}
