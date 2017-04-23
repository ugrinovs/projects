package com.dicamo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Stefan on 29/10/2016.
 */

@Controller
public class IndexController {

    @RequestMapping(value="/")
    public String home(){
        return "/index.html";
    }
}
