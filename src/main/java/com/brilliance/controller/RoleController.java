package com.brilliance.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.brilliance.pojo.Role;
import com.brilliance.pojo.RoleExample;
import com.brilliance.service.RoleService;

import freemarker.ext.util.IdentityHashMap;

@Controller
public class RoleController {
    @Autowired
	RoleService roleService;
    
    @ResponseBody
    @RequestMapping("role/selectRoleName.action")
	public Map<String,Object> selectRoleByIns(@Param("institutionid") String institutionid){
    	
	    //RoleExample roleExample = new RoleExample();
		List<Role> list = roleService.selectRoleByIns(Integer.parseInt(institutionid));
		//System.out.println(list.size());
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("data", list);
		return map;
	}
    
    

    
   
   
}
