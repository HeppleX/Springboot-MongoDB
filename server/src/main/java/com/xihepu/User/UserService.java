package com.xihepu.User;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    public void saveUser(User user){
    	userRepository.save(user);
    }    

    public void updateUser(User user){
    	userRepository.save(user);
    }

    public void deleteUserById(String id){
        System.out.println(id);
    	userRepository.deleteById(id);
    }

    public List<User> findUserList(){
      return userRepository.findAll();
    }

    public User findUserById(String id){
      return userRepository.findById(id).get();
    }
    
}

