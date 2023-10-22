package com.ninos.service.product;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ninos.mapper.ProductMapper;
import com.ninos.model.dto.ProductDTO;
import com.ninos.model.entity.Product;
import com.ninos.repository.ProductRepository;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService{

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;


    @Override
    public List<ProductDTO> getAllProducts() {
        List<Product> productList = productRepository.findAll();
        return productList.stream().map(productMapper::entityToDto).collect(Collectors.toList());
    }


}
