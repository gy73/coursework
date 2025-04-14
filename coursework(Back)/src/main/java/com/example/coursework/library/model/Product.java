package com.example.coursework.library.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor

public class Product extends GenericModel{

    @Id
    @Column (name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_generator")
    private Long id;

    @Column (name = "title", nullable = false)
    private String title;

    @Column (name = "price", nullable = false)
    private Float price;

    @Column (name = "description")
    private String description;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "products_designers",
            joinColumns = @JoinColumn(name = "product_id"), foreignKey = @ForeignKey(name = "FK_PRODUCTS_DESIGNERS"),
            inverseJoinColumns = @JoinColumn(name = "designer_id"), inverseForeignKey = @ForeignKey(name = "FK_DESIGNERS_PRODUCTS"))
    List <Designer> designers;

    public Long getProductid() {
        return id;
    }

    public void setProductid(Long productid) {
        id = productid;
    }

    public List<Designer> getDesigners() {
        return designers;
    }

    public void setDesigners(List<Designer> designers) {
        this.designers = designers;
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
