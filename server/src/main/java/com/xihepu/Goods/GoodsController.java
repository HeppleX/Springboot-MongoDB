package com.xihepu.Goods;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xihepu.Goods.Goods;

@RestController
public class GoodsController {
    //注入Service
    @Autowired
    private GoodsService goodsService;

    @RequestMapping(value = "/listallgoods",method = RequestMethod.GET)
    public List<Goods> ListallGoodss(){
        List<Goods> list = goodsService.findGoodsList();
        return list;
    }

    @RequestMapping(value = "/newgoods",method = RequestMethod.POST)
    public String NewGoods(@RequestBody Goods goods){
        goodsService.saveGoods(goods);
        System.out.println("写入数据成功");
        return "添加商品成功!";
    }

    @RequestMapping(value = "/updategoods",method = RequestMethod.POST)
    public String UpdateGoods(@RequestBody Goods newgoods){
        Goods goods = goodsService.findGoodsById(newgoods.getId());
        goods.setGoodsInfo(newgoods.getGoodsInfo());
        goods.setSpecificationsInfo(newgoods.getSpecificationsInfo());
        goods.setPrice(newgoods.getPrice());
        goodsService.updateGoods(goods);
        System.out.println("写入数据成功");
        return "更改商品成功!";
    }

    @RequestMapping(value = "/deletegoods", method = RequestMethod.DELETE)
    public String DeleteGoods(@RequestBody Goods goods){
        goodsService.deleteGoodsById(goods.getId());
        System.out.println("删除数据成功");
        return "删除商品成功!";
    }

}
