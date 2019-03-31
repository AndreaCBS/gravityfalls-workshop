package com.gravityfalls.category.bls.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gravityfalls.base.bls.dao.CategoryDAO;
import com.gravityfalls.base.bls.dao.CategoryValueDAO;
import com.gravityfalls.base.bls.model.Category;
import com.gravityfalls.base.bls.model.CategoryValue;

@Service
public class CategoryService {

	@Autowired
	CategoryDAO categoryDAO;

	@Autowired
	CategoryValueDAO categoryValueDAO;

	@Transactional(readOnly = true)
	public Category getById(Long id) {
		return categoryDAO.getById(id);
	}

	@Transactional(readOnly = true)
	public List<Category> getAllCategory() {
		return categoryDAO.getAllCategory();
	}

	@Transactional(readOnly = false)
	public void createCategory(Category category) {
		categoryDAO.save(category);
	}

	@Transactional(readOnly = false)
	public void updateCategory(Category category) {
		categoryDAO.update(category);
	}

	@Transactional(readOnly = false)
	public void deleteCategory(Category category) {
		categoryDAO.delete(category);
	}

	@Transactional(readOnly = true)
	public CategoryValue getCategoryValueById(Long id) {
		return categoryValueDAO.getCategoryValueById(id);
	}

	@Transactional(readOnly = true)
	public List<CategoryValue> getAllCategoryValue() {
		return categoryValueDAO.getAllCategoryValue();
	}

	@Transactional(readOnly = false)
	public void createCategoryValue(CategoryValue categoryValue) {
		categoryValueDAO.save(categoryValue);
	}

	@Transactional(readOnly = false)
	public void updateCategoryValue(CategoryValue categoryValue) {
		categoryValueDAO.update(categoryValue);
	}

	@Transactional(readOnly = false)
	public void deleteCategoryValue(CategoryValue categoryValue) {
		categoryValueDAO.delete(categoryValue);
	}

	@Transactional(readOnly = true)
	public List<CategoryValue> searchCategories(String search) {
		return categoryValueDAO.searchCategories(search);
	}

}
