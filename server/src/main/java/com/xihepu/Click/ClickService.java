package com.xihepu.Click;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClickService {

    @Autowired
    private ClickRepository clickRepository;

    /*保存一个评论@param click*/
    public void saveClick(Click click){
        clickRepository.save(click);
    }
    /*更新评论@param click*/
    public void updateClick(Click click){
        clickRepository.save(click);
    }
    /*根据id删除评论 @param id*/
    public void deleteClickById(String id){
        clickRepository.deleteById(id);
    }
    /*查询所有评论@return*/
    public List<Click> findClickList(){
        return clickRepository.findAll();
    }
    /*根据id查询评论@param id@return*/
    public Click findClickById(String id){
        return clickRepository.findById(id).get();
    }
}
