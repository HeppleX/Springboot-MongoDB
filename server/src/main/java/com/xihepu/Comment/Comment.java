package com.xihepu.Comment;

import java.time.LocalDateTime;

public class Comment {
	
	/** 商品ID **/
	private String id;
	/** 用户名 **/
	private String userName;
	/** 评价内容 **/
	private String content;
	/** 商品ID **/
	private String goodsid;
	/** 评价时间 **/
	private LocalDateTime createdTime;
	/** 评价星级 **/
	private Integer star;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getGoodsid() {
		return goodsid;
	}

	public void setGoodsid(String goodsid) {
		this.goodsid = goodsid;
	}

	public LocalDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(LocalDateTime localDateTime) {
		this.createdTime = localDateTime;
	}

	public int getStar() {
		return star;
	}

	public void setStar(int star) {
		this.star = star;
	}

}
