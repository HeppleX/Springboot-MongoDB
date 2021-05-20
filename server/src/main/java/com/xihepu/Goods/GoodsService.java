package com.xihepu.Goods;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsService {

    @Autowired
    private GoodsRepository goodsRepository;
    
    public void saveGoods(Goods goods){
    	goodsRepository.save(goods);
    }    

    public void updateGoods(Goods goods){
    	goodsRepository.save(goods);
    }

    public void deleteGoodsById(String id){
    	goodsRepository.deleteById(id);
    }

    public List<Goods> findGoodsList(){
      return goodsRepository.findAll();
    }

    public Goods findGoodsById(String id){
      return goodsRepository.findById(id).get();
    }
    
}
