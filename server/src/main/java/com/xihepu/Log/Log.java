package com.xihepu.Log;
import java.time.LocalDateTime;

public class Log {

	/** 日志级别 **/
	private String level;
	/** 堆栈信息 **/
	private String stackTrace;
	/** 日志消息 **/
	private String message;
	/** 创建时间 **/
	private LocalDateTime createdTime;

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getStackTrace() {
		return stackTrace;
	}

	public void setStackTrace(String stackTrace) {
		this.stackTrace = stackTrace;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(LocalDateTime createdTime) {
		this.createdTime = createdTime;
	}

}
