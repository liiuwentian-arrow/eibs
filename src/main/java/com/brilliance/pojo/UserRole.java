/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Thu Apr 26 12:51:15 GMT+08:00 2018
 * Description:
 */
package com.brilliance.pojo;

import java.util.Date;

/**
 *  UserRole
 *  t_eibs_user_role
 */
public class UserRole {
    /**
     * 
     * t_eibs_user_role.id
     */
    private Integer id;

    /**
     * 
     * t_eibs_user_role.userId
     */
    private Integer userid;

    /**
     * 
     * t_eibs_user_role.roleId
     */
    private Integer roleid;

    /**
     * 
     * t_eibs_user_role.createUserId
     */
    private Integer createuserid;

    /**
     * 
     * t_eibs_user_role.createUserName
     */
    private String createusername;

    /**
     * 
     * t_eibs_user_role.createTime
     */
    private Date createtime;

    /**
     * 
     * t_eibs_user_role.updateUserId
     */
    private Integer updateuserid;

    /**
     * 
     * t_eibs_user_role.updateUserName
     */
    private String updateusername;

    /**
     * 
     * t_eibs_user_role.updateTime
     */
    private Date updatetime;

    /**
     * 
     * t_eibs_user_role.version
     */
    private String version;

    /**
     * @return t_eibs_user_role.id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param Integer id (t_eibs_user_role.id )
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return t_eibs_user_role.userId
     */
    public Integer getUserid() {
        return userid;
    }

    /**
     * @param Integer userid (t_eibs_user_role.userId )
     */
    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    /**
     * @return t_eibs_user_role.roleId
     */
    public Integer getRoleid() {
        return roleid;
    }

    /**
     * @param Integer roleid (t_eibs_user_role.roleId )
     */
    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    /**
     * @return t_eibs_user_role.createUserId
     */
    public Integer getCreateuserid() {
        return createuserid;
    }

    /**
     * @param Integer createuserid (t_eibs_user_role.createUserId )
     */
    public void setCreateuserid(Integer createuserid) {
        this.createuserid = createuserid;
    }

    /**
     * @return t_eibs_user_role.createUserName
     */
    public String getCreateusername() {
        return createusername;
    }

    /**
     * @param String createusername (t_eibs_user_role.createUserName )
     */
    public void setCreateusername(String createusername) {
        this.createusername = createusername == null ? null : createusername.trim();
    }

    /**
     * @return t_eibs_user_role.createTime
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * @param Date createtime (t_eibs_user_role.createTime )
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * @return t_eibs_user_role.updateUserId
     */
    public Integer getUpdateuserid() {
        return updateuserid;
    }

    /**
     * @param Integer updateuserid (t_eibs_user_role.updateUserId )
     */
    public void setUpdateuserid(Integer updateuserid) {
        this.updateuserid = updateuserid;
    }

    /**
     * @return t_eibs_user_role.updateUserName
     */
    public String getUpdateusername() {
        return updateusername;
    }

    /**
     * @param String updateusername (t_eibs_user_role.updateUserName )
     */
    public void setUpdateusername(String updateusername) {
        this.updateusername = updateusername == null ? null : updateusername.trim();
    }

    /**
     * @return t_eibs_user_role.updateTime
     */
    public Date getUpdatetime() {
        return updatetime;
    }

    /**
     * @param Date updatetime (t_eibs_user_role.updateTime )
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    /**
     * @return t_eibs_user_role.version
     */
    public String getVersion() {
        return version;
    }

    /**
     * @param String version (t_eibs_user_role.version )
     */
    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }
}