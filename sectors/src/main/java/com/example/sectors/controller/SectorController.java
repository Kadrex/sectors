package com.example.sectors.controller;

import com.example.sectors.dto.SectorFormDTO;
import com.example.sectors.model.Sector;
import com.example.sectors.service.SectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/sectors")
@RestController
@CrossOrigin(origins = "${frontend.url}")
public class SectorController {

    @Autowired
    private SectorService sectorService;

    @GetMapping(path = "/main")
    public ResponseEntity<List<Sector>> getMainSectors() {
        return ResponseEntity.ok(sectorService.getMainSectors());
    }


    @GetMapping(path = "/all")
    public ResponseEntity<List<Sector>> getAllSectors() {
        return ResponseEntity.ok(sectorService.getAllSectors());
    }

    @PostMapping(path = "/submitForm")
    public ResponseEntity<SectorFormDTO> submitForm(@RequestBody SectorFormDTO sectorFormDTO) {
        return ResponseEntity.ok(sectorService.submitForm(sectorFormDTO));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        sectorService.delete(id);
        return ResponseEntity.ok(null);
    }

    @PostMapping(path = "/")
    public ResponseEntity<Sector> save(@RequestBody Sector sector) {

        return ResponseEntity.ok(sectorService.save(sector));
    }

}
