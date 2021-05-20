package com.xihepu.User;

import java.util.List;

import com.xihepu.Comment.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
	//ע��Service
    @Autowired
    private UserService userService;    
    
    @RequestMapping(value = "/listallusers", method = RequestMethod.GET)
    public List<User> ListallUsers(){
      List<User> list = userService.findUserList();
      return list;
    }
    
   @RequestMapping(value = "/newuser", method = RequestMethod.POST)
   public String NewUser(@RequestBody User user){
        userService.saveUser(user);
       System.out.println("写入数据成功");
       return "新建用户成功!";
  }
   
   @RequestMapping(value = "/updateuser", method = RequestMethod.POST)
   public String UpdateUser(@RequestBody User newUser){
		User user = userService.findUserById(newUser.getId());
		user.setUserName(newUser.getUserName());
		user.setPhone(newUser.getPhone());
		user.setSex(newUser.getSex());
		user.setAddress(newUser.getAddress());
		user.setAge(newUser.getAge());
        userService.updateUser(user);
        System.out.println("写入数据成功");
        return "更改用户成功!";
  }
   
   @RequestMapping(value = "/deleteuser", method = RequestMethod.DELETE)
   public String DeleteUser(@RequestBody User user){
        userService.deleteUserById(user.getId());
        System.out.println("删除数据成功");
        return "删除用户成功!";
  }
  
}

