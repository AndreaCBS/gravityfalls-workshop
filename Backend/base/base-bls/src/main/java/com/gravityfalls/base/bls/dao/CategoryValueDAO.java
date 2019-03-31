package com.gravityfalls.base.bls.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.gravityfalls.base.bls.model.CategoryValue;

@Repository
public class CategoryValueDAO {

	@PersistenceContext
	private EntityManager em;

	public CategoryValue getCategoryValueById(Long id) {
		return em.find(CategoryValue.class, id);
	}

	public Long save(CategoryValue categoryValue) {
		em.persist(categoryValue);
		return categoryValue.getId();
	}

	public void update(CategoryValue categoryValue) {
		em.merge(categoryValue);
	}

	public void delete(CategoryValue categoryValue) {
		if (categoryValue != null && categoryValue.getPredefined() != null && !categoryValue.getPredefined()) {
			em.remove(em.contains(categoryValue) ? categoryValue : em.merge(categoryValue));
		}
	}

	public List<CategoryValue> getAllCategoryValue() {
		return em.createQuery("SELECT cv FROM CategoryValue cv INNER JOIN FETCH cv.category c ORDER BY cv.description")
				.getResultList();
	}

	public List<CategoryValue> searchCategories(String search) {

		String queryString = "SELECT cv FROM CategoryValue cv INNER JOIN FETCH cv.category c WHERE c.description LIKE :search OR cv.description LIKE :search ORDER BY c.description, cv.description";

		TypedQuery<CategoryValue> query = em.createQuery(queryString, CategoryValue.class);
		query.setParameter("search", "%" + search + "%");

		return query.getResultList();
	}

}
