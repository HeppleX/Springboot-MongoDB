package com.xihepu.Order;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    
    public void saveOrder(Order order){
    	orderRepository.save(order);
    }    

    public void updateOrder(Order order){
    	orderRepository.save(order);
    }

    public void deleteOrderById(String id){
    	orderRepository.deleteById(id);
    }

    public List<Order> findOrderList(){
      return orderRepository.findAll();
    }

    public Order findOrderById(String id){
      return orderRepository.findById(id).get();
    }
    
}
