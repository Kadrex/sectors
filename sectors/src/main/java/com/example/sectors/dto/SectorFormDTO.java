package com.example.sectors.dto;

import com.example.sectors.model.Sector;
import lombok.Data;

import java.util.List;

@Data
public class SectorFormDTO {

    private Long id;

    private String name;

    private List<Sector> sectors;

    private boolean agreeToTerms;

    @Override
    public String toString() {
        return "id=" + id + ", name=" + name + ", sectors=" + sectors;
    }


}
