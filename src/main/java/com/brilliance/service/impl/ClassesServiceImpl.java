package com.brilliance.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brilliance.mapper.ClassesMapper;
import com.brilliance.pojo.Classes;
import com.brilliance.pojo.ClassesExample;
import com.brilliance.service.ClassesService;
@Service
public class ClassesServiceImpl implements ClassesService {
    @Autowired
	ClassesMapper classesMapper;
	
	@Override
	public int countByExample(ClassesExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByExample(ClassesExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(Classes record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insertSelective(Classes record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Classes> selectByExample(ClassesExample example) {
		// TODO Auto-generated method stub
		return classesMapper.selectByExample(example);
	}

	@Override
	public Classes selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateByExampleSelective(Classes record, ClassesExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByExample(Classes record, ClassesExample example) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKeySelective(Classes record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int updateByPrimaryKey(Classes record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Classes> selectByIns(int institutionid) {
		// TODO Auto-generated method stub
		return classesMapper.selectByIns(institutionid);
	}

}
