package com.brilliance.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.brilliance.pojo.User;
import com.brilliance.pojo.UserExample;
import com.brilliance.view.UserProxy;

public interface UserService {
	/**
     * countByExample
     * @param UserExample example
     * @return int 
     */
    int countByExample(UserExample example);

    /**
     * deleteByExample
     * @param UserExample example
     * @return int 
     */
    int deleteByExample(UserExample example);

    /**
     * deleteByPrimaryKey
     * @param Integer id
     * @return int 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * insert
     * @param User record
     * @return int 
     */
    int insert(User record);

    /**
     * insertSelective
     * @param User record
     * @return int 
     */
    int insertSelective(User record);

    /**
     * selectByExample
     * @param UserExample example
     * @return List<User> 
     */
    List<User> selectByExample(UserExample example);

    /**
     * selectByPrimaryKey
     * @param Integer id
     * @return User 
     */
    UserProxy selectByPrimaryKey(Integer id);

    /**
     * updateByExampleSelective
     * @param User record
     * @param UserExample example
     * @return int 
     */
    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    /**
     * updateByExample
     * @param User record
     * @param UserExample example
     * @return int 
     */
    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    /**
     * updateByPrimaryKeySelective
     * @param User record
     * @return int 
     */
    int updateByPrimaryKeySelective(User record);

    /**
     * updateByPrimaryKey
     * @param User record
     * @return int 
     */
    int updateByPrimaryKey(User record);
    
    /**
     * selectByExample
     * @param 
     * @return List<UserProxy> 
     */
    List<UserProxy> selectAll(@Param("userName") String userName,@Param("cun") String cun,@Param("userState") String userState,@Param("start") int start,@Param("limit") int limit);
    
    /** 
     * selectDetailById  查看明细
     * @param id
     * @return UserDetail
     */
    UserProxy selectDetailById(int id);
    
    /**
     * selectAllDetailById   修改
     * @param id
     * @return UserProxy
     */
    UserProxy selectAllDetailById(int id);
    
    /**
     * login
     * @param id
     * @return User
     */
    User login(@Param("username") String username,@Param("password") String password);
    
    /**
     * selectUserId
     * @param userName
     * @return int
     */
    int selectUserId(String userName);
    
    /**
     * 批量删除用户
     * @param ids
     * @return
     */
    int deleteAll(int[] ids);
    
    /**
     * selectByRecord
     * @param UserProxy record
     * @return List<UserProxy>
     */
    List<UserProxy> selectByRecord(UserProxy record);
    
    /**
     * 重置密码
     * @return
     */
    int  resetPwd(int[] ids);
    
    
    /**
     * 检查密码
     * @param int id
     * @return
     */
    String  ckeckPwd(int id);
    
    /**
     * 修改密码
     * @param id,pwd
     * @return
     */
    int updatePwd(@Param("id") int id,@Param("pwd") String pwd);
    
    
}
