package com.example.coursework.library.mapper;


import com.example.coursework.library.dto.GenericDTO;
import com.example.coursework.library.model.GenericModel;

import java.util.List;

public interface Mapper <E extends GenericModel, D extends GenericDTO>{

    E toEntity(D dto);

    D toDTO(E entity);

    List<E> toEntities(List<D> dtos);

    List<D> toDTOs(List<E> entities);
}
