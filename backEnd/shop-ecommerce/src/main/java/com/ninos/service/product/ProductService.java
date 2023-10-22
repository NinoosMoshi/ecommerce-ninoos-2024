package com.ninos.service.product;

import org.springframework.data.domain.Page;

import com.ninos.model.dto.ProductDTO;

public interface ProductService {

    Page<ProductDTO> getAllProducts(int page, int size);

}
