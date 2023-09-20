package com.example.sectors.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class SectorFormSector {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Sector sector;

    @ManyToOne
    private SectorForm sectorForm;

}
