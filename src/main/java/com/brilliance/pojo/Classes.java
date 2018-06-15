/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Tue Apr 24 15:37:55 GMT+08:00 2018
 * Description:
 */
package com.brilliance.pojo;

import java.util.Date;

/**
 *  Classes
 *  t_eibs_classes
 */
public class Classes {
    /**
     * 
     * t_eibs_classes.id
     */
    private Integer id;

    /**
     * 
     * t_eibs_classes.className
     */
    private String classname;

    /**
     * 
     * t_eibs_classes.createUserId
     */
    private Integer createuserid;

    /**
     * 
     * t_eibs_classes.createUserName
     */
    private String createusername;

    /**
     * 
     * t_eibs_classes.createTime
     */
    private Date createtime;

    /**
     * 
     * t_eibs_classes.updateUserId
     */
    private Integer updateuserid;

    /**
     * 
     * t_eibs_classes.updateUserName
     */
    private String updateusername;

    /**
     * 
     * t_eibs_classes.updateTime
     */
    private Date updatetime;

    /**
     * 
     * t_eibs_classes.version
     */
    private String version;

    /**
     * @return t_eibs_classes.id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param Integer id (t_eibs_classes.id )
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return t_eibs_classes.className
     */
    public String getClassname() {
        return classname;
    }

    /**
     * @param String classname (t_eibs_classes.className )
     */
    public void setClassname(String classname) {
        this.classname = classname == null ? null : classname.trim();
    }

    /**
     * @return t_eibs_classes.createUserId
     */
    public Integer getCreateuserid() {
        return createuserid;
    }

    /**
     * @param Integer createuserid (t_eibs_classes.createUserId )
     */
    public void setCreateuserid(Integer createuserid) {
        this.createuserid = createuserid;
    }

    /**
     * @return t_eibs_classes.createUserName
     */
    public String getCreateusername() {
        return createusername;
    }

    /**
     * @param String createusername (t_eibs_classes.createUserName )
     */
    public void setCreateusername(String createusername) {
        this.createusername = createusername == null ? null : createusername.trim();
    }

    /**
     * @return t_eibs_classes.createTime
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * @param Date createtime (t_eibs_classes.createTime )
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * @return t_eibs_classes.updateUserId
     */
    public Integer getUpdateuserid() {
        return updateuserid;
    }

    /**
     * @param Integer updateuserid (t_eibs_classes.updateUserId )
     */
    public void setUpdateuserid(Integer updateuserid) {
        this.updateuserid = updateuserid;
    }

    /**
     * @return t_eibs_classes.updateUserName
     */
    public String getUpdateusername() {
        return updateusername;
    }

    /**
     * @param String updateusername (t_eibs_classes.updateUserName )
     */
    public void setUpdateusername(String updateusername) {
        this.updateusername = updateusername == null ? null : updateusername.trim();
    }

    /**
     * @return t_eibs_classes.updateTime
     */
    public Date getUpdatetime() {
        return updatetime;
    }

    /**
     * @param Date updatetime (t_eibs_classes.updateTime )
     */
    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    /**
     * @return t_eibs_classes.version
     */
    public String getVersion() {
        return version;
    }

    /**
     * @param String version (t_eibs_classes.version )
     */
    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }
}