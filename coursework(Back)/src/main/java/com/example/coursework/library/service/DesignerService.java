package com.example.coursework.library.service;

import com.example.coursework.library.dto.DesignerDTO;
import com.example.coursework.library.mapper.DesignerMapper;
import com.example.coursework.library.model.Designer;
import com.example.coursework.library.model.Product;
import com.example.coursework.library.repository.DesignerRepository;
import com.example.coursework.library.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

@Service
public class DesignerService
        extends GenericService<Designer, DesignerDTO>{

    private final ProductRepository productRepository;

    public DesignerService(DesignerRepository designerRepository,
                           DesignerMapper designerMapper,
                           ProductRepository productRepository) {
        super(designerRepository, designerMapper);
        this.productRepository = productRepository;
    }

    public DesignerDTO addProduct(Long productId,
                                  Long designerId) {
        Product product = productRepository.findById(productId).orElseThrow(()-> new NotFoundException("Продукт не найден"));
        DesignerDTO designer = getOne(designerId);
        designer.getProductsIds().add(product.getId());
        update(designer);
        return designer;
    }
}
