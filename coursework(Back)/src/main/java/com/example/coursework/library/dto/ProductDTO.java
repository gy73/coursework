package com.example.coursework.library.dto;

import com.example.coursework.library.model.Сategories;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProductDTO extends GenericDTO{
    private Long id;
    private String title;
    private Float price;
    private String description;
    private Сategories categories;
    private List<Long> designerId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Long> getDesignerId() {
        return designerId;
    }

    public void setDesignerId(List<Long> designerId) {
        this.designerId = designerId;
    }

    public Сategories getCategories() {
        return categories;
    }

    public void setCategories(Сategories categories) {
        this.categories = categories;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
