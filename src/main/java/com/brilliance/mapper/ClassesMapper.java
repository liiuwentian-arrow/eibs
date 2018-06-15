/**
 * Copyright (C) 2006-2012 Tuniu All rights reserved
 * Author: 
 * Date: Tue Apr 24 15:37:55 GMT+08:00 2018
 * Description:
 */
package com.brilliance.mapper;

import com.brilliance.pojo.Classes;
import com.brilliance.pojo.ClassesExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface ClassesMapper {
    /**
     * countByExample
     * @param ClassesExample example
     * @return int 
     */
    int countByExample(ClassesExample example);

    /**
     * deleteByExample
     * @param ClassesExample example
     * @return int 
     */
    int deleteByExample(ClassesExample example);

    /**
     * deleteByPrimaryKey
     * @param Integer id
     * @return int 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * insert
     * @param Classes record
     * @return int 
     */
    int insert(Classes record);

    /**
     * insertSelective
     * @param Classes record
     * @return int 
     */
    int insertSelective(Classes record);

    /**
     * selectByExample
     * @param ClassesExample example
     * @return List<Classes> 
     */
    List<Classes> selectByExample(ClassesExample example);

    /**
     * selectByPrimaryKey
     * @param Integer id
     * @return Classes 
     */
    Classes selectByPrimaryKey(Integer id);

    /**
     * updateByExampleSelective
     * @param Classes record
     * @param ClassesExample example
     * @return int 
     */
    int updateByExampleSelective(@Param("record") Classes record, @Param("example") ClassesExample example);

    /**
     * updateByExample
     * @param Classes record
     * @param ClassesExample example
     * @return int 
     */
    int updateByExample(@Param("record") Classes record, @Param("example") ClassesExample example);

    /**
     * updateByPrimaryKeySelective
     * @param Classes record
     * @return int 
     */
    int updateByPrimaryKeySelective(Classes record);

    /**
     * updateByPrimaryKey
     * @param Classes record
     * @return int 
     */
    int updateByPrimaryKey(Classes record);
    
    /**
     * selectByIns
     * @param int institutionid)
     * @return List<Classes> 
     */
    List<Classes> selectByIns(int institutionid);
    
}