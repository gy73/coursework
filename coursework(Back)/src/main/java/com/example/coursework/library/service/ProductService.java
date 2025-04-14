package com.example.coursework.library.service;

import com.example.coursework.library.dto.ProductDTO;
import com.example.coursework.library.mapper.ProductMapper;
import com.example.coursework.library.model.Designer;
import com.example.coursework.library.model.Product;
import com.example.coursework.library.repository.DesignerRepository;
import com.example.coursework.library.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

@Service
public class ProductService
            extends GenericService<Product, ProductDTO>{
    private final DesignerRepository designerRepository;

    protected ProductService(ProductRepository repository,
                             ProductMapper mapper,
                             DesignerRepository designerRepository) {
        super(repository,mapper);
        this.designerRepository = designerRepository;
    }

    public ProductDTO addDesigner(final Long productId,
                                  final Long designerId) {
        ProductDTO product = getOne(productId);
        Designer designer = designerRepository.findById(designerId).orElseThrow(()-> new NotFoundException("Дизайнер не найден"));
        product.getDesignerId().add(designer.getId());
        update(product);
        return product;
    }
}
