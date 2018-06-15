/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Thu Apr 26 12:51:15 GMT+08:00 2018
 * Description:
 */
package com.brilliance.mapper;

import com.brilliance.pojo.UserRole;
import com.brilliance.pojo.UserRoleExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRoleMapper {
    /**
     * countByExample
     * @param UserRoleExample example
     * @return int 
     */
    int countByExample(UserRoleExample example);

    /**
     * deleteByExample
     * @param UserRoleExample example
     * @return int 
     */
    int deleteByExample(UserRoleExample example);

    /**
     * deleteByPrimaryKey
     * @param Integer id
     * @return int 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * insert
     * @param UserRole record
     * @return int 
     */
    int insert(UserRole record);

    /**
     * insertSelective
     * @param UserRole record
     * @return int 
     */
    int insertSelective(UserRole record);

    /**
     * selectByExample
     * @param UserRoleExample example
     * @return List<UserRole> 
     */
    List<UserRole> selectByExample(UserRoleExample example);

    /**
     * selectByPrimaryKey
     * @param Integer id
     * @return UserRole 
     */
    UserRole selectByPrimaryKey(Integer id);

    /**
     * updateByExampleSelective
     * @param UserRole record
     * @param UserRoleExample example
     * @return int 
     */
    int updateByExampleSelective(@Param("record") UserRole record, @Param("example") UserRoleExample example);

    /**
     * updateByExample
     * @param UserRole record
     * @param UserRoleExample example
     * @return int 
     */
    int updateByExample(@Param("record") UserRole record, @Param("example") UserRoleExample example);

    /**
     * updateByPrimaryKeySelective
     * @param UserRole record
     * @return int 
     */
    int updateByPrimaryKeySelective(UserRole record);

    /**
     * updateByPrimaryKey
     * @param UserRole record
     * @return int 
     */
    int updateByPrimaryKey(UserRole record);
    
    /**
     * updateByUserId
     * @param int roleid int userid
     * @return int 
     */
    int updateByUserId(@Param("roleid") int roleid,@Param("userid") int userid);
    
    /**
     * 批量删除用户角色表中数据
     * @param ids
     * @return
     */
    int deleteAll(int[] ids);
    
}