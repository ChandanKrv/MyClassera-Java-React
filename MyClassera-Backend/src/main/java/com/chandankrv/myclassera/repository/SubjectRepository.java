package com.chandankrv.myclassera.repository;

import com.chandankrv.myclassera.model.Subject;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
}
