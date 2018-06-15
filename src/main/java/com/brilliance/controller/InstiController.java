package com.brilliance.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.brilliance.pojo.Institution;
import com.brilliance.pojo.InstitutionExample;
import com.brilliance.service.InstitutionService;

@Controller
public class InstiController {
    @Autowired
	InstitutionService institutionService;
    
    @ResponseBody
    @RequestMapping("insti/selectInstiName.action")
    public Map<String, Object> selectInstiName(){
    	InstitutionExample institutionExample = new InstitutionExample();
    	List<Institution> list = institutionService.selectByExample(institutionExample);
    	//System.out.println(list.get(0));
    	Map<String, Object> map = new HashMap<String, Object>();
    	map.put("datains", list);
    	return map;
    }
 }
