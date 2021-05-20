package com.xihepu.Log;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {
    //注入Service
    @Autowired
    private LogService logService;

    @RequestMapping(value = "/listalllogs", method = RequestMethod.GET)
    public List<Log> ListallLogs(){
        List<Log> list = logService.findLogList();
        return list;
    }

    @RequestMapping(value = "/newlog", method = RequestMethod.POST)
    public String NewLog(){
        Exception e = new NullPointerException("-------Test-------");
        StringWriter sw = new StringWriter();
        e.printStackTrace(new PrintWriter(sw));
        Log log = new Log();
        log.setCreatedTime(LocalDateTime.now());
        log.setLevel("ERROR");
        log.setMessage(e.getMessage());
        log.setStackTrace(sw.getBuffer().toString());
        logService.saveLog(log);
        System.out.println("写入数据成功");
        return "写入日志成功!";
    }

}