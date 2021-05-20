package com.xihepu.Order;

import java.time.LocalDateTime;
import java.util.List;

import com.xihepu.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xihepu.Order.Order;



@RestController
public class OrderController {
    //注入Service
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/listallorders", method = RequestMethod.GET)
    public List<Order> ListallOrders(){
        List<Order> list = orderService.findOrderList();
        return list;
    }

    @RequestMapping(value = "/neworder", method = RequestMethod.POST)
    public String NewOrder(@RequestBody Order order){
        order.setCreatedTime(LocalDateTime.now());
        orderService.saveOrder(order);
        System.out.println("写入数据成功");
        return "订单创建成功!";
    }

    @RequestMapping(value = "/updateorder", method = RequestMethod.POST)
    public String UpdateOrder(@RequestBody Order neworder){
        Order order = orderService.findOrderById(neworder.getId());
        order.setUserName(neworder.getUserName());
        order.setNum(neworder.getNum());
        order.setGoodsList(neworder.getGoodsList());
        orderService.updateOrder(order);
        System.out.println("写入数据成功");
        return "更改订单成功!";
    }

    @RequestMapping(value = "/deleteorder", method = RequestMethod.DELETE)
    public String DeleteOrder(@RequestBody Order order){
        orderService.deleteOrderById(order.getId());
        System.out.println("删除数据成功");
        return "删除订单成功!";
    }

}

