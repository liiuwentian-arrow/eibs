/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Tue Apr 24 11:53:56 GMT+08:00 2018
 * Description:
 */
package com.brilliance.pojo;

import java.util.Date;

/**
 *  Role
 *  t_eibs_role
 */
public class Role {
    /**
     * 
     * t_eibs_role.id
     */
    private Integer id;

    /**
     * 
     * t_eibs_role.roleName
     */
    private String rolename;

    /**
     * 
     * t_eibs_role.institutionId
     */
    private Integer institutionid;

    /**
     * 
     * t_eibs_role.createUserId
     */
    private Integer createuserid;

    /**
     * 
     * t_eibs_role.createUserName
     */
    private String createusername;

    /**
     * 
     * t_eibs_role.createTime
     */
    private Date createtime;

    /**
     * 
     * t_eibs_role.updateUserId
     */
    private Integer updateuserid;

    /**
     * 
     * t_eibs_role.updateUserName
     */
    private String updateusername;

    /**
     * 
     * t_eibs_role.updateTime
     */
    private Date updatetime;

    /**
     * 
     * t_eibs_role.version
     */
    private String version;

    /**
     * @return t_eibs_role.id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param Integer id (t_eibs_role.id )
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return t_eibs_role.roleName
     */
    public String getRolename() {
        return rolename;
    }

    /**
     * @param String rolename (t_eibs_role.roleName )
     */
    public void setRolename(String rolename) {
        this.rolename = rolename == null ? null : rolename.trim();
    }

    /**
     * @return t_eibs_role.institutionId
     */
    public Integer getInstitutionid() {
        return institutionid;
    }

    /**
     * @param Integer institutionid (t_eibs_role.institutionId )
     */
    public void setInstitutionid(Integer institutionid) {
        this.institutionid = institutionid;
    }

    /**
     * @return t_eibs_role.createUserId
     */
    public Integer getCreateuserid() {
        return createuserid;
    }

    /**
     * @param Integer createuserid (t_eibs_role.createUserId )
     */
    public void setCreateuserid(Integer createuserid) {
        this.createuserid = createuserid;
    }

    /**
     * @return t_eibs_role.createUserName
     */
    public String getCreateusername() {
        return createusername;
    }

    /**
     * @param String createusername (t_eibs_role.createUserName )
     */
    public void setCreateusername(String createusername) {
        this.createusername = createusername == null ? null : createusername.trim();
    }

    /**
     * @return t_eibs_role.createTime
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * @param Date createtime (t_eibs_role.createTime )
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * @return t_eibs_role.updateUserId
     */
    public Integer getUpdateuserid() {
        return updateuserid;
    }

    /**
     * @param Integer updateuserid (t_eibs_role.updateUserId )
     */
    public void setUpdateuserid(Integer updateuserid) {
        this.updateuserid = updateuserid;
    }

    /**
     * @return t_eibs_role.updateUserName
     */
    public String getUpdateusername() {
        return updateusername;
    }

    /**
     * @param String updateusername (t_eibs_role.updateUserName )
     */
    public void setUpdateusername(String updateusername) {
        this.updateusername = updateusername == null ? null : updateusername.trim();
    }

    /**
     * @return t_eibs_role.updateTime
     */
    public Date getUpdatetime() {
        return updatetime;
    }

    /**
     * @param Date updatetime (t_eibs_role.updateTime )
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    /**
     * @return t_eibs_role.version
     */
    public String getVersion() {
        return version;
    }

    /**
     * @param String version (t_eibs_role.version )
     */
    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }
}