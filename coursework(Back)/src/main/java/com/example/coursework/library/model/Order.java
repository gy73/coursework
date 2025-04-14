package com.example.coursework.library.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "orders")
@NoArgsConstructor
public class Order extends GenericModel{

    @Id
    @Column (name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_generator")
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "total_cost", nullable = false)
    private Float totalCost;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private OrderStatus status;

    @Column(name = "date_of_creation", nullable = false)
    private LocalDate dateOfCreation;

    @Column(name = "date_of_update", nullable = false)
    private LocalDate dateOfUpdate;

    public enum OrderStatus {
        CREATED, PROCESSING, COMPLETED, CANCELLED
    }

}
