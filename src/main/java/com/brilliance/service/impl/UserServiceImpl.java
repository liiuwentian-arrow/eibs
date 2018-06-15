package com.brilliance.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brilliance.mapper.UserMapper;
import com.brilliance.pojo.User;
import com.brilliance.pojo.UserExample;
import com.brilliance.service.UserService;
import com.brilliance.view.UserProxy;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
	UserMapper userMapper;
	
	@Override
	public int countByExample(UserExample example) {
		// TODO Auto-generated method stub
		return userMapper.countByExample(example);
	}

	@Override
	public int deleteByExample(UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return userMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(User record) {
		// TODO Auto-generated method stub
		return userMapper.insertSelective(record);
	}

	@Override
	public List<User> selectByExample(UserExample example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserProxy selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return userMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateByExampleSelective(User record, UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(User record, UserExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(User record) {
		// TODO Auto-generated method stub
		return userMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<UserProxy> selectAll(String userName,String cun,String userState,int start,int limit) {
		// TODO Auto-generated method stub
		return userMapper.selectAll(userName,cun,userState, start, limit);
	}

	@Override
	public UserProxy selectDetailById(int id) {
		// TODO Auto-generated method stub
		return userMapper.selectDetailById(id);
	}

	@Override
	public UserProxy selectAllDetailById(int id) {
		// TODO Auto-generated method stub
		return userMapper.selectAllDetailById(id);
	}

	@Override
	public User login(String username, String password) {
		// TODO Auto-generated method stub
		return userMapper.login(username, password);
	}

	@Override
	public int selectUserId(String userName) {
		// TODO Auto-generated method stub
		return userMapper.selectUserId(userName);
	}

	@Override
	public int deleteAll(int[] ids) {
		// TODO Auto-generated method stub
		return userMapper.deleteAll(ids);
	}

	@Override
	public List<UserProxy> selectByRecord(UserProxy record) {
		// TODO Auto-generated method stub
		return userMapper.selectByRecord(record);
	}

	@Override
	public int resetPwd(int[] ids) {
		// TODO Auto-generated method stub
		return userMapper.resetPwd(ids);
	}

	

	@Override
	public String ckeckPwd(int id) {
		// TODO Auto-generated method stub
		return userMapper.ckeckPwd(id);
	}

	@Override
	public int updatePwd(int id,String pwd) {
		// TODO Auto-generated method stub
		return userMapper.updatePwd(id, pwd);
	}

}
