package com.xihepu.Comment;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
	//注入Service
    @Autowired
    private CommentService commentService;
    
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String say(){
      return "Hello SpringBoot!";
    }
    
    @RequestMapping(value = "/listallcomments", method = RequestMethod.GET)
    public List<Comment> ListallComments(){
      List<Comment> list = commentService.findCommentList();
      return list;
    }
    
   @RequestMapping(value ="/newcomment", method = RequestMethod.POST)
   public String NewComment(@RequestBody Comment comment){
         comment.setCreatedTime(LocalDateTime.now());
         commentService.saveComment(comment);
         System.out.println("写入数据成功");
         return "评价成功!";
  }
   
   @RequestMapping(value = "/updatecomment", method = RequestMethod.POST)
   public String UpdateComment(@RequestBody Comment newcomment){
		Comment comment = commentService.findCommentById(newcomment.getId());
	    comment.setUserName(newcomment.getUserName());
	    comment.setContent(newcomment.getContent());
	    comment.setGoodsid(newcomment.getGoodsid());
	    comment.setStar(newcomment.getStar());
        commentService.updateComment(comment);
        System.out.println("写入数据成功");
        return "更改评论成功!";
  }
   
   @RequestMapping("/deletecomment")
   public String DeleteComment(@RequestBody Comment comment){
        commentService.deleteCommentById(comment.getId());
        System.out.println("删除数据成功");
        return "删除评论成功!";
  }
  
}

