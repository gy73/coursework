package com.example.coursework.library.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "carts")
public class Cart extends GenericModel{

    @Id
    @Column (name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_generator")
    private Long id;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "product_id", nullable = false,
    foreignKey = @ForeignKey(name = "FK_CART_PRODUCT"))
    private Product product;

    @ManyToOne (cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "user_id", nullable = false,
    foreignKey = @ForeignKey(name = "FK_CART_USER"))
    private User user;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

}