package com.xihepu.Goods;

public class Goods {

	/** 商品ID **/
	private String id;
	/** 商品基本信息 **/
	private String goodsInfo;
	/** 规格信息 **/
	private String specificationsInfo;
	/** 价格 **/
	private int price;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getGoodsInfo() {
		return goodsInfo;
	}

	public void setGoodsInfo(String goodsInfo) {
		this.goodsInfo = goodsInfo;
	}

	public String getSpecificationsInfo() {
		return specificationsInfo;
	}

	public void setSpecificationsInfo(String specificationsInfo) {
		this.specificationsInfo = specificationsInfo;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
