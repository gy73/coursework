package com.example.coursework.library.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "authors")
@Getter
@Setter
@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
public abstract class GenericModel {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_generator")
    private Long id;

    @Column(name = "created_when")
    private LocalDate createdWhen;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "deleted_when")
    private LocalDate deletedWhen;

    @Column(name = "deleted_by")
    private String deletedBy;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    private boolean isDeleted;

    public Long getId() {
        return id;
    }
}
