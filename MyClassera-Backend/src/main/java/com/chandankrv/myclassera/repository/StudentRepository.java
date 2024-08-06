package com.chandankrv.myclassera.repository;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query("SELECT s.subjects FROM Student s WHERE s.id = :id")
    Set<Subject> findSubjectsByStudentId(@Param("id") int id);
}

