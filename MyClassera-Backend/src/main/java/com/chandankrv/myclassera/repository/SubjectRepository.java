package com.chandankrv.myclassera.repository;

import com.chandankrv.myclassera.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
