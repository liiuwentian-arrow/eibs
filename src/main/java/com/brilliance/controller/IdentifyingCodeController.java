package com.brilliance.controller;

import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.brilliance.boot.util.SystemLog;
import com.brilliance.utils.IdentifyingCode;

//证明是controller层并且返回json
@Controller
public class IdentifyingCodeController {

	/**
	 * 获取验证码并将authCode值保存在session
	 * @param response 响应
	 * @param session 会话
	 * @exception IOException 输出验证码图片异常
	 * */
    @RequestMapping("authCode.action")
    public void drawAuthCodeImage(HttpServletResponse response,HttpSession session) throws IOException {
    	String authCode=IdentifyingCode.getAuthCode();
    	session.setAttribute("authCode", authCode);
    	ImageIO.write(IdentifyingCode.getAuthImg(authCode), "JPEG", response.getOutputStream());
    }
}
