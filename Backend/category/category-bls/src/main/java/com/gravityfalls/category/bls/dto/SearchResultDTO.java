package com.gravityfalls.category.bls.dto;

import java.io.Serializable;

public class SearchResultDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String categoryName;
	private Long categoryId;
	private String categoryValueName;
	private Long categoryValueId;
	private Boolean categoryValuePredefined;

	public SearchResultDTO() {

	}

	public SearchResultDTO(String categoryName, Long categoryId, String categoryValueName, Long categoryValueId,
			Boolean categoryValuePredefined) {
		super();
		this.categoryName = categoryName;
		this.categoryId = categoryId;
		this.categoryValueName = categoryValueName;
		this.categoryValueId = categoryValueId;
		this.categoryValuePredefined = categoryValuePredefined;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryValueName() {
		return categoryValueName;
	}

	public void setCategoryValueName(String categoryValueName) {
		this.categoryValueName = categoryValueName;
	}

	public Long getCategoryValueId() {
		return categoryValueId;
	}

	public void setCategoryValueId(Long categoryValueId) {
		this.categoryValueId = categoryValueId;
	}

	public Boolean getCategoryValuePredefined() {
		return categoryValuePredefined;
	}

	public void setCategoryValuePredefined(Boolean categoryValuePredefined) {
		this.categoryValuePredefined = categoryValuePredefined;
	}

}
