/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Tue Apr 24 11:53:56 GMT+08:00 2018
 * Description:
 */
package com.brilliance.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.brilliance.pojo.Role;
import com.brilliance.pojo.RoleExample;
@Repository
public interface RoleMapper {
    /**
     * countByExample
     * @param RoleExample example
     * @return int 
     */
    int countByExample(RoleExample example);

    /**
     * deleteByExample
     * @param RoleExample example
     * @return int 
     */
    int deleteByExample(RoleExample example);

    /**
     * deleteByPrimaryKey
     * @param Integer id
     * @return int 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * insert
     * @param Role record
     * @return int 
     */
    int insert(Role record);

    /**
     * insertSelective
     * @param Role record
     * @return int 
     */
    int insertSelective(Role record);

    /**
     * selectByExample
     * @param RoleExample example
     * @return List<Role> 
     */
    List<Role> selectByExample(RoleExample example);

    /**
     * selectByPrimaryKey
     * @param Integer id
     * @return Role 
     */
    Role selectByPrimaryKey(Integer id);

    /**
     * updateByExampleSelective
     * @param Role record
     * @param RoleExample example
     * @return int 
     */
    int updateByExampleSelective(@Param("record") Role record, @Param("example") RoleExample example);

    /**
     * updateByExample
     * @param Role record
     * @param RoleExample example
     * @return int 
     */
    int updateByExample(@Param("record") Role record, @Param("example") RoleExample example);

    /**
     * updateByPrimaryKeySelective
     * @param Role record
     * @return int 
     */
    int updateByPrimaryKeySelective(Role record);

    /**
     * updateByPrimaryKey
     * @param Role record
     * @return int 
     */
    int updateByPrimaryKey(Role record);
    
    /**
     * selectRoleByIns
     * @param int institutionid
     * @return List<Role> 
     */
    List<Role> selectRoleByIns(int institutionid);
    
    /**
     * selectRoleName
     * @param int roleId
     * @return String 
     */
    
    String selectRoleName(int roleId);
}