package com.example.sectors.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;

@Data
@Entity
public class Sector {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(mappedBy = "parent")
    private List<Sector> children;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="parent_id")
    @JsonIgnoreProperties("children")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Sector parent;

    @ManyToMany(mappedBy = "sectors", fetch = FetchType.LAZY)
    @JsonIgnoreProperties("sectors")
    List<SectorForm> sectorForms;

}
