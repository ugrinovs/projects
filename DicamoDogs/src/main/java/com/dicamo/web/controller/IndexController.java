package com.dicamo.web.controller;

import com.dicamo.model.Dog;
import com.dicamo.session.SessionRepositoryRequestWrapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.session.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by Stefan on 11/11/2016.
 */
@Controller
@RequestMapping(value = "/")
public class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(@CookieValue(value = "JSESSIONID", required = false) String jSessionId, HttpServletResponse response){
        if(jSessionId == null) {
            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpSession session = attr.getRequest().getSession();
            Cookie newJSESIONID = new Cookie("JSESSIONID", session.getId());
            response.addCookie(newJSESIONID);
            System.out.println("Nema kukija");
            return "static/app/html/welcome.html";
        } else {
            System.out.println("Ima kukija");
            return "static/app/html/index.html?session";
        }
    }
}
