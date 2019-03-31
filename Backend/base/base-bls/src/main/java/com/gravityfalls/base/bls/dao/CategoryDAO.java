package com.gravityfalls.base.bls.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.gravityfalls.base.bls.model.Category;

@Repository
public class CategoryDAO {

	@PersistenceContext
	private EntityManager em;

	public Category getById(Long id) {
		return em.find(Category.class, id);
	}

	public Long save(Category category) {
		em.persist(category);
		return category.getId();
	}

	public void update(Category category) {
		em.merge(category);
	}

	public void delete(Category category) {
		if (category != null && category.getPredefined() != null && !category.getPredefined()) {
			em.remove(em.contains(category) ? category : em.merge(category));
		}
	}

	public List<Category> getAllCategory() {
		return em.createQuery("SELECT c FROM Category c ORDER BY c.description").getResultList();
	}

}
