package com.xihepu.Log;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogService {

    @Autowired
    private LogRepository logRepository;
    
    public void saveLog(Log log){
    	logRepository.save(log);
    }    

    public void updateLog(Log log){
    	logRepository.save(log);
    }

    public void deleteLogById(String id){
    	logRepository.deleteById(id);
    }

    public List<Log> findLogList(){
      return logRepository.findAll();
    }

    public Log findLogById(String id){
      return logRepository.findById(id).get();
    }
    
}


