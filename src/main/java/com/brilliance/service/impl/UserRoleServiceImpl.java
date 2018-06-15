package com.brilliance.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brilliance.mapper.UserRoleMapper;
import com.brilliance.pojo.UserRole;
import com.brilliance.pojo.UserRoleExample;
import com.brilliance.service.UserRoleService;
@Service
public class UserRoleServiceImpl implements UserRoleService {
    @Autowired
	UserRoleMapper userRoleMapper;
	
	@Override
	public int countByExample(UserRoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(UserRoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(UserRole record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(UserRole record) {
		// TODO Auto-generated method stub
		return userRoleMapper.insertSelective(record);
	}

	@Override
	public List<UserRole> selectByExample(UserRoleExample example) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserRole selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(UserRole record, UserRoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(UserRole record, UserRoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(UserRole record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(UserRole record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByUserId(int roleid, int userid) {
		// TODO Auto-generated method stub
		return userRoleMapper.updateByUserId(roleid, userid);
	}

	@Override
	public int deleteAll(int[] ids) {
		// TODO Auto-generated method stub
		return userRoleMapper.deleteAll(ids);
	}

}
