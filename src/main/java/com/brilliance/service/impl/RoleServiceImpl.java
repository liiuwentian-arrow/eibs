package com.brilliance.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brilliance.mapper.RoleMapper;
import com.brilliance.pojo.Role;
import com.brilliance.pojo.RoleExample;
import com.brilliance.service.RoleService;
@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
	RoleMapper roleMapper;
    
	@Override
	public int countByExample(RoleExample example) {
		// TODO Auto-generated method stub
		return roleMapper.countByExample(example);
	}

	@Override
	public int deleteByExample(RoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Role record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Role record) {
		// TODO Auto-generated method stub
		return roleMapper.insertSelective(record);
	}

	@Override
	public List<Role> selectByExample(RoleExample example) {
		// TODO Auto-generated method stub
		return roleMapper.selectByExample(example);
	}

	@Override
	public Role selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Role record, RoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Role record, RoleExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Role record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Role record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Role> selectRoleByIns(int institutionid) {
		// TODO Auto-generated method stub
		return roleMapper.selectRoleByIns(institutionid);
	}

	@Override
	public String selectRoleName(int roleId) {
		// TODO Auto-generated method stub
		return roleMapper.selectRoleName(roleId);
	}

}
