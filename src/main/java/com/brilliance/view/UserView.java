package com.brilliance.view;

import java.text.SimpleDateFormat;
import java.util.Date;

public class UserView {
	
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
     * t_eibs_user.realName
     */
    private String realName;


    /**
     * 
     * t_eibs_user.institutionId
     */
    private String institutionName;


    /**
    * 
     * t_eibs_user.createUserName
     */
    private String createUserName; 


    /**
     * 
     * t_eibs_user.updateTime
     */
    private Date updateTime;
    
    /**
    * 
     * t_eibs_role.roleName
     */
    private String roleName;
    
    
    /**
     * 
     * t_eibs_user.updateTime
     */
    private String updatetime;
    
    

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

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getInstitutionName() {
		return institutionName;
	}

	public void setInstitutionName(String institutionName) {
		this.institutionName = institutionName;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	} 
    
	
	
	public String getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}

	/**
	 * 格式化时间方法
	 * */
	public String formart(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String strDate = sdf.format(date);
		return strDate;
	}
    
}
