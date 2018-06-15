/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Tue Apr 24 15:13:40 GMT+08:00 2018
 * Description:
 */
package com.brilliance.pojo;

import java.util.Date;

/**
 *  Institution
 *  t_eibs_institution
 */
public class Institution {
    /**
     * 
     * t_eibs_institution.id
     */
    private Integer id;

    /**
     * 
     * t_eibs_institution.institutionName
     */
    private String institutionname;

    /**
     * 
     * t_eibs_institution.institutionCode
     */
    private String institutioncode;

    /**
     * 
     * t_eibs_institution.institutionCategoryId
     */
    private Integer institutioncategoryid;

    /**
     * 
     * t_eibs_institution.areaId
     */
    private Integer areaid;

    /**
     * 
     * t_eibs_institution.createUserId
     */
    private Integer createuserid;

    /**
     * 
     * t_eibs_institution.createUserName
     */
    private String createusername;

    /**
     * 
     * t_eibs_institution.createTime
     */
    private Date createtime;

    /**
     * 
     * t_eibs_institution.updateUserId
     */
    private Integer updateuserid;

    /**
     * 
     * t_eibs_institution.updateUserName
     */
    private String updateusername;

    /**
     * 
     * t_eibs_institution.updateTime
     */
    private Date updatetime;

    /**
     * 
     * t_eibs_institution.version
     */
    private String version;

    /**
     * @return t_eibs_institution.id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param Integer id (t_eibs_institution.id )
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return t_eibs_institution.institutionName
     */
    public String getInstitutionname() {
        return institutionname;
    }

    /**
     * @param String institutionname (t_eibs_institution.institutionName )
     */
    public void setInstitutionname(String institutionname) {
        this.institutionname = institutionname == null ? null : institutionname.trim();
    }

    /**
     * @return t_eibs_institution.institutionCode
     */
    public String getInstitutioncode() {
        return institutioncode;
    }

    /**
     * @param String institutioncode (t_eibs_institution.institutionCode )
     */
    public void setInstitutioncode(String institutioncode) {
        this.institutioncode = institutioncode == null ? null : institutioncode.trim();
    }

    /**
     * @return t_eibs_institution.institutionCategoryId
     */
    public Integer getInstitutioncategoryid() {
        return institutioncategoryid;
    }

    /**
     * @param Integer institutioncategoryid (t_eibs_institution.institutionCategoryId )
     */
    public void setInstitutioncategoryid(Integer institutioncategoryid) {
        this.institutioncategoryid = institutioncategoryid;
    }

    /**
     * @return t_eibs_institution.areaId
     */
    public Integer getAreaid() {
        return areaid;
    }

    /**
     * @param Integer areaid (t_eibs_institution.areaId )
     */
    public void setAreaid(Integer areaid) {
        this.areaid = areaid;
    }

    /**
     * @return t_eibs_institution.createUserId
     */
    public Integer getCreateuserid() {
        return createuserid;
    }

    /**
     * @param Integer createuserid (t_eibs_institution.createUserId )
     */
    public void setCreateuserid(Integer createuserid) {
        this.createuserid = createuserid;
    }

    /**
     * @return t_eibs_institution.createUserName
     */
    public String getCreateusername() {
        return createusername;
    }

    /**
     * @param String createusername (t_eibs_institution.createUserName )
     */
    public void setCreateusername(String createusername) {
        this.createusername = createusername == null ? null : createusername.trim();
    }

    /**
     * @return t_eibs_institution.createTime
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * @param Date createtime (t_eibs_institution.createTime )
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * @return t_eibs_institution.updateUserId
     */
    public Integer getUpdateuserid() {
        return updateuserid;
    }

    /**
     * @param Integer updateuserid (t_eibs_institution.updateUserId )
     */
    public void setUpdateuserid(Integer updateuserid) {
        this.updateuserid = updateuserid;
    }

    /**
     * @return t_eibs_institution.updateUserName
     */
    public String getUpdateusername() {
        return updateusername;
    }

    /**
     * @param String updateusername (t_eibs_institution.updateUserName )
     */
    public void setUpdateusername(String updateusername) {
        this.updateusername = updateusername == null ? null : updateusername.trim();
    }

    /**
     * @return t_eibs_institution.updateTime
     */
    public Date getUpdatetime() {
        return updatetime;
    }

    /**
     * @param Date updatetime (t_eibs_institution.updateTime )
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    /**
     * @return t_eibs_institution.version
     */
    public String getVersion() {
        return version;
    }

    /**
     * @param String version (t_eibs_institution.version )
     */
    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }
}