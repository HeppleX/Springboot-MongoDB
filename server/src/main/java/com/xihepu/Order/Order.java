package com.xihepu.Order;

import java.time.LocalDateTime;

public class Order {
	/** 订单ID **/
	private String id;
	/** 下单时间 **/
	private LocalDateTime createdTime;
	/** 下单用户 **/
	private String userName;
	/** 购买商品 **/
	private String goodsList;
	/** 数量 **/
	private int num;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public LocalDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(LocalDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getGoodsList() {
		return goodsList;
	}

	public void setGoodsList(String goodsList) {
		this.goodsList = goodsList;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

}