package com.brilliance.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brilliance.mapper.InstitutionMapper;
import com.brilliance.pojo.Institution;
import com.brilliance.pojo.InstitutionExample;
import com.brilliance.service.InstitutionService;
@Service
public class InstitutionServiceImpl implements InstitutionService {
    @Autowired
	InstitutionMapper institutionMapper;
	@Override
	public int countByExample(InstitutionExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(InstitutionExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Institution record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Institution record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Institution> selectByExample(InstitutionExample example) {
		// TODO Auto-generated method stub
		return institutionMapper.selectByExample(example);
	}

	@Override
	public Institution selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Institution record, InstitutionExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Institution record, InstitutionExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Institution record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Institution record) {
		// TODO Auto-generated method stub
		return 0;
	}

}
