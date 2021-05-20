package com.xihepu.Click;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClickController {
    //注入Service
    @Autowired
    private ClickService clickService;


    @RequestMapping(value = "/listallclicks",method = RequestMethod.GET)
    public List<Click> ListallClicks(){
        List<Click> list = clickService.findClickList();
        return list;
    }

    @RequestMapping( value = "/newclick", method = RequestMethod.POST)
    public String NewClick(@RequestBody Click click){
        clickService.saveClick(click);
        System.out.println("写入数据成功");
        return "点击量记录成功!";
    }

}
