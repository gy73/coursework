package com.example.coursework.library.mapper;

import com.example.coursework.library.dto.ProductDTO;
import com.example.coursework.library.model.GenericModel;
import com.example.coursework.library.model.Product;
import com.example.coursework.library.repository.DesignerRepository;
import jakarta.annotation.PostConstruct;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.awt.print.Book;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class ProductMapper extends GenericMapper<Product, ProductDTO> {
    private final DesignerRepository designerRepository;

    protected ProductMapper(ModelMapper mapper, DesignerRepository designerRepository) {
        super(Product.class, ProductDTO.class, mapper);
        this.designerRepository = designerRepository;
    }

    @PostConstruct
    @Override
    public void setupMapper() {
        modelMapper.createTypeMap(Product.class, ProductDTO.class)
                .addMappings(m -> m.skip(ProductDTO::setDesignerId)).setPostConverter(toDTOConverter());
        modelMapper.createTypeMap(ProductDTO.class, Product.class)
                .addMappings(m -> m.skip(Product::setDesigners)).setPostConverter(toEntityConverter());
    }

    @Override
    protected void mapSpecificFields(ProductDTO source, Product destination) {
        if (!Objects.isNull(source.getDesignerId())) {
            destination.setDesigners(designerRepository.findAllById(source.getDesignerId()));
        }
        else {
            destination.setDesigners(Collections.emptyList());
        }
    }

    @Override
    protected void mapSpecificFields(Product source, ProductDTO destination ) {
        destination.setDesignerId(getIds(source));
    }

    @Override
    protected List<Long> getIds(Product product){
        return Objects.isNull(product) || Objects.isNull(product.getDesigners())
                ? null
                : product.getDesigners().stream()
                .map(GenericModel::getId)
                .collect(Collectors.toList());
    }
}
