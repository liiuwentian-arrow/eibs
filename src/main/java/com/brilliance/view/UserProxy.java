package com.brilliance.view;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.brilliance.utils.ExcelBean;

public class UserProxy {
	
	/**
     * 
     * t_eibs_user.id
     */
    private Integer id;

    /**
     * 
     * t_eibs_user.userName
     */
    private String userName;

    

    /**
     * 
     * t_eibs_user.userState
     */
    private String userState;

    /**
     * 
     * t_eibs_user.userNumber
     */
    private String userNumber;

    /**
     * 
     * t_eibs_user.phone
     */
    private String phone;

    /**
     * 
     * t_eibs_user.mail
     */
    private String mail;

    /**
     * 
     * t_eibs_user.realName
     */
    private String realName;

    

    /**
     * 
     * t_eibs_user.identityCard
     */
    private String identityCard;


    /**
     * 
     * t_eibs_user.classId
     */
    private String className;

    /**
     * 
     * t_eibs_user.institutionId
     */
    private String institutionName;

    

    /**
     * 
     * t_eibs_user.updateUserName
     */
    private String updateUserName;
    
    /**
     * 
     * t_eibs_user.updateUserName
     */
    private String createUserName;
    
    
    /**
     * 
     * t_eibs_user.gender
     */
    private String gender;

    /**
     * 
     * t_eibs_user.age
     */
    private Integer age;

    /**
     * 
     * t_eibs_user.nation
     */
    private String nation;
    
    
    /**
     * 
     * t_eibs_user.updateTime
     */
    private Date updateTime;

    /**
     * 
     * t_eibs_user.updateTime
     */
    private String updatetime;

    /**
     * 
      * t_eibs_role.roleName
      */
     private String roleName;
     
     
     /**
      * 
      * t_eibs_user.classId
      */
     private Integer classId;

     /**
      * 
      * t_eibs_user.institutionId
      */
     private Integer institutionId;
     
     /**
      * 
      * t_eibs_role.roleId
      */
     private Integer roleId;
     
     
     

    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserState() {
		return userState;
	}

	public void setUserState(String userState) {
		this.userState = userState;
	}

	public String getUserNumber() {
		return userNumber;
	}

	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getIdentityCard() {
		return identityCard;
	}

	public void setIdentityCard(String identityCard) {
		this.identityCard = identityCard;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getInstitutionName() {
		return institutionName;
	}

	public void setInstitutionName(String institutionName) {
		this.institutionName = institutionName;
	}

	

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
   
	
	

	public String getRoleName() {
		return roleName;
	}

	/*public String getUpdatetimeview() {
		return updatetimeview;
	}

	
	public void setUpdatetimeview(String updatetimeview) {
		this.updatetimeview = updatetimeview;
	}*/

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public Integer getClassId() {
		return classId;
	}

	public void setClassId(Integer classId) {
		this.classId = classId;
	}

	public Integer getInstitutionId() {
		return institutionId;
	}

	public void setInstitutionId(Integer institutionId) {
		this.institutionId = institutionId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getUpdateUserName() {
		return updateUserName;
	}

	public void setUpdateUserName(String updateUserName) {
		this.updateUserName = updateUserName;
	}	

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public UserProxy(String userName, String userState, String updateUserName) {
		super();
		this.userName = userName;
		this.userState = userState;
		this.updateUserName = updateUserName;
	}

	public UserProxy() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public static List<ExcelBean> getExcelBeanList() {
	    List<ExcelBean> list=  new ArrayList<ExcelBean>();
		list.add(new ExcelBean("编号", "id", 1));
		list.add(new ExcelBean("用户名", "userName", 1));
		list.add(new ExcelBean("身份证", "identityCard", 1));
		list.add(new ExcelBean("姓名", "realName", 1));
		list.add(new ExcelBean("性别", "gender", 1));
		list.add(new ExcelBean("年龄", "age", 1));
		list.add(new ExcelBean("民族", "nation", 1));
		list.add(new ExcelBean("用户编号", "userNumber", 1));
		list.add(new ExcelBean("用户角色", "roleName", 1));
		list.add(new ExcelBean("机构Id", "institutionId", 1));
		list.add(new ExcelBean("所属机构", "institutionName", 1));
		list.add(new ExcelBean("所属班级", "className", 1));
		list.add(new ExcelBean("联系电话", "phone", 1));
		list.add(new ExcelBean("邮箱", "mail", 1));
		list.add(new ExcelBean("更新时间", "updateTime", 1));
		list.add(new ExcelBean("创建人", "createUserName", 1));
		list.add(new ExcelBean("操作员", "updateUserName", 1));
		list.add(new ExcelBean("用户状态", "userState", 1));
		return list;
	}
	
    

}
