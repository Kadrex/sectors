package com.example.sectors.repository;

import com.example.sectors.model.SectorForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectorFormRepository extends JpaRepository<SectorForm, Long> {
}
