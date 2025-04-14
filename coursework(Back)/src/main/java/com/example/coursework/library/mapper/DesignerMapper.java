package com.example.coursework.library.mapper;

import com.example.coursework.library.dto.DesignerDTO;
import com.example.coursework.library.model.Designer;
import com.example.coursework.library.model.GenericModel;
import com.example.coursework.library.model.Product;
import com.example.coursework.library.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public abstract class DesignerMapper extends GenericMapper<Designer, DesignerDTO> {
    private ProductRepository productRepository;

    public DesignerMapper(ModelMapper modelMapper, ProductRepository productRepository) {
        super(Designer.class, DesignerDTO.class, modelMapper);
        this.productRepository = productRepository;
    }

    @PostConstruct
    protected void setupMapper() {
        modelMapper.createTypeMap(Designer.class, DesignerDTO.class)
                .addMappings(mapping -> mapping.skip((dest, value) -> dest.setProductsIds(null))) // Исправлено
                .setPostConverter(toDTOConverter());

        modelMapper.createTypeMap(DesignerDTO.class, Designer.class)
                .addMappings(mapping -> mapping.skip(Designer::setProducts))
                .setPostConverter(toEntityConverter());
    }

    @Override
    protected void mapSpecificFields(DesignerDTO source, Designer destination) {
        if (!Objects.isNull(source.getProductsIds())) {
            destination.setProducts(productRepository.findAllById(source.getProductsIds()));
        } else {
            destination.setProducts(Collections.emptyList());
        }
    }

    @Override
    protected List<Long> getIds(Designer source) {
        return Objects.isNull(source) || Objects.isNull(source.getProducts())
                ? Collections.emptyList()
                : source.getProducts().stream()
                .map(GenericModel::getId)
                .collect(Collectors.toList());
    }
}