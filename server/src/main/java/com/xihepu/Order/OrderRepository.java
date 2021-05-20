package com.xihepu.Order;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface OrderRepository extends MongoRepository<Order,String>
{
 
}
