package com.example.sectors.service;

import com.example.sectors.dto.SectorFormDTO;
import com.example.sectors.model.Sector;
import com.example.sectors.model.SectorForm;
import com.example.sectors.repository.SectorFormRepository;
import com.example.sectors.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectorService {

    @Autowired
    private SectorRepository sectorRepository;

    @Autowired
    private SectorFormRepository sectorFormRepository;

    public List<Sector> getMainSectors() {
        return sectorRepository.findSectorByParentIsNull();
    }

    public List<Sector> getAllSectors() {
        return sectorRepository.findAll();
    }

    public SectorFormDTO submitForm(SectorFormDTO sectorFormDTO) {
        SectorForm entity = new SectorForm();
        entity.setId(sectorFormDTO.getId());
        entity.setName(sectorFormDTO.getName());
        entity.setSectors(sectorFormDTO.getSectors());
        entity.setAgreeToTerms(sectorFormDTO.isAgreeToTerms());
        sectorFormRepository.save(entity);
        sectorFormDTO.setId(entity.getId());
        return sectorFormDTO;
    }

    public void delete(Long sectorId) {
        sectorRepository.deleteById(sectorId);
    }

    public Sector save(Sector sector) {
        return sectorRepository.save(sector);
    }
}
