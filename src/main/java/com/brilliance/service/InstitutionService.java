package com.brilliance.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.brilliance.pojo.Institution;
import com.brilliance.pojo.InstitutionExample;

public interface InstitutionService {
	/**
     * countByExample
     * @param InstitutionExample example
     * @return int 
     */
    int countByExample(InstitutionExample example);

    /**
     * deleteByExample
     * @param InstitutionExample example
     * @return int 
     */
    int deleteByExample(InstitutionExample example);

    /**
     * deleteByPrimaryKey
     * @param Integer id
     * @return int 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * insert
     * @param Institution record
     * @return int 
     */
    int insert(Institution record);

    /**
     * insertSelective
     * @param Institution record
     * @return int 
     */
    int insertSelective(Institution record);

    /**
     * selectByExample
     * @param InstitutionExample example
     * @return List<Institution> 
     */
    List<Institution> selectByExample(InstitutionExample example);

    /**
     * selectByPrimaryKey
     * @param Integer id
     * @return Institution 
     */
    Institution selectByPrimaryKey(Integer id);

    /**
     * updateByExampleSelective
     * @param Institution record
     * @param InstitutionExample example
     * @return int 
     */
    int updateByExampleSelective(@Param("record") Institution record, @Param("example") InstitutionExample example);

    /**
     * updateByExample
     * @param Institution record
     * @param InstitutionExample example
     * @return int 
     */
    int updateByExample(@Param("record") Institution record, @Param("example") InstitutionExample example);

    /**
     * updateByPrimaryKeySelective
     * @param Institution record
     * @return int 
     */
    int updateByPrimaryKeySelective(Institution record);

    /**
     * updateByPrimaryKey
     * @param Institution record
     * @return int 
     */
    int updateByPrimaryKey(Institution record);
}
