package com.gravityfalls.category.bls.backoffice.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gravityfalls.base.bls.model.Category;
import com.gravityfalls.base.bls.model.CategoryValue;
import com.gravityfalls.category.bls.dto.CategoryDTO;
import com.gravityfalls.category.bls.dto.CategoryValueDTO;
import com.gravityfalls.category.bls.dto.SearchResultDTO;
import com.gravityfalls.category.bls.service.CategoryService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping(path = "/categories", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(value = "categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	private ModelMapper modelMapper = new ModelMapper();

	@GetMapping(path = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "get category by id")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public @ResponseBody CategoryDTO getCategory(@RequestParam Long id) {
		Category category = categoryService.getById(id);
		return modelMapper.map(category, CategoryDTO.class);
	}

	@GetMapping(path = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "get all categories")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public @ResponseBody List<CategoryDTO> getAllCategory() {
		List<Category> categories = categoryService.getAllCategory();
		List<CategoryDTO> result = new ArrayList<>();
		for (Category c : categories) {
			result.add(modelMapper.map(c, CategoryDTO.class));
		}
		return result;
	}

	@PostMapping(path = "/save", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "save category")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void createCategory(@RequestBody CategoryDTO categoryDTO) {
		Category category = modelMapper.map(categoryDTO, Category.class);
		category.setId(null);
		categoryService.createCategory(category);
	}

	@PostMapping(path = "/update", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "update category")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void updateCategory(@RequestBody CategoryDTO categoryDTO) {
		Category category = modelMapper.map(categoryDTO, Category.class);
		categoryService.updateCategory(category);
	}

	@PostMapping(path = "/delete", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "delete category")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void deleteCategory(@RequestBody CategoryDTO categoryDTO) {
		Category category = modelMapper.map(categoryDTO, Category.class);
		categoryService.deleteCategory(category);
	}

	@GetMapping(path = "/getValue", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "get category value by id")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public @ResponseBody CategoryValueDTO getCategoryValue(@RequestParam Long id) {
		CategoryValue categoryValue = categoryService.getCategoryValueById(id);
		return modelMapper.map(categoryValue, CategoryValueDTO.class);
	}

	@GetMapping(path = "/getAllValues", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "get all categories values")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public List<CategoryValueDTO> getAllCategoryValue() {
		List<CategoryValue> categoryValues = categoryService.getAllCategoryValue();
		List<CategoryValueDTO> result = new ArrayList<>();
		for (CategoryValue c : categoryValues) {
			result.add(modelMapper.map(c, CategoryValueDTO.class));
		}
		return result;
	}

	@PostMapping(path = "/saveValue", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "save category value")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void createCategoryValue(@RequestBody CategoryValueDTO categoryValueDTO) {
		CategoryValue categoryValue = modelMapper.map(categoryValueDTO, CategoryValue.class);
		categoryValue.setId(null);
		categoryService.createCategoryValue(categoryValue);
	}

	@PostMapping(path = "/updateValue", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "update category value")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void updateCategoryValue(@RequestBody CategoryValueDTO categoryValueDTO) {
		CategoryValue categoryValue = modelMapper.map(categoryValueDTO, CategoryValue.class);
		categoryService.updateCategoryValue(categoryValue);
	}

	@PostMapping(path = "/deleteValue", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "delete category value")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public void deleteCategoryValue(@RequestBody CategoryValueDTO categoryValueDTO) {
		CategoryValue categoryValue = modelMapper.map(categoryValueDTO, CategoryValue.class);
		categoryService.deleteCategoryValue(categoryValue);
	}

	@GetMapping(path = "/search", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "search for categories and values")
	@ApiResponses(value = @ApiResponse(code = 200, message = "Successful"))
	public @ResponseBody List<SearchResultDTO> searchCategories(@RequestParam String search) {
		List<CategoryValue> categoryValues = categoryService.searchCategories(search);
		List<SearchResultDTO> result = new ArrayList<>();
		for (CategoryValue cv : categoryValues) {
			result.add(new SearchResultDTO(cv.getCategory().getDescription(), cv.getCategory().getId(),
					cv.getDescription(), cv.getId(), cv.getPredefined()));
		}
		return result;
	}

}
