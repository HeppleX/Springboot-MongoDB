package com.xihepu.Comment;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    
    /*保存一个评论@param comment*/
    public void saveComment(Comment comment){
      commentRepository.save(comment);
    }    
    /*更新评论@param comment*/
    public void updateComment(Comment comment){
      commentRepository.save(comment);
    }
    /*根据id删除评论 @param id*/
    public void deleteCommentById(String id){
      commentRepository.deleteById(id);
    }
    /*查询所有评论@return*/
    public List<Comment> findCommentList(){
      return commentRepository.findAll();
    }
   /*根据id查询评论@param id@return*/
    public Comment findCommentById(String id){
      return commentRepository.findById(id).get();
    }
}

