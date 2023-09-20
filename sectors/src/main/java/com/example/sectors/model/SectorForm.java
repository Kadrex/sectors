package com.example.sectors.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class SectorForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToMany
    @JoinTable(
            name = "sector_form_sector",
            joinColumns = @JoinColumn(name = "sector_form_id"),
            inverseJoinColumns = @JoinColumn(name = "sector_id")
    )
    @JsonIgnoreProperties("sectorForms")
    private List<Sector> sectors;

    @Column
    private boolean agreeToTerms;
}
